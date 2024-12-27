import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: '/three',
        name: 'index',
        component: () => import('@/views/threejs/index.vue'),
        children: [
          {
            path: '/three/01',
            name: '01index',
            component: () => import('@/views/threejs/01/index.vue'),
            children: [
                {
                  path: '/three/01/demo',
                  name: '01demo',
                  component: () => import('@/views/threejs/01/demo.vue')
                },
                {
                  path: '/three/01/MeshLamberMaterial',
                  name: 'MeshLamberMaterial',
                  component: () => import('@/views/threejs/01/MeshLamberMaterial.vue')
                },
                {
                  path: '/three/01/MeshPhongMaterial',
                  name: 'MeshPhongMaterial',
                  component: () => import('@/views/threejs/01/MeshPhongMaterial.vue')
                },
                {
                  path: '/three/01/Geometry',
                  name: 'Geometry',
                  component: () => import('@/views/threejs/01/Geometry.vue')
                },
              {
                  path: '/three/01/WebGLAttr',
                  name: 'WebGLAttr',
                  component: () => import('@/views/threejs/01/WebGLAttr.vue')
                }
            ]
          }
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
