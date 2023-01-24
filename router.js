const route = (event) => {
    event = event || window.event
    event.preventDefault()
    window.history.pushState({}, "", event.target.href)

    const page = event.target.getAttribute('page')

    if (page) {
        localStorage.setItem('page', page)
    }

    handleLocation()
}

const routes = {
    404: "/pages/404.html",
    "/": "/pages/home.html",
    "/juz": "/pages/juz.html",
    "/halaman": "/pages/halaman.html",
}

const handleLocation = async () => {
    const path = window.location.pathname

    const route = routes[path] || routes[404]
    const html = await fetch(route).then((data) => data.text())

    document.getElementById("app").innerHTML = html

    const scriptPromise = new Promise((resolve, reject) => {
        const script = document.createElement('script');
        document.body.appendChild(script);
        script.onload = resolve;
        script.onerror = reject;
        script.async = true;
        script.src = 'script.js';
    });

    scriptPromise.then((data) => { });
}

window.onpopstate = handleLocation
window.route = route

handleLocation()