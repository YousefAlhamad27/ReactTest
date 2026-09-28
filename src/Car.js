
export  class Car{
    constructor(name){
        this.brand=name
    }

    // arrow function definition
    present=(defaultBrand="Mybrand")=>{
        return "I have a "+defaultBrand+' , '+ this.brand;
    }

}


//default 
export  class Model extends Car{

    constructor(name,mod){
        super(name);
        this.model=mod;
    }

    show(){
        return this.present()+ ' , it is  a '+ this.model;
    }

}

