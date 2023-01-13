class Person{
    constructor (name){
        this.name = name
    }
    SayMyName(){
        return `my  name is ${this.name}`
    }
}
module.exports = {Person}