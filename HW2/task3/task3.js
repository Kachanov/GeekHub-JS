function getSumOfParameters() {
    var sum = 0;

    for(i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }

    return sum;
}

alert(getSumOfParameters(1, 2, 3, 4, "hello"));