import { Venta } from '../models/index.js'

const ventaLoad = (req, res) => {
  res.json({
    msg: 'VAYASE A LA VERGA'
  })
}

const ventaAdd = async(req, res) => {
  const { T1, T2, T3, Total } = req.body
  const data = {
    T1,
    T2,
    T3,
    Total
  }
  const venta = new Venta(data)
  await venta.save()
  res.status(201).json(venta)
}

export {
  ventaAdd,
  ventaLoad
}