import express from "express";
import filmeController from "../controllers/filmeController.js";
 
const router = express.Router();
const filme = new filmeController();

router.get('/', (req, res) => {   
    try {
        filme.BuscarTodosOsFilmes(req, res);
    } catch(err){
        
        res.status(500).json({erro: err.message}) //
    }
 });

 router.get("/:id", (req, res)=>{
try{
    filme.BuscarFilmePorID(req, res);
}
catch(err){
    res.status(500).json({erro: err.message});
}

 });

 router.post('/', (req, res) => {
    try {
        filme.CadastrarFilme(req, res);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
 })

 export default router;


