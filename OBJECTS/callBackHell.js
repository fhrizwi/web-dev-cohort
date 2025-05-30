const cart=["Car","Mobile","Laptop"]
api.createOrder(cart, function(){
    api.payment(function(){
        api.showSummary(function(){
            api.showRemainingBalance()
        })
    })
})