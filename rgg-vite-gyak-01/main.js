function megforditas() {
  var bemenet = document.getElementById("bemenet").value;
  var kimenet = document.getElementById("kimenet");

  kimenet.innerText = bemenet.split("").reverse().join("")
}