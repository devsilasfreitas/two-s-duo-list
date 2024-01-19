import checkExistsName from "./checkExistsName.js";


const config = require('./config.js');

const accessToken = config.accessToken;
const owner = 'devsilasfreitas'; // Substitua pelo seu nome de usuário do GitHub
const repo = 'two-s-duo-list'; // Substitua pelo nome do seu repositório
const branch = 'main'; // Substitua pelo nome do branch onde deseja adicionar o arquivo

const filePath = 'src/modules/index.txt'; // Caminho do arquivo na pasta desejada
const fileContent = 'e nois que manda'; // Conteúdo que você deseja adicionar ao arquivo

const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`;

const headers = {
    Authorization: `Bearer ${accessToken}`,
    Accept: 'application/vnd.github.v3+json',
};

axios.put(apiUrl, {
    message: 'Adicionando novo arquivo',
    content: btoa(fileContent), // Codifica o conteúdo em base64
    branch: branch,
}, { headers })
.then(response => {
    console.log('Arquivo criado com sucesso:', response.data.content);
})
.catch(error => {
    console.error('Erro ao criar o arquivo:', error.response.data.message);
});

checkExistsName()
