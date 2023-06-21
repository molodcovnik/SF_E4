function Candy(name) {
    this.tasty = 'delisious',
    this.name = name
}

Candy.prototype.getWeight = function(weight) {
    console.log(`Weight is ${weight} g`)
}

function ChocoCandy(name, choco) {
    this.name = name
    this.choco = choco
}

ChocoCandy.prototype = new Candy()
ChocoCandy.prototype.getWeight = function(weight) {
    console.log(`Weight is ${weight} gramm`)
}


const twix = new Candy('twix');

twix.getWeight(47)

console.log(twix)