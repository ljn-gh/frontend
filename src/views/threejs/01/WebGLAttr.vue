<template>
  <div class="three-container">
    <div id="normal" title="正常"></div>
    <div id="antialias" title="设置渲染器锯齿属性"></div>
    <div id="setPixelRatio" title="设备像素比"></div>
    <div id="setClearColor" title="背景色"></div>
  </div>
</template>
<script>
import * as THREE from "three";

export default {
  name: "WebGLAttr",
  methods:{
    normal(domId,render){
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
      const renderer = new THREE.WebGLRenderer({antialias:true});
      renderer.setSize(width, height);
      renderer.render(scene, camera);
      render && render(renderer);
      document.getElementById(domId).appendChild(renderer.domElement);
      this.$Utils.addOrbitControls(scene,camera,renderer);
    },
  },
  mounted() {
    this.normal('normal');
    this.normal('antialias',render => render.antialias = true)
    this.normal('setPixelRatio',render => {
      render.setPixelRatio(2);
      render.antialias = true;
    });
    this.normal('setClearColor',render => render.setClearColor('#444444',1));
  },
}
</script>
<style scoped>

</style>