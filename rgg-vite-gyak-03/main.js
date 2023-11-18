function primek() {
  var bemenet = parseInt(document.getElementById("bemenet1").value);
  var bemenet2 = parseInt(document.getElementById("bemenet2").value);
  var kimenet = document.getElementById("kimenet");

  for (let index = bemenet; index <= bemenet2; index++) {
    if(isPrime(index)){
      kimenet.innerHTML += `${index}, `
    }
  }
  
}

// https://stackoverflow.com/questions/40200089/check-number-prime-in-javascript
const isPrime = num => {
  for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
      if(num % i === 0) return false;
  }
  return num > 1;
}