const bill=document.querySelector('#bill');
//const tip = document.querySelector('input[name="selectTip"]:checked');
bill.addEventListener('input',()=>{
    console.log(bill.value);
});

//console.log(document.querySelectorAll('input[name="selectTip"]'));
//console.log(document.querySelector('.tipButtons'));

const tips=document.querySelectorAll('input[name="selectTip"]');
//console.log(tips);
tips.forEach(tip=>{
    tip.addEventListener('click',e=>{
        console.log(e.target.value);
    });
});
