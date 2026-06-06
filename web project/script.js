let expression = document.querySelector("#expression");
let output = document.querySelector("#output");

function addValue(value){

    if(expression.innerHTML === "0"){
        expression.innerHTML = value;
    }
    else{
        expression.innerHTML += value;
    }

}

function calculate(){

    try{
        output.innerHTML = eval(expression.innerHTML);
    }
    catch{
        output.innerHTML = "Error";
    }

}

function deleteValue(){

    expression.innerHTML = expression.innerHTML.slice(0,-1);

    if(expression.innerHTML === ""){
        expression.innerHTML = "0";
    }

}

function clearValue(){

    expression.innerHTML = "0";
    output.innerHTML = "0";

}