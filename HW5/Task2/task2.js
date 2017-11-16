SuperArray.prototype = Object.create(Array.prototype);

function SuperArray() {

    this.filterWhere = function (dataArray) {
        var newSuperArray = [];

        for (var i = 0; i < this.length; i++) {
            for (var key in this[i]) {
                if (this[i][key] === dataArray[key]) {
                    newSuperArray.push(this[i]);
                }
            }
        }

        return newSuperArray;
    }

}


var users = [{id: 1, name: "Max", age: 18},
    {id: 2, name: "Bob", age: 22},
    {id: 3, name: "Nick", age: 18}];


var superUsers = new SuperArray();

superUsers.push({id: 1, name: "Max", age: 18},
    {id: 2, name: "Bob", age: 22},
    {id: 3, name: "Nick", age: 18});

console.log(superUsers.filterWhere({age: 18}));
console.log(users.filterWhere);