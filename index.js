const moment= require('moment');
const fs = require('fs');
const fileName = './dadosPet.json';
const nomePetshop = "PETSHOP AVANADE";

let file = fs.readFileSync(fileName, 'UTF-8');
file = JSON.parse(file);

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
    /*for(let pet of file.dados){
        // concatenacao vvv
        // console.log(pets[i].nome + " " + pets[i].raca);
        // template string vvv
        console.log(`O nome do pet é: ${pet.nome}`);
        !pet.vacinado ? console.log("Não vacinado!") : console.log("Vacinado!");
    }*/

    file.dados.forEach((pet) =>{
        console.log(`${pet.nome}, ${pet.idade} anos, ${pet.tipo}, ${pet.raca}, ${(pet.vacinado) ? 'vacinado': 'não vacinado'}`);

        pet.servicos.forEach((servico) => {
            console.log(`${servico}`);
        })
    })
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
    console.log("Iniciando campanha vacinação!");
    let qtdvacinados = 0;
    file.dados = file.dados.map((pet) => {
        vacinarPet(pet);
        qtdvacinados++;
    })
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
}

const tosarPet = pet => {
    pet.servicos.push('tosa' + ' ' + moment().format('DD-MM-YYYY'));
    console.log(`${pet.nome} está com cabelinho na régua :)`);
}

const apararUnhasPet = pet => {
    pet.servicos.push('corte de unhas' + ' ' + moment().format('DD-MM-YYYY'));
    console.log(`${pet.nome} está de unhas aparadas!`);
}

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

const filtrarPet = raca => {
    const encontrados = file.dados.filter(function(comparado){
        return comparado.raca == raca;
    })
    console.log(`${encontrados}`);
}

const clientePremium = pet => {
    let qtdservicos =  pet.servicos.length;

    if(servicos >= 5)
    {
        console.log("Parabens!");
    }else{
        console.log("Ainda não chegou lá!")
    }
}

//vacinarPet(file.dados[2]);
//campanhaVacina();
//novocliente();
listarPets();
//darBanhoPet(file.dados[0]);
//tosarPet(file.dados[1]);
//apararUnhasPet(file.dados[2]);
//atenderCliente(file.dados[0].nome,darBanhoPet);
//atualizarBancodDaddos();