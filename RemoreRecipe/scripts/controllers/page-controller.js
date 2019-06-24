controllers.pageController = {
    displayHomeView: function(context) {
        if (localStorage.getItem('authtoken') !== null) {
            let endpoint = 'recipes';
            requester.get('appdata', endpoint, 'kinvey')
            .then(function(response) {
                context.recipes = response['data'];
                // context.recipes = context.recipes.filter((el) => {
                //     return localStorage.getItem('userId') !== el._acl.creator;
                // });
                context.recipes = context.recipes.map(r => {
                    if (localStorage.getItem('userId') == r._acl.creator) {
                        r.isMine = true;
                    }
                    return r;
                });

                context.recipes = context.recipes.sort((a, b) => {
                    return +b.likes - +a.likes;
                });

                context.recipes = context.recipes.map(r => {
                    if (r.description.length > 90) {
                        r.description = r.description.substring(0, 90) + "...";
                        return r;
                    }
                    return r;
                })
                
                context.loadPartials({
                    navigation: './views/common/navigation.hbs',
                    footer: './views/common/footer.hbs'
                }).then(function() {
                    this.partial('./views/recipes/allRecipes.hbs');
                });  
            }).catch(servicer.handleError);
        } else {
            context.loadPartials({
                navigation: './views/common/navigation.hbs',
                footer: './views/common/footer.hbs'
            }).then(function() {
                this.partial('./views/recipes/allRecipes.hbs');
            });
        }
    },
    displayDetailsView: function(context) {
        let id = context.params.id;
        
        requester.get('appdata', `recipes/${id}`, 'kinvey')
            .then(function(response) {
                context.name = response['data'].name;
                context.description = response['data'].description;
                context.imageUrl = response['data'].imageUrl;
                context.category = response['data'].category;
                context.likes = response['data'].likes;
                context.id = id;
                context.isOwner = context.currentUser === response['data']._acl.creator;
                context.ingredients = (response['data'].ingredients || "")
                    .split(";")
                    .map(x => x.trim())
                    .filter(y => y !== "");
        
                context.loadPartials({
                    navigation: './views/common/navigation.hbs',
                    footer: './views/common/footer.hbs'
                }).then(function() {
                    this.partial('./views/recipes/recipeDetails.hbs');
                });
            }).catch(servicer.handleError);
    },
    displayNewRecipeView: function(context) {
        context.loadPartials({
            navigation: './views/common/navigation.hbs',
            footer: './views/common/footer.hbs'
        }).then(function() {
            this.partial('./views/recipes/addRecipe.hbs');
        });
    },
    addNewRecipe: function(context) {
        let name = context.params.name;
        let description = context.params.description;
        let imageUrl = context.params.imageUrl;
        let category = context.params.category;
        let ingredients = context.params.ingredients;
        let likes = 0;
    
        let data = { name, description, imageUrl, category, ingredients, likes };
        
        requester.post('appdata', 'recipes', 'kinvey', data)
            .then(function(response) {
                notify.showInfo("Successfully added a new recipe", "success");
                context.redirect('#/home');
            }).catch(servicer.handleError);
    }
}
