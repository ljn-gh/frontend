import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export function addOrbitControls(scene, camera, renderer){
    const controls = new OrbitControls(camera, renderer.domElement);
    // 如果OrbitControls改变了相机参数，重新调用渲染器渲染三维场景
    controls.addEventListener('change', function () {
        renderer.render(scene, camera); //执行渲染操作
    });
}