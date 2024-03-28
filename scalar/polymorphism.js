class Animal {
    sound(){
        console.log('Every animal sounds different')
    }

}
class dog{
    sound(){
        console.log('dog barks')
    }
}

class cat{
    sound(){
        console.log('cat meows')
    }
}

let Animal1 = new Animal()
let tommy = new dog()
let percy = new cat()

Animal1.sound();
tommy.sound()
percy.sound()
