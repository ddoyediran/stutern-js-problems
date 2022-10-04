
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
