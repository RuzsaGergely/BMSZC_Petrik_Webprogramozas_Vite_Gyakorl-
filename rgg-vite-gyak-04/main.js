class Konyv {
  constructor (konyvnev, konyvszerzo, kikolcsonozve) {
    this.KonyvNev = konyvnev,
    this.KonyvSzerzo = konyvszerzo,
    this.Kikolcsonozve = kikolcsonozve
  }

  Kikolcsonoz() {
    if(this.Kikolcsonozve) {
      alert("A könyv már ki van kölcsönözve!")
    } else {
      this.Kikolcsonozve = true;
      alert("Sikeres kölcsönzés!")
    }
  }

  Visszaad() {
    if(this.Kikolcsonozve) {
      this.Kikolcsonozve = false;
      alert("Sikeres visszaadás! Köszönük!")
    } else {
      alert("A könyv nincs kikölcsönözve!")
    }
  }
}

// Egy kis kreativitás. A nevek és könyvcímek erről a remek oldalról vannak: https://www.fantasynamegenerators.com/
// Az átalakítást Notepad++-al csináltam.
const konyv_cimek = [
  "Agent Without Direction",
  "Horse Of The Solstice",
  "Heroes With Gold",
  "Bandits Of The End",
  "Aliens And Women",
  "Thieves And Strangers",
  "Sword Of Gold",
  "Success Of Silver",
  "Adopting Eternity",
  "Remember My Leader",
  "Changeling Of Fortune",
  "Invader Of My Imagination",
  "Foreigners Of Yesterday",
  "Thieves Without A Conscience",
  "Men And Doctors",
  "Rebels And Gods",
  "World With Vigor",
  "Restoration Without Faith",
  "Visiting The Shadows",
  "Visiting The Angels",
  "Cyborg Of The Ancients",
  "Enemy Without Courage",
  "Priests Of Desire",
  "Snakes Of Dread",
  "Companions And Wolves",
  "Assassins And Spiders",
  "Disruption Without Direction",
  "Hatred Of The Prison",
  "Guarded By Time",
  "Battling In My Friends"
]

const konyv_irok = [
  "Charlie Richards",
  "Nicholas Rose",
  "Tyler Richards",
  "Zachary Gibson",
  "Callum Fletcher",
  "Malaki Martinez",
  "Jaden Macias",
  "Truman Patrick",
  "Kingston Pearson",
  "Emmitt Mathews",
  "Matilda Cox",
  "Sophie Mason",
  "Ella Taylor",
  "Keira Atkinson",
  "Lexi White",
  "Hattie Jefferson",
  "Gisselle Morton",
  "Journee Perry",
  "Bethany Noel",
  "Willa Gardner",
  "Rowan Hunt",
  "Hayden Murphy",
  "Rudy Grant",
  "Rene Matthews",
  "Alex Butler",
  "Gale Roy",
  "Jaden Vaughan",
  "Franky Vincent",
  "Val Becker",
  "Elliot Hickman"
]

var konyvek = [];

for (let index = 0; index < konyv_cimek.length; index++) {
  let random_iro = konyv_irok[Math.round(Math.random() * (konyv_irok.length - 1))]
  konyvek.push(new Konyv(konyv_cimek[index], random_iro, false))
}



function TablazatFeltolt() {
  console.log(konyvek)
  var tablazat = document.getElementById("tablazat");
  tablazat.innerHTML = "";

  konyvek.forEach(element => {
    let index_of = konyvek.indexOf(element)
    tablazat.innerHTML += `
    <tr>
      <td>${element.KonyvNev}</td>
      <td>${element.KonyvSzerzo}</td>
      <td>${element.Kikolcsonozve}</td>
      <td><button onclick="KonyvKikolcsonoz(${index_of})">Kikölcsönöz</button> | <button onclick="KonyvVisszaad(${index_of})">Visszaad</button></td>
    </tr>
    `
  });
}

function KonyvKikolcsonoz(id) {
  konyvek[id].Kikolcsonoz();
  TablazatFeltolt();
}

function KonyvVisszaad(id) {
  konyvek[id].Visszaad();
  TablazatFeltolt();
}