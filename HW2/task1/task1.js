var count = 0;
function getCountOfParameters() {
    count = arguments.length;
    alert(count);
}

getCountOfParameters("hello", "world", 1, 2, 3);