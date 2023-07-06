let prueba = [];
class colas {
    constructor(){
        this.colaTickets =  
        [
        { user:"User1", ticket:true },
        { user:"User2", ticket:true },
        { user:"User3", ticket:false },
        { user:"User4", ticket:true },
        { user:"User5", ticket:false },
        { user:"User6", ticket:false },
        { user:"User7", ticket:true },
        { user:"User8", ticket:true },
        { user:"User9", ticket:true },
        { user:"User10", ticket:false },
        { user:"User11", ticket:true },]
        this.colaColados = [];
        this.index=0;
    }

    filtrarColados(){
        for(let i=this.colaTickets.length-1; i>=0; i--){
            if(this.colaTickets[i].ticket === false){
                this.colaColados[this.index] = this.colaTickets[i];
                this.index++;
                this.colaTickets.splice(i, 1);
            }
        }
    }
}

const colas1 = new colas();
colas1.filtrarColados();
console.log(colas1.colaTickets);
console.log(colas1.colaColados);
