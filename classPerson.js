class Person {
    constructor(name) {
        this.name =  name;
        // this.fn = this.fn.bind(this); 
    }
    // fn () {
    //     console.log(this.name);
    // }
    fn = () => {
        console.log(this.name);
    }
}

const person = new Person("Mr.X");
const copyFn = person.fn;
copyFn();

