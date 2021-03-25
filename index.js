const nomePetshop = "PETSHOP AVANADE"

let pets = [
    {
        nome: 'Gato',
        tipo: 'cachorro',
        idade: 3,
        raca: 'husky',
        peso: 3,
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
        peso: 0.5,
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
        peso: 2,
        tutor: 'Francis',
        contato: '(81) 99988-7766',
        vacinado: true,
        servicos: ['tosa', 'banho']
     }
];

const listarPets = () => {
    for(let i = 0; i < pets.length; i++){
        console.log(pets[i].nome);
    }
}

listarPets();

// console.log(pet);