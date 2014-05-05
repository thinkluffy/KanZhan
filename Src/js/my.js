(function() {
    var showToast = function(imgSrc) {
        // alert("imgSrc=" + imgSrc);  
        $('#toast').attr('src', imgSrc);
        $('#toast').finish();
        $('#toast').fadeIn(200, function() {
            $('#toast').fadeOut(1500);
        });
    };
    
    window.showToast = showToast;
})();

(function() {
    var panelShown = false;
    var p11_updownButtonClicked = function() {
        if (panelShown) {
            // to hide
            panelShown = false;
            // alert('a');

            $("#p11_panel").animate({
                "bottom": "-80px"
            }, 300, "linear", function() {
                // move_top();//call function to move top
            });

            $("#p11_updownButton").animate({
                "bottom": "10px"
            }, 300, "linear", function() {
                // move_top();//call function to move top
            });

        } else {
            // $('#panel').show();
            panelShown = true;

            $("#p11_panel").animate({
                "bottom": "0px"
            }, 300, "linear", function() {
                // move_top();//call function to move top
            });

            $("#p11_updownButton").animate({
                "bottom": "90px"
            }, 300, "linear", function() {
                // move_top();//call function to move top
            });
        }
    };

    window.p11_updownButtonClicked = p11_updownButtonClicked;
})();

(function() {
    var panelShown = false;
    var p8_updownButtonClicked = function() {
        if (panelShown) {
            // to hide
            panelShown = false;
            // alert('a');

            $("#keyboard_panel").animate({
                "bottom": "-218px"
            }, 300, "linear", function() {
                // move_top();//call function to move top
            });
            
        } else {
            // $('#panel').show();
            panelShown = true;

            $("#keyboard_panel").animate({
                "bottom": "0px"
            }, 300, "linear", function() {
                // move_top();//call function to move top
            });
        }
    };

    window.p8_updownButtonClicked = p8_updownButtonClicked;
})();
