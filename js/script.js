// SCRIPT for MINEFIELD
// in base alla selezione da parte dell'utente, generare un quadrato 10x10, 9x9 o 7x7 
// al click della .cell , la .cell diventa blue
//Difficulties
const easy = document.getElementById("easy");
const normal = document.getElementById("normal");
const hard = document.getElementById("hard");

//Elements
const grid = document.querySelector("div.grid");

//Create div.Cell element with two parameter
//inner = content cell
//difficulty = 2nd class cell
function createDivCell(inner, difficulty){
    let newDiv = document.createElement("div");
    newDiv.innerHTML= inner;
    newDiv.classList.add(`cell-${difficulty}`)
    newDiv.classList.add("cell");
    newDiv.setAttribute("id", `class-${inner}`);
    grid.append(newDiv);
    return newDiv;
}
let score = 0;
easy.addEventListener("click", function(){
    //clearing grid
    grid.innerHTML="";
    //btns actions
    easy.classList.add("selected");
    normal.disabled = true;
    hard.disabled = true;
    
    
    //generate bombs!
    while (pcArray.length < 16) {
        let numRandom = Math.floor(Math.random() * 100) + 1;
        if (pcArray.includes(numRandom) == false){
            pcArray.push(numRandom);
        }
    }
    //create griD
    for(i= 1; i < 101; i++){
        let newCell = createDivCell(i, "easy");
        // add class bomb to useful cells
        if (pcArray.includes(i)){
            newCell.classList.add("bomb");
        } 
        // if selected cell is bomb all bomb trigger and you can't click anything
        if (newCell.classList.contains("bomb")){
            newCell.addEventListener("click",
            function(){
                alert("BOOM you are dead!");
                newCell.classList.add("bomb-on");
                console.log(score);
                alert("Il tuo punteggio è " + score);
                
            })
        } else {
                newCell.addEventListener("click", function(){
                newCell.classList.add("selected");  
                score ++; 
            })
        }
    }
    
})
normal.addEventListener("click", function(){
    grid.innerHTML="";
    easy.disabled = true;
    normal.classList.add("selected");
    hard.disabled = true;
        //generate bombs!
    while (pcArray.length < 16) {
        let numRandom = Math.floor(Math.random() * 81) + 1;
        if (pcArray.includes(numRandom) == false){
            pcArray.push(numRandom);
        }
    }
    //create griD
    for(i= 1; i < 82; i++){
        let newCell = createDivCell(i, "normal");
        // add class bomb to useful cells
        if (pcArray.includes(i)){
            newCell.classList.add("bomb");
        } 
        // if selected cell is bomb all bomb trigger and you can't click anything
        if (newCell.classList.contains("bomb")){
            newCell.addEventListener("click",
            function(){
                alert("BOOM you are dead!");
                newCell.classList.add("bomb-on");
                console.log(score);
                alert("Il tuo punteggio è " + score);
                
            })
        } else {
                newCell.addEventListener("click", function(){
                newCell.classList.add("selected");  
                score ++; 
            })
        }
    }

})
hard.addEventListener("click", function(){
    //clearing grid
    grid.innerHTML="";
    //disabling other buttons
    easy.disabled = true;
    normal.disabled = true;
    hard.classList.add("selected");
    //create grid
    while (pcArray.length < 16) {
        let numRandom = Math.floor(Math.random() * 49) + 1;
        if (pcArray.includes(numRandom) == false){
            pcArray.push(numRandom);
        }
    }
    //create griD
    for(i= 1; i < 50; i++){
        let newCell = createDivCell(i, "hard");
        // add class bomb to useful cells
        if (pcArray.includes(i)){
            newCell.classList.add("bomb");
        } 
        // if selected cell is bomb all bomb trigger and you can't click anything
        if (newCell.classList.contains("bomb")){
            newCell.addEventListener("click",
            function(){
                alert("BOOM you are dead!");
                newCell.classList.add("bomb-on");
                console.log(score);
                alert("Il tuo punteggio è " + score);
                
            })
        } else {
                newCell.addEventListener("click", function(){
                newCell.classList.add("selected");  
                score ++; 
            })
        }
    }

})


//okay il code è orribile, ripetitivo e lungo.
// c'è di sicuro modo per snellirlo.
// il mio cervello è mush ora. le consegne sono state effettuate. niente bonus stavolta..
