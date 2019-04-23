const figlet = require('figlet');
const chalk = require('chalk');

exports.welcome = (appName) => {
    console.log(chalk.yellow(figlet.textSync(appName)));
};

exports.readme = (projectName) => {
    return `## ${projectName}`;
}

exports.indexView = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><%= projectName %></title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        h1 {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    </style>
</head>
<body>
    <h1>Welcome in <%= projectName %> app</h1>
</body>
</html>
`

exports.gitignore = `
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
lerna-debug.log*

# Diagnostic reports (https://nodejs.org/api/report.html)
report.[0-9]*.[0-9]*.[0-9]*.[0-9]*.json

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Directory for instrumented libs generated by jscoverage/JSCover
lib-cov

# Coverage directory used by tools like istanbul
coverage

# nyc test coverage
.nyc_output

# Grunt intermediate storage (https://gruntjs.com/creating-plugins#storing-task-files)
.grunt

# Bower dependency directory (https://bower.io/)
bower_components

# node-waf configuration
.lock-wscript

# Compiled binary addons (https://nodejs.org/api/addons.html)
build/Release

# Dependency directories
node_modules/
jspm_packages/

# TypeScript v1 declaration files
typings/

# Optional npm cache directory
.npm

# Optional eslint cache
.eslintcache

# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz

# Yarn Integrity file
.yarn-integrity

# dotenv environment variables file
.env
.env.test

# parcel-bundler cache (https://parceljs.org/)
.cache

# next.js build output
.next

# nuxt.js build output
.nuxt

# vuepress build output
.vuepress/dist

# Serverless directories
.serverless/

# FuseBox cache
.fusebox/

# DynamoDB Local files
.dynamodb/
`;

exports.app = `const express = require('express');
const bodyParser = require('body-parser');
    
const app = express();
    
app.use(express.static('public'));
app.set('view engine', 'ejs');
    
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', (req, res) => res.render('index', {projectName: require('./package.json').name}));
    
module.exports = app;`;

exports.server = `const port = process.env.PORT || 8000;
require('./app').listen(port, () => console.log('Server is running.. PORT:' + port));`

exports.json = {
    "name": "",
    "version": "1.0.0",
    "description": "",
    "main": "server.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "node server.js"
    },
    "repository": {
        "type": "git",
        "url": ""
    },
    "author": "",
    "license": "ISC",
    "bugs": {
        "url": ""
    },
    "homepage": "",
    "dependencies": {
        "express": "^4.16.4",
        "body-parser": "^1.18.3",
        "ejs": "^2.6.1"
    }
}