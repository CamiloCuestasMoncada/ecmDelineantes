
//funciones
function totalRender(valor1, valor2) {
    let sumatoria = 0;

    return sumatoria = valor1 + valor2;

}


function calculaPrecio(cantidad, precioUnidad) {

    let resultado = precioUnidad * cantidad;
    return resultado;
}

function creaTextoAclaracionPrecio(idFormulario, preciobase, idTexto) {
    const $textoAclaracionPrecio = document.createElement('span');
    $textoAclaracionPrecio.id = idTexto;
    $textoAclaracionPrecio.textContent = `El precio incluye los $${preciobase} del precio base.`;
    $textoAclaracionPrecio.style.color = "#F3F9AF";
    document.querySelector(`#${idFormulario}`).appendChild($textoAclaracionPrecio);
}

function subtotal() {
    let sumatoria = 0;

    const $resultadoPliego = Number(document.querySelector('#resultado_pliego').value);
    const $resultadoMedio = Number(document.querySelector('#resultado_medioPliego').value);
    const $resultadoCuarto = Number(document.querySelector('#resultado_cuarto').value);
    const $resultadoCarta = Number(document.querySelector('#resultado_carta').value);
    const $resultadoArea = Number(document.querySelector('#resultado_area').value);
    const $resultadoDetalle = Number(document.querySelector('#resultado_detalle').value);
    sumatoria = ($resultadoPliego + $resultadoMedio + $resultadoCuarto + $resultadoCarta + $resultadoArea + $resultadoDetalle);
    document.querySelector('#subtotalPlanos').textContent = `$ ${sumatoria}`;
}

function subtotalRender() {
    let sumatoria = 0;

    const $resultadoInterior = Number(document.querySelector('#resultado_interior').value);
    const $resultadoInteriorRender = Number(document.querySelector('#resultado_render_interior').value);
    const $resultadoExtras = Number(document.querySelector('#resultado_extras').value);
    const $resultadoExtrasRender = Number(document.querySelector('#resultado_render_Extras').value);
    const $resultadoCambios = Number(document.querySelector('#resultado_cambios').value);
    const $resultadoCambiosRender = Number(document.querySelector('#resultado_render_Cambios').value);
    const $resultadoExterior = Number(document.querySelector('#resultado_exterior').value);
    const $resultadoExteriorRender = Number(document.querySelector('#resultado_render_Exterior').value);

    sumatoria = ($resultadoExterior + $resultadoInterior + $resultadoExtras + $resultadoCambios + $resultadoInteriorRender + $resultadoExtrasRender + $resultadoCambiosRender + $resultadoExteriorRender);
    document.querySelector('#subtotalRender').textContent = `$ ${sumatoria}`;
}

function totalDevWebsite() {
    let sumatoria = 0;
    let paginas = Number(document.querySelector('#resultado_paginas').value);
    let animaciones = Number(document.querySelector('#resultado_animaciones').value);
    let check1 = Number(document.querySelector('#resultadoCheck1').innerHTML);
    let check2 = Number(document.querySelector('#resultadoCheck2').innerHTML);
    let check3 = Number(document.querySelector('#resultadoCheck3').innerHTML);
    let check4 = Number(document.querySelector('#resultadoCheck4').innerHTML);
    let check5 = Number(document.querySelector('#resultadoCheck5').innerHTML);
    let check6 = Number(document.querySelector('#resultadoCheck6').innerHTML);
    let check7 = Number(document.querySelector('#resultadoCheck7').innerHTML);
    let check8 = Number(document.querySelector('#resultadoCheck8').innerHTML);
    let check9 = Number(document.querySelector('#resultadoCheck9').innerHTML);
    sumatoria = (paginas + animaciones + check1 + check2 + check3 + check4 + check5 + check6 + check7 + check8 + check9);
    document.querySelector('#subtotalWeb').textContent = `$ ${sumatoria}`;
}

//planos
const $btnCalcular_pliego = document.querySelector('#btnCalcular_pliego');
if ($btnCalcular_pliego) {
    $btnCalcular_pliego.onclick = () => {
        const PrecioUnidadPliego = 165000;
        const $cantidadPliego = document.querySelector('#pliego').value;
        let totalAcobrar = calculaPrecio($cantidadPliego, PrecioUnidadPliego);
        document.querySelector('#resultado_pliego').value = totalAcobrar;
    }
}

const btnCalcular_medioPliego = document.querySelector('#btnCalcular_medioPliego');
if (btnCalcular_medioPliego) {
    btnCalcular_medioPliego.onclick = () => {
        const PrecioUnidadMedio = 93500;
        const $cantidadMedio = document.querySelector('#Medio').value;
        let totalAcobrar = calculaPrecio($cantidadMedio, PrecioUnidadMedio);
        document.querySelector('#resultado_medioPliego').value = totalAcobrar;
    }
}

const $btnCalcular_cuarto = document.querySelector('#btnCalcular_cuarto');
if ($btnCalcular_cuarto) {
    $btnCalcular_cuarto.onclick = () => {
        const PrecioUnidadCuarto = 55000;
        const $cantidadCuarto = document.querySelector('#cuarto').value;
        let totalAcobrar = calculaPrecio($cantidadCuarto, PrecioUnidadCuarto);
        document.querySelector('#resultado_cuarto').value = totalAcobrar;
    }
}

const $btnCalcular_carta = document.querySelector('#btnCalcular_carta');
if ($btnCalcular_carta) {
    $btnCalcular_carta.onclick = () => {
        const PrecioUnidadCarta = 27500;
        const $cantidadCarta = document.querySelector('#carta').value;
        let totalAcobrar = calculaPrecio($cantidadCarta, PrecioUnidadCarta);
        document.querySelector('#resultado_carta').value = totalAcobrar;
    }
}


//area

const $btnCalcular_area = document.querySelector('#btnCalcular_area');
if ($btnCalcular_area) {
    $btnCalcular_area.onclick = () => {
        const PrecioUnidadArea = 118;
        const $cantidadArea = document.querySelector('#area').value;
        let totalAcobrar = calculaPrecio($cantidadArea, PrecioUnidadArea);
        document.querySelector('#resultado_area').value = totalAcobrar;
    }
}

const $btnCalcular_detalle = document.querySelector('#btnCalcular_detalle');
if ($btnCalcular_detalle) {
    $btnCalcular_detalle.onclick = () => {
        const PrecioUnidadDetalle = 8800;
        const $cantidadDetalle = document.querySelector('#detalle').value;
        let totalAcobrar = calculaPrecio($cantidadDetalle, PrecioUnidadDetalle);
        document.querySelector('#resultado_detalle').value = totalAcobrar;
    }
}





const $btnsubtotal = document.querySelector('#btn-subtotal');
if ($btnsubtotal) {
    $btnsubtotal.onclick = () => {
        subtotal();
    }
}


//levantamiento
const $btnCalcularLevantamiento = document.querySelector('#btnCalcular_levantamiento');

if ($btnCalcularLevantamiento) {
    $btnCalcularLevantamiento.onclick = () => {
        const PrecioUnidadLevantamiento = 660;
        const $cantidadLevantamiento = document.querySelector('#levantamiento').value;
        let totalAcobrar = calculaPrecio($cantidadLevantamiento, PrecioUnidadLevantamiento);
        document.querySelector('#resultado_levantamiento').value = totalAcobrar;
    }

}

//render

const $btnCalcularInterior = document.querySelector('#btnCalcular_interior');

if ($btnCalcularInterior) {
    $btnCalcularInterior.onclick = () => {



        const PrecioBase = 66000;
        const $cantidadInterior = document.querySelector('#interior').value;
        let subtotal = calculaPrecio($cantidadInterior, PrecioBase);

        document.querySelector('#resultado_interior').value = subtotal;
        let $cantidadRenderInterior = Number(document.querySelector('#resultado_render_interior').value);

        const total = totalRender(subtotal, $cantidadRenderInterior);
        document.querySelector('#totalInterior').value = `$ ${total}`;

    }

}

const $btnCalcular_renderInterior = document.querySelector('#btnCalcular_renderInterior');

if ($btnCalcular_renderInterior) {
    $btnCalcular_renderInterior.onclick = () => {
        /*const avisoPrecio = document.querySelector('#aclaracionPrecioInterior');
        if(avisoPrecio){
            avisoPrecio.remove()
        }*/
        const PrecioUnidadRender = 11000;

        const $cantidadRenderInterior = document.querySelector('#renderInterior').value;
        let subtotal = calculaPrecio($cantidadRenderInterior, PrecioUnidadRender);

        document.querySelector('#resultado_render_interior').value = subtotal;
        //creaTextoAclaracionPrecio("formulario1",PrecioBase,"aclaracionPrecioInterior");
        const $valorInterior = Number(document.querySelector('#resultado_interior').value);
        const total = totalRender(subtotal, $valorInterior);
        document.querySelector('#totalInterior').value = `$ ${total}`;
    }

}





const $btnCalcular_exterior = document.querySelector('#btnCalcular_exterior');

if ($btnCalcular_exterior) {
    $btnCalcular_exterior.onclick = () => {


        const PrecioBase = 132000;
        const $cantidadInterior = document.querySelector('#exterior').value;
        let subtotal = calculaPrecio($cantidadInterior, PrecioBase);

        document.querySelector('#resultado_exterior').value = subtotal;
        let $cantidadRenderInterior = Number(document.querySelector('#resultado_render_Exterior').value);

        const total = totalRender(subtotal, $cantidadRenderInterior);
        document.querySelector('#totalExterior').value = `$ ${total}`;

    }

}

const $btnCalcular_renderExterior = document.querySelector('#btnCalcular_renderExterior');

if ($btnCalcular_renderExterior) {
    $btnCalcular_renderExterior.onclick = () => {


        const PrecioBase = 11000;
        const $cantidadInterior = document.querySelector('#renderExterior').value;
        let subtotal = calculaPrecio($cantidadInterior, PrecioBase);

        document.querySelector('#resultado_render_Exterior').value = subtotal;
        let $valorExterior = Number(document.querySelector('#resultado_exterior').value);

        const total = totalRender(subtotal, $valorExterior);
        document.querySelector('#totalExterior').value = `$ ${total}`;

    }

}

const $btnCalcular_extras = document.querySelector('#btnCalcular_extras');

if ($btnCalcular_extras) {

    $btnCalcular_extras.onclick = () => {
        const PrecioBase = 22000;
        const $cantidadInterior = document.querySelector('#extras').value;
        let subtotal = calculaPrecio($cantidadInterior, PrecioBase);

        document.querySelector('#resultado_extras').value = subtotal;
        let $resultadoRenderExtras = Number(document.querySelector('#resultado_render_Extras').value);

        const total = totalRender(subtotal, $resultadoRenderExtras);
        document.querySelector('#totalExtras').value = `$ ${total}`;



    }

}

const $btnCalcular_renderExtras = document.querySelector('#btnCalcular_renderExtras');

if ($btnCalcular_renderExtras) {

    $btnCalcular_renderExtras.onclick = () => {
        const PrecioBase = 33000;
        const $cantidadInterior = document.querySelector('#renderExtras').value;
        let subtotal = calculaPrecio($cantidadInterior, PrecioBase);

        document.querySelector('#resultado_render_Extras').value = subtotal;
        let $resultadoExtras = Number(document.querySelector('#resultado_extras').value);

        const total = totalRender(subtotal, $resultadoExtras);
        document.querySelector('#totalExtras').value = `$ ${total}`;



    }

}

const $btnCalcular_cambios = document.querySelector('#btnCalcular_cambios');

if ($btnCalcular_cambios) {
    $btnCalcular_cambios.onclick = () => {
        const PrecioBase = 33000;
        const $cantidadInterior = document.querySelector('#cambios').value;
        let subtotal = calculaPrecio($cantidadInterior, PrecioBase);

        document.querySelector('#resultado_cambios').value = subtotal;
        let $valorRenderCambios = Number(document.querySelector('#resultado_render_Cambios').value);

        const total = totalRender(subtotal, $valorRenderCambios);
        document.querySelector('#totalCambios').value = `$ ${total}`;

    }
}

const $btnCalcular_renderCambios = document.querySelector('#btnCalcular_renderCambios');

if ($btnCalcular_renderCambios) {
    $btnCalcular_renderCambios.onclick = () => {
        const PrecioBase = 11000;
        const $cantidadInterior = document.querySelector('#renderCambios').value;
        let subtotal = calculaPrecio($cantidadInterior, PrecioBase);

        document.querySelector('#resultado_render_Cambios').value = subtotal;
        let $valorCambios = Number(document.querySelector('#resultado_cambios').value);

        const total = totalRender(subtotal, $valorCambios);
        document.querySelector('#totalCambios').value = `$ ${total}`;

    }
}



const $btnsubtotalRender = document.querySelector('#btn-subtotalRender');
if ($btnsubtotalRender) {
    $btnsubtotalRender.onclick = () => {
        subtotalRender();
    }
}


//checked


let getCheck1 = document.querySelector('#check1');
let getInfoCheck1 = document.querySelector('#resultadoCheck1');
if (getInfoCheck1) {
    function check1(checked) {
        checked ? getInfoCheck1.textContent = 500000 : getInfoCheck1.textContent = 300000;
    }
    check1(this.checked)
    getCheck1.addEventListener('change', function () {
        check1(this.checked)
    })
}

let getCheck2 = document.querySelector('#check2');
let getInfoCheck2 = document.querySelector('#resultadoCheck2');
if (getInfoCheck2) {
    function check2(checked) {
        checked ? getInfoCheck2.textContent = 70000 : getInfoCheck2.textContent = "";
    }
    getCheck2.addEventListener('change', function () {
        check2(this.checked)
    })
}

let getCheck3 = document.querySelector('#check3');
let getInfoCheck3 = document.querySelector('#resultadoCheck3');
if (getInfoCheck3) {
    function check3(checked) {
        checked ? getInfoCheck3.textContent = 300000 : getInfoCheck3.textContent = "";
    }

    getCheck3.addEventListener('change', function () {
        check3(this.checked)
    })
}

let getCheck4 = document.querySelector('#check4');
let getInfoCheck4 = document.querySelector('#resultadoCheck4');
if (getInfoCheck4) {
    function check4(checked) {
        checked ? getInfoCheck4.textContent = 350000 : getInfoCheck4.textContent = "";
    }
    getCheck4.addEventListener('change', function () {
        check4(this.checked)
    })
}

let getCheck5 = document.querySelector('#check5');
let getInfoCheck5 = document.querySelector('#resultadoCheck5');
if (getInfoCheck5) {
    function check5(checked) {
        checked ? getInfoCheck5.textContent = 50000 : getInfoCheck5.textContent = "";
    }
    getCheck5.addEventListener('change', function () {
        check5(this.checked)
    })
}

let getCheck6 = document.querySelector('#check6');
let getInfoCheck6 = document.querySelector('#resultadoCheck6');
if (getInfoCheck6) {
    function check6(checked) {
        checked ? getInfoCheck6.textContent = 100000 : getInfoCheck6.textContent = "";
    }
    getCheck6.addEventListener('change', function () {
        check6(this.checked)
    })
}

let getCheck7 = document.querySelector('#check7');
let getInfoCheck7 = document.querySelector('#resultadoCheck7');
if (getInfoCheck7) {
    function check7(checked) {
        checked ? getInfoCheck7.textContent = 50000 : getInfoCheck7.textContent = "";
    }
    getCheck7.addEventListener('change', function () {
        check7(this.checked)
    })
}

let getCheck8 = document.querySelector('#check8');
let getInfoCheck8 = document.querySelector('#resultadoCheck8');
if (getInfoCheck8) {
    function check8(checked) {
        checked ? getInfoCheck8.textContent = 20000 : getInfoCheck8.textContent = "";
    }
    getCheck8.addEventListener('change', function () {
        check8(this.checked)
    })
}

let getCheck9 = document.querySelector('#check9');
let getInfoCheck9 = document.querySelector('#resultadoCheck9');
if (getInfoCheck9) {
    function check9(checked) {
        checked ? getInfoCheck9.textContent = 50000 : getInfoCheck9.textContent = "";
    }
    getCheck9.addEventListener('change', function () {
        check9(this.checked)
    })
}


// web

const $btnCalcular_paginas = document.querySelector('#btnCalcular_paginas');
if ($btnCalcular_paginas) {
    $btnCalcular_paginas.onclick = () => {
        const PrecioUnidadpaginas = 50000;
        const $cantidadpaginas = document.querySelector('#paginas').value;
        let totalAcobrar = calculaPrecio($cantidadpaginas, PrecioUnidadpaginas);
        document.querySelector('#resultado_paginas').value = totalAcobrar;
    }
}

const $btnCalcular_animaciones = document.querySelector('#btnCalcular_animaciones');
if ($btnCalcular_animaciones) {
    $btnCalcular_animaciones.onclick = () => {
        const PrecioUnidadanimaciones = 10000;
        const $cantidadanimaciones = document.querySelector('#animaciones').value;
        let totalAcobrar = calculaPrecio($cantidadanimaciones, PrecioUnidadanimaciones);
        document.querySelector('#resultado_animaciones').value = totalAcobrar;
    }
}

const $btnTotalWeb = document.querySelector('#btn-subtotalWeb');
if ($btnTotalWeb) {
    $btnTotalWeb.onclick = () => {
        totalDevWebsite();
    }
}







