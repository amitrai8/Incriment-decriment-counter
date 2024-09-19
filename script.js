let counter = document.getElementById('counter');


function increment(){
    value = parseInt(counter.innerHTML);
    value = value+1;
    counter.innerText  = value;
}

function decrement(){
    value = parseInt(counter.innerHTML);
    value = value-1;
    counter.innerText  = value;
}
