const searchBtn = document.getElementById('searchBtn')
searchBtn.addEventListener('click', searchMovie)

// TODO moras da izvuces ime filma iz searchBar, da napravis conekciju sa movies API i da prikazes film da ekran
function searchMovie() {
    const searchBar = document.getElementById('searchBar')
    const xhr = new XMLHttpRequest()

    xhr.open('GET', '')
    xhr.onload = () => {

    }
    xhr.send(JSON.stringify({}))
}

