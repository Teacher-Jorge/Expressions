//EXPRESSION 02
let btnPlay = document.getElementById('btnPlay')
let btnPause = document.getElementById('btnPause')
let btnRepeat = document.getElementById('btnRepeat')
let btnTranslate = document.getElementById('btnTranslate')
let swissCheese = document.getElementById('swissCheese')

btnTranslate.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    swissCheese.textContent = 'A hitória tem mais buracos que um queijo suiço. - (...tem muitas falhas.)'
    swissCheese.style.color = 'darkviolet'
    btnTranslate.style.color = 'red'
    setTimeout(function() {
        swissCheese.textContent = 'The plot has more holes than a Swiss cheese.'
        swissCheese.style.color = 'black'
        btnTranslate.style.color = 'lime'
    },4000)
})

btnPlay.addEventListener('click', function() {
    let audio = document.getElementById('swiss')
    audio.play()
    btnPlay.style.color = 'lime'
    btnPause.style.color = 'dodgerblue'
    btnRepeat.style.color = 'dodgerblue'
})
btnPause.addEventListener('click', function() {
    let audio = document.getElementById('swiss')
    audio.pause()
    btnPause.style.color = 'lime'
    btnPlay.style.color = 'dodgerblue'
    btnRepeat.style.color = 'dodgerblue'
})
btnRepeat.addEventListener('click', function() {
    let audio = document.getElementById('swiss')
    audio.currentTime = 0
    audio.play()
    btnRepeat.style.color = 'red'
    btnPlay.style.color = 'lime'
    btnPause.style.color = 'dodgerblue'
})
