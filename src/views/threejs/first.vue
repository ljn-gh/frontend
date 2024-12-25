<template>
  <div style="display: flex">
    <div id="webgl" style="margin-top: 200px;margin-left: 20px;"></div>
    <div id="webgl2" style="margin-top: 200px;margin-left: 20px;"></div>
    <div id="webgl3" style="margin-top: 200px;margin-left: 20px;"></div>
  </div>
</template>
<script>

/* eslint-disable */
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
export default {
  name: "first",
  data() {
    return {
    }
  },
  mounted() {
    this.first();
    this.second();
    this.third();
  },
  methods: {
    first() {
      // 创建一个场景
      const scene = new this.THREE.Scene();

      //创建一个长方体几何对象Geometry
      const geometry = new this.THREE.BoxGeometry(50, 50, 50);
      //创建一个材质对象Material
      const material = new this.THREE.MeshBasicMaterial({
        color: 0xff0000,//0xff0000设置材质颜色为红色
        transparent:true,//开启透明
        opacity:0.3,//设置透明度
      });
      // 两个参数分别为几何体geometry、材质material
      const mesh = new this.THREE.Mesh(geometry, material); //网格模型对象Mesh

      //设置网格模型在三维空间中的位置坐标，默认是坐标原点
      mesh.position.set(0,0,0);

      scene.add(mesh);

      // AxesHelper：辅助观察的坐标系
      const axesHelper = new this.THREE.AxesHelper(300);
      scene.add(axesHelper);

      // 30:视场角度, width / height:Canvas画布宽高比, 1:近裁截面, 3000：远裁截面

      // 定义相机输出画布的尺寸(单位:像素px)
      const width = 400; //宽度
      const height = 400; //高度
      const camera = new this.THREE.PerspectiveCamera(30, width / height, 1, 9000);
      camera.position.set(200, 200, 200);
      camera.lookAt(0,0,0);//指向mesh对应的位置

      // 创建渲染器对象
      const renderer = new this.THREE.WebGLRenderer();
      renderer.setSize(width, height);

      renderer.render(scene, camera); //执行渲染操作

      document.getElementById("webgl").appendChild(renderer.domElement);

      // 设置相机控件轨道控制器OrbitControls
      const controls = new OrbitControls(camera, renderer.domElement);
      // 如果OrbitControls改变了相机参数，重新调用渲染器渲染三维场景
      controls.addEventListener('change', function () {
        renderer.render(scene, camera); //执行渲染操作
      });//监听鼠标、键盘事件
    },
    second() {
      // 创建一个场景
      const scene = new this.THREE.Scene();

      //创建一个长方体几何对象Geometry
      const geometry = new this.THREE.BoxGeometry(30, 30, 30);
      //创建一个材质对象Material
      const material = new this.THREE.MeshLambertMaterial({
        color: 0xff0000,//0xff0000设置材质颜色为红色
        transparent:true,//开启透明
        opacity:0.3,//设置透明度
      });
      // 两个参数分别为几何体geometry、材质material
      const mesh = new this.THREE.Mesh(geometry, material); //网格模型对象Mesh

      //设置网格模型在三维空间中的位置坐标，默认是坐标原点
      mesh.position.set(0,0,0);

      scene.add(mesh);

      // AxesHelper：辅助观察的坐标系
      const axesHelper = new this.THREE.AxesHelper(300);
      scene.add(axesHelper);


      /**点光源
      
     
      const pointLight = new this.THREE.PointLight('#ffffff', 2);
      pointLight.decay = 0.0;//设置光源不随距离衰减
      //点光源位置
      pointLight.position.set(100, 130, 200);//点光源放在x轴上
      scene.add(pointLight);
      // 光源辅助观察
      const pointLightHelper = new this.THREE.PointLightHelper(pointLight, 10);
      scene.add(pointLightHelper);
      **/

      /**
       * 环境光
      const pointLight = new this.THREE.AmbientLightProbe('#ffffff', 2);
      scene.add(pointLight);
       *
       */

          // 平行光
      const directionalLight = new this.THREE.DirectionalLight(0xffffff, 2);
      // 设置光源的方向：通过光源position属性和目标指向对象的position属性计算
      directionalLight.position.set(80, 50, 30);
      // 方向光指向对象网格模型mesh，可以不设置，默认的位置是0,0,0
      directionalLight.target = mesh;
      scene.add(directionalLight);
      // DirectionalLightHelper：可视化平行光
      const dirLightHelper = new this.THREE.DirectionalLightHelper(directionalLight, 5,0xff0000);
      scene.add(dirLightHelper);
      
      
      // 30:视场角度, width / height:Canvas画布宽高比, 1:近裁截面, 3000：远裁截面

      // 定义相机输出画布的尺寸(单位:像素px)
      const width = 400; //宽度
      const height = 400; //高度
      const camera = new this.THREE.PerspectiveCamera(30, width / height, 1, 9000);
      camera.position.set(200, 200, 200);
      camera.lookAt(0,0,0);//指向mesh对应的位置

      // 创建渲染器对象
      const renderer = new this.THREE.WebGLRenderer();
      renderer.setSize(width, height);

      renderer.render(scene, camera); //执行渲染操作

      document.getElementById("webgl2").appendChild(renderer.domElement);

      // 设置相机控件轨道控制器OrbitControls
      const controls = new OrbitControls(camera, renderer.domElement);
      // 如果OrbitControls改变了相机参数，重新调用渲染器渲染三维场景
      controls.addEventListener('change', function () {
        renderer.render(scene, camera); //执行渲染操作
      });//监听鼠标、键盘事件
    },
    third() {
      // 创建一个场景
      const scene = new this.THREE.Scene();

      //创建一个长方体几何对象Geometry
      const geometry = new this.THREE.BoxGeometry(30, 30, 30);
      //创建一个材质对象Material
      const material = new this.THREE.MeshLambertMaterial({
        color: 0xff0000,//0xff0000设置材质颜色为红色
        transparent:true,//开启透明
        opacity:0.3,//设置透明度
      });
      // 两个参数分别为几何体geometry、材质material
      const mesh = new this.THREE.Mesh(geometry, material); //网格模型对象Mesh

      //设置网格模型在三维空间中的位置坐标，默认是坐标原点
      mesh.position.set(0,0,0);

      scene.add(mesh);

      // AxesHelper：辅助观察的坐标系
      const axesHelper = new this.THREE.AxesHelper(300);
      scene.add(axesHelper);


      /**点光源


       const pointLight = new this.THREE.PointLight('#ffffff', 2);
       pointLight.decay = 0.0;//设置光源不随距离衰减
       //点光源位置
       pointLight.position.set(100, 130, 200);//点光源放在x轴上
       scene.add(pointLight);
       // 光源辅助观察
       const pointLightHelper = new this.THREE.PointLightHelper(pointLight, 10);
       scene.add(pointLightHelper);
       **/

      /**
       * 环境光
       const pointLight = new this.THREE.AmbientLightProbe('#ffffff', 2);
       scene.add(pointLight);
       *
       */

          // 平行光
      const directionalLight = new this.THREE.DirectionalLight(0xffffff, 2);
      // 设置光源的方向：通过光源position属性和目标指向对象的position属性计算
      directionalLight.position.set(80, 50, 30);
      // 方向光指向对象网格模型mesh，可以不设置，默认的位置是0,0,0
      directionalLight.target = mesh;
      scene.add(directionalLight);
      // DirectionalLightHelper：可视化平行光
      const dirLightHelper = new this.THREE.DirectionalLightHelper(directionalLight, 5,0xff0000);
      scene.add(dirLightHelper);


      // 30:视场角度, width / height:Canvas画布宽高比, 1:近裁截面, 3000：远裁截面

      // 定义相机输出画布的尺寸(单位:像素px)
      const width = 400; //宽度
      const height = 400; //高度
      const camera = new this.THREE.PerspectiveCamera(30, width / height, 1, 9000);
      camera.position.set(200, 200, 200);
      camera.lookAt(0,0,0);//指向mesh对应的位置

      // 创建渲染器对象
      const renderer = new this.THREE.WebGLRenderer();
      renderer.setSize(width, height);
      
      document.getElementById("webgl3").appendChild(renderer.domElement);

      // 渲染循环
      const clock = new this.THREE.Clock();
      function render() {
        const spt = clock.getDelta()*1000;//毫秒
        console.log('两帧渲染时间间隔(毫秒)',spt);
        console.log('帧率FPS',1000/spt);
        renderer.render(scene, camera); //执行渲染操作
        mesh.rotateY(0.01);//每次绕y轴旋转0.01弧度
        requestAnimationFrame(render);//请求再次执行渲染函数render，渲染下一帧
      }
      render();
    }
  }
}
</script>
<style scoped>

</style>