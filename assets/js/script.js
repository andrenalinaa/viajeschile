$(function () {
  //Inicio Document ready Jquery

  //cerrar navegado cuando se haga click en un item del menu
  $(".navbar-nav>li>a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });
  //esconder li "Quienes somos" del nav menu en dispositivos sm ***Profe-->debe ir recargargando la pag para ir probando en los diferentes viewports
  if (window.matchMedia("(max-width: 470px)").matches) {
    /* The viewport is less than, or equal to, 470 pixels wide */
    $("#hide-sm").hide();
  } //fin del if

  //smooth-scroll sections
  $("a").click(function (event) {
    //el metodo hash evalua el atributo href
    //alert(this.hash)
    //el metodo hash evalua el atributo href es diferente de vacio
    if (this.hash !== "") {
      // previene el evento default
      event.preventDefault();
      // Y guarda el valor del hash en una variable llamada gato
      var gato = this.hash;
      // Usa el método animate para animar el scroll y hacerlo de una forma suave
      // El número opciona (800) especifica el número de milisegundos que se demorara en llegar hasta el área
      $("html, body").animate(
        { scrollTop: $(gato).offset().top },
        800,
        function () {
          window.location.hash = gato;
        }
      );
    } //fin del if
  });

  // activa tooltip JQ Bootstrap
  $('[data-toggle="tooltip"]').tooltip();

  //  evento en  metodo children en list group items seccion "Quienes somos"
  //   var QSicon = $("#quienessomos").children().find("i");
  var QSicon = $("i").parent().find("li");
  console.log("Muestra hijos id quienessomos--->", QSicon);

  //Final Document ready Jquery
});
