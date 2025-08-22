# Practica-2
Este proyecto es una demostración con Three.js, donde se renderizan dos figuras en una escena 3D:
Un rectángulo que rota continuamente.
Un círculo que se coloca a su lado y tiene una animación de "latido" (cambia de tamaño periódicamente).

# Funcionamiento
Se crea una escena (THREE.Scene) y un renderizador (THREE.WebGLRenderer).
Se define una cámara ortográfica para visualizar los objetos.
Se añaden dos figuras:
Un rectángulo (PlaneGeometry) que rota sobre su eje Z.
Un círculo (CircleGeometry) que se expande y contrae simulando un latido.
Se utiliza requestAnimationFrame para actualizar continuamente la animación de ambas figuras.
Se ajusta el tamaño de la escena automáticamente al cambiar el tamaño de la ventana del navegador.
