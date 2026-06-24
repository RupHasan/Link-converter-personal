// // What we will get : https://github/RupHasan/Git-learning/
// // What we have to give : https://ruphasan.github.io/Git-learning/
// function change() {
//   // Plan: 
//   // 1. I will make it a aray and ignore the https://github/ part
//   // 2. gotta save the username some way
//   // 3. gotta save the repo name.
//   // 4. we have to differ those from the main url.
//   let mainUrl = document.querySelector("#get-url").value;
  
//   console.log(mainUrl)
//   let urlArr = mainUrl.split("")
//   console.log(urlArr)
// }




// Lets practice regex first

console.log(/github\.com\/RupHasan/.test("https://github.com/RupHasan"));
// /products/12345/
console.log("/products/12345/".match(/\d+/))
// [01-02-2026] error
console.log("[01-02-2026] error".match(/\[([^\]]+)\]/));

// Now for the final boss


let username = "https://ruphasan.github.io/Git-learning/".split("/")
console.log(username)

