function amountToCoins(amount, coins){
    let value = '';
    for(let i = 0; i < coins.length; i++){
       while((amount - coins[i]) >= 0){
        value = value.concat(coins[i].toString(), ', ');
        amount = amount - coins[i];
       }
    }
    return value;
}
console.log(amountToCoins(46, [25, 10, 5, 2, 1]))