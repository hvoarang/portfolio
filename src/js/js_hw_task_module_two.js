const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'На березі спокійних вод',
    author: 'Роберт Шеклі',
    rating: 8.51,
  },
];

for (const book of books) {
  console.log(book.title);
  console.log(book.author);
  console.log(book.rating);
}
git add .
git commit -m "new fix"
git push

const boxs = {
  figure: "circle",
  color: 'red',
  radius: 50,

  getBox() {
   return this.figure
  },
  addBox(squaere) {
    this.boxes.push("squaere")
  }
}
console.log("boxes:", boxs)