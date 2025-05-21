function getDeliveryCharges(totalAmount){
    if(totalAmount>=500){
        return 0
    }else{
        return 50
    }
}
console.log( getDeliveryCharges(499))