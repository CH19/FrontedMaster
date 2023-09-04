(()=>{
    // probando nuestra primera clase en ts son como en java 
    class persona{
       private _name: string = '';
        lastName: string = '';
        age: number = 0;

        constructor(name: string, age: number, lastName?: string){
            this._name = name
            this.age = age
            if(lastName){
                this.lastName = lastName
            }
        }
        get name(): string{
            return this._name;
        }
        set name(name: string){
            this._name = name;
        }
        mostrarInformacion(){
            console.log('Bienvenido de nuevo ' + this._name);
        }
    }
    const chris: persona = new persona('christian', 19);
    chris.mostrarInformacion();
    chris.name = 'Pedro';
    console.log('mi nombre es ' + chris.name);
    chris.mostrarInformacion();
})();

