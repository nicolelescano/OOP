function Cube(length, mass) {
    this.length = length;
    this.mass = mass;
    this.volume = function () {
        return (Math.pow(length, 3));

    }

    this.density = function () {
        return (mass / (Math.pow(length, 3)));

    }
    this.surfacearea = function () {


        return (Math.pow((length * 6), 2));
    }

}

var myCube = new Cube(4, 6);


function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthdate = birthdate;

    this.sayHi = function () {
        return




    }



}
