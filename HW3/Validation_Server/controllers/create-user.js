module.exports = function (request, response) {

    var user = request.body;
    if (user.type === "3") {
        //response.sendFile("/Users/kachanov/Documents/GeekHub/Homeworks/GeekHub-JS/HW3/HTTP_Server/public/error.html");
        response.json({
            id: 1,
            name: "+38" + user.phone
        })
    } else {
       response.status(500).json({
           message: "Wrong type"
       });
    }
};