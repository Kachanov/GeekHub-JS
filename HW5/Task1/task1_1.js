Array.prototype.filterWhere = function (dataArray) {
  var newArray = [];

  for(var i = 0; i < this.length; i++){
      for(var key in dataArray){
          //if(this[i][key].match(dataArray[key])){ 
          if(dataArray[key].test(this[i][key])){
              newArray.push(this[i]);
          }
      }
  }

  return newArray;
};


var users = [{id: 1, name: "Max", age: 18},
             {id: 2, name: "Bob", age: 22},
             {id: 3, name: "Nick", age: 18}];


var filterRegExp = users.filterWhere({name: /^Max$/i});


console.log(filterRegExp);