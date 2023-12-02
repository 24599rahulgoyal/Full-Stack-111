function fun(){
    console.log('inside fun function');
}

function outer(){
    var x = 20;
    function inner() {
        var y = 'hello';
        console.log(y);
    }
    inner();
}

var x = outer;
// console.log(x);

//arrow function ()=>{}

var t = ()=>{
    console.log('inside arrow function');
}

t()