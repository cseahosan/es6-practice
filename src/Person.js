class Person {
    // we can not declare property here like other language
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    print () {
        console.log(`Name ${this.name} Email: ${this.name}`)
    }

}

export default Person;