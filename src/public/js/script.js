$(document).ready( () => {
  
  const T1 = document.querySelector('.t1'),
        T2 = document.querySelector('.t2'),
        T3 = document.querySelector('.t3')
  
 const sumaVenta = () => {
   const total = Number(T1.value) + Number(T2.value) + Number(T3.value)
   $('.vntTotal').text(`$${total}`)
   return total
 }
  
 const venta = () => {
   const suma = sumaVenta()
   const msg = `
INSURGENTES 
${fecha.formatoFecha}
*${fecha.diaSemana.toUpperCase()}*
🟢T1: ${T1.value}
🔵T2: ${T2.value}
🔴T3: ${T3.value}

Total: ${suma}
         `
         
         return encodeURI(msg)
 }
  
 const optSel = document.querySelector('.optSel')
  
  optSel.onchange = function() {
    $('.toolSel').addClass('border-bottom')
    switch( optSel.selectedIndex ) {
      case 1:
        $('.totalVent').css('display', 'block')
       // $('.smr').click( () => msgSend(venta()) )
        $('.smr').click( () => {
          msgSend(venta())
        } )
        $('input').on('input', () => {
          sumaVenta()
        })
        break
      case 2:
        break
      case 3:
        break
        default:
        alert('no')
        break
    }
  }
  
  function obtenerFechaActual() {
    const diasSemana = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
  
    const fechaActual = new Date();
  
    const dia = String(fechaActual.getDate()).padStart(2, '0');
    const mes = String(fechaActual.getMonth() + 1).padStart(2, '0'); // Los meses son indexados desde 0
    const año = fechaActual.getFullYear();
  
  const formatoFecha = `${dia}/${mes}/${año}`;
  const diaSemana = diasSemana[fechaActual.getDay()];
  
  return {
    formatoFecha,
    diaSemana
  };
}

  const msgSend = (msg) => {
    window.location = "https://api.whatsapp.com/send?phone=&text=" + msg
  }

  const fecha = obtenerFechaActual();

//console.log(obtenerFechaActual());
  
  //const fecha = obtenerFechaActual()
  
  $('.date').text(fecha.formatoFecha)
  
})