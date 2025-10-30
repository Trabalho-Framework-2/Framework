const express = require('express')
const path = require('path');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require(path.join(__dirname, '../swagger.json'));       
const { sequelize } = require('./models');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.static(path.join(__dirname, '../site'))); //permite que sirva o site

const routes = require('./routes');
app.use('/api', routes);

// Rota inicial (teste rápido)
app.get('/', (req, res) => {
  res.send('🚀 API Anchieta Backend rodando com sucesso!');
});

// Swagger (documentação)
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Sincroniza com o banco e inicia o servidor
// Sincroniza com o banco e inicia o servidor com retry
const PORT = 3000;

async function startWithRetry(retries = 10, delayMs = 2000) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      await sequelize.authenticate();
      console.log('✅ Conectado ao banco de dados com sucesso!');
      app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
      return;
    } catch (err) {
      console.error(`❌ Tentativa ${attempt}/${retries} falhou ao conectar no banco:`, err.message);
      if (attempt === retries) {
        console.error('⛔ Desistindo após várias tentativas.');
        process.exit(1);
      }
      await new Promise(r => setTimeout(r, delayMs));
    }
  }
}

startWithRetry();

