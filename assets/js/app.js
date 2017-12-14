$(document).ready(function () {
  /*Función al hacer click en el primer botón redireccione a la vista 2*/
  $("#sign-up").click(function () {
    window.location = 'index2.html'
  });
  /*Función para validar los digitos ingresados por el usuario, esto permite habilitar el boton*/
  $("#tel").keydown(function () {
    var phone = $(this).val();
    for (var i = 0; i < 1; i++) {
      if (phone.length == 8) {
        $("#in-btn").removeAttr("disabled")
      } else {
        $("#in-btn").attr("disabled", "disabled")
      };
    };
  });

  $("#in-btn").click(function () {
    window.location = 'index3.html'
  });

  /*Función que genera numeros de forma aleatoria*/
  $("#in-btn").click(function () {
    var code = "";
    var str = "123456789";
    for (var i = 0; i < 3; i++) {
      code += str.charAt(Math.floor(Math.random() * str.length));
    };
    alert("El código es LAB " + code);
  });
  /*Validar código*/
  $("#yourcode").keydown(function () {
    var code = $(this).val();
    for (var i = 0; i < 1; i++) {
      if (code.length == 2) {
        $("#resend-btn").removeAttr("disabled")
      } else {
        $("#resend-btn").attr("disabled", "disabled")
      };
    };
  });

  $("#next-btn").click(function () {
    window.location = 'index4.html'

  });
  /*Habilitar botón next de vista 4*/
  $("#yourcode").keydown(function () {
    var code = $(this).val();
    for (var i = 0; i < 1; i++) {
      if (code.length == 2) {
        $("#next-btn").removeAttr("disabled")
      } else {
        $("#next-btn").attr("disabled", "disabled")
      };
    };
  });

  $("#to-btn").click(function () {
    window.location = 'index5.html'

  });

});