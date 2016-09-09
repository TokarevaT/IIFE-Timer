//ДЗ Prototype
function Factory(init, animals) {
    this.init = 'type';
    this.animals = ['dog', 'cat'];
};
function Dog() {
    this.say = alert('I am a dog!');
    __proto__: Factory;
};
Dog();

function Cat(){
    this.say = alert('I am a cat!');
    __proto__: Factory;
};
Cat();

var newFactory = new Factory;
var newDog = new Dog();
var newCat = new Cat();
console.log('newDog =', newDog);
console.log('newCat =', newCat);


//ДЗ № Closure 3
function FunctionArray(count) {
    var arr = [], i;
    for (i = 0; i < count; i++) {
        (function (index) {
            arr.push(function () { alert(index) });
        }(i));
    }
    return arr;
}
//OR
function generateArr() {
    var arr = [];
    for (var i = 0; i < count; i++) {
        arr[i] = makeFunction(i);
    }
    return arr;
}

function makeFunction(i) {
    return function () {
        alert(i);
    }
}


