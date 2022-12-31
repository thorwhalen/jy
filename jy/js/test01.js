
// Straight function definition
function foo(a, b="hello", c= 3) {
    return a + b.length * c
}

// Straight function definition
function bar(green, eggs = 'food', and= true, ham= 4) {
    if (and) return eggs.length * ham
}

// global callable variable
add_one = function (x) {
    return x + 1
}

let with_let = function (x) {
    return x + 2
}

const with_const = function (x) {
    return x + 2
}

// function assigned to a nested property
func.assigned.to.nested.prop = function (x) {
    return x + 3
}

// function nested in some other function, assigned to a variable
var obj = (function (exports) {
    function bar(name) {
        return name + "__"
    }
})
