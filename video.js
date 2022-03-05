const nav = document.querySelector('#popup')
const abrir = document.querySelectorAll('#ver-demonstracao')

for (const element of abrir) {
  element.addEventListener('click', function () {
    nav.classList.toggle('open')
  })
}

const links = document.querySelectorAll('#popup a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('open')
  })
}
// PAUSE VIDEO

var player

function onYouTubePlayerAPIReady() {
  player = new YT.Player('video', {
    events: {
      onReady: onPlayerReady
    }
  })
}

function onPlayerReady(event) {
  var pauseButton = document.getElementById('pause-button')
  pauseButton.addEventListener('click', function () {
    player.pauseVideo()
  })
}

var tag = document.createElement('script')
tag.src = 'https://www.youtube.com/player_api'
var firstScriptTag = document.getElementsByTagName('script')[0]
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
