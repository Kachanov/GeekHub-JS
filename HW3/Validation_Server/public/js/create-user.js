(function () {
    var createUserForm = jQuery("#create-user");

    createUserForm.on("submit", function (event) {
        event.preventDefault();

        jQuery.ajax({
            method: "POST",
            url: "/create-user",
            data: createUserForm.serialize(),
            success: function (result) {
                //result;
                alert("OK");
            },
            error: function (error) {
                //error;
                alert("ERROR");
            }
        });
    });

})();