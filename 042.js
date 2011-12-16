require('./common/euler').run(function (input) {
    var triangles = {}, lcv = 1, current_triangle = 0, max_triangle = 2600; /* largest word value */
    while (current_triangle < max_triangle) triangles[current_triangle = (0.5 * lcv) * (++lcv)] = null;
    return input.replace(/\n/g, '').replace(/\"/g, '').split(',').filter(function (word) {
        return word.split('').reduce(function (acc, val) {return acc + val.charCodeAt(0) - 64;}, 0) in triangles;
    }).length;
});