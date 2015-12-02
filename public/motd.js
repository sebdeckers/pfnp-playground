function refreshMotd () {
  fetch('/motd').then(function (response) {
    response.text().then(function (message) {
      document.querySelector('h1')
        .textContent = message
    })
  })
}
document.querySelector('button')
  .addEventListener('click', function () {
    var motd = window.prompt('Change the MOTD')
    fetch('/edit/' + motd)
    document.querySelector('h1')
      .textContent = motd
  })
setInterval(refreshMotd, 1000)
