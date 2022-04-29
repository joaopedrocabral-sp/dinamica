var cervejas = [
  {
    nome: "Cerveja Lemon Glow",
    preco: 9.43,
    categoria: "Fuit beer",
    importada: false,
  },
  {
    nome: "Cerveja Gallows",
    preco: 12.5,
    categoria: "Imperial Ipa",
    importada: true,
  },
  {
    nome: "Cerveja Chicago",
    preco: 14.99,
    categoria: "Sour Ale",
    importada: false,
  },
];

function cadastroDeCervejas(cervejaNova){
  cervejas.push(cervejaNova)
  console.log(cervejas)
}

var CervejaTop = {
  nome: "Viçosa Bier",
  preco: 15.99,
  categoria: "Pilsen",
  importada: false
}

cadastroDeCervejas(CervejaTop)



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
console.log(clientes)


function buscarId (id, clientes) {
  const idxClientes = clientes.findIndex((cliente) => cliente.id === id);
  if (idxClientes >= 0) {
      return clientes[idxClientes]
  } else {
      return console.log("Cliente não encontrado")
  } 
}
buscarId(2, clientes)


function entreIdade(idade1,idade2){
  for (let i = 0; i < clientes.length; i++) {
    if(clientes.idade >= idade1 && clientes.idade <= idade2){
        var selecionados = clientes.push[i];
      }
  }
  console.log(selecionados);
}
console.log(entreIdade(30,70));
