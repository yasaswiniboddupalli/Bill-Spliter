function validate(bill){
    let temp = bill;
    const test_var=/^[0-9]+$/;
    if (test_var.test(temp) && temp > 0){
        return true;
    }else{
        return false;
    }

}
//export{validate};
module.exports = validate;
