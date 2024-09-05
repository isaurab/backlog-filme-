import filmeModel from "../models/filmeModel.js";

export default class Filmes {

    async BuscarTodosOsFilmes(req, res){
        try {
            const filmes = await filmeModel.findAll();
            res.json(filmes);
        }
        catch(err){
            res.status(500).json({erro: err.message});
        }
        
    }

    async BuscarFilmePorID(req, res){
        try{
            const filmeEncontrado= await filmeModel.findByPk(req.params.id);
            if(!filmeEncontrado){
                return res.status(404).json({erro:'Filme não encontrado'});
            }
            return res.json(filmeEncontrado);
        }
        catch(err){
           res.status(500).json({erro: err.message});
        }
    }

    async CadastrarFilme(req, res) {
        try {
            const filmeCadastrado = await filmeModel.create(req.body);
            res.json({
                message:"Filme criado com sucesso!",
                filmeCadastrado
            });

        } catch(error) {
            res.status(500).json({erro: error.message});
        }
    }

    async AtualizarFilme(req,res){
        try{
            const [atualizado] = await filmeModel.update(req.body,
                {where: {id: req.params.id}}
            );
            if(atualizado){
                const filmeAtualizado = await filmeModel.findByPk(req.params.id);
                res.json({mensagem: 'Filme atualizado com sucesso!' , filmeAtualizado});
            }else{
                res.status(404).json({erro: 'Filme não encontrado'});
            }
        }
        catch (err){
            res.status(500).json({erro: err.message});

        }
    }

}
