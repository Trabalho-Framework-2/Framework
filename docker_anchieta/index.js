const express = require('express'); // Importa o framework Express
const mysql = require('mysql'); // Importa o módulo MySQL

const app = express();
app.use(express.json()); // Permite receber JSON no corpo das requisições
app.use(express.static('site')); // Serve arquivos estáticos da pasta "site"

// Configuração da conexão com o banco de dados
const db = mysql.createConnection({
    host: 'mysql_anchieta', // Nome do serviço definido no docker-compose
    user: 'root',
    password: 'Dm102030',
    database: 'mysql_anchieta'
});

// Estabelece conexão com o banco
db.connect(err => {
    if (err) {
        console.error('Erro ao conectar ao MySQL:', err);
        return;
    }
    console.log('Conectado ao MySQL com sucesso!');

    // Cria a tabela "pessoas" se não existir
    db.query(`
        CREATE TABLE IF NOT EXISTS pessoas (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nome VARCHAR(100),
            idade INT
        )
    `, (err) => {
        if (err) {
            console.error('Erro ao criar tabela:', err);
        } else {
            console.log('Tabela "pessoas" pronta para uso.');
        }
    });
});

// Rota para inserir dados no banco
app.post('/dados', (req, res) => {
    const { nome, idade } = req.body;
    db.query('INSERT INTO pessoas (nome, idade) VALUES (?, ?)', [nome, idade], (err, result) => {
        if (err) return res.status(500).send(err);
        res.send('Dados inseridos com sucesso!');
    });
});

// Rota para listar dados do banco
app.get('/listar', (req, res) => {
    db.query('SELECT * FROM pessoas', (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
