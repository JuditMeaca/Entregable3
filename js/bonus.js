"use strict";

class Bonus extends Element {
    constructor(pos,tipe,name){
        super(pos,tipe,name);
        this.tipe = coin;
    }

    addMe(){
        let bon=document.createElement("div");
        bon.classList.add("coin");
        bon.classList.add("pos"+this.pos);
        bon.setAttribute("id",this.name);
        contain.appendChild(bon);
    }
    getPos(){
        let me=document.getElementById(this.name);
        let posMe=me.getBoundingClientRect();
        
        return posMe;
    }
}