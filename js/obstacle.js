"use strict";

class Obstacle extends Element{
    constructor(pos,tipe,name){
        super(pos,tipe,name);
    }
    // se agrega a si mismo al DOM
    addMe(){
        let bHclass;
        let obs=document.createElement("div");
        if(this.tipe==1){
            bHclass="blackhole";
        }else{
            bHclass="blackhole2";
        }
        obs.classList.add(bHclass);
        obs.classList.add("elementPos"+this.pos);
        obs.setAttribute("id",this.name);
        obs.setAttribute("onanimationend","removeMe("+ this.name +")");
        let containGame=document.getElementById("stars");
        containGame.appendChild(obs);

    }
    // devuelve un objeto con los detalles de su elemnto html
    getPos(){
        let me=document.getElementById(this.name);
        let posMe=me.getBoundingClientRect();
        return posMe;
    }
    // se borra a sdi mismo del DOM
    deleteMe(){
        
        let me= document.getElementById(this.name);
        me.classList.remove("blackhole");
        let parent = me.parentNode;
		parent.removeChild(me);
    }
    //resta 10 puntos al SCORE
    onCollicion(){
        let scoreBox=document.getElementById("score");
        let score=parseInt(scoreBox.innerHTML)
        scoreBox.innerHTML= score - 10;
        
    }
    iAmABonus(){
        return false;
    }
   
}
