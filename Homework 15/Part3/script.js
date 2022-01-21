let book = {
  name: prompt("Please enter the name of the book:"),
  author: prompt("Please enter who is author:"),
  readingStatus: prompt(
    "Please enter YES if you have read that book, or NO if you have not:"
  ),
  information: function () {
    if (this.readingStatus === "YES") {
      return "Already read " + this.name + " by " + this.author + ".";
    } else if (this.readingStatus === "NO") {
      return "You still need to read " + this.name + " by " + this.author + ".";
    }
  },
};
console.log(book.information());
