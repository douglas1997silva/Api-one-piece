const express = require('express');

const app = express();

const PORT = 3000;


app.use(express.json());


app.listen(PORT, ()=>{
    console.log(`Servidor Express rodando em http://localhost:${PORT}/`)
})

const personagensOnePiece = [
    { id: 1, 
    nome: 'Monkey D. Luffy',
    cargo: 'Capitão', 
    recompensa: '1.500.000.000 Berries',
    imagem: 'https://www.wallpaperflare.com/one-piece-monkey-d-luffy-wallpaper-glgah'
 },
    { id: 2,
     nome: 'Roronoa Zoro',
     cargo: 'Espadachim',
     recompensa: '320.000.000 Berries',
     imagem: 'https://www.wallpaperflare.com/one-piece-roronoa-zoro-wallpaper-gljsj'
    },
    { id: 3,
     nome: 'Nami',
     cargo: 'Navegadora',
     recompensa: '66.000.000 Berries',
     imagem: 'https://www.wallpaperflare.com/one-piece-nami-1024x768-anime-one-piece-hd-art-wallpaper-ciuwo'
     },
  ];
  
  // Rota para obter todos os personagens de One Piece
  app.get('/personagens', (req, res) => {
    res.json(personagensOnePiece);
  });

  app.post('/personagem',(req,res)=>{
    const novoPersonagem = req.body ; 
    personagensOnePiece.push(novoPersonagem);
    res.status(201).json(novoPersonagem);
  })

  // Rota para obter um personagem específico
app.get('/personagens/:id', (req, res) => {
    const personagemId = parseInt(req.params.id);
    const personagem = personagensOnePiece.find((p) => p.id === personagemId);
  
    if (!personagem) {
      res.status(404).json({ mensagem: 'Personagem não encontrado.' });
    } else {
      res.json(personagem);
    }
  });