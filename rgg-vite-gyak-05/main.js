function HatterCsere() {
  let element = document.getElementsByTagName("body").item(0)
  element.style.backgroundColor = "cadetblue"
}

function HatterCsereRandom() {
  let element = document.getElementsByTagName("body").item(0)
  let colors = []
  for (let index = 0; index < 3; index++) {
    colors.push(Math.floor(Math.random() * 255))
  }
  element.style.backgroundColor = `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`
}