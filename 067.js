require('./common/euler').run(function (input_file) {
    var data = input_file.split('\n').map(function (line) {
            return line.split(' ').map(function (item) {return +item;});
        }), largest_routes = {}, total_levels = data.length - 1,
        largest_route = function (starting_point) {
            var level = starting_point[0], index = starting_point[1], value = data[level][index], answer;
            if (level === total_levels){
                largest_routes[[level, index].join('-')] = [value];
                return [value];
            };
            if ([level, index].join('-') in largest_routes) return largest_routes[[level, index].join('-')];
            if (level === total_levels - 1){
                answer = (value + data[level + 1][index]) > (value + data[level + 1][index + 1]) ? 
                    [value, data[level + 1][index]] : [value, data[level + 1][index + 1]];
                largest_routes[[level, index].join('-')] = answer;
                return answer;
            };
            var temp_1, temp_2;
            temp_1 = [value].concat(largest_route([level + 1, index]));
            temp_2 = [value].concat(largest_route([level + 1, index + 1]));
            answer = temp_1.sum() > temp_2.sum() ? temp_1 : temp_2;
            largest_routes[[level, index].join('-')] = answer;
            return answer
        };
    return largest_route([0, 0]).sum();
});