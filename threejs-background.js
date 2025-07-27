// threejs-background.js
// Handles the Three.js particle background animation.

import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';

let scene, camera, renderer, particles, particleMaterial;
let mouseX = 0, mouseY = 0;
let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;

const ACCENT_BLUE_HEX = 0x00aaff;
const ACCENT_GREEN_HEX = 0x00ff88;

/**
 * Initializes the Three.js scene, camera, renderer, and particles.
 */
export function initThreeJS() {
    console.log("Initializing Three.js background..."); // Debugging log
    const canvas = document.getElementById('three-canvas');
    if (!canvas) {
        console.error("Three.js canvas not found!");
        return;
    }

    // Scene
    scene = new THREE.Scene();

    // Camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Renderer
    renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true }); // alpha: true for transparency
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Particules
    const particleCount = 2000;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color(ACCENT_BLUE_HEX); // Electric Blue
    const color2 = new THREE.Color(ACCENT_GREEN_HEX); // Vibrant Green

    for (let i = 0; i < particleCount; i++) {
        // Random positions
        positions[i * 3] = (Math.random() * 2 - 1) * 10;
        positions[i * 3 + 1] = (Math.random() * 2 - 1) * 10;
        positions[i * 3 + 2] = (Math.random() * 2 - 1) * 10;

        // Mixed colors
        const mixedColor = new THREE.Color();
        mixedColor.lerpColors(color1, color2, Math.random()); // Blend blue and green
        colors[i * 3] = mixedColor.r;
        colors[i * 3 + 1] = mixedColor.g;
        colors[i * 3 + 2] = mixedColor.b;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    particleMaterial = new THREE.PointsMaterial({
        size: 0.05,
        vertexColors: true,
        transparent: true,
        opacity: 0.7,
        blending: THREE.AdditiveBlending // Glow effect
    });

    particles = new THREE.Points(geometry, particleMaterial);
    scene.add(particles);

    // Ambient Light
    const ambientLight = new THREE.AmbientLight(0x404040, 2); // soft white light
    scene.add(ambientLight);

    // Event listeners for window resize and mouse movement
    window.addEventListener('resize', onWindowResize, false);
    document.addEventListener('mousemove', onDocumentMouseMove, false);
    console.log("Three.js background initialized."); // Debugging log
}

/**
 * Handles window resize events to update camera aspect ratio and renderer size.
 */
function onWindowResize() {
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

/**
 * Updates mouse coordinates for camera movement.
 * @param {MouseEvent} event - The mousemove event.
 */
function onDocumentMouseMove(event) {
    mouseX = (event.clientX - windowHalfX) * 0.001;
    mouseY = (event.clientY - windowHalfY) * 0.001;
}

/**
 * Animation loop for Three.js.
 */
export function animateThreeJS() {
    requestAnimationFrame(animateThreeJS);

    // Rotate particles
    particles.rotation.x += 0.0005;
    particles.rotation.y += 0.001;

    // Move camera based on mouse position
    camera.position.x += (mouseX - camera.position.x) * 0.05;
    camera.position.y += (-mouseY - camera.position.y) * 0.05;
    camera.lookAt(scene.position);

    renderer.render(scene, camera);
}
