//block1();

var age=10;

add(20,30);//function hoisting


function block1()
{
    add(10,20);
    
}
function add(a, b)
{
    console.log("a : "+a);
    console.log("b : "+b);
    console.log("c : "+ (a+b));
}

