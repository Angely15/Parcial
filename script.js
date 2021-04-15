window.addEventListener("load", function () {
    fetch("https://carlosreneas.github.io/endpoints/noticias.json")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            document.getElementById("noticia").innerHTML = data.map(
                (e) => `
            <h3>${e.titulo}-${e.categoria}-${e.fecha}</h3>
            <p class="border">
              ${e.descripcion}
              <a href="http://">Ver mas.</a>
            </p>
     `
            )
                .join("");
        });
});

window.addEventListener("load", function () {
    fetch("https://carlosreneas.github.io/endpoints/noticias.json")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            document.getElementById("noticia").innerHTML = data.map(
                (e) => `
            <h3>${e.titulo}-${e.categoria}-${e.fecha}</h3>
            <p class="border">
              ${e.descripcion}
              <a href="http://">Ver mas.</a>
            </p>
     `
            )
                .join("");
        });
});


window.addEventListener("load", function () {
    fetch("https://carlosreneas.github.io/endpoints/categoria_deporte.json")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            document.getElementById("deportes").innerHTML = data.map(
                (e) => `
            <h6>${e.titulo}</h6>
            <div class="border line"></div>
            `
            )
                .join("");
        });
});

window.addEventListener("load", function () {
    fetch("https://carlosreneas.github.io/endpoints/categoria_tecnologia.json")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            document.getElementById("tecnologia").innerHTML = data.map(
                (e) => `
            <h6>${e.titulo}</h6>
            <div class="border line"></div>
            `
            )
                .join("");
        });
});



