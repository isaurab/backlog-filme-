import filmeModel from "../models/filmeModel.js";

export default class Filmes {

    async BuscarTodosOsFilmes (req, res){
        try {
            const filmes = await filmeModel.findAll();
            res.json(filmes);
        }
        catch (err){
            res.status(500).json({erro: err.message});
        }
        
    }

    async CadastrarFilme (req, res) {
        try {
            const filmeCadastrado = await filmeModel.create(req.body);
            res.json({
                message:"Filme criado com sucesso!",
                filmeCadastrado
            });

        } catch (error) {
            res.status(500).json({erro: error.message});
        }
    }
}
