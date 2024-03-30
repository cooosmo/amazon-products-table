function cambiaTitolo(){
    let titolo = document.querySelector('.change-title-name')
    titolo.innerText = "Store"
}

function cambiaSfondo(){
    let backgroundColor = document.querySelector('body')
    backgroundColor.style.backgroundColor="lightBlue"
}

function cambiaIndirizzo(){
    let address = document.querySelector('address')
    address.innerText = "Via le mani dal naso, 0 - Altrove (IT)"
}

function aggiungiClasse(){
    let amazonLinks = document.querySelectorAll('.product-price')
    for(link of amazonLinks){
        link.classList.add('white-bg')
    }
}

function nascondiImg(){
    let immagini = document.querySelectorAll('img')
    for(immagine of immagini){
        immagine.classList.toggle('hide-me')
    }
}

function cambiaColorePrezzo(){
    let prezzi = document.querySelectorAll('p.product-price')
    
    for(prezzo of prezzi){
        const redValue = Math.round(Math.random()*255)
        const greenValue = Math.round(Math.random()*255)
        const blueValue = Math.round(Math.random()*255)
        let randomColor = `rgb(${redValue},${greenValue},${blueValue})`

        prezzo.style.color= randomColor
    }
}