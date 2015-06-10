(function() {

    /**
     * Backbone view to handle UI rendering.
     */
    DI.App.HelloView = Backbone.View.extend({

        //Utilizing Underscore to create a template
        template: _.template($('#hello-template').html()),

        /**
         * Render the element via the template and model properties.
         */
        render: function() {
            //Getting a copy of the model's attributes
            var attributes = this.model.toJSON();
            //Compile the template and model properties into an HTML string
            var viewHTML = this.template(attributes);
            //Placing/rendering the Views HTML into the root
            this.$el.html(viewHTML);
        }
    });

})();