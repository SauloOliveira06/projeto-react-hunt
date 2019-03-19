
const contentful = require('contentful');

const client = contentful.createClient({
  // Este é o ID do espaço. Um espaço é como uma pasta de projeto em termos de conteúdo
  space: "k0ohxzztt0j5",
  // Este é o token de acesso para este espaço. Normalmente, 
  // você obtém o ID e o token no aplicativo da Web Contentful
  accessToken: "3d6b05b6595e339c386125b761ff8435d5a664821d5891d363b4601c71d70b83"
});

client.getEntries().then((response) => 
console.log(response.items)).catch(console.error)

export default client