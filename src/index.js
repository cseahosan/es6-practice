let name = 'Ahosan'

let email = 'mdahosanhabib@outlook.com'

const obj = {
    name,
    email,
    print(){
        console.log(this.name, this.email)
    }
}

obj.print();
console.dir(obj)