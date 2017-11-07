module.exports = function (request, response) {

    var user = request.body;
    var numbers = request.body.numbers;
    var letters = request.body.letters;
    var radiobuttons = request.body.type;
    

    checkEmptyInput();


    function checkEmptyInput() {
        if( (numbers !== "") && (letters !== "") ){
            response.json({
                id: 1,
                name: "+38" + user.numbers
            });
        }else{
            response.status(500).json({
                message: "Wrong type"
            });
        }
    }


    
    

    /*if (user.type === "1") {
        //response.sendFile("/Users/kachanov/Documents/GeekHub/Homeworks/GeekHub-JS/HW3/HTTP_Server/public/error.html");
        response.json({
            id: 1,
            name: "+38" + user.phone
        });
    } else {
       response.status(500).json({
           message: "Wrong type"
       });
    }*/
};

