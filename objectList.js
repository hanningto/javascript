// Write a JavaScript program to list the properties of a JavaScript object.
// Sample object
// :
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
// Sample Output
// : name,sclass,rollno

var films = {
    movies: "Godzilla x Kong",
    series: "The Witcher",
    animation: "Inside Out",
    anime: "Naruto",
}
let print = []
let list = Object.keys(films)
for(let x = 0; x < list.length; x++){
    console.log(list[x]);
    print[x] = list[x]
    
}