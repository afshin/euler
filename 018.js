require('./common/euler').run(function (input_file) {
    var data = input_file.split('\n').map(function (line) {
            return line.split(' ').map(function (item) {return +item;});
        }), largest_routes = {}, total_levels = data.length - 1,
        largest_route = function (starting_point) {
            var level = starting_point[0], index = starting_point[1], value = data[level][index],
                route = [level, index].join('-'), left, right;
            if (level === total_levels) return largest_routes[route] = [value];
            if (route in largest_routes) return largest_routes[route];
            if (level === total_levels - 1)
                return largest_routes[route] = (value + data[level + 1][index]) > (value + data[level + 1][index + 1]) ? 
                    [value, data[level + 1][index]] : [value, data[level + 1][index + 1]];
            left = [value].concat(largest_route([level + 1, index]));
            right = [value].concat(largest_route([level + 1, index + 1]));
            return largest_routes[route] = left.sum() > right.sum() ? left : right;
        };
    return largest_route([0, 0]).sum();
});