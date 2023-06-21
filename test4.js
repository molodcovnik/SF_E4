function ElectricApp(name, watt) {
    this. name = name,
    this.watt = watt
}

ElectricApp.prototype.getOnApp = function() {
    console.log(`Прибор ${this.name} ВКЛ\nПотребление ${this.watt} Вт`)
}


function LightingLampForComputer(name, watt, ligthing_type) {
    this. name = name,
    this.watt = watt,
    this.ligthing_type = ligthing_type
}

function Laptop(name, watt, weight) {
    this. name = name,
    this.watt = watt,
    this.weight = weight
}

LightingLampForComputer.prototype = new ElectricApp()
Laptop.prototype = new ElectricApp()


const lamp = new LightingLampForComputer('Iliyicha', 60, 'yellow');
const eco_lamp = new LightingLampForComputer('Eco', 20, 'white');
const apple = new Laptop('MacBook', 500, 700);


apple.getOnApp()