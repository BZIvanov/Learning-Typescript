let controllers = {};

$(() => {
    const app = Sammy("#root", function() {
        this.use("Handlebars", "hbs");

        // middleware executed before each route is accessed
        this.before({except: {}}, function() {
            this.isLogged = localStorage.getItem('authtoken') !== null;
            this.myself = localStorage.getItem('username');
            this.currentUser = localStorage.getItem('userId');
        });

        // home routes
        this.get('/index.html', controllers.pageController.displayHomeView);
        this.get('#/', controllers.pageController.displayHomeView);
        this.get('/', controllers.pageController.displayHomeView);
        this.get('#/home', controllers.pageController.displayHomeView);
        // authentication routes
        this.get('#/register', controllers.authController.displayRegisterView);
        this.post('#/register', controllers.authController.sendRegisterRequest);
        this.get('#/login', controllers.authController.displayLoginView);
        this.post('#/login', controllers.authController.sendLoginRequest);
        this.get('#/logout', controllers.authController.sendLogoutRequest);
        // routes related with recipes controlls
        this.get('#/addRecipe', controllers.pageController.displayNewRecipeView);
        this.post('#/addRecipe', controllers.pageController.addNewRecipe);
        this.get('#/recipe-details/:id', controllers.pageController.displayDetailsView);
        this.get('#/editRecipe/:id', controllers.actionsController.displayEditView);
        this.post('#/editRecipe/:id', controllers.actionsController.editRecipe);
        this.get('#/deleteRecipe/:id', controllers.actionsController.displayDeleteView);
        this.post('#/deleteRecipe/:id', controllers.actionsController.deleteRecipe);
        this.get('#/recipes/like/:id', controllers.actionsController.likeRecipe);
    });

    app.run();
});
