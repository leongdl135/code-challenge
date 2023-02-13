// using for loop
var sum_to_n_a = function(n) {
    var sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum
};

// using recursion
var sum_to_n_b = function(n) {
    if (n == 0) {
        return n
    }
    return n + sum_to_n_b(n-1)

};

// using math formula
var sum_to_n_c = function(n) {
    return (n * (n + 1)) / 2
};
