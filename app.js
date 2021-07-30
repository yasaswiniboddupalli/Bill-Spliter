//import {validate} from "./validate.js";
const bill=document.querySelector('#bill');
const tips=document.querySelectorAll('input[name="selectTip"]');
const custom = document.querySelector('.custom');
const people=document.querySelector('#people');
const error=document.querySelector('.billerror');

import validate from './validate';
 function validate1(bill){
    let temp = bill;
    const test_var=/^[0-9]+$/;
    if (test_var.test(temp) && temp > 0){
        return true;
    }else{
        return false;
    }
} 

function bill_check(bill){
    const check = validate(bill);
    if(check){
        error.textContent="";
        return bill;
    }
    else{
        error.textContent="bill must be greater than Zero";
        error.style.color="red";
        error.style.fontSize="18px"; 
        return "error"; 
    }
}


//getting bill value
bill.addEventListener('input',e=>{
    bill_val=bill_check(e.target.value);
    console.log('the vaue'+bill_val);
});

//getting tip value
tips.forEach(tip=>{
    tip.addEventListener('click',e=>{
        console.log(e.target.value);
    });
});

//getting custom value
custom.addEventListener('input',e=>{
    console.log(e.target.value);
});


//getting people value
people.addEventListener('input',e=>{
    console.log(e.target.value);
});

