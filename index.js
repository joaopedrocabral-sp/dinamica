var cardapio = [
  {
    nome: "Churrasquinho vegano",
    preco: 503.0,
    descricao: "A melhor carne que não é carne da região!",
  },
  {
    nome: "Frango a parmegiana vegano",
    preco: 203.0,
    descricao: "O melhor franguinho que você provará, mas sem o frango é claro",
  },
  {
    nome: "Costela de cebola",
    preco: 53.0,
    descricao:
      "Se você gosta de cebola suculenta esse é o melhor prato possível!",
  },
];

function cadastroDePrato(pratoNovo){
    cardapio.push(pratoNovo)
    console.log(cardapio)
}

var escondidinhoDeJaca = {
    nome: "Escondidinho de Jaca",
    preco: 150.5,
    descricao: "O escondidinho que é a estrela da casa"
}

cadastroDePrato(escondidinhoDeJaca)


var kits = [
  {
    nome: "Kit Mestre",
    tipo: "Weiss",
    preco: 750.0,
    acompanhaCurso: true,
    ehRefil: false,
  },
  {
    nome: "Kit de Insumos",
    tipo: "Pale Ale",
    preco: 190.0,
    acompanhaCurso: false,
    ehRefil: true,
  },
  {
      nome: "Kit Churras 1.0",
      tipo: "IPA",
      preco: 260.0,
      acompanhaCurso: true,
      ehRefil: false,
  },
];

console.log(kits);


var clientes = [
    {
      id: 1,
      nome: "Rogério Lucas",
      sobrenome: "Silva",
      idade: 30,
      contato: "4002-8922",
    },
    {
      id: 2,
      nome: "Roberto Carlos",
      sobrenome: "Braga",
      idade: 70,
      contato: "(11) 9 1111-1111",
    },
    {
      id: 3,
      nome: "Sylvester",
      sobrenome: "Stallone",
      idade: 80,
      contato: "(22) 9 2222-2222",
    },
  ];

  function adicionarCliente (id, nome, sobrenome, idade, contato) {
    clientes.push({
        id: id,
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,
        contato: contato,
    })
}

adicionarCliente(4, "José", "da Silva", 66, "(19) 9 1111-1111")