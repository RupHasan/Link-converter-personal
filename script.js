// What we will get : https://github/RupHasan/Git-learning/
// What we have to give : https://ruphasan.github.io/Git-learning/
function checkInput() {
  let mainUrl = document.querySelector("#get-url").value;
  
  if (mainUrl == "") {
    alert("Enter a Url");
    location.reload();
  } else {
    changeUrlFunction();
  }
}

function changeUrlFunction() {
  let mainUrl = document.querySelector("#get-url").value;
  let urlArr = mainUrl.split("/")
  let userName = urlArr[3].toLowerCase();
  let repoName = urlArr[4];
  let newUrl = `https://${userName}.github.io/${repoName}/`;
  
  document.querySelector(".container").innerHTML = `
    <a href="${newUrl}"><button class="new-url">Go to ${repoName}</button></a>
  `;
  document.querySelector("#get-url").value = "";
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    checkInput();
  }
});