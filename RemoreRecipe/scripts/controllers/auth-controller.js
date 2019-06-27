// object holding function related to authentication process
controllers.authController = {
    displayLoginView: function(context) {
        context.loadPartials({
            navigation: './views/common/navigation.hbs',
            footer: './views/common/footer.hbs'
        }).then(function() {
            this.partial('./views/auth/login.hbs');
        });
    },
    sendLoginRequest: function(context) {
        const username = context.params.username;
        const password = context.params.password;

        if (username.length < 3 || username.length > 20) {
            notify.showInfo("Username should be 3-20 characters length", "danger");
        } else if (password.length < 6 || password.length > 20) {
            notify.showInfo("Password should be 6-20 characters length", "danger");
        } else {
            servicer.login(username, password)
                .then(function(response) {
                    notify.showInfo("Logged in successfully", "success");
                    servicer.saveSession(response['data']);
                    context.redirect('#/');
                }).catch(servicer.handleError);
        }
    },
    displayRegisterView: function(context) {
        context.loadPartials({
            navigation: './views/common/navigation.hbs',
            footer: './views/common/footer.hbs'
        }).then(function() {
            this.partial('./views/auth/register.hbs');
        });
    },
    sendRegisterRequest: function(context) {
        const username = context.params.username;
        const password = context.params.password;   
        
        if (username.length < 3 || username.length > 20) {
            notify.showInfo("Username should be 3-20 characters length", "danger");
        } else if (password.length < 6 || password.length > 20) {
            notify.showInfo("Password should be 6-20 characters length", "danger");
        } else {
            servicer.register(username, password)
                .then(function(response) {
                    notify.showInfo("Registered successfully", "success");
                    servicer.saveSession(response['data']);
                    context.redirect('#/home');
                }).catch(servicer.handleError);
        }
    },
    sendLogoutRequest: function(context) {
        servicer.logout()
        .then(function(response) {
            notify.showInfo("Logged out successfully", "info");
            localStorage.clear();
            context.redirect('#/home');
        }).catch(servicer.handleError);
    },
}
