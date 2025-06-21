import { Venta } from '../models/index.js'

const obtenerFechaActual = () => {
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

const ventaLoad = async(req, res) => {
  const date = obtenerFechaActual().formatoFecha
  const query = String(date)
  const hoy = await Venta.findOne({fecha:query})
   if(hoy) {
     return res.json(hoy) 
   }{
     return res.json({msg: 'No se ha registrado la venta de hoy!'})
   }
}

const ventaAdd = async(req, res) => {
  const { T1, T2, T3 } = req.body
  const fecha = obtenerFechaActual().formatoFecha
  const Total = Number(T1) + Number(T2) + Number(T3)
  const data = {
    fecha,
    T1,
    T2,
    T3,
    Total
  }
  const venta = new Venta(data)
  await venta.save()
  res.status(201)
}

export {
  ventaAdd,
  ventaLoad
}