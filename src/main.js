import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/css/index.css'
import * as Material from './assets/js/Material'
import * as Geometry from './assets/js/Geometry'
import * as Light from './assets/js/Light'
import * as Utils from './assets/js/Utils'

const app = createApp(App);

app.config.globalProperties.$Material = Material;
app.config.globalProperties.$Geometry = Geometry;
app.config.globalProperties.$Light = Light;
app.config.globalProperties.$Utils = Utils;
app.use(router)
app.use(ElementPlus)
app.mount('#app')
