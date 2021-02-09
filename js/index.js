let sumatoria = 0;

function calculaPrecio(cantidad,precioUnidad){
    
    resultado = precioUnidad * cantidad;
    return resultado;
}

function creaTextoAclaracionPrecio(idFormulario, preciobase, idTexto){
    const $textoAclaracionPrecio=document.createElement('span');
    $textoAclaracionPrecio.id = idTexto;
    $textoAclaracionPrecio.textContent=`El precio incluye los $${preciobase} del precio base.`;
    $textoAclaracionPrecio.style.color="#F3F9AF";
    document.querySelector(`#${idFormulario}`).appendChild($textoAclaracionPrecio);
}


//planos
const $btnCalcular_pliego = document.querySelector('#btnCalcular_pliego');
if($btnCalcular_pliego){
    $btnCalcular_pliego.onclick = () => {
        const PrecioUnidadPliego = 165000;
        const $cantidadPliego = document.querySelector('#pliego').value;
        let totalAcobrar=calculaPrecio($cantidadPliego,PrecioUnidadPliego);
        document.querySelector('#resultado_pliego').value = totalAcobrar;
    }
}

const btnCalcular_medioPliego = document.querySelector('#btnCalcular_medioPliego');
if(btnCalcular_medioPliego){
    btnCalcular_medioPliego.onclick = () => {
        const PrecioUnidadMedio = 93500;
        const $cantidadMedio = document.querySelector('#Medio').value;
        let totalAcobrar=calculaPrecio($cantidadMedio,PrecioUnidadMedio);
        document.querySelector('#resultado_medioPliego').value = totalAcobrar;
    }
}

const $btnCalcular_cuarto = document.querySelector('#btnCalcular_cuarto');
if($btnCalcular_cuarto){
    $btnCalcular_cuarto.onclick = () => {
        const PrecioUnidadCuarto = 55000;
        const $cantidadCuarto = document.querySelector('#cuarto').value;
        let totalAcobrar=calculaPrecio($cantidadCuarto,PrecioUnidadCuarto);
        document.querySelector('#resultado_cuarto').value = totalAcobrar;
    }
}

const $btnCalcular_carta = document.querySelector('#btnCalcular_carta');
if($btnCalcular_carta){
    $btnCalcular_carta.onclick = () => {
        const PrecioUnidadCarta = 27500;
        const $cantidadCarta = document.querySelector('#carta').value;
        let totalAcobrar=calculaPrecio($cantidadCarta,PrecioUnidadCarta);
        document.querySelector('#resultado_carta').value = totalAcobrar;
    }
}


//area

const $btnCalcular_area = document.querySelector('#btnCalcular_area');
if($btnCalcular_area){
    $btnCalcular_area.onclick = () => {
        const PrecioUnidadArea = 118;
        const $cantidadArea = document.querySelector('#area').value;
        let totalAcobrar=calculaPrecio($cantidadArea,PrecioUnidadArea);
        document.querySelector('#resultado_area').value = totalAcobrar;
    }
}

const $btnCalcular_detalle = document.querySelector('#btnCalcular_detalle');
if($btnCalcular_detalle){
    $btnCalcular_detalle.onclick = () => {
        const PrecioUnidadDetalle = 8800;
        const $cantidadDetalle = document.querySelector('#detalle').value;
        let totalAcobrar=calculaPrecio($cantidadDetalle,PrecioUnidadDetalle);
        document.querySelector('#resultado_detalle').value = totalAcobrar;
    }
}


function subtotal(){
    const $resultadoPliego = Number(document.querySelector('#resultado_pliego').value);
    const $resultadoMedio = Number(document.querySelector('#resultado_medioPliego').value);
    const $resultadoCuarto = Number(document.querySelector('#resultado_cuarto').value);
    const $resultadoCarta = Number(document.querySelector('#resultado_carta').value);
    const $resultadoArea = Number(document.querySelector('#resultado_area').value);
    const $resultadoDetalle = Number(document.querySelector('#resultado_detalle').value);
    sumatoria = ($resultadoPliego+$resultadoMedio+$resultadoCuarto+$resultadoCarta+$resultadoArea+$resultadoDetalle);
    document.querySelector('#subtotalPlanos').textContent=`$ ${sumatoria}`;
}


const $btnsubtotal = document.querySelector('#btn-subtotal');
if($btnsubtotal){
    $btnsubtotal.onclick = () => {
        subtotal();
    }
}


//levantamiento
const $btnCalcularLevantamiento = document.querySelector('#btnCalcular_levantamiento');

if($btnCalcularLevantamiento){
    $btnCalcularLevantamiento.onclick = () => {
        const PrecioUnidadLevantamiento = 660;
        const $cantidadLevantamiento = document.querySelector('#levantamiento').value;
        let totalAcobrar=calculaPrecio($cantidadLevantamiento,PrecioUnidadLevantamiento);
        document.querySelector('#resultado_levantamiento').value = totalAcobrar;
    }
    
}

//render

const $btnCalcularInterior = document.querySelector('#btnCalcular_interior');

if($btnCalcularInterior){
    $btnCalcularInterior.onclick = () => {
        const avisoPrecio = document.querySelector('#aclaracionPrecioInterior');
        if(avisoPrecio){
            avisoPrecio.remove()
        }
        const PrecioUnidadInterior = 11000;
        const PrecioBase = 66000;
        const $cantidadInterior = document.querySelector('#interior').value;
        let totalAcobrar=calculaPrecio($cantidadInterior,PrecioUnidadInterior);
        totalAcobrar += PrecioBase;
        document.querySelector('#resultado_interior').value = totalAcobrar;
        creaTextoAclaracionPrecio("formulario1",PrecioBase,"aclaracionPrecioInterior");
    }
    
}

const $btnCalcular_exterior = document.querySelector('#btnCalcular_exterior');

if($btnCalcular_exterior){
    $btnCalcular_exterior.onclick = () => {
        const avisoPrecio = document.querySelector('#aclaracionPrecioExterior');
        if(avisoPrecio){
            avisoPrecio.remove()
        }
        
        const PrecioUnidadExterior = 11000;
        const PrecioBase = 132000;
        const $cantidadExterior = document.querySelector('#exterior').value;
        let totalAcobrar=calculaPrecio($cantidadExterior,PrecioUnidadExterior);
        totalAcobrar += PrecioBase;
        document.querySelector('#resultado_exterior').value = totalAcobrar;
        creaTextoAclaracionPrecio("formulario2",PrecioBase,"aclaracionPrecioExterior");
    }
    
}

const $btnCalcular_extras = document.querySelector('#btnCalcular_extras');

if($btnCalcular_extras){
    
    $btnCalcular_extras.onclick = () => {
        const avisoPrecio = document.querySelector('#aclaracionPrecioExtras');
        if(avisoPrecio){
            avisoPrecio.remove()
        }
        
        const PrecioUnidadExtras = 33000;
        const PrecioBase = 22000;
        const $cantidadExtras = document.querySelector('#extras').value;
        let totalAcobrar=calculaPrecio($cantidadExtras,PrecioUnidadExtras);
        totalAcobrar += PrecioBase;
        document.querySelector('#resultado_extras').value = totalAcobrar;
        
        creaTextoAclaracionPrecio("formulario3",PrecioBase,"aclaracionPrecioExtras");
            
        
        
    }
    
}

const $btnCalcular_cambios = document.querySelector('#btnCalcular_cambios');

if($btnCalcular_cambios){
    $btnCalcular_cambios.onclick = () => {
        const avisoPrecio = document.querySelector('#aclaracionPrecioCambios');
        if(avisoPrecio){
            avisoPrecio.remove()
        }
        
        const PrecioUnidadCambios = 11000;
        const PrecioBase = 33000;
        const $cantidadCambios = document.querySelector('#cambios').value;
        let totalAcobrar=calculaPrecio($cantidadCambios,PrecioUnidadCambios);
        totalAcobrar += PrecioBase;
        document.querySelector('#resultado_cambios').value = totalAcobrar;

        creaTextoAclaracionPrecio("formulario3",PrecioBase,"aclaracionPrecioCambios");

    }
}

function subtotalRender(){
    const $resultadoExterior = Number(document.querySelector('#resultado_interior').value);
    const $resultadoInterior = Number(document.querySelector('#resultado_exterior').value);
    const $resultadoExtras = Number(document.querySelector('#resultado_extras').value);
    const $resultadoCambios = Number(document.querySelector('#resultado_cambios').value);
    
    sumatoria = ($resultadoExterior+$resultadoInterior+$resultadoExtras+$resultadoCambios);
    document.querySelector('#subtotalRender').textContent=`$ ${sumatoria}`;
}

const $btnsubtotalRender = document.querySelector('#btn-subtotalRender');
if($btnsubtotalRender){
    $btnsubtotalRender.onclick = () => {
        subtotalRender();
    }
}
