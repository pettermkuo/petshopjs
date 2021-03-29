const moment= require('moment');
const fs = require('fs');
const fileName = './dadosPet.json';
const nomePetshop = "PETSHOP AVANADE";

let file = fs.readFileSync(fileName, 'UTF-8');
file = JSON.parse(file);

const retornaIndex = nome => {
    let cont = 0;
    for(let pet of file.dados){
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
    for(let pet of file.dados){
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
    for(let pet of file.dados)
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
    file.dados.push(novo);
}

const darBanhoPet = pet => {
    pet.servicos.push('banho' + ' ' + moment().format('DD-MM-YYYY'));
    console.log(`${pet.nome} está de banho tomado!`);
};

const tosarPet = pet => {
    pet.servicos.push('tosa' + ' ' + moment().format('DD-MM-YYYY'));
    console.log(`${pet.nome} está com cabelinho na régua :)`);
};

const apararUnhasPet = pet => {
    pet.servicos.push('corte de unhas' + ' ' + moment().format('DD-MM-YYYY'));
    console.log(`${pet.nome} está de unhas aparadas!`);
};

const atenderCliente = (nome,servicos) => {
    let index = retornaIndex(nome);
    if(index == -1)  {
        console.log("Nome de pet inválido.");
    }else{
        console.log(`Bem vindo ${file.dados[index].tutor}!`);
        servicos(file.dados[index]);
        console.log(`Volte sempre ${file.dados[index].tutor}!`);
    } 
}

const atualizarBancodDaddos = () => {
    //não usar quebra de linhas para evitar ocupar espaço extra na memoria.
    /*fs.writeFile(fileName, JSON.stringify(file, null, 2), function writeJSON(err){
        if (err) return console.log(err);
        console.log(JSON.stringify(file, null, 2));
        console.log('writing to ' + fileName);
    });*/
    console.log('writing to ' + fileName);
    fs.writeFileSync(fileName, JSON.stringify(file, null, 2), 'utf-8');
}

//vacinarPet(file.dados[2]);
//campanhaVacina();
//novocliente();
//listarPets();
//darBanhoPet(file.dados[0]);
//tosarPet(file.dados[1]);
//apararUnhasPet(file.dados[2]);
atenderCliente(file.dados[0].nome,darBanhoPet);
//atualizarBancodDaddos();