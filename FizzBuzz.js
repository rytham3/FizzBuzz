/*

FizzBuzz
Print numbers 1 to 100.

If divisible by 3 → print Fizz

If divisible by 5 → print Buzz

If divisible by both → print FizzBuzz



*/





for(let i=0; i<=100; i++){

    if(i / 3){
        console.log("Fizz");
    }
    if(i / 5){
        console.log("Buzz");
    }
    if(i/3 || i/5){
        console.log("FizzBuzz");
    }

    console.log(i);
}