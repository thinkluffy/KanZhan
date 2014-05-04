(function() {

    var panelShown = false;
    var p1_updownButtonClicked = function() {
        if (panelShown) {
            // to hide
            panelShown = false;
            // alert('a');

            $("#p11_panel").animate({
                "bottom": "-80px"
            }, 500, "linear", function() {
                // move_top();//call function to move top
            });

            $("#p11_updownButton").animate({
                "bottom": "10px"
            }, 500, "linear", function() {
                // move_top();//call function to move top
            });

        } else {
            // $('#panel').show();
            panelShown = true;

            $("#p11_panel").animate({
                "bottom": "0px"
            }, 500, "linear", function() {
                // move_top();//call function to move top
            });

            $("#p11_updownButton").animate({
                "bottom": "90px"
            }, 500, "linear", function() {
                // move_top();//call function to move top
            });
        }
    };

    window.p1_updownButtonClicked = p1_updownButtonClicked;
})();
