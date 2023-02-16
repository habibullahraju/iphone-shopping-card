document.getElementById('btn-case-plus').addEventListener('click', function () {
    const caseValue = ProductQuantityUpdate(true, 'case-input-field');
    const caseTotal = setTextElementById(caseValue,'case-total', 59); 

    setTextCaseTotalById();
   
   
});
document.getElementById('btn-case-minus').addEventListener('click', function(){
    const caseValue = ProductQuantityUpdate(false, 'case-input-field');
    const caseTotal = setTextElementById(caseValue,'case-total',59);
    
    setTextCaseTotalById();

});