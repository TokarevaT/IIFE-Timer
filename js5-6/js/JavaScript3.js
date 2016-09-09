////ДЗ Closure 2


Function.prototype.bind = function (func, context) {
    return function () { 
                return func.apply(context, arguments);
            };
}


var HelloPage = {
    name: 'GoIT',
    init: function () {
        console.log('Hello, ' + this.name);
    }
}


window.onload = HelloPage.init.bind(HelloPage.init, HelloPage);

//Closure
(function (count) {
    if (count < 5) {
        console.log(count);
        var caller = arguments.callee;
        window.setTimeout(function () {
            caller(count + 1);
        }, 1000);
    }
})(0);