var square = x => x*x;

console.log(square(9));

var user={
  name: 'Muhammed Salman',
  sayHello: ()=>{
    console.log(`Hello. I am ${this.name}`);
  },
  sayHelloAlt (){
    console.log(arguments);
    console.log(`Hello. I am ${this.name}`)
  }
}

user.sayHello();
user.sayHelloAlt(1,2,3);
