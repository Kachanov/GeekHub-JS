var count = 0;

function getCountOfStringParameters() {
    for(i = 0; i < arguments.length; i++){
        if(typeof(arguments[i]) === "string"){
            count++;
        }
    }
    return count;
}

alert( getCountOfStringParameters("hello", "world", 1, 2, 3) );