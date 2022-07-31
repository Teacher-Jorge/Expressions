const btnPlay = document.getElementById('btnPlay')
const btnPause = document.getElementById('btnPause')
const btnRepeat = document.getElementById('btnRepeat')
const btnOnce = document.getElementById('btnOnce')
const onceIn = document.getElementById('onceIn')

btnOnce.addEventListener('click', function() {
    const audio = document.getElementById('click')
    audio.play()
    onceIn.textContent = 'Uma vez na lua azul. - (Quase nunca)'
    onceIn.style.color = 'darkviolet'
    btnOnce.style.color = 'lime'
    setTimeout(function() {
        onceIn.textContent = 'Once in a blue moon.'
        onceIn.style.color = 'black'
        btnOnce.style.color = 'fuchsia'
    },1500)
})

btnPlay.addEventListener('click', function() {
    const audio = document.getElementById('once')
    audio.play()
    btnPlay.style.color = 'lime'
    btnPause.style.color = 'purple'
    btnRepeat.style.color = 'purple'
})
btnPause.addEventListener('click', function() {
    const audio = document.getElementById('once')
    audio.pause()
    btnPause.style.color = 'lime'
    btnPlay.style.color = 'purple'
    btnRepeat.style.color = 'purple'
})
btnRepeat.addEventListener('click', function() {
    const audio = document.getElementById('once')
    audio.currentTime = 0
    audio.play()
    btnRepeat.style.color = 'lime'
    btnPlay.style.color = 'purple'
    btnPause.style.color = 'purple'
})