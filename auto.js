// AUTO
/*
Založte si HTML stránku s JavaScriptem.
Stáhněte si připravený obrázek auta. Vložte na stránku prvek img s tímto obrázkem.
Když uživatel stiskne šipku doprava, nastavte obrázku s autem CSS vlastnost margin-left, aby se auto pohnulo kousek doprava.
Při stisknutí šipky doleva nastavte obrázku s autem margin-left zpět na nulu.
*/

let imgCar = document.querySelector('.car')

const keyPress = (event) => {
    let code = event.code
    if (code === 'ArrowRight') {
        imgCar.classList.add('car--marginLeft')
    } else if (code === 'ArrowLeft') {
        imgCar.classList.remove('car--marginLeft')
    }
}

document.body.addEventListener('keydown', (event) => keyPress(event))

