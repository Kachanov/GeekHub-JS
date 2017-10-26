/*
(function (a) {
    console.log(a(function (b) {
        return b + b; })); })    (function (c) { return c(2) * c(3); });
*/


function foo(fun) {
    return fun(2) * fun(3);
}

function bar(fun) {
    return fun + fun;
}

function xyz(fun1, fun2) {
    return console.log(fun1(fun2));
}

xyz(foo, bar);