import * as THREE from 'three'

export function pointLight(x,y,z) {
    let pointLight = new THREE.PointLight('#ffffff',2);
    pointLight.position.set(x,y,z);
    return pointLight;
}

export function ambientLight() {
    return new THREE.AmbientLight('#ffffff', 2);
}

export function directionalLight(x,y,z) {
    let directionalLight = new THREE.DirectionalLight('#ffffff', 2);
    directionalLight.position.set(x,y,z);
    return directionalLight;
}