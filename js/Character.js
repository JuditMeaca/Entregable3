class Character{
    constructor(tipe){
        this.tipe=tipe;
        this.name="character";
    }
    
    addMe(){
        let obs=document.createElement("div");
        obs.classList.add("character");
        obs.classList.add("pos2");
        obs.setAttribute("id","character");
        let containGame=document.getElementById("stars");
        containGame.appendChild(obs);
    }
    move(key){
        let character=document.getElementById("character");
        switch (key){
            case("KeyW"):
                if(character.classList.contains("pos3")){
                    character.classList.remove("pos3")
                    character.classList.add("pos2")
                }else if(character.classList.contains("pos2")){
                    character.classList.remove("pos2")
                    character.classList.add("pos1")
                }
            break;
            case("KeyS"):
                if(character.classList.contains("pos1")){
                    character.classList.remove("pos1");
                    character.classList.add("pos2");
                }else if(character.classList.contains("pos2")){
                    character.classList.remove("pos2");
                    character.classList.add("pos3");
                }
            break;
        }
    }
    getPos(){
        let me=document.getElementById(this.name);
        let posMe=me.getBoundingClientRect();
        return posMe;
    }
}