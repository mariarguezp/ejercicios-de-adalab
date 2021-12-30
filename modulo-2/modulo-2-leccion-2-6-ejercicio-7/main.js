const userData = {}
const job = 'developer';

userData.firstName = 'Ana';
userData.lastName = 'López';
userData.age = 53;
userData.job = job;

console.log(userData);

userData.changeName = function() {
    this.firstName = 'Camila';
}

userData.increaseAge = function() {
    this.age++;
}

userData.changeName();
userData.increaseAge();
console.log(userData);