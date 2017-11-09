function getArrayWithUpperCase(string) {
    var initialString = string;

    var arrayOfStrings = initialString.split(" ");
    var arrayUpperCase = [];

    for(var i = 0; i < arrayOfStrings.length; i++){
        var regularExpression = /[A-Z]+/;

        if(arrayOfStrings[i].match(regularExpression)){
            arrayUpperCase.push(arrayOfStrings[i]);
        }
    }

    console.log(arrayUpperCase);
}

getArrayWithUpperCase("accept acceptCharset accessKey action allowFullScreen allowTransparency alt async autoComplete autoFocus");
