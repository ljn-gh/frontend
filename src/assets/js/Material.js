import * as THREE from 'three'

/**
 * 基础
 * @param color
 * @param side
 * @returns {MeshBasicMaterial}
 */
export function meshBasicMaterial(color,side){
    return new THREE.MeshBasicMaterial({
        color: color ?? '#ff0000',
        side: side ?? THREE.FrontSide,
        transparent: true,
        opacity: 0.3
    })
}

/**
 * 漫反射
 * @param color
 * @param side
 * @returns {MeshLambertMaterial}
 */
export function meshLamberMaterial(color,side){
    return new THREE.MeshLambertMaterial({
        color: color ?? '#ff0000',
        side: side ?? THREE.FrontSide,
        transparent: true,
        opacity: 0.3
    })
}

export function meshPhongMaterial(color,shininess,specular){
    return new THREE.MeshPhongMaterial({
        color: color ?? '#ff0000',
        //高光亮度
        shininess: shininess ?? 90,
        //高光部分颜色
        specular: specular ?? '#444444',
        transparent: true,
        opacity: 0.8
    })
}
