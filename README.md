# Pankipa Application

Projeto gerado com [Angular CLI](https://github.com/angular/angular-cli) version 1.6 e Angular 5.1.0

# Instalação

Clone o projeto [aqui](https://github.com/newaeonweb/punkipa)

Utilize os comandos abaixo:

```
  yarn install
```

```
  yarn add node-sass
```

> Esses passos assume que você já tem instalado em sua maquina: NodeJS, Yarn, Angular/cli e as demais ferramentas necessárias para rodar projetos com Angular.

## Desenvolvimento

dentro da pasta do projeto Digite: `npm start`. Acesse: `http://localhost:4200/`.

### Comando adicionais

Se utilizar API rodando na mesma maquina, porém em uma porta diferente, utilize: `npm start-proxy` e ajuste o arquivo `proxy-config.json` na raiz da aplicação para a porta utilizada.
## Build

Digite: `npm build`.

Para visualizar a aplicação em produção, digite:

```
cd dist
```

```
npm run serve
```

Visite: http://localhost:8080

# Produção:

O resultado pode ser conferido clicando [aqui](http://punkipa-app.surge.sh)

# Gerar Documentação

```
  npm run doc:build
```

## Visitar Documentação

```
  npm run doc:serve
```

This command run compodoc on port: 8090 ie. http://localhost:8090

> Antes é necessário instalar o compodoc

```
  npm install -g @compodoc/compodoc
```

_Caso queira instalar apenas no projeto utilize o comando_:

```
  npm install --save-dev @compodoc/compodoc
```
