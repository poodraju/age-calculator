const fib1 = n =>{
    if (n < 2){
    return n
    }
    return fib1(n-1) + fib1(n-2)
    }
    for(let i =1; i< 10; i++){
    console.log(fib(i))}
    