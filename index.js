const express = require('express'); //importa o express
const webapp = express(); //atribui o express a um app

webapp.use(express.json());
webapp.use(express.static('public'));

const urlsBacoDeDados = {};

function gerarId(){
    return Math.random().toString(36).substring(2,7); 
    /* */
}

webapp.post('/encurtar', (req,res) => {
    const urlOriginal = req.body.url;

    if (!urlOriginal) {
        return res.status(400).send({roo: 'Inserir a URL é obrigatório.'});
    }

    const idCurto = gerarId();
    urlsBacoDeDados[idCurto] = urlOriginal;

    res.send({
        urlEncurtada: `http://localhost:3000/${idCurto}`
    });
});

webapp.get('/:codigo', (req,res) => {
    const codigo = req.params.codigo;
    const urlOriginal = urlsBacoDeDados[codigo];

    if (urlOriginal) {
        res.redirect(urlOriginal);
    } else {
        res.status(404).send('URL não encontrada.')
    }
});

webapp.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000')
});