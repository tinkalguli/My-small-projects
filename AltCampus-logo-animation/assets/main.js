
// This script is only for the calculation of the stroke-dasharray

const a = document.querySelector('.line');
const alt = document.querySelectorAll('.alt path');
const camp = document.querySelectorAll('.campus path');

console.log(`line is ${a.getTotalLength()}`);

for(let i = 0; i < alt.length; i++ ){
    console.log(`alt ${i} is ${alt[i].getTotalLength()}`);
}

for(let i=0; i<camp.length; i++){
    console.log(`campus ${i} is ${camp[i].getTotalLength()}`);
}