require('./common/euler').run(function (input) {
    var data = input.split('\n').map(function (line) {return line.split(' ').map(function (item) {return +item;});}),
        largest_routes = {}, last_level = data.length - 1,
        largest_route = function (point) {
            var level = point[0], index = point[1], value = data[level][index],
                route = point.join('-'), left, right, next = level + 1;
            if (level === last_level) return largest_routes[route] = [value];
            if (route in largest_routes) return largest_routes[route];
            if (level === last_level - 1)
                return largest_routes[route] = (value + data[next][index]) > (value + data[next][index + 1]) ? 
                    [value, data[next][index]] : [value, data[next][index + 1]];
            left = [value].concat(largest_route([level + 1, index]));
            right = [value].concat(largest_route([level + 1, index + 1]));
            return largest_routes[route] = left.sum() > right.sum() ? left : right;
        };
    return largest_route([0, 0]).sum();
});