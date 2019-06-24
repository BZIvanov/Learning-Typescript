controllers.actionsController = {
    displayEditView: function(context) {
        let id = context.params.id.substring(1);

        requester.get('appdata', `recipes/${id}`, 'kinvey')
        .then(function(response) {
            context.name = response['data'].name;
            context.description = response['data'].description;
            context.imageUrl = response['data'].imageUrl;
            context.category = response['data'].category;
            context.likes = response['data'].likes;
            context.ingredients = response['data'].ingredients;
            context.id = id;

            context.loadPartials({
                navigation: './views/common/navigation.hbs',
                footer: './views/common/footer.hbs'
            }).then(function() {
                this.partial('./views/recipes/editRecipe.hbs');
            });
        }).catch(servicer.handleError);
    },
    editRecipe: function(context) {
        let name = context.params.name;
        let description = context.params.description;
        let imageUrl = context.params.imageUrl;
        let likes = context.params.likes;
        let category = context.params.category;
        let ingredients = context.params.ingredients;
        let id = context.params.id;
    
        let data = { name, description, imageUrl, category, ingredients, likes };
        
        requester.update('appdata', `recipes/${id}`, 'kinvey', data)
            .then(function(response) {
                notify.showInfo("Successfully edited recipe", "success");
                context.redirect('#/home');
            }).catch(servicer.handleError)
    },
    deleteRecipe: function(context) {
        let id = context.params.id.substring(1);
        
        requester.remove('appdata', `recipes/${id}`, 'kinvey')
            .then(function(response) {
                notify.showInfo("Successfully deleted recipe", "danger");
                context.redirect('#/home');
            }).catch(servicer.handleError);
    },
    likeRecipe: function(context) {
        let id = context.params.id;
        
        requester.get('appdata', `recipes/${id}`, 'kinvey')
            .then(function(response) {
                let name = response['data'].name;
                let description = response['data'].description;
                let imageUrl = response['data'].imageUrl;
                let likes = +response['data'].likes + 1;
                let category = response['data'].category;
                let ingredients = response['data'].ingredients;

                let data = { name, description, imageUrl, likes, ingredients, category };

                requester.update('appdata', `recipes/${id}`, 'kinvey', data)
                    .then(function(response) {
                        notify.showInfo("Recipe liked", "success");
                        context.redirect('#/home')
                    }).catch(servicer.handleError);
            }).catch(servicer.handleError);
    }
}