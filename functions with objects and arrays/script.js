// shopping carts with functions
// rest operators in function
//  rest operators declare in that manner ...variable name

function calculateCartPrice (val1, val2, ...num1){

    return num1;

}


console.log(calculateCartPrice(200, 400, 500, 2000));


// objects with functions


const user ={

    username: "Fawad",
    price: 199 
}


function handleObject(anyobject){


    console.log(`User is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)


handleObject({
    username: "Kashif",
    price: 399
})



const myNewArray = [200, 400, 600, 2000];


function myArray(NewArray){
    console.log(NewArray)
    return NewArray[1];
}


myArray(myNewArray);
console.log(myArray([300, 600, 900, 1200, 1500]));