function applyCoupon(total, coupon){
    if(coupon === "NEWUSER10"){
        return total - (total * 0.10);
    } else {
        return total;       // or return a message like "Invalid coupon"
    }
}
console.log(applyCoupon(500, "NEWUSER10")); // 450
console.log(applyCoupon(500, "OLDUSER"));   // 500
