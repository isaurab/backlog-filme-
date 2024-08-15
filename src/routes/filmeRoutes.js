import Express from "express";
import filmeController from "../controllers/filmeController.js";
 
const router = express.Router();
const filme = new filmeController ();

router.get('/', (req, res) => {   
    try {
        filme.BuscarTodosOsFilmes();
    } catch(err){
        res.status(500).json({erro: err.message}) //
    }
 });

 export default router;


