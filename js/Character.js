class Character{
    constructor(tipe){
        this.tipe=tipe;
    }
    
    addMe(){
        let obs=document.createElement("div");
        obs.classList.add("character");
        obs.classList.add("pos2");
        obs.setAttribute("id","character");
        let containGame=document.getElementById("stars");
        containGame.appendChild(obs);
    }
    
}