$(function () {
  //Inicio Document ready Jquery

  //cerrar navegador cuando se haga click en un item del menu
  $(".navbar-nav>li>a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });
  //esconder li "Quienes somos" del nav menu en dispositivos sm ***Profe-->debe ir recargargando la pag para ir probando en los diferentes viewports
  if (window.matchMedia("(max-width: 470px)").matches) {
    /* The viewport is less than, or equal to, 470 pixels wide */
    $("#hide-sm").hide();
  } //fin del if

  //smooth-scroll to sections
  $("a").click(function (event) {
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

  //  evento en  metodo children para que H3 secciones cambien a color verde
  var QSicon = $("body").children().find("h3");
  console.log("Muestra hijos id quienessomos--->", QSicon);
  var QSicon1 = QSicon.eq(0);
  var QSicon2 = QSicon.eq(1);
  var QSicon3 = QSicon.eq(2);

  QSicon1.on({
    mouseenter: function () {
      $(this).css("color", "#5AF07E");
    },
    mouseleave: function () {
      $(this).css("color", "white");
    },
  });
  QSicon2.on({
    mouseenter: function () {
      $(this).css("color", "#5AF07E");
    },
    mouseleave: function () {
      $(this).css("color", "white");
    },
  });
  QSicon3.on({
    mouseenter: function () {
      $(this).css("color", "#5AF07E");
    },
    mouseleave: function () {
      $(this).css("color", "white");
    },
  });

  //Final Document ready Jquery
});
