var library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
  
];

let x = 0
for(x;x<3;x++){
    console.log((library[x].author) );
    console.log(library[x].title);
    console.log(library[x].readingStatus);
}

// let read_status = Object.values(library)
// console.log(library[3]);