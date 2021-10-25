"use strict";

class Bonus extends Element {
    constructor(pos,tipe,name){
        super(pos,tipe,name);
        this.tipe = coin;
    }

    addMe(){
        let bon=document.createElement("div");
        obs.classList.add("money");
        obs.classList.add("pos"+this.pos);
        obs.setAttribute("id",this.name);
        obs.setAttribute("onanimationend","removeMe("+ this.name +")");
        let containGame=document.getElementById("stars");
        containGame.appendChild(bon);
    }
    getPos(){
        let me=document.getElementById(this.name);
        let posMe=me.getBoundingClientRect();
        
        return posMe;
    }
    deleteMe(){
        
        let me= document.getElementById(this.name);
        let parent = me.parentNode;
		parent.removeChild(me);
    }
}