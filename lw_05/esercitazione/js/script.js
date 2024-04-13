
/// ESERCIZIO UNO - CONTA LE VOCALI ///


///versione 1////

const Text= ("Mi illumino di immenso");
const vocals= ("aeiouAEIOU");

const vocalCount=(Text)=>{
    let nVocal=0;
    for(let type of Text){
        if(vocals.includes(type))
        nVocal++;
    }
    return nVocal;
};

const totvocals= vocalCount(Text)
console.log(totvocals);



//versione 2////

function countVocals(text) {
    let numVocals = 0;

    for (types of text) {
        if ("aeiouAEIOU".includes(types)) {
            numVocals++;
        }
    }
    return numVocals;
}

const text = ("Mi illumino di immenso");
const totVocals = countVocals(text);
console.log (totVocals);
    

/// ESERCIZIO DUE - TROVA IL MASSIMO ///


const Numbers= [12,54,654,2,64,78,23,450,6];

////prima versione ///

const findMaxNum = (Numbers)=>{
    let maxNum= Numbers[0];
    for(let index=0; index< Numbers.length; index++) {
    if(maxNum < Numbers[index]){
        maxNum = Numbers[index];
    }
}
    return maxNum;
}

const MaxNumero=(findMaxNum(Numbers));
console.log(`Il numero massimo dell'array è ${MaxNumero}`);

///seconda versione ///

const MaxNumber= Math.max(...Numbers);
console.log(MaxNumber);

//terza versione//

const maxNumber= Numbers.filter((number)=> number=== Math.max(12,54,654,2,64,78,23,450,6));
console.log(`Il numero massimo dell'array è: ${maxNumber}`);



/// ESERCIZIO TRE - FILTRA E MAPPA ///

const workerList= [
    { nome: "Marco",
    salario: 2000 },
    { nome: "Luca",
    salario: 4000 },
    { nome: "Lia",
    salario: 2500 },
];


const PayIncrease= workerList.filter((worker)=>worker.salario<3000)
.map(worker => `${worker.nome} ${(worker.salario + (worker.salario) * 10 /100)}`);

console.log(PayIncrease);


/// ESERCIZIO QUATTRO - CALCOLATRICE ++///


///prima versione ////

const num1= parseInt(prompt("inserisci numero"));
const operation= prompt("inserisci un simbolo matematico tra +-/*");
const num2= parseInt(prompt("inserisci un altro numero"));


const calculator =() => {
    if(operation==="+") {
        return num1+num2;
    }else if (operation==="-") {
        return num1-num2;
    }else if( operation==="*") {
        return num1*num2;
    }else if (operation==="/") {
        return num1/num2;
    }else {
return `Non è un'operazione matematica`;
    }

}
const Finalresult=(calculator())
console.log(Finalresult);

///seconda versione ///

const symbol= prompt("inserisci un simbolo matematico");

const calc =(num1,num2,symbol) => {
    switch(symbol){
        case "+":
        return num1+num2
        break;

        case"-":
        return num1-num2
        break;

        case"*":
        return  num1*num2;
        break;

        case"/":
        return num1/num2;
        break;

        default:
            `Non è un'operazione matematica`
    }
}
const result=(calc(4,5,symbol))
console.log(result);