$(document).ready( () => {
  
  const T1 = document.querySelector('.t1'),
        T2 = document.querySelector('.t2'),
        T3 = document.querySelector('.t3')
        
  let sucursal = 'INSURGENTES'
  
 const sumaVenta = () => {
   let N1 = Number(T1.value),
       N2 = Number(T2.value),
       N3 = Number(T3.value)
   const total = N1 + N2 + N3
   $('.vntTotal').text(`$${total}`)
       N1?N1 = `$${N1}`:N1 = ''
       N2?N2 = `$${N2}`:N2 = ''
       N3?N3 = `$${N3}`:N3 = ''
   return {
     N1,
     N2,
     N3,
     total
   }
 }
 
 const aggComa = (numero) => {
   return numero.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
 }
 
 
   const selSuc = document.querySelector('.sucSel')
   selSuc.onchange = function() {
     switch( selSuc.selectedIndex ) {
      case 1:
        return sucursal = '2AB'
        break
      case 2:
        return sucursal = 'LN2'
        break
      case 3:
        return sucursal = 'LNO'
        break
      case 4:
        return sucursal = 'RCS'
        break
      case 5:
        return sucursal = 'SMB'
        break
      case 6:
        return sucursal = 'TEC'
        break
      case 7:
        return sucursal = 'TEC 2'
        break
      case 8:
        return sucursal = 'WALMART'
        break
        default:
        return sucursal = 'INSURGENTES'
        break
    }
   }
  
 const venta = () => {
   const suma = sumaVenta()
   const msg = `
${sucursal} 
${fecha.formatoFecha}
*${fecha.diaSemana.toUpperCase()}*
🟢T1: ${aggComa(suma.N1)}
🔵T2: ${aggComa(suma.N2)}
🔴T3: ${aggComa(suma.N3)}

Total: $${aggComa(suma.total)}
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