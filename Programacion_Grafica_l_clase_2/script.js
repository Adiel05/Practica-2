const escena = new THREE.Scene(); 
const renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderizador.domElement);

const ancho = window.innerWidth;
const alto = window.innerHeight;
const camara = new THREE.OrthographicCamera(ancho / -2, ancho / 2, alto / 2, alto / -2, 0.1, 1000);
camara.position.z = 10;

const geometría = new THREE.PlaneGeometry(100, 100); 
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
const rectángulo = new THREE.Mesh(geometría, material);
rectángulo.position.x = -120; 
escena.add(rectángulo);


const geometríaCirculo = new THREE.CircleGeometry(60, 64);
const materialCirculo = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
const circulo = new THREE.Mesh(geometríaCirculo, materialCirculo);
circulo.position.x = 120; 
escena.add(circulo);

let escala = 1;
let creciendo = true;

function animacion() {
    requestAnimationFrame(animacion);

    rectángulo.rotation.z += 0.01;  

    if (creciendo) {
        escala += 0.01;
        if (escala >= 1.3) creciendo = false;
    } else {
        escala -= 0.01;
        if (escala <= 0.7) creciendo = true;
    }
    circulo.scale.set(escala, escala, 1);

    renderizador.render(escena, camara);
}

animacion();

window.addEventListener('resize', () => {
    const ancho = window.innerWidth;
    const alto = window.innerHeight;
    camara.left = ancho / -2;
    camara.right = ancho / 2;
    camara.top = alto / 2;
    camara.bottom = alto / -2;
    camara.updateProjectionMatrix();
    renderizador.setSize(ancho, alto);
});
