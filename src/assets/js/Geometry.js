import * as THREE from 'three'
export function boxGeometry(x,y,z) {
    return new THREE.BoxGeometry(x??50,y??50,z??50);
}

export function sphereGeometry(r) {
    return new THREE.SphereGeometry(r ?? 50);
}

export function cylinderGeometry(tr,br,h) {
    return new THREE.CylinderGeometry(tr ?? 50, br ?? 50, h ?? 80);
}

export function planeGeometry(w,h) {
    return new THREE.PlaneGeometry(w ?? 50, h ?? 50);
}

export function circleGeometry(r){
    return new THREE.CircleGeometry(r ?? 50);
}