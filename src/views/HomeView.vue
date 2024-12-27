<template>
  <div class="home">
    <el-row>
      <div class="home-header">
        <img src="@/assets/logo.png" />
      </div>
    </el-row>
    <el-row class="home-menu">
      <el-col span="4" style="width: 170px;height: 100%">
        <el-menu
            default-active="2"
            class="df-menu"
            router
        >
          <el-sub-menu index="1">
            <template #title>
              <el-icon><location /></el-icon>
              <span>01 快速入门</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1" :route="{path: '/three/01/demo'}">示例</el-menu-item>
              <el-menu-item index="1-2" :route="{path: '/three/01/MeshLamberMaterial'}">漫反射材质</el-menu-item>
              <el-menu-item index="1-3" :route="{path: '/three/01/MeshPhongMaterial'}">高光材质</el-menu-item>
              <el-menu-item index="1-4" :route="{path: '/three/01/Geometry'}">其他几何体</el-menu-item>
              <el-menu-item index="1-5" :route="{path: '/three/01/WebGLAttr'}">WebGL属性</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="1-4">
              <template #title>item four</template>
              <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-menu-item index="2">
            <el-icon><icon-menu /></el-icon>
            <span>Navigator Two</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <el-icon><document /></el-icon>
            <span>Navigator Three</span>
          </el-menu-item>
          <el-menu-item index="4">
            <el-icon><setting /></el-icon>
            <span>Navigator Four</span>
          </el-menu-item>
        </el-menu>
        </el-col>
        <el-col span="20" style="width: calc(100% - 170px);height: 100%;overflow-y: scroll">
          <router-view />
        </el-col>
      </el-row>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'HomeView',
  components: {
  }
}
</script>
