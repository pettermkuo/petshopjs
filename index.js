const moment= require('moment') 

const nomePetshop = "PETSHOP AVANADE";

let pets = [
    {
        nome: 'Gato',
        tipo: 'cachorro',
        idade: 3,
        raca: 'husky',
        peso: 7,
        tutor: 'Steve',
        contato: '(81) 91414-1414',
        vacinado: false,
        servicos: ['tosa', 'banho', 'vacina']
    },
    {
        nome: 'Passaro',
        tipo: 'gato',
        idade: 4,
        raca: 'calopsita',
        peso: 0.1,
        tutor: 'Bill',
        contato: '(81) 98282-8383',
        vacinado: false,
        servicos: ['vacina']
    },
    {
        nome: 'Cachorro',
        tipo: 'gato',
        idade: 2,
        raca: 'persa',
        peso: 3.5,
        tutor: 'Francis',
        contato: '(81) 99988-7766',
        vacinado: true,
        servicos: ['tosa', 'banho']
     }
];

const listarPets = () => {
    // for(let i = 0; i < pets.length; i++){
    for(let pet of pets){
        // concatenacao vvv
        // console.log(pets[i].nome + " " + pets[i].raca);
        // template string vvv
        console.log(`O nome do pet é: ${pet.nome}`);
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
        servicos: ['banho', 'vacina']
    }
    pets.push(novo);
}

const darBanhoPet = pet => {
    pet.servicos.push({
        'serviço':'banho',
        'data': moment().format('DD-MM-YYYY')
    });
    console.log(`${pet.nome} está de banho tomado!`);
};

const tosarPet = pet => {
    pet.servicos.push({
        'serviço':'tosa',
        'data': moment().format('DD-MM-YYYY')
    });
    console.log(`${pet.nome} está com cabelinho na régua :)`);
};

const apararUnhasPet = pet => {
    pet.servicos.push({
        'serviço':'corte de unhas',
        'data': moment().format('DD-MM-YYYY')
    });
    console.log(`${pet.nome} está de unhas aparadas!`);
};

vacinarPet(pets[2]);
campanhaVacina();
novocliente();
listarPets();
darBanhoPet(pets[0]);
tosarPet(pets[1]);
apararUnhasPet(pets[2]);