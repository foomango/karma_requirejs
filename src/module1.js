define([], function () {
    var returnedModule = function () {
        var _name = 'module1_name';
        this.getName = function () {
            return _name;
        };
    };

    return returnedModule;
});
