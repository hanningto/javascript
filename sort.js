// Write a JavaScript program to sort an array of JavaScript objects.
// Sample Object :

var library1 = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    libraryID: 1254,
  },
  {
    title: "Walter Isaacson",
    author: "Steve Jobs",
    libraryID: 4264,
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245,
  },
];

for(let i = 0; i<3; i++){
    for(let x= i+1; x<3; x++ ){
        if(library1[i].libraryID < library1[x].libraryID){
            var hold = library1[i]
            library1[i] = library1[x]
            library1[x] = hold
            
        }
        

    }
}
console.log(library1);