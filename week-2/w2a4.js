alert("JS linked ");

// Assignment 1: Function and Array
function max(...numbers){
	var max = numbers[0];
	for(var i = 1; i < numbers.length; i++){
		if(numbers[i] > max){
			max = numbers[i];
		}}
	return max;
}
max(1, 2, 4, 5); // result to 5
max(5, 2, 7, 1, 6); // result to 7

// Assignment 2: Object
function calculate(args){
    let result;
    if(args.op === "+"){
        result = args.n1 + args.n2;
    } else if (args.op === "-") {
        result = args.n1 - args.n2;
    } else {
        result = "Not supported";
    }
    return result;
}
// Try to call calculate function correctly 
/*For example, if we have an add function like this: function add(args){
    return args.n1+args.n2; }
    We can call it by passing an object created by JSON literal: add({n1:3, n2:4});
    And, you should find another way to create a proper object.*/

let literalObject = {
    op: '+',
    n1: 1,
    n2: 2
};

calculate(literalObject);

function createObject(a, b, c) {
    this.op = a;
    this.n1 = b;
    this.n2 = c;
}
let createObject1 = new createObject("-", 3, 4);

calculate(createObject1);



// Assignment 3: Function, Array, and Object
function avg(data){
    let sum = 0;
    for (let i = 0; i < data.products.length; i++) {
        sum += data.products[i].price;
    }
    let avgPrice = sum / data.size;
    return avgPrice;
}
avg({
    size:3, products:[
    {
    name:"Product 1",
    price:100 },
    {
    name:"Product 2",
    price:700 },
    {
    name:"Product 3",
    price:250 }
    ]
    }); // show the average price of all products



// Assignment 4
// Request 1: Click to Change Text
let h1 = document.querySelector("h1");
h1.addEventListener("click", function(){
	this.textContent = "Have a Good Time!";
});

// Request 2: Click to Show/Close Menu
let myTopNav = document.querySelector("#myTopNav");
let icon = document.querySelector(".icon");
function toggleMenu(){
    if (myTopNav.className === "topNav") {
        myTopNav.className += " open";
        icon.textContent = "X";
    } else {
        myTopNav.className = "topNav";
        icon.textContent = "☰";
    }
};

// Request 3: Click to Show More Content Boxes
let button = document.querySelector("button");
let container2 = document.querySelector(".container2");
button.addEventListener("click", function(){
    container2.style.display = "flex";
});

// Assignment 5: (Advanced Optional)
function twoSum(nums, target){
    let result = [];
    for (let i = 0; i < nums.length, i++) {
        for (let j = 0; j < nums.length, j++) {
            if (nums[i] + nums[j] === target) {
                result.push(i);
                result.push(j);
            }
        }
    }
  return result;
}
/*
For example:
twoSum([2, 7, 11, 15], 9); Should returns:
[0, 1] Because:
nums[0]+nums[1] is 9
*/