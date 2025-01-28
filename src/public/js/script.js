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
         
         return msg
 }
 
 const sender = async(msg) => {
    const telegram_bot_id = '7905079405:AAF9dtA-0Dr6Cl9ko6WwcK9tknt3WlzziFs',
    chat_id = '-4644107466';
    
    let settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
      "method": "POST",
      "headers": {
        "Content-Type": "application/json",
        "cache-control": "no-cache"
      },
      "data": JSON.stringify({
        "chat_id": chat_id,
        "text": msg
      })
    };
    await $.ajax(settings).done( function(response) {
      console.log(response)
    })
  }
  
 const optSel = document.querySelector('.optSel')
  
  optSel.onchange = function() {
    $('.toolSel').addClass('border-bottom')
    switch( optSel.selectedIndex ) {
      case 1:
        $('.totalVent').css('display', 'block')
        $('.smr').click( () => {
          const msg = venta()
          msgSend(encodeURI(msg))
          sender(msg)
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