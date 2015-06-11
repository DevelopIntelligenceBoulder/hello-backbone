(function() {

    /**
     * Backbone view to handle UI rendering.
     */
    DI.App.HelloView = Backbone.View.extend({

        /**
         * Render the element via the template and model properties.
         */
        render: function() {
            //Create stringified HTML with a "place" model property
            var viewHTML = '<h1>Hello ' + this.model.get('place') + '</h1>';

            //Placing/rendering the Views HTML into the root
            this.$el.html(viewHTML);
        }
    });

})();