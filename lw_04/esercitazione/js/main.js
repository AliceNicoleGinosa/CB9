////// ESERCIZIO UNO //////

const myBirthday = "16/07/1992";

if (myBirthday === "16/07/1992") {
    console.log("🎁");
} 
else {
    console.log("Non è la mia data di compleanno, niente regalo!")
}

////// ESERCIZIO DUE ////////

const myDay = ["Mi sveglio", "Faccio colazione",
            "Mi vesto", "Esco di casa",
            "Prendo la metropolitana", 
            "Vado in ufficio",
            "Studio Javascript","Piango",
            "Piango ancora", "Dormo"]

//for (let index=0; index < myDay.length; index ++){
    //console.log((index +1)+ ")"+ myDay[index]);
//}

for (let index=0; index < myDay.length; index ++){
    console.log(index + ")"+ myDay[index]);
}

////// EESERCIZIO AVANZATO UNO //////

const Birthday = prompt("Quando è il tuo compleanno? Inserisci la data dd/mm/yyyy");

if (Birthday=== "16/07/1992") {
    console.log("🎁");
} else {
    console.log ("Non è il tuo compleanno, niente regalo!!!");
}

////// ESERCIZIO AVANZATO DUE //////


let firstValue = prompt("Inserisci un numero");
let mathSymb = prompt("Inserisci un simbolo matematico tra (+,-,*,/)");
let secondValue = prompt("Inserisci un altro numero")
let finalResult 

if(mathSymb === "+") {
    finalResult = parseInt(firstValue) + parseInt (secondValue);
    console.log (finalResult);
} else if(mathSymb === "-"){
    finalResult = parseInt(firstValue) - parseInt (secondValue);
    console.log(finalResult);
} else if (mathSymb === "*") {
     finalResult = parseInt(firstValue) * parseInt (secondValue);
    console.log (finalResult);
} else if(mathSymb === "/") {
    finalResult = parseInt(firstValue) / parseInt (secondValue);
    console.log(finalResult);
} else { console.log("Non è un'operazione matematica, riprova inserendo un simbolo tra quelli proposti");
}
alert(finalResult);
