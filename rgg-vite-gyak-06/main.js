var jegyzetek = []

function JegyzetHozzaad() {
  let szoveg = document.getElementById("jegyzet");

  if(szoveg.value.length < 1) {
    alert("Töltsd ki a szöveget!")
  } else {
    jegyzetek.push(szoveg.value)
    Kilistaz()
  }

}

function JegyzetTorol(index) {
  jegyzetek.splice(index, 1)
  Kilistaz() 
}

function Kilistaz() {
  let tablazat = document.getElementById("table");
  tablazat.innerHTML = ""
  jegyzetek.forEach(element => {
    let id = jegyzetek.findIndex(x => x == element);
    tablazat.innerHTML += `
      <tr>
        <td>${element}</td>
        <td><button onclick="JegyzetTorol(${id})">Törlés</button></td>
      </tr>
    `
  })
}