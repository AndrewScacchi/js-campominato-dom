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
    grid.append(newDiv);
}

easy.addEventListener("click", function(){
    //clearing grid
    grid.innerHTML="";
    //btns actions
    easy.classList.add("selected");
    normal.disabled = true;
    hard.disabled = true;
    //create grid
    for(i= 1; i < 101; i++){
        createDivCell(i, "easy");
    }
        

})

normal.addEventListener("click", function(){
    grid.innerHTML="";
    easy.disabled = true;
    normal.classList.add("selected");
    hard.disabled = true;
        //create grid
        for(i= 1; i < 82; i++){
        createDivCell(i, "normal");
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
     for(i= 1; i < 50; i++){
        createDivCell(i, "hard");
    }
})


// Get the parent DIV, add click listener...
grid.addEventListener("click",function(e) {
	// e.target was the clicked element
  if (e.target && e.target.matches("div.cell")) {
    console.log("clicked cell!");
    e.target.classList.add("selected");
	}
});
