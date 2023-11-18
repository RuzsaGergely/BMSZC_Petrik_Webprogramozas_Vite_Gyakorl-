function fibonacci() {
  var bemenet = parseInt(document.getElementById("bemenet").value);
  var kimenet = document.getElementById("kimenet");

  // https://www.programiz.com/javascript/examples/fibonacci-series
  let n1 = 0, n2 = 1, nextTerm;

  for (let i = 1; i <= bemenet; i++) {
      kimenet.innerText += `${n1}, `
      nextTerm = n1 + n2;
      n1 = n2;
      n2 = nextTerm;
  }
}