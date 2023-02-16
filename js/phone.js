document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const caseValue = ProductQuantityUpdate(true, 'phone-input-field');
    const phoneTotal = setTextElementById(caseValue,'phone-total',1219)
    setTextCaseTotalById();
   

});
document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const caseValue = ProductQuantityUpdate(false, 'phone-input-field');
    const phoneTotal = setTextElementById(caseValue,'phone-total',1219)
    setTextCaseTotalById();
    
});









