// DOM Script

const pcArray = [];
// const classBomb = document.createAttribute("class").value = "bomb";

//create 16x random num non repeating 

while (pcArray.length < 16) {
    let numRandom = Math.floor(Math.random() * 100) + 1;
    if (pcArray.includes(numRandom) == false){
        pcArray.push(numRandom);
    }
}

console.log("pcArray is " + pcArray + " length is " + pcArray.length );

//percorrere la lunghezza dell'array. ad ogni index prendere il cell che ha l'id class-stessoIndex e aggiungerci classe bomb

