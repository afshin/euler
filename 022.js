require('./common/euler').run(function (input) {
    var name_score = function (name, index) {
        return name.split('').map(function (c) {return c.charCodeAt(0) - 64;}).sum() * index;
    };
    var data = input.replace(/\"/g, '').split(',').sort();
    return data.map(function (name, index) {return name_score(name, index + 1);}).sum();
});