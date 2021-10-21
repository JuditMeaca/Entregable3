"use strict";

class Obstacle extends Element{
    constructor(pos,tipe,name){
        super(pos,tipe,name);
    }
    addMe(){
        let obs=document.createElement("div");
        obs.classList.add("asteroid");
        obs.classList.add("pos"+this.pos);
        obs.setAttribute("id",this.nombre);
        contain.appendChild(obs);
    }
    getPos(){
        let me=document.getElementById(this.nombre);
        let posMe=me.getBoundingClientRect();
        
        return posMe;
    }
    //colicion
}