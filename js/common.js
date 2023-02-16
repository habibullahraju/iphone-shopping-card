function ProductQuantityUpdate(isIncrease, inputFieldId) {
    const caseInputField = document.getElementById(inputFieldId);
    const caseValue = caseInputField.value;
    const caseValueNumber = parseInt(caseValue);
    if (isIncrease === true) {
         return caseInputField.value = caseValueNumber + 1;
    }
    else{
        return  caseInputField.value = caseValueNumber -1;
    }
    
}
function setTextElementById(quantity, priceTotalId,setPrice) {
    const quantityMultiply = quantity * setPrice;
    document.getElementById(priceTotalId).innerText = quantityMultiply;
    
    return parseFloat(quantityMultiply);
}

function productTotal(phoneTotal, caseTotal) {
    const phoneSum =phoneTotal + caseTotal;
    
    document.getElementById('sub-total').innerText = phoneSum;
    

}
function setTextCaseTotalById() {
    const caseTotalElement  = document.getElementById('case-total').innerText;
    const phoneTotalElement = document.getElementById('phone-total').innerText;
    const phoneTotalElementValue = parseFloat(phoneTotalElement);
    const caseTotalElementValue  = parseFloat(caseTotalElement);
    const subTotalElement = document.getElementById('sub-total').innerText  = caseTotalElementValue + phoneTotalElementValue;
    const taxAmount = (subTotalElement * 0.1).toFixed(2);
    const taxAmountValue = parseFloat(taxAmount);
    const taxAmountDisplay = document.getElementById('tax-amount').innerText = taxAmountValue;
    const finalAmount = (phoneTotalElementValue + caseTotalElementValue) + taxAmountValue;
    document.getElementById('final-total').innerText = finalAmount;
    
}
// function sumCaseNphone(value) {
//    const phoneSum = value;
//    const caseSum =  value;
//    const allSum = phoneSum + caseSum;
//    console.log(allSum);
// }
