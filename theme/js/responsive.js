    enquire.register("screen and (max-width: 640px)", {
        match : function() {
            // Load a mobile JS file
            loadJS('mmenu.js');
        }
    }).listen();


    enquire.register("screen and (min-width: 640px)", {
        match : function() {
            // Load standard layout
            loadJS('menustick.js');
        }
    }).listen();