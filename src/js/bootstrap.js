(function() {
    'use strict';

    //Create Hello Model Instance
    var hello = new DI.App.Hello();

    //Create Hello View Instance and insert model
    var helloView = new DI.App.HelloView({
        el: '#app',
        model: hello
    });

    //Render the View
    helloView.render();

})();