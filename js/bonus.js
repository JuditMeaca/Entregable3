"use strict";

class Bonus extends Element{
    constructor(pos,tipe,name){
        super(pos,tipe,name);
    }
    //se agrega a si mismo al DOM
    addMe(){
        let obs=document.createElement("div");
        obs.classList.add("money");
        obs.classList.add("elementPos"+this.pos);
        obs.setAttribute("id",this.name);
        obs.setAttribute("onanimationend","removeMe("+ this.name +")");
        let containGame=document.getElementById("stars");
        containGame.appendChild(obs);

    }
    //devuelve un objeto que contiene todos los detalles de dicho elemento HTMl
    getPos(){
        let me=document.getElementById(this.name);
        let posMe=me.getBoundingClientRect();
        return posMe;
    }
    //se a si borra del DOM
    deleteMe(){
    
        let me= document.getElementById(this.name);
        me.classList.remove("money");
        let parent = me.parentNode;
		parent.removeChild(me);
    }
    //all colisionar con otro elemento le resta 10 puntos al SCORE
    onCollicion(){
        let scoreBox=document.getElementById("score");
        let score=parseInt(scoreBox.innerHTML)
        scoreBox.innerHTML= score + 10;
    }
    iAmABonus(){
        return true;
    }
  
}
