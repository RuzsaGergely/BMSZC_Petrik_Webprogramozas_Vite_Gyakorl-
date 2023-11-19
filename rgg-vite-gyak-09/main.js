function textareaChange() {
  let bemenet = document.getElementById("bemenet").value;
  let charCounter = document.getElementById("charCounter");
  let wordCounter = document.getElementById("wordCounter");
  let occurences = document.getElementById("occurences");

  charCounter.innerText = bemenet.length;
  wordCounter.innerText = bemenet.split(' ').length - 1;

  // Nem annyira pontos ez a felbontás, de szerencsére ez csak egy beadandó és nem az Apollo űrküldetés
  let words = bemenet.split(' ');
  let words_for_rank = []
  words.forEach(element => {
    let word = {
      "Word": element,
      "Count": words.filter(x=>x == element).length
    }
    if(words_for_rank.filter(x=>x.Word == element).length < 1){
      words_for_rank.push(word)
    }
  });

  // Nem akarok .sort() függv1nnyel szórakozni, megírom mezitlábasan
  for (let i = 0; i < words_for_rank.length; i++) {
    for (let j = 0; j < words_for_rank.length; j++) {
      if(words_for_rank[i].Count > words_for_rank[j].Count){
        let temp_a = words_for_rank[i]
        let temp_b = words_for_rank[j]
        words_for_rank[i] = temp_b;
        words_for_rank[j] = temp_a
      }
    }
  }
  

  occurences.innerHTML = "";
  words_for_rank.forEach(element => {
    if(element.Count > 1){
      occurences.innerHTML += `
        <li>${element.Word} - ${element.Count}</li>
      `
    }
  })
}