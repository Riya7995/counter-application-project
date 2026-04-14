let countValue = document.querySelector("#countValue");
let incrBtn = document.querySelector("#incr");
let decrBtn = document.querySelector("#decr");
let resetBtn = document.querySelector("#reset");

let count = 0;

incrBtn.addEventListener("click",()=>{
    count++;
    countValue.innerHTML=count;
})
decrBtn.addEventListener("click",()=>{
    count--;
    countValue.innerHTML=count;
})

resetBtn.addEventListener("click",()=>{
    count = 0;
    countValue.innerHTML=count;
})