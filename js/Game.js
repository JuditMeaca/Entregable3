let elements=[];
let countObstacles=0;
let character;
let containGame;
//setInterval(verifyCollision,1000);


function createObstacle(){
    let row=Math.floor(Math.random() * (4 - 1)) + 1;//asigna una fila entre 1 y 3
    let tipe=Math.floor(Math.random() * (3 - 1)) + 1;//asigna un modelo de obs entre 1 y 2
    countObstacles++;
    let obs=new Obstacle(row,tipe,countObstacles);
    obs.addMe();
    elements.push(obs);//agrega el obstaculo a la lista de elementos
}

function verifyCollision(){
    console.log(elements);
    let collisionPoint=200;//(character.getPos().left+character.width);
    for(let i=0;i< elements.length;i++){//recorre todos los elemtos y revisa colicion
        let elemPos=elements[i].getPos().left;
        if(elemPos<=collisionPoint){
            //elem.collicion();
        }
    }
}

function createGame(){
    //creo el espacio
    let space=createContainsGame("space");
    //creo los planetas y los agrego dentro del espacio
    let planets=createContainsGame("planets");
    space.appendChild(planets);
    //creo las estrellas y los agrego dentro del planetas
    let stars=createContainsGame("stars");
    planets.appendChild(stars);
    //agrego todas las reaciones al DOM;
    let body=document.getElementById("body");
    body.appendChild(space);
    containGame=document.getElementById("stars");
    setInterval(createObstacle,1000);
}


//crea elementos html con la clase containsgamer
function createContainsGame(elemName){
    let elem=document.createElement("div");
    elem.classList.add(elemName);
    elem.classList.add("containsGame");
    elem.setAttribute("id",elemName);
    return elem;
}

window.onload=createGame();