//EXPRESSION 01
let btnPlay = document.getElementById('btnPlay')
let btnPause = document.getElementById('btnPause')
let btnRepeat = document.getElementById('btnRepeat')
let btnTranslate = document.getElementById('btnTranslate')
let onceIn = document.getElementById('onceIn')

btnTranslate.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    onceIn.textContent = 'Na verdade eu só vou ao cinema uma vez na lua azul. - (Quase nunca.)'
    onceIn.style.color = 'darkviolet'
    btnTranslate.style.color = 'red'
    setTimeout(function() {
        onceIn.textContent = 'I actually just go to the movies once in a blue moon.'
        onceIn.style.color = 'black'
        btnTranslate.style.color = 'lime'
    },4000)
})

btnPlay.addEventListener('click', function() {
    let audio = document.getElementById('once')
    audio.play()
    btnPlay.style.color = 'lime'
    btnPause.style.color = 'dodgerblue'
    btnRepeat.style.color = 'dodgerblue'
})
btnPause.addEventListener('click', function() {
    let audio = document.getElementById('once')
    audio.pause()
    btnPause.style.color = 'lime'
    btnPlay.style.color = 'dodgerblue'
    btnRepeat.style.color = 'dodgerblue'
})
btnRepeat.addEventListener('click', function() {
    let audio = document.getElementById('once')
    audio.currentTime = 0
    audio.play()
    btnRepeat.style.color = 'red'
    btnPlay.style.color = 'lime'
    btnPause.style.color = 'dodgerblue'
})



