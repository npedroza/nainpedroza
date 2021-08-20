var isInt = function(n) { return parseInt(n) === n };

function dataType(array){
    for (let i = 0; i < arguments.length; i++) {
        if(typeof(arguments[i]) == 'number' && !isInt(arguments[i])){
          console.log('float');
        }
        else if(typeof(arguments[i])=='object' && arguments[i].length>0){
            console.log('array');
        }
        else{ 
            console.log(typeof(arguments[i]));
        }
  }
}

dataType(1,6.2123123,"pi*2",[function(){}, 1], {}, function () {}); // number, float, string, array, object, function
