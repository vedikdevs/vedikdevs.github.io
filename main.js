import './style.css'

/** @type {HTMLButtonElement */
var menu = document.getElementById("menu-button")
var mode = document.getElementById("mode-button")
var navlist = document.getElementById("nav-list")
var currentMode = "moon";
var closeModal = document.querySelector(".close-modal")
var closeButton = document.querySelector(".close-button")


mode.childNodes[1].name = currentMode;

function closeNavbar(){
  navlist.className = "nav-list";
  menu.disabled = false;
  closeModal.style.visibility = "hidden";
}
closeModal.onclick = () => {
  closeNavbar();
};
closeButton.onclick = () => {
  closeNavbar();
}

menu.onclick = () => {
  closeModal.style.visibility = "visible";
  navlist.className = "list-visible"
  menu.disabled = true
}

mode.onclick = () => {
  currentMode =  currentMode === "sunny" ? "moon" : "sunny";
  mode.childNodes[1].name = currentMode;
  // console.log("modechanged")
}
// import * as Three from 'three'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
// const scene = new Three.Scene()
// const camera = new Three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
// const renderer = new Three.WebGLRenderer({
//   canvas: document.getElementById("canvas")
// })

// // var controls = new OrbitControls(camera, renderer.domElement)

// renderer.setPixelRatio(window.devicePixelRatio)
// renderer.setSize(window.innerWidth, window.innerHeight)
// camera.position.setZ(15)
// // camera.position.setY(10)
// scene.background = new Three.Color(0x121212)

// /** @type {Three.Mesh} */
// const loader = new GLTFLoader()
// function modelLoader(url) {
//   return new Promise((resolve, reject) => {
//     loader.load(url, data=> resolve(data.scene), null, reject);
//   });
// }
// /** @type {Three.BoxGeometry} */
// var vedikDevsObject = await modelLoader('sq.glb');
// vedikDevsObject.position.setY(-3)
// vedikDevsObject.position.setZ(5)
// // vedikDevsObject.position.setX(-5)

// scene.add(vedikDevsObject)

// const light = new Three.AmbientLight(0xffffff, 2)
// // const helper = new Three.PointLightHelper(light, 1, 0x000000)
// scene.add(light)

// function render() {
//   renderer.render(scene, camera)
//   vedikDevsObject.rotateY(0.01)
//   requestAnimationFrame(render)
//   // controls.update()
// }

// render()


