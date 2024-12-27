<template>
  <div class="three-container">
    <div id="PointLight" title="点光源"></div>
    <div id="AmbientLight" title="环境光"></div>
    <div id="DirectionalLight" title="平行光"></div>
    <div id="Muti" title="多立方体"></div>
  </div>
</template>
<script>
import * as THREE from "three";

export default {
  name: "MeshPhongMaterial",
  methods:{
    pointlight(){
      const scene = new THREE.Scene();
      let material = this.$Material.meshPhongMaterial();
      let geometry = this.$Geometry.boxGeometry();

      let mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(0, 0, 0);
      scene.add(mesh);

      let pointLight = this.$Light.pointLight(50,80,100);
      scene.add(pointLight);

      scene.add(new THREE.AxesHelper(300));

      scene.add(new THREE.PointLightHelper(pointLight,1))

      // 定义相机输出画布的尺寸(单位:像素px)
      const width = 400; //宽度
      const height = 400; //高度
      const camera = new THREE.PerspectiveCamera(30, width / height, 1, 9000);
      camera.position.set(200, 200, 200);
      camera.lookAt(0,0,0);//指向mesh对应的位置

      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(width, height);
      renderer.render(scene, camera);
      document.getElementById('PointLight').appendChild(renderer.domElement);
      
      this.$Utils.addOrbitControls(scene,camera,renderer);
    },
    ambientLight(){
      const scene = new THREE.Scene();
      let material = this.$Material.meshPhongMaterial();
      let geometry = this.$Geometry.boxGeometry();

      let mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(0, 0, 0);
      scene.add(mesh);

      let ambientLight = this.$Light.ambientLight();
      scene.add(ambientLight);

      scene.add(new THREE.AxesHelper(300));

      // 定义相机输出画布的尺寸(单位:像素px)
      const width = 400; //宽度
      const height = 400; //高度
      const camera = new THREE.PerspectiveCamera(30, width / height, 1, 9000);
      camera.position.set(200, 200, 200);
      camera.lookAt(0,0,0);

      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(width, height);
      renderer.render(scene, camera);
      document.getElementById('AmbientLight').appendChild(renderer.domElement);
      this.$Utils.addOrbitControls(scene,camera,renderer);
    },
    directionalLight(){
      const scene = new THREE.Scene();
      let material = this.$Material.meshPhongMaterial();
      let geometry = this.$Geometry.boxGeometry();
      let mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(0, 0, 0);
      scene.add(mesh);
      let directionalLight = this.$Light.directionalLight(50,20,50);
      scene.add(directionalLight);
      scene.add(new THREE.AxesHelper(300));
      scene.add(new THREE.DirectionalLightHelper(directionalLight, 5,'#ffffff'));
      // 定义相机输出画布的尺寸(单位:像素px)
      const width = 400;
      const height = 400;
      const camera = new THREE.PerspectiveCamera(30, width / height, 1, 9000);
      camera.position.set(200, 200, 200);
      camera.lookAt(0,0,0);
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(width, height);
      renderer.render(scene, camera);
      document.getElementById('DirectionalLight').appendChild(renderer.domElement);
      this.$Utils.addOrbitControls(scene,camera,renderer);
    },
    muti(){
      const scene = new THREE.Scene();
      let material = this.$Material.meshPhongMaterial();
      let geometry = this.$Geometry.boxGeometry(20,20,20);
      for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
          for (let k = 0; k < 5; k++) {
            let mesh = new THREE.Mesh(geometry, material);
            mesh.position.set(k*30, j*30, i*30);
            scene.add(mesh);
          }
        }
      }
      let directionalLight = this.$Light.directionalLight(50,80,100);
      scene.add(directionalLight);
      scene.add(new THREE.AxesHelper(300));
      // 定义相机输出画布的尺寸(单位:像素px)
      const width = 400;
      const height = 400;
      const camera = new THREE.PerspectiveCamera(30, width / height, 1, 9000);
      camera.position.set(200, 200, 200);
      camera.lookAt(0,0,0);
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(width, height);
      renderer.render(scene, camera);
      document.getElementById('Muti').appendChild(renderer.domElement);
      this.$Utils.addOrbitControls(scene,camera,renderer);
    }
  },
  mounted() {
    this.pointlight();
    this.ambientLight();
    this.directionalLight();
    this.muti();
  }
}
</script>
<style scoped>

</style>