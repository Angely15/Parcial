window.addEventListener("load", function () {
    fetch("https://carlosreneas.github.io/endpoints/noticias.json")
      .then((response) => response.json())
      .then((data) => {
          console.log(data);       
           document.getElementById("noticia").innerHTML = data.map(
            (e) => `
            <h3>${e.titulo}</h3>
            <p class="border">
              ${e.descripcion}
              <a href="http://">Ver mas.</a>
            </p>
     ` 
          )
          .join("");
      });
  });