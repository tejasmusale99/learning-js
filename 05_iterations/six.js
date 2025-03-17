/******** Filter ******/

// it return new array 

const myNums = [1,2,3,4,5,6,7,8,9,10]

 const result = myNums.filter((num)=>{
 return num > 4
})

// console.log(result)

// the same thing we con do with the help of forEach 

const newNum =[]

myNums.forEach((num)=>{
if(num < 5){
newNum.push(num)
}
})
// console.log(newNum )


// let see more examples of filters 

const books = [
    {title: "Book One", genre: "History", publish:1986, edition:1996},
    {title: "Book Two", genre: "Science", publish:1985, edition:1986},
    {title: "Book Three", genre: "Math", publish:1999, edition:2005},
    {title: "Book Four", genre: "Friction", publish:2000, edition:2009},
    {title: "Book Five", genre: "Non-Friction", publish:2004, edition:2008},
    {title: "Book Six", genre: "History", publish:2002, edition:2004},
    {title: "Book Seven", genre: "Science", publish:2001, edition:2003},
    {title: "Book Eight", genre: "Friction", publish:1986, edition:1996},
    {title: "Book Nine", genre: "Math", publish:2007, edition:2009},
]

const myBooks = books.filter( (bk) => bk.genre === "History" )

// console.log(myBooks)

const searchBooks = books.filter( (bk) => {
    return bk.publish >= 2000 && bk.genre === "History"
})

// console.log(searchBooks)

const searchBooksResult = books.filter( (bk) => {
    return bk.publish >= 2000 || bk.genre === "History"
})

console.log(searchBooksResult)