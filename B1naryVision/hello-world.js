var HelloWorld = function () {};

HelloWorld.prototype.hello = function (input) {
    if (input === '' || input === null) {
        var input = 'World'
    }

    var output = 'Hello, ' + input + '!';

    return output;
}

module.exports = HelloWorld;