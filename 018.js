require('./common/euler').run(function (input_file) {
    var data = input_file.split('\n').map(function (line) {
            return line.split(' ').map(function (item) {return +item;});
        }), largest_routes = {}, total_levels = data.length - 1,
        largest_route = function (starting_point) {
            var level = starting_point[0], index = starting_point[1], value = data[level][index],
                route = [level, index].join('-'), temp_1, temp_2;
            if (level === total_levels) return largest_routes[route] = [value];
            if (route in largest_routes) return largest_routes[route];
            if (level === total_levels - 1)
                return largest_routes[route] = (value + data[level + 1][index]) > (value + data[level + 1][index + 1]) ? 
                    [value, data[level + 1][index]] : [value, data[level + 1][index + 1]];
            temp_1 = [value].concat(largest_route([level + 1, index]));
            temp_2 = [value].concat(largest_route([level + 1, index + 1]));
            return largest_routes[route] = temp_1.sum() > temp_2.sum() ? temp_1 : temp_2;
        };
    return largest_route([0, 0]).sum();
});