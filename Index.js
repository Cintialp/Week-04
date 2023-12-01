alert('Welcome')
//1 .Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
var ages = [ 3, 9, 23, 64, 2, 8, 28, 93]


//1.a - Programmatically subtract the value of the first element in the array from the value in the last element of the array.
//Do not use numbers to reference the last element, find it programmatically.ages[7] - ages[0] is not allowed!

var last = ages[ages.length - 1]

//1.b - Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).

var ages = [ 3, 9, 23, 64, 2, 8, 28, 93]
ages.push[5];//putting a new age

//1.c - Use a loop to iterate through the array and calculate the average age.
function average(array) {
    var sum = 0;
    for(var i = 0; i < array.length;i++){
        sum += array[i];
    }
    return sum / array.length;
}



//2.Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
//2.a - Use a loop to iterate through the array and calculate the average number of letters per name.
//2.b - Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];


let totalLetters = 0;
for (let i = 0; i < names.length; i++) {
  totalLetters += names[i].length; // Add the length of each name to the totalLetters variable.
}
let averageLetters = totalLetters / names.length;
console.log("Average letters per name:", averageLetters);

let concatenatedNames = "";
for (let i = 0; i < names.length; i++) {
  concatenatedNames += names[i]; // Concatenate each name
  if (i !== names.length - 1) {
    concatenatedNames += " "; // 
  }
}
console.log("Concatenated names:", concatenatedNames);
//3.How do you access the last element of any array?
var ages = [ 3, 9, 23, 64, 2, 8, 28, 93]
var ages  = ages[ages.length - 1];
//4. How do you access the first element of any array?
let firstNamenames = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let name = names[0];
//5.Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
//For example:

//let names = ["Kelly", "Sam", "Kate"];    // starting with this array
//let nameLengths = [5, 3, 4];             // create a new array
let namesArray = ["Kelly", "Sam", "Kate"]; 

let nameLengths = [];

for(var i=0;i<namesArray.length;i++)
	nameLengths.push(namesArray[i].length); 

console.log('namesArray: ',namesArray);
console.log('nameLengths: ',nameLengths);
//6.Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
let totalLengths = 0;

for(var i=0;i<nameLengths.length;i++)
	totalLengths += nameLengths[i];

console.log('Sum of all elements: ',totalLengths);

//7.Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').
func = (word, n) => {

    var concat = ""
    
    while (n != 0) {
    
    
    concat += word
    
    n--
    
    }
    
    return concat
    
    }
    
    console.log(func("Hello", 3))

//8.Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.
function fullName(firstName,lastName) {
    fullName =("Kelly" , "Silva");
    return 'Kelly Silva';
}

function fullName(firstName,lastName){
    fullName = ("Keegan" , "Smith");
    return'Keegan Smith';
}
    

//9.Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
function greaterThan100(array)
{

arr_len = array.length; 
count = 0; 

for(i=0; i<arr_len; i++)
{
if(array[i] > 100) 
{
count = count+1; 
}
}

return count; 
}
console.log(greaterThan100([22, 67, 125, 345, 12]))


//10.Write a function that takes an array of numbers and returns the average of all the elements in the array.

numbers = [5, 10, 15, 20, 25]
avg = average(numbers)
console.log(avg);

//11.Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
//let(arr1, arr2)
  //      return False 
    //avg1 = sum(arr1) / len(arr1)
    //avg2 = sum(arr2) / len(arr2)
    //return avg1 > avg2

//arr1 = [1, 2, 3, 4, 5]
//arr2 = [6, 7, 8, 9, 10]
//console.log(compare_averages(arr1, arr2))  

//


//12.Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
function willBuyDrink(isHotOutside , moneyInPocket){
    if (isHotOutside && moneyInPocket>10.5){
     return true;
    }
    else{
       return false;
    }
 }
  
 let a=willBuyDrink(true,12);
 console.log(a);
 


//13.Create a function of your own that solves a problem. In comments, write what the function does and why you created it

function greeting(name) {
    return "Hello " + name + "!";
    }
    
    var myName = prompt("What's your name?");
    alert(greeting(myName));
    //ask the user name with an alert and when the user says the name the data goes back into the system saying "Hello" + name that the user put in there