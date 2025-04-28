import {
  authRoutes,
  dorkRoutes,
  usrAdmRoutes,
  ventaRoutes,
} from '../routes/index.js'
import express from "express";
import cors from "cors";
//import fileUpload from "express-fileupload";
import { dirname, extname, join } from "path";
import morgan from "morgan";
import { fileURLToPath } from "url";
import { engine } from 'express-handlebars'
import { dbConnection } from "../database/config.db.js";
import  job  from '../helpers/cron.js'

class Server {
  constructor() {
    this.app = express();
    this.__dirname = dirname(fileURLToPath(import.meta.url));
    this.job = job
    this.app.set("port", process.env.PORT || 4000);
    this.app.set('views', join(this.__dirname, '../views'))
    this.app.engine('.hbs', engine({
      defaultLayout: 'main',
      layoutsDir: join(this.app.get('views'), 'layouts'),
      partialsDir: join(this.app.get('views'), 'partials'),
      extname: '.hbs',
  }))
    this.app.set('view engine', '.hbs')

    this.paths = {
      auth: '/auth',
      users: '/admin/users',
      dorks: '/dorks',
      venta: '/venta',
    };

    this.dbCnn();
    this.midlewares();
    this.routes();
    this.job.start()
  }

  async dbCnn() {
    await dbConnection();
  }

  midlewares() {
    this.app.use(cors());
    this.app.use(express.static(join(this.__dirname, "/../public")));
    this.app.use(morgan("dev"));
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(express.json());
    //this.app.use(cookieParser())
    /*this.app.use(fileUpload({
      useTempFiles : true,
      tempFileDir : '/tmp/',
      createParentPath: true
  }));*/
  }

  routes() {
    this.app.use(this.paths.auth, authRoutes),
    this.app.use(this.paths.dorks, dorkRoutes),
    this.app.use(this.paths.users, usrAdmRoutes),
    this.app.use(this.paths.venta, ventaRoutes),
    this.app.get('/', (req, res) => {
    res.render('index')
})
    this.app.get("*", (req, res) => {
      res.status(404).send("<h1>No esté mamando!!</h1>");
      //res.status(404).render('errors/error.hbs', { err: 'No encontrado', code: 404 })
    });
  }

  listen() {
    this.app.listen(this.app.get("port"), () => {
      console.log("Running... | PORT:", this.app.get("port"));
    });
  }
}

export default Server;