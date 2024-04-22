var elResult = document.querySelector('.card-result');




var elModal = document.querySelector('.main-modal');
for (const poke of pokemons) {
    
    var elItem = document.createElement('li')
    var elImg = document.createElement('img')
    var elName = document.createElement('h3')
    var elButton = document.createElement('button')
    
    elButton.classList.add('open-button')
    elButton.textContent = 'Click'
    elButton.setAttribute('onclick', 'openModal()')
    // elButton.setAttribute('type', 'submit')
    
    var elTitle = document.createElement('h3')
    var elSubitle = document.createElement('p')
    var elModalImg = document.createElement('img')
    var elCloseButton = document.createElement('button')
    elCloseButton.classList.add('close-button')
    elCloseButton.setAttribute('onclick', 'closeModal()')
    
    elButton.addEventListener('click', () => {
        var elId = poke.id
        if (elId === poke.id) {
            elModalImg.src = poke.img
            elTitle.textContent = poke.name
            elSubitle.textContent = poke.weaknesses
            elCloseButton.textContent = 'close ' + poke.name
        }
        elModal.appendChild(elModalImg)
        elModal.appendChild(elTitle)
        elModal.appendChild(elSubitle)
        elModal.appendChild(elCloseButton)
    })
    
    
    elImg.src = poke.img
    elName.textContent = poke.name
    

    
    elResult.appendChild(elItem)
    elItem.appendChild(elImg)
    elItem.appendChild(elName)
    elItem.appendChild(elButton)
}

function openModal() { 
    elModal.classList.add('open-modal')
 }
 
 function closeModal() { 
    elModal.classList.remove('open-modal')
}





