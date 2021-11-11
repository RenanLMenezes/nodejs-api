const conexao  = require("../infraestrutura/conexao.js")
const uploadDeArquivos = require('../arquivos/uploadDeArquivos.js')

class Pet {
    adiciona(pet){
        const query = "INSERT INTO Pets SET ?"

        uploadDeArquivos(pet.imagem, pet.nome, (erro, novocaminho) => {
            if(erro){
                res.status(400).json({ erro })
            } else {
                const novoPet = {nome: pet.nome, imagem: novocaminho}

                conexao.query(query, novoPet, erro =>{
    
                
                    if(erro ){
                        console.log(erro)
                        res.status(400).json(erro)
                    } else {
                        res.status(200).json(novoPet)
                    }
                })  
            }
 
        })
        
    }
}

module.exports = new Pet