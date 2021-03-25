const nomePetshop = "PETSHOP AVANADE";

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
    // for(let i = 0; i < pets.length; i++){
    for(let pet of pets){
        // concatenacao vvv
        // console.log(pets[i].nome + " " + pets[i].raca);
        // template string vvv
        console.log(`O nome do pet é: ${pet.nome}`);
    }
}

const vacinarPet = () => {
    let nomev = "Gato";
    for(let pet of pets){
        if(pet.nome == nomev)
        {
            if(pet.vacinado == true)
            {
                console.log(`Ops, ${pet.nome} já está vacinado!`);
            }
            else
            {
                pet.vacinado = true;
                console.log(`${pet.nome} foi vacinado com sucesso!`);
            }
        }
    }
}

const campanhaVacina = () => {
    let cont = 0;
    for(let pet of pets)
    {
        if(pet.vacinado == false)
        {
            pet.vacinado = true;
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

    for(let pet of pets){
        console.log(`O nome do pet é: ${pet.nome}`);
    }
}

// listarPets();
// vacinarPet();
// campanhaVacina();
novocliente();

// console.log(pet);