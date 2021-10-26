"use strict";

class Bonus extends Element{
    constructor(pos,tipe,name){
        super(pos,tipe,name);
    }
    addMe(){
        let obs=document.createElement("div");
        obs.classList.add("money");
        obs.classList.add("pos"+this.pos);
        obs.setAttribute("id",this.name);
        obs.setAttribute("onanimationend","removeMe("+ this.name +")");
        let containGame=document.getElementById("stars");
        containGame.appendChild(obs);

    }
    getPos(){
        let me=document.getElementById(this.name);
        let posMe=me.getBoundingClientRect();
        return posMe;
    }
    deleteMe(){
        console.log("soy: " + this.name)
        let me= document.getElementById(this.name);
        me.classList.remove("money");
        let parent = me.parentNode;
		parent.removeChild(me);
    }
}
