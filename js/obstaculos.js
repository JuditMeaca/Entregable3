class Obstaculo{
    constructor(pos,tipe,nombre){
        this.pos=pos;
        this.tipe=tipe;
        this.nombre=nombre;
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