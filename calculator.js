let sum=document.getElementById('input');

function display(output){
    sum.value+=output;
}

// clear button
function clean(){
    sum.value='';
}

// equal button
function calculate(){
    sum.value=eval(sum.value);
}
