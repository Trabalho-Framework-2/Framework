FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install 
COPY . .
EXPOSE 3000
CMD ["node", "index.js"]

### Dockerfile ^
#FROM node:18 --> Usa imagem oficial do Node.js versão 18
#WORKDIR /app --> Define o diretório de trabalho dentro do container
#COPY package*.json ./ --> Copia os arquivos de dependências
#RUN npm install --> Instala as dependências do projeto
#COPY . . --> Copia todos os arquivos do projeto para o container
#EXPOSE 3000 --> Expõe a porta 3000 para acesso externo
#CMD ["node", "index.js"] --> Comando para iniciar a aplicação Node.js
