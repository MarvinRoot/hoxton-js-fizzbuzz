for(i=1; i<=1000; i++){
    if(i%3 && i%5 && i%7==0 && i%9==0){
        console.log("FizzBuzzFishBus")
    }else if(i%3 && i%5 && i%7==0){
        console.log("FizzBuzzFish");
    }else if(i%3==0 && i%5==0){
        console.log("FizzBuzz")
    }else if(i%3==0){
        console.log("Fizz")
    }else if(i%5==0){
        console.log("Buzz")
    }else{
        console.log(i);
    }
}