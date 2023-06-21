class ElectricApp {
    constructor(name, watt) {
        this.name = name;
        this.watt = watt;
    }

    getOnApp() {
        return `Прибор ${this.name} ВКЛ\nПотребление ${this.watt} Вт`
    }

}


class LightingLampForComputer extends ElectricApp {
    constructor(name, watt, ligthing_type) {
        super(name);
        this.watt = watt;
        this.ligthing_type = ligthing_type;
    }
}


class Laptop extends ElectricApp{
    constructor(name, watt, weight) {
        super(name);
        this.watt = watt;
        this.weight = weight;
    }
}


const lamp = new LightingLampForComputer('Iliyicha', 60, 'yellow');
const eco_lamp = new LightingLampForComputer('Eco', 20, 'white');
const apple = new Laptop('MacBook', 500, 700);

console.log(lamp.getOnApp())
console.log(eco_lamp.getOnApp())
console.log(apple.getOnApp())