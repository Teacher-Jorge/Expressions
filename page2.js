//EXPRESSION 02
let btnPlay = document.getElementById('btnPlay')
let btnPause = document.getElementById('btnPause')
let btnRepeat = document.getElementById('btnRepeat')
let btnTranslate = document.getElementById('btnTranslate')
let hitNail = document.getElementById('hitNail')

btnTranslate.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    hitNail.textContent = 'Você acertou o prego na cabeça! - (Você foi exato em sua descrição!)'
    hitNail.style.color = 'darkviolet'
    btnTranslate.style.color = 'red'
    setTimeout(function() {
        hitNail.textContent = 'You hit the nail on the head!'
        hitNail.style.color = 'black'
        btnTranslate.style.color = 'lime'
    },4000)
})

btnPlay.addEventListener('click', function() {
    let audio = document.getElementById('audioHit')
    audio.play()
    btnPlay.style.color = 'lime'
    btnPause.style.color = 'dodgerblue'
    btnRepeat.style.color = 'dodgerblue'
})
btnPause.addEventListener('click', function() {
    let audio = document.getElementById('audioHit')
    audio.pause()
    btnPause.style.color = 'lime'
    btnPlay.style.color = 'dodgerblue'
    btnRepeat.style.color = 'dodgerblue'
})
btnRepeat.addEventListener('click', function() {
    let audio = document.getElementById('audioHit')
    audio.currentTime = 0
    audio.play()
    btnRepeat.style.color = 'red'
    btnPlay.style.color = 'lime'
    btnPause.style.color = 'dodgerblue'
})
