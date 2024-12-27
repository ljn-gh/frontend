<template>
  <div class="three-container">
    <div id="BoxGeometry" title="点光源"></div>
    <div id="SphereGeometry" title="环境光"></div>
    <div id="CylinderGeometry" title="平行光"></div>
    <div id="PlaneGeometry" title="多立方体"></div>
    <div id="CircleGeometry" title="多立方体"></div>
  </div>
</template>
<script>
/* eslint-disable */
import * as THREE from 'three';
export default {
  name: "Geometry",
  methods: {
    initByGeometry(geometry,domId) {
      const scene = new THREE.Scene();
      let material = this.$Material.meshLamberMaterial();
      let mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
      
      let light = this.$Light.directionalLight();
      light.position.set(200, 200, 200);
      scene.add(light);
      
      scene.add(new THREE.AxesHelper(300));
      let width = 400;
      let height = 400;
      let camera = new THREE.PerspectiveCamera(30, width / height, 1, 3000);
      camera.position.set(200, 200, 200);
      camera.lookAt(0, 0, 0);
      let renderer = new THREE.WebGLRenderer();
      renderer.setSize(width, height);
      document.getElementById(domId).appendChild(renderer.domElement);
      renderer.render(scene, camera);
      
      this.$Utils.addOrbitControls(scene,camera,renderer);
    },
  },
  mounted() {
    this.initByGeometry(this.$Geometry.boxGeometry(),'BoxGeometry');
    this.initByGeometry(this.$Geometry.sphereGeometry(),'SphereGeometry');
    this.initByGeometry(this.$Geometry.cylinderGeometry(),'CylinderGeometry');
    this.initByGeometry(this.$Geometry.planeGeometry(),'PlaneGeometry');
    this.initByGeometry(this.$Geometry.circleGeometry(),'CircleGeometry');
  },
}
</script>

<style scoped>

</style>