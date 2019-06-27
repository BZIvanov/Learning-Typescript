// object holding functions related to page navigations
controllers.pageController = {
    displayHomeView: function(context) {
        if (localStorage.getItem('authtoken') !== null) {
            let endpoint = 'recipes';
            requester.get('appdata', endpoint, 'kinvey')
            .then(function(response) {
                context.recipes = response['data'];
                
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
                    search: './views/filters/search.hbs',
                    category: './views/filters/category.hbs',
                    sort: './views/filters/sort.hbs',
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

        if (name. length < 3 || name.length > 30) {
            notify.showInfo("Recipe name should be 3-30 characters length", "danger");
        } else if (description.length > 500) {
            notify.showInfo("Description field should be maximum 500 characters length", "danger");
        } else if (imageUrl. length < 20 || imageUrl.length > 150) {
            notify.showInfo("Image URL field should be 20-150 characters length", "danger");
        } else if (ingredients. length < 20 || ingredients.length > 500) {
            notify.showInfo("Ingredients field should be 20-500 characters length", "danger");
        } else {
            requester.post('appdata', 'recipes', 'kinvey', data)
                .then(function(response) {
                    notify.showInfo("Successfully added a new recipe", "success");
                    context.redirect('#/home');
                }).catch(servicer.handleError);
        }
    },
    randomRecipe: function(context) {
        if (localStorage.getItem('authtoken') !== null) {
            requester.get('appdata', 'recipes', 'kinvey')
                .then(function(response) {
                    let randomRecipe = response['data'][Math.floor(Math.random() * response['data'].length)];

                    context.name = randomRecipe.name;
                    context.description = randomRecipe.description;
                    context.imageUrl = randomRecipe.imageUrl;
                    context.category = randomRecipe.category;
                    context.likes = randomRecipe.likes;
                    context.id = randomRecipe._id;
                    context.isOwner = context.currentUser === randomRecipe._acl.creator;
                    context.ingredients = (randomRecipe.ingredients || "")
                        .split(";")
                        .map(x => x.trim())
                        .filter(y => y !== "");

                    this.random = Math.random() * 100;
            
                    context.loadPartials({
                        navigation: './views/common/navigation.hbs',
                        footer: './views/common/footer.hbs'
                    }).then(function() {
                        this.partial('./views/recipes/recipeDetails.hbs');
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
    }
}
