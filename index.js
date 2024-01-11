const Filme = require('./models/filmes')
const Desenhos = require('./models/desenhos')
const Variedades = require('./models/variedades')
const Esportes = require('./models/esports')
const Bbb_24 = require('./models/bbb')

const ConnectBD = require('./server/connection')
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3000;
const app = express();

app.use(cors());
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: true }) );
app.set('view engine', 'html');


app.get('/content/v1/filmes', async (req, res) => {
  try {
    const [filmes] = await Promise.all([
      Filme.find(),
    ]);
  
    const responseData = {
      filmes
    };
  
    res.status(200).json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
})
app.get('/content/v1/filmes/:id', async (req, res) => {
  try {
    const filme = await Filme.findById(req.params.id);
    if (!filme) {
      return res.status(404).json({ error: 'Filme não encontrado' });
    }
    const responseData = {
      filme
    };
    res.status(200).json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
})

app.get('/content/v1/desenhos', async (req, res) => {
  try {
    const [desenhos] = await Promise.all([
      Desenhos.find(),
    ]);
  
    const responseData = {
      desenhos,
    };
  
    res.json(responseData).status(200);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
})
app.get('/content/v1/desenhos/:id', async (req, res) => {
  try {
    const desenhos = await Desenhos.findById(req.params.id);
    if (!desenhos) {
      return res.status(404).json({ error: 'Filme não encontrado' });
    }
    const responseData = {
      desenhos
    };
    res.status(200).json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
})

app.get('/content/v1/variedades', async (req, res) => {
  try {
    const [variedades] = await Promise.all([
      Variedades.find(),
    ]);
  
    const responseData = {
      variedades,
    };
  
    res.json(responseData).status(200);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
})
app.post('/content/v1/variedades', async (req, res) => {
  try {
    const { title, link, image } = req.body;

    if (!title || !link || !image) {
      return res.status(400).json({ error: 'Titulo o link e a imagem são obrigatórios!' });
    }

    const novaVariedade = new Variedades({
      title,
      link,
      image,
    });

    const variedadeSalva = await novaVariedade.save();

    res.status(201).json({ variedade: variedadeSalva });

  } catch (error) {
    
    console.error(error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
})
app.get('/content/v1/variedades/:id', async (req, res) => {
  try {
    const variedades = await Variedades.findById(req.params.id);
    if (!variedades) {
      return res.status(404).json({ error: 'Filme não encontrado' });
    }
    const responseData = {
      variedades
    };
    res.status(200).json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
})
app.delete('/content/v1/variedades/:id', async (req, res) => {
  try {
    const deletedVariedade = await Variedades.findByIdAndDelete(req.params.id);

    if (!deletedVariedade) {
      return res.status(404).json({ error: 'Variedade não encontrada' });
    }

    res.status(200).json({ message: 'Variedade excluída com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

app.get('/content/v1/esportes', async (req, res) => {
  try {
    const [esportes] = await Promise.all([
      Esportes.find(),
    ]);
  
    const responseData = {
      esportes,
    };
  
    res.json(responseData).status(200);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
})
app.get('/content/v1/esportes/:id', async (req, res) => {
  try {
    const esportes = await Esportes.findById(req.params.id);
    if (!esportes) {
      return res.status(404).json({ error: 'Filme não encontrado' });
    }
    const responseData = {
      esportes
    };
    res.status(200).json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
})


app.get('/content/v1/bbb', async (req, res) => {
  try {
    const [bbb] = await Promise.all([
      Bbb_24.find(),
    ]);
  
    const responseData = {
      bbb
    };
  
    res.status(200).json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
})
app.get('/content/v1/bbb/:id', async (req, res) => {
  try {
    const bbb = await Bbb_24.findById(req.params.id);
    if (!bbb) {
      return res.status(404).json({ error: 'Filme não encontrado' });
    }
    const responseData = {
      bbb
    };
    res.status(200).json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
})
app.post('/content/v1/bbb', async (req, res) => {
  try {
    const { title, link, image } = req.body;

    if (!title || !link || !image) {
      return res.status(400).json({ error: 'Titulo o link e a imagem são obrigatórios!' });
    }

    const novoBbb = new Bbb_24({
      title,
      link,
      image,
    });

    const BbbSalvo = await novoBbb.save();

    res.status(201).json({ BBB: BbbSalvo });

  } catch (error) {
    
    console.error(error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
})
app.delete('/content/v1/bbb/:id', async (req, res) => {
  try {
    const deletedBbb = await Bbb_24.findByIdAndDelete(req.params.id);

    if (!deletedBbb) {
      return res.status(404).json({ error: 'Variedade não encontrada' });
    }

    res.status(204).json({ message: 'Variedade excluída com sucesso' });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});
app.put('/content/v1/bbb/:id', async (req, res) => {
  const itemId = req.params.id;

  try {
    const updatedItem = await Bbb_24.findByIdAndUpdate(itemId, req.body);

    res.status(204).json({ message: 'Item atualizado com sucesso', updatedItem });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

ConnectBD

app.listen(process.env.PORT || port,()=>{
    console.log(`Aplicação rodando, porta:${port}`);
})
