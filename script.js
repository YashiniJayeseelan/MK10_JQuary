$(document).on("pagecreate", function () {

    $("#btnLogin").on("click", function (e) {

        var user = $("#username").val();
        var pass = $("#password").val();

        if (user === "" || pass === "") {
            e.preventDefault();
            $("#popupAmaran").popup("open");
        } else {
            e.preventDefault(); // stop form submit
            $.mobile.changePage("#page2");
        }

    });

});