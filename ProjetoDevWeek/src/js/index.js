const fight = []
const characterSelect = document.querySelectorAll(".personagem");

characterSelect.forEach((character) => {
  character.addEventListener("mouseenter", () => {
    let playerNumber = fight.length+1
    if(fight.length >= 2) return;

    const selectedId = character.attributes.id.value;

    if(fight.length === 0) {
      if(selectedId === 'ultron') return;
      const personagemSelecionado = document.querySelector(".selecionado");
      personagemSelecionado.classList.remove("selecionado");
  
      character.classList.add("selecionado");
    }else if(fight.length === 1){
      const personagemSelecionado = document.querySelector(".jogador-2-selecionado");
      personagemSelecionado.classList.remove("jogador-2-selecionado");
  
      character.classList.add("jogador-2-selecionado");
    }

    const characterImage = document.getElementById(`personagem-jogador-${playerNumber}`);
    characterImage.src = `./src/images/${selectedId}.png`;

    const characterName = document.getElementById(`nome-jogador-${playerNumber}`);
    const selectedName = character.getAttribute('data-name');
    
    characterName.innerHTML = selectedName;
  });

  character.addEventListener("click", function(event){
    let characterName = character.getAttribute('data-name');
    if(fight.length >= 2) return;
    
    fight.push(characterName);
  });

});