$(document).ready(function () {
    $("#sign-up").click(function () {
       window.location = 'index2.html' 
});
    $("#tel").keydown(function () {
        var phone = $(this).val();
        for (var i = 0; i < 1; i++) {
            if (phone.length == 9) {
                $("#in-btn").removeAttr("disabled")
            } else {
                $("#in-btn").attr("disabled", "disabled")
            };
        };
    });

    $("#in-btn").click(function () {
        window.location = 'index3.html'
    });

        
    $("#in-btn").click(function () {
        var code = "";
        var str = "123456789";
        for (var i = 0; i < 3; i++) {
            code += str.charAt(Math.floor(Math.random() * str.length));
        };
        alert("El código es LAB " + code);
    });

    $("#yourcode").keydown(function () {
        var code = $(this).val();
        for (var i = 0; i < 1; i++) {
            if (code.length == 3) {
                $("#resend-btn").removeAttr("disabled")
            } else {
                $("#resend-btn").attr("disabled", "disabled")
            };
        };
    });
    
    $("#yourcode").keydown(function () {
        var code = $(this).val();
        for (var i = 0; i < 1; i++) {
            if (code.length == 3) {
                $("#next-btn").removeAttr("disabled")
            } else {
                $("#next-btn").attr("disabled", "disabled")
            };
        };
    });

       
});

