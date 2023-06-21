let myCar = new Object();

myCar.make = 'Kia';
myCar.model = 'Optima';
myCar.year = 2020;
myCar.production = 'Russia';


const secondCar = Object.create(myCar);

secondCar.color = 'White';
secondCar.mileage = 50000;


let clientIvanov = new Object();

clientIvanov.name = 'Ivan';
clientIvanov.gender = 'male';
clientIvanov.age = 18;


function listKeyValue(theObject) {
    for (let key in theObject) {
        if (theObject.hasOwnProperty(key)) {
            v = theObject[key];
            console.log(`${key} - ${v}`)
        }   
    }
}

listKeyValue(clientIvanov);
