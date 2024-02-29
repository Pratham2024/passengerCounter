let countEl= document.getElementById("count-el");
let saveEl=document.getElementById("save-el");

let count=0;

function increment(){
    count+=1;
    countEl.innerHTML=count;
    console.log(count);
}

function save(){
    
    saveEl.innerHTML+=count+" - ";
    count=0;
    countEl.innerHTML=count;
    
}
