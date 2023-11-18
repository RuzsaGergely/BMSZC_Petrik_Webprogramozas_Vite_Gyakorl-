var clean_array = []
localStorage.setItem("SavedUsers", JSON.stringify(clean_array))

function changeForm() {
  let bej = document.getElementById("bejelentkezesForm")
  let reg = document.getElementById("regisztracioForm")

  if(bej.hidden) {
    bej.hidden = false;
    reg.hidden = true;
  } else {
    bej.hidden = true;
    reg.hidden = false;
  }
}

function initiateRegister() {
  var username = document.getElementById("regUsername").value
  var password = document.getElementById("regPassword").value

  if(username.length < 1 || password.length < 1){
    alert("Sikertelen regisztráció! Kérlek töltsd ki a mezőket.")
  } else {
    if(!checkIfUserExists(username)){
      addUser(username, password)
      alert("Felhasználó létrehozva!")
      clearForms()
    } else {
      alert("Már létezik ilyen felhasználó! Válassz másik nevet!")
    }
  }
}

function clearForms() {
  document.getElementById("regUsername").value = ""
  document.getElementById("regPassword").value = ""
  document.getElementById("bejelentkezesForm").value = ""
  document.getElementById("regisztracioForm").value = ""
}

function initiateLogin() {
  var username = document.getElementById("loginUsername").value
  var password = document.getElementById("loginPassword").value
  var users = JSON.parse(localStorage.getItem("SavedUsers"))
  
  if(checkIfUserExists(username)) {
    var user = users.find(x=>x.Username == username);  
    if(user.Password == password) {
      document.getElementById("loggedIn").innerText = username;
      document.getElementById("regbejDiv").hidden = true;
      document.getElementById("pageDiv").hidden = false;
    } else {
      alert("Hibás jelszó!")
    }
  } else {
    alert("Nem létezik ilyen felhasználó!")
  }
}

function addUser(username, password) {
  var users = JSON.parse(localStorage.getItem("SavedUsers"))
  var new_user = {
    "Username": username,
    "Password": password
  }
  users.push(new_user)
  localStorage.setItem("SavedUsers", JSON.stringify(users))
}

function checkIfUserExists(username) {
  var users = JSON.parse(localStorage.getItem("SavedUsers"))
  if(users.find(x=>x.Username == username) == undefined) {
    return false
  }
  return true;
}