const num = 41
for (let i = 2; i <= num - 1; i++) {
    if (num % i == 0) {
        console.log("Its a Composite Number")
        break;
    }
}