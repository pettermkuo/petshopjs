const moment= require('moment');
let arq = require('./dadosPet.json');
const nomePetshop = "PETSHOP AVANADE";

let pets = arq.dados;

const retornaIndex = nome => {
    let cont = 0;
    for(let pet of pets){
        if(pet.nome == nome){
            return cont;
        }else{
            cont++;
        }
    }
    return -1;
}

const listarPets = () => {
    // for(let i = 0; i < pets.length; i++){
    for(let pet of pets){
        // concatenacao vvv
        // console.log(pets[i].nome + " " + pets[i].raca);
        // template string vvv
        console.log(`O nome do pet é: ${pet.nome}`);
        !pet.vacinado ? console.log("Não vacinado!") : console.log("Vacinado!");
    }
}

const vacinarPet = pet => {
        if(!pet.vacinado){
            pet.vacinado = true;
            console.log(`${pet.nome} foi vacinado com sucesso!`);
        }else{
            console.log(`Ops, ${pet.nome} já está vacinado!`);
        }
}

const campanhaVacina = () => {
    let cont = 0;
    for(let pet of pets)
    {
        if(!pet.vacinado)
        {
            vacinarPet(pet);
            cont++;
        }
    }
    console.log(`${cont} pets foram vaciados nessa campanha!`)
}

const novocliente = () => {
    let novo = {
        nome: 'Peixe',
        tipo: 'cavalo',
        idade: 5,
        raca: 'arabe',
        peso: 500,
        tutor: 'Silva',
        contato: '(81) 99876-9876',
        vacinado: false,
        servicos: ['banho 26/03/2021', 'vacina 26/03/2021']
    }
    pets.push(novo);
}

const darBanhoPet = pet => {
    pet.servicos.push('banho' + ' ' + moment().format('DD-MM-YYYY'));
    console.log(`${pet.nome} está de banho tomado!`);
};

const tosarPet = pet => {
    pet.servicos.push('tosa' + ' ' + moment().format('DD-MM-YYYY'));
    console.log(`${pet.nome} está com cabelinho na régua :)`);
};

const apararUnhasPet = nome => {
    pet.servicos.push('corte de unhas' + ' ' + moment().format('DD-MM-YYYY'));
    console.log(`${pet.nome} está de unhas aparadas!`);
};

const atenderCliente = (nome,servicos) => {
    let index = retornaIndex(nome);
    index == -1 ?  console.log("Nome de pet inválido.") : servicos(pets[index]);
}

//vacinarPet(pets[2]);
//campanhaVacina();
//novocliente();
//listarPets();
//darBanhoPet(pets[0]);
//tosarPet(pets[1]);
//apararUnhasPet(pets[2]);
atenderCliente(pets[0].nome,darBanhoPet)