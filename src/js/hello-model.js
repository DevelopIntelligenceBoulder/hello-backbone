(function() {
    'use strict';

    /**
     * Hello Backbone Model.
     */
    DI.App.Hello = Backbone.Model.extend({
        //Defaulting place model property to "World"
        defaults: {
            place: 'World'
        }
    });

})();