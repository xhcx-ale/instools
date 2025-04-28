import { Dork } from "../models/index.js";

//getCategory - páginado - total - populate
const getDork = async (req, res) => {
 // const { limit = 5, desde = 0 } = req.query;
  const query = { estado: true };
  //  const users = await Usuario.find(query).skip(Number(desde)).limit(Number(limit));
  //  const total = await Usuario.countDocuments(query)
/*
  const [total, dorks] = await Promise.all([
    Dork.countDocuments(query),
    Dork.find(query)
      .skip(Number(desde))
      .limit(Number(limit)),
      //.populate("usuario"),
  ]);*/
  
  const dorks = await Dork.find(query)

  res.send(dorks)
};

const createDork = async (req, res) => {
  const dork = req.body.dork.toLowerCase();

  const dorkDB = await Dork.findOne({ dork });

  if (dorkDB) {
    return res.status(400).json({
      msg: `La dork ${dorkDB.dork} ya existe!`,
    });
  }

  //data a guardar
  const data = {
    dork,
    //usuario: req.user._id,
  };

  const nwdork = new Dork(data);

  //db save
  await nwdork.save();

  res.status(201).json(nwdork);
};

//updateCategory

const updateDork = async (req, res) => {
  const { id } = req.params;
  const { estado, ...data } = req.body;

  data.dork = data.dork.toLowerCase()
  //data.usuario = req.user._id

  const upddork = await Dork.findByIdAndUpdate(id, data, {new: true});

  res.json(upddork);
};

//deleteCategory - estado: false

const deleteDork = async (req, res) => {
  const { id } = req.params;

  //Borrado físico
  //   const category = await Category.findByIdAndDelete(id)

  const dltdork = await Dork.findByIdAndUpdate(id, { estado: false }, { new: true });

  res.json(dltdork);
};

export {
  getDork,
  createDork,
  updateDork,
  deleteDork,
};
