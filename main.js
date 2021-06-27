import './style.css'

/** @type {HTMLButtonElement */
var menu = document.getElementById("menu-button")
var mode = document.getElementById("mode-button")
var navlist = document.getElementById("nav-list")
var currentMode = "sunny";

mode.childNodes[1].name = currentMode;
menu.onclick = () => {
  navlist.className = "list-visible"
  menu.disabled = true
}

mode.onclick = () => {
  currentMode =  currentMode === "sunny" ? "moon" : "sunny";
  mode.childNodes[1].name = currentMode;
  console.log("modechanged")
}
// import * as Three from 'three'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
// import { Scene } from 'three';
// const scene = new Three.Scene()
// const camera = new Three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
// const renderer = new Three.WebGLRenderer({
//   canvas: document.getElementById("canvas")
// })

// var controls = new OrbitControls(camera, renderer.domElement)

// renderer.setPixelRatio(window.devicePixelRatio)
// renderer.setSize(window.innerWidth, window.innerHeight)
// camera.position.setZ(30)
// scene.background = new Three.Color(0xffffff)

// /** @type {Three.Mesh} */
// const loader = new GLTFLoader()
// function modelLoader(url) {
//   return new Promise((resolve, reject) => {
//     loader.load(url, data=> resolve(data.scene), null, reject);
//   });
// }
// var vedikDevsObject = await modelLoader('sq.glb');
// scene.add(vedikDevsObject)

// const light = new Three.AmbientLight(0xffffff, 2)
// // const helper = new Three.PointLightHelper(light, 1, 0x000000)
// scene.add(light)

// function render() {
//   renderer.render(scene, camera)
//   vedikDevsObject.rotateY(0.01)
//   requestAnimationFrame(render)
//   controls.update()
// }

// render()


