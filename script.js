var nombre = prompt("¿Cuál es tu nombre?");
var producto = prompt("¿Qué producto buscás hoy?");
var promociones = prompt("¿Querés recibir promociones?");
var calificacion = prompt("¿Cómo calificarías nuestro servicio?");
var volverias = prompt("¿Volverías a Cáceres Comercial?");

document.write(`
    <header class="seccion cabecera">
        <div class="caja interna1">
            <h3>Respuestas:</h3>
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>Producto:</strong> ${producto}</p>
            <p><strong>Promociones:</strong> ${promociones}</p>
            <p><strong>Calificación:</strong> ${calificacion}</p>
            <p><strong>¿Volvería?:</strong> ${volverias}</p>
        </div>
        <div class="botonera">
    <button onclick="alert('Inicio')">Home</button>
    <button onclick="alert('Viendo productos')">Productos</button>
    <button onclick="alert('Mirá las ofertas!')">Ofertas</button>
    <button onclick="alert('¿En qué te podemos ayudar?')">Contactanos</button>
    </div>
    </header>

    <section class="seccion contenidoa">
        <div class="caja imag imagena"></div>
        <div class="caja imag imagenb"></div>
    </section>
    
    <section class="seccion contenidob">
        <div class="caja imag imagenc"></div>
        <div class="caja imag imagend"></div>
    </section>
    
    <section class="seccion contenidoa">
        <div class="caja imag imagene"></div>
        <div class="caja imag imagenf"></div>
    </section>
    
    <footer class="seccion pie">
        <div class="caja interna3"></div> 
    </footer>
`);
