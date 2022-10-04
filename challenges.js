
// JS code to save each student details as an object into a new array. 
let studentNames = ['Peter', 'Tobi', 'Jane', 'Vicky']
let studentGender = ['male', 'male', 'female', 'female']
let studentAge = [24, 25, 25, 40]
let finalList = []


function list(){
  for(let i = 0; i < studentNames.length; i++){
    finalList.push({
      "name": studentNames[i],
      "gender": studentGender[i],
      "age":studentAge[i]
    })
  }
} 

// list()
// console.log(finalList) // print [{ name: 'Peter', gender: 'male', age: 24 }, { name: 'Tobi', gender: 'male', age: 25 }, { name: 'Jane', gender: 'female', age: 25 }, { name: 'Vicky', gender: 'female', age: 40 }]


// Function sum multiples of 3 and 5
function sumMultiple(num){
  let sum = 0;
  for(let i = 0; i <= num; i++){
    if(i % 3 === 0 || i % 5 === 0){
      sum = sum + i;
    }
  } 
  
  return sum;
}


console.log(sumMultiple(10)) // print 33



// Shows if a number is an even or odd
function showNumbers(limit){
  
  for(let i = 0; i < limit; i++){
    
    if(i === 0){
      console.log(i, "EVEN")
    }
    
    else if((i) % 2 === 0){
      console.log(i, "EVEN")
    }
    
    else{
      console.log(i, "ODD")
    }
  }
  
  return;
}

// showNumbers(6)

function showTruthy(anArr){
  let countTrue = 0;
  let countFalse = 0;
  
  for(let i = 0; i < anArr.length; i++){
    if(anArr[i]){
      countTrue = countTrue + 1;
    }
    
    else {
      countFalse = countFalse + 1;
    }
  }
  
  console.log("countTruthy", countTrue)
  console.log("countFalse", countFalse)
  //return countFalse;
}



// showTruthy([1, 2, 3, ""])


function showProperties(anObj){
  
  // loop thru the object
  for(let key in anObj){
    // display all properties that are of type string
    if(typeof(anObj[key]) === 'string'){
      console.log(anObj[key])
    }
  }
  	
  
}


let objectMovies ={
  title: "a",
  yearRelease: 2018,
  director: "b",
  rating: 4
}

showProperties(objectMovies) // "a" and "b"

function primeNumber(num){
  // iterate through the number 
  let result = []
  
  let i = 0;
  
  while(i < num){
    // check if i === 2: then push i to the array
    if(i === 2){
      result.push(i)
    }
    
    // if i mod 2 !== 0:
    if(i % 2 !== 0){
    	result.push(i)
  		// add i to the array  
    }
  	
    
    i++
  }
  	
  console.log(result)
}

primeNumber(10)



// Rapheal ASSignment
function printGrade(marks){
  // let grade; 

	if(marks > 90){
    return "AA";
  }
  
  if(marks > 80 && marks <= 90){
    return "AB";
  }
  
  if(marks > 70 && marks <= 80){
    return "BB";
  }
  
  if(marks > 60 && marks <= 70){
    return "BC";
  }
  
  if(marks > 50 && marks <= 60){
    return "CC";
  }
  
  if(marks > 40 && marks <= 50){
    return "CD";
  }
  
  if(marks > 30 && marks <= 40){
    return "DD";
  }
  
  //if(marks <= 30){
  //  return "FF";
  //}
  
  return "FF"
}



