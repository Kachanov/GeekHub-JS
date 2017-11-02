module.exports = function (request, response) {
    if(request.body.name.length< 3){
        response.sendFile("/Users/kachanov/Documents/GeekHub/Homeworks/GeekHub-JS/HW3/HTTP_Server/public/error.html");
    }else{
        response.sendFile("/Users/kachanov/Documents/GeekHub/Homeworks/GeekHub-JS/HW3/HTTP_Server/public/success.html");
    }
};