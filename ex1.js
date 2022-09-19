const { users} = require('./mock')


//Write a function that takes an array of numbers and returns the product of all the numbers:

function product(num){
    return num.reduce((acumulador, valorAtual) => acumulador * valorAtual);
}
console.log('01:', product([1,2,3]))

//Write a function that takes an array of words and returns a sentence (single string) with all the element strings concatenated together:

function singleString(words){
    return words.reduce((acc, curr, index) => {
        return acc + curr.toString()
    })
}

console.log('02:', singleString(['a','b','c']))


//Write a function that takes an array of users and returns an object with keys that are the users' names and values that are their email addresses:


function addIndex(users){
    let values= [];
    values.push(users.reduce( (acc, curr, index) =>{
        const id = index + 1
        acc.push({...curr, id })
        return acc 
    }, []))
    return values
}
console.log('03:', addIndex(users))