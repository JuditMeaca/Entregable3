"use strict";

class Obstacle extends Element{
    constructor(pos,tipe,name){
        super(pos,tipe,name);
    }
    addMe(){
        let obs=document.createElement("div");
        obs.classList.add("blackhole");
        obs.classList.add("pos"+this.pos);
        obs.setAttribute("id",this.name);
        let containGame=document.getElementById("stars");
        containGame.appendChild(obs);

    }
    getPos(){
        let me=document.getElementById(this.name);
        let posMe=me.getBoundingClientRect();
        return posMe;
    }
    
}