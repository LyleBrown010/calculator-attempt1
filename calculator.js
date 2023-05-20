let sum=document.getElementById('input');

function display(output){
    sum.value+=output;
}

function clean(){
    sum.value='';
}

function calculate(){
    sum.value=eval(sum.value);
}
