
const placeForResults = document.getElementById("results")
console.log("this is the element",placeForResults)
new URLSearchParams(window.location.search).forEach((value, name) => {
  placeForResults.append(`${name} : ${value}`)
  placeForResults.append(document.createElement("br"))
})