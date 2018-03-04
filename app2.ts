class Animal{
    public name:string;
    public mData:string[];
    constructor(n:string){
        this.name = n;
    }
    display():void{
        console.log("Animal name is: "+this.name);
    }

}
class Dog extends Animal{
    display():void{
        super.display();
        console.log("Dog name is: "+this.name);
    }

}

var obj = new Dog("Samock");
obj.display();


//static keyword

class Windows{
    static width:number;
    static height:number;
    static showWidth():void{
        console.log("Width: "+Windows.width);
    }
    static showHeight():void{
        console.log("Width: "+Windows.height);
    }

}

Windows.width = 1024;
Windows.height = 768
Windows.showWidth(); 
Windows.showHeight(); 


//Loop for
obj.mData = ["red","black","yellow","green"];

for(let i = 1;i<obj.mData.length;i++){
    console.log("I: "+obj.mData[i]);
}

obj.mData.forEach((e, index) =>{
    console.log(`${index}:" ${e}`);
})