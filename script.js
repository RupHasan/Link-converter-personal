function checkInput() {
  let mainUrl = document.querySelector("#get-url").value;
  let urlArr = mainUrl.split("/")
  
  if (mainUrl == "") {
    alert("Enter a Url");
    location.reload();
  } else {
    if(mainUrl.includes("/")) {
      changeUrlFunction(mainUrl,urlArr);
    } else if (mainUrl == "change-github-username") {
      defaultUsername = prompt("What do you want for your default username? MUST BE LOWERCASE!");
      localStorage.setItem("defaultUsername", defaultUsername);
      document.querySelector("#get-url").value = "";
    } else {
      repoToUrl(mainUrl)
    }
  }
}

function repoToUrl(mainUrl) {
  let arr = mainUrl.split("");
  arr = arr.map(item => item == " " ? "-" : item);
  let userName = localStorage.getItem('defaultUsername');
  let newUrl = `https://${userName}.github.io/${arr.join("")}/`;
  
  render(newUrl, mainUrl)
}

function changeUrlFunction(mainUrl, urlArr) {
  let userName = urlArr[3].toLowerCase();
  let repoName = urlArr[4];
  let newUrl = `https://${userName}.github.io/${repoName}/`;
  
  render(newUrl, repoName);
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    checkInput();
  }
});

function render(newUrl) {
  window.location.href = newUrl;
}

if (localStorage.getItem('defaultUsername')) {
  // Do nothing
} else {
  localStorage.setItem("defaultUsername", "ruphasan")
}