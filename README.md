# Desafio Técnico - Pessoa Desenvolvedora Fullstack Júnior
## Front End

- React 18.2.0
- Bootstrap 5


# Como Instalar e Executar
Faça uma cópia do arquivo .env.example e renomeie para .env

preencha as variáveis de ambiente
- REACT_APP_API_DOMAIN - dominio onde o backend esta hospedado, Exemplo: http://127.0.0.1:8000
- REACT_APP_API_USER - usuario para fazer autenticação com o backend 
- REACT_APP_API_PASSWORD - senha para fazer autenticação com o backend

Note que as variáveis de ambiente usuario e senha precisam ser iguais ao que você setou ao configurar o backend

Não foi implementado um metodo de login para utilizar o CRUD, por isso é necessário adicionar as credenciais de autenticação nas váriaveis de ambiente
```bash
# instalar bibliotecas necessárias
npm install

# executar
npm start
```


# Executando via Docker
```bash
# Fazer build da imagem
docker build . -f Dockerfile -t desafio-frontend

# Criar e rodar container com a imagem previamente criada  
docker run -d --name desafio-frontend -p 80:3000 desafio-frontend
```

O aplicativo estara disponivel no endereço http://localhost:80