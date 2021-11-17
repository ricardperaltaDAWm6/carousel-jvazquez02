window.onload = function () {
    // Variables
    // Añadir las tres imágenes del directorio "img" al array IMAGENES.
    const IMAGENES = [];

    IMAGENES[0] = "img/img1.jpg";
    IMAGENES[1] = "img/img2.jpg";
    IMAGENES[2] = "img/img3.jpg";
    

    const TIEMPO_INTERVALO_MILESIMAS_SEG = 1000;

    // posición actual guarda el indice de la imágen que se está mostrando (del array IMAGENES)
    let posicionActual = 0;

    // variables con los elementos del DOM HTML, aplicar el selector necesario.
    let $botonRetroceder = document.getElementById('retroceder');
    let $botonAvanzar = document.getElementById('avanzar');
    let $imagen = document.getElementById('imagen');
    let $botonPlay = document.getElementById('play');
    let $botonStop = document.getElementById('stop');

    // Identificador del proceso que se ejecuta con setInterval().
    let intervalo;

    // Funciones

    /**
     * Funcion que cambia la foto en la siguiente posicion
     */
    function pasarFoto() {   
        switch(posicionActual){
            case 0:
                posicionActual++;
                renderizarImagen();                
                break;
            case 1:
                posicionActual++;
                renderizarImagen();                
                break
            case 2:
                posicionActual = 0;
                renderizarImagen();                
                break;
        }
    }

    /**
     * Funcion que cambia la foto en la anterior posicion
     */
    function retrocederFoto() {
        switch(posicionActual){
            case 0:
                posicionActual = 2;
                renderizarImagen();                
                break;
            case 1:
                posicionActual = 0;
                renderizarImagen();
                break
            case 2:
                posicionActual = 1;
                renderizarImagen();
                break;
        }
    }

    /**
     * Funcion que actualiza la imagen de imagen dependiendo de posicionActual
     */
    function renderizarImagen() {
        $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
    }

    /**
     * Activa el autoplay de la imagen
     */
    function playIntervalo() {
        intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
        setInterval(intervalo);
        $botonStop.disabled = false;
        $botonPlay.disabled = true;        
    }

    /**
     * Para el autoplay de la imagen
     */
    function stopIntervalo() {
        // Desactivar la ejecución de intervalo.

        // Activamos los botones de control. Utilizando setAttribute y removeAttribute.
        clearInterval(intervalo);
        $botonPlay.disabled = false;
      
    }


    
    let zoom = 1;
    const ZOOM_SPEED = 0.1;
    document.addEventListener("wheel", function(e) {  
    
    if(e.deltaY > 0){    
        $imagen.style.transform = `scale(${zoom += ZOOM_SPEED})`;  
    }else{    
        $imagen.style.transform = `scale(${zoom -= ZOOM_SPEED})`;  }

    });

    // Eventos
    // Añadimos los evenntos necesarios para cada boton. Mediante addEventListener.
    $botonStop.addEventListener("click",stopIntervalo);
    $botonPlay.addEventListener("click",playIntervalo);
    $botonRetroceder.addEventListener("click", retrocederFoto);
    $botonAvanzar.addEventListener("click", pasarFoto);
    renderizarImagen();
} 
