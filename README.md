Para Usarmos o ECMA 6:

Primeiro vamos fazer a instalação do Babel

    npm install --save-dev @babel/core @babel/cli

Criamos uma pasta src

No arquivo package.json vamos alterar a parte scripts:

      {
    "scripts": {
      "build": "babel src -d dist"

    },
    "devDependencies": {
      "@babel/cli": "^7.22.9",
      "@babel/core": "^7.22.9"
    }
  }

Comando:

    npm run build

Será criado outra pasta dist
___________________________________

Browser list:

    npm install --save-dev @babel/preset-env

Temos que criar um arquivo de configuração do Babel

    babel.config.json



__________________________________________
___________WATCH__________________________

No arquivo package

    {
    "scripts": {
      "build": "babel src --watch -d dist"
    },
    "browserslist": "> 0.25%",
    "devDependencies": {
      "@babel/cli": "^7.22.9",
      "@babel/core": "^7.22.9",
      "@babel/preset-env": "^7.22.9"
    }
  }

Damos o comando 

  npm run build

  __________________________________
