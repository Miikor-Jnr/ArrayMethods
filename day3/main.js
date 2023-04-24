let myArr = [1,3,4,5]

// myArr.push(20)
// myArr.push('Barilelo')
// myArr.unshift(50)

// myArr.pop()

// myArr.shift()
// myArr.splice(2, 1)
// console.log(myArr)


//Array slicing is used to get a copy of part or the whole of an array


// console.log(myArr.slice(2,4))




// 1. loop through the array to see if there is any department that does not contain the letter 'O' and tell me how many
// 2. loop throught the array and tell me how many characters each deparment name have
// 3. Tell me the department with the highest number of characters
// 4. Add two more departments to the 4th index of this array
// 5. Remove Fisheries from the array
// 6. Loop through the array and return all elements with 9 characters
// 7. Create an array that contains the same elements as the departments array in reversed order

// const allDepartments = departments.length

// const containsO = departments.filter((item) => item.includes('o'))
// const noO = allDepartments-containsO.length
// console.log(noO)

// departments.forEach((item) => console.log(`${item} has ${item.length} characters`))

// const departmentArray = departments.map((item) => item.length)
// console.log(departmentArray)

// console.log(departments[2])

//departments.splice(4,0,'biochem','english')
//console.log(departments)
//departments.splice(1,1)
//console.log(departments)

//const allDepartments = departments.length
//const contains9Character = departments.filter((item)=>item.length === 11) 
//console.log(contains9Character)

//console.log(departments.reverse())

const departments = ['Economics', 'Fisheries', 'Microbiology', 'Chemistry', 'Mathematics', 'Physics', 'Computer']
const newArray = []

departments.forEach((item)=> newArray.unshift(item))

console.log(newArray)