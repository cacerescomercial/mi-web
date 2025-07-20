
window.addEventListener('DOMContentLoaded', () => {
    const nombre = prompt("¿Cuál es tu nombre y apellido?");
    const producto = prompt("¿Qué producto buscás hoy?");
    const promociones = prompt("¿Querés recibir promociones?");
    const calificacion = prompt("¿Cómo calificarías nuestro servicio?");
    const volverias = prompt("¿Volverías a Cáceres Comercial?");

    const contenedor = document.createElement("div");

    contenedor.innerHTML = `
        <header class="seccion cabecera">
            <div class="caja interna1">
                
                <p><strong>Apellido y nombre:</strong> ${nombre}</p>
                <p><strong>Producto:</strong> ${producto}</p>
                <p><strong>Promociones:</strong> ${promociones}</p>
                <p><strong>Calificación:</strong> ${calificacion}</p>
                <p><strong>¿Volvería?:</strong> ${volverias}</p>
            </div>
            <div class="botonera">
                <button onclick="irAImagen('home')">Home</button>
                <button onclick="irAImagen('comestibles')">Comestibles</button>
                <button onclick="irAImagen('celular')">Celulares</button>
                <button onclick="irAImagen('muebles')">Muebles</button>
                <button onclick="irAImagen('electrodomesticos')">Electrodomesticos</button>
                <button onclick="irAImagen('ferreteria')">Ferreteria</button>
                <button onclick="irAImagen('contacto')">Contactanos</button>
            </div>
        </header>

        <section class="seccion contenidoa">
        <div class="caja imag imagena" id="home" onclick="window.open('home.html', '_blank')"></div>
        <div class="caja imag imagenb" id="comestibles" onclick="window.open('comestibles.html', '_blank')"></div>
    </section>

    <section class="seccion contenidob">
        <div class="caja imag imagenc" id="celular" onclick="window.open('celulares.html', '_blank')"></div>
        <div class="caja imag imagend" id="muebles" onclick="window.open('muebles.html', '_blank')"></div>
    </section>

    <section class="seccion contenidoa">
        <div class="caja imag imagene" id="electrodomesticos" onclick="window.open('electrodomesticos.html', '_blank')"></div>
        <div class="caja imag imagenf" id="ferreteria" onclick="window.open('ferreteria.html', '_blank')"></div>
    </section>

        <footer class="seccion pie">
            <div class="caja interna4" id="contacto"onclick="window.open('contacto.html', '_blank')"></div>
        </footer>
    `;

    document.body.appendChild(contenedor);

    const nuevaSeccion = document.createElement("section");
    nuevaSeccion.className = "seccion pie";
    nuevaSeccion.innerHTML = `
        <div class="caja interna3">
            <h3>Dejanos tu opinión</h3>
            <input type="text" id="opinion" placeholder="Escribí tu comentario aquí">
            <button onclick="mostrarOpinion()">Enviar</button>
            <div id="respuesta-opinion"></div>
        </div>
    `;
    document.body.appendChild(nuevaSeccion);
});

function mostrarOpinion() {
    const opinion = document.getElementById("opinion").value;
    const salida = document.getElementById("respuesta-opinion");

    if (opinion.trim() === "") {
        salida.innerHTML = "<p style='color: black;'>No podés enviar un comentario vacío.</p>";
    } else {
        salida.innerHTML = "<p style='color: black;'>Gracias por tu comentario: " + opinion + "</p>";
    }
}

function irAImagen(id) {
    const img = document.getElementById(id);
    if (img) {
        img.scrollIntoView({ behavior: "smooth", block: "center" });
        img.classList.add("zoom");
        setTimeout(() => {
            img.classList.remove("zoom");
        }, 8000);
    }
}
