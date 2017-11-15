Array.prototype.filterWhere = function (dataArray) {
    var newArray = [];

    for(var i = 0; i < this.length; i++){
        for(var key in this[i]){
            if(this[i][key] === dataArray[key]){
                newArray.push(this[i]);
            }
        }
    }

    return newArray;
};

var users = [{id: 1, name: "Max", age: 18},
             {id: 2, name: "Bob", age: 22},
             {id: 3, name: "Nick", age: 18}];

var teenagers = users.filterWhere({age: 18});
console.log(teenagers);

