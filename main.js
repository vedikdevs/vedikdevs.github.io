import './style.css'
import './grid.css'
import './card.css'
import './members.css'
import * as Three from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
const scene = new Three.Scene()

async function all() {

  const camera = new Three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  const renderer = new Three.WebGLRenderer({
    canvas: document.getElementById("canvas"), antialias: true
  })

  var controls = new OrbitControls(camera, renderer.domElement)

  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth / 4, window.innerHeight / 4)
  camera.position.setZ(15)
  // camera.position.setY(10)
  scene.background = new Three.Color(0x121212)

  /** @type {Three.Mesh} */
  const loader = new GLTFLoader()
  function modelLoader(url) {
    return new Promise((resolve, reject) => {
      loader.load(url, data => resolve(data.scene), null, reject);
    });
  }
  /** @type {Three.BoxGeometry} */
  var vedikDevsObject = await modelLoader('sq.glb');
  vedikDevsObject.position.setY(-3)
  vedikDevsObject.position.setZ(5)
  // vedikDevsObject.position.setX(-5)

  scene.add(vedikDevsObject)

  const light = new Three.AmbientLight(0xffffff, 2)
  // const helper = new Three.PointLightHelper(light, 1, 0x000000)
  scene.add(light)

  function render() {
    renderer.render(scene, camera)
    vedikDevsObject.rotateY(0.01)
    requestAnimationFrame(render)
    controls.update()
  }

  render()
}

all()




/** @type {HTMLButtonElement */
var menu = document.getElementById("menu-button")
var mode = document.getElementById("mode-button")
var navlist = document.getElementById("nav-list")
var currentMode = "sunny";
var closeModal = document.querySelector(".close-modal")
var closeButton = document.querySelector(".close-button")

var colors = {
  color1: "#FFC300",
  color2: "#FF3006",
  color2dark: "#df2500",
  colordark: "rgb(17, 17, 17)",
  colorlight: "rgb(202, 202, 202)",
  colorlight2: "rgb(247, 247, 247)",
  colordark2: "#333333",
  dark: "rgb(36, 36, 36)",
  light: "rgb(240, 240, 240)",
  yellow: "rgb(255, 197, 6)",
  red: "rgb(231, 27, 0)",
  scene: 0x111111,
}


mode.childNodes[1].name = currentMode;

function closeNavbar() {
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

function changeTheme() {
  if (currentMode === "moon") {
    document.documentElement.style.setProperty("--dark", colors.light)
    document.documentElement.style.setProperty("--light", colors.dark)
    document.documentElement.style.setProperty("--color-dark", colors.colorlight2)
    document.documentElement.style.setProperty("--color-light", colors.colordark)
    document.documentElement.style.setProperty("--color-light-2", colors.colordark2)
    document.documentElement.style.setProperty("--color-dark-2", colors.colorlight2)
    scene.background = new Three.Color(0xf7f7f7)
  }

  if (currentMode === "sunny") {
    document.documentElement.style.setProperty("--light", colors.light)
    document.documentElement.style.setProperty("--dark", colors.dark)
    document.documentElement.style.setProperty("--color-light", colors.colorlight)
    document.documentElement.style.setProperty("--color-dark", colors.colordark)
    document.documentElement.style.setProperty("--color-light-2", colors.colorlight2)
    document.documentElement.style.setProperty("--color-dark-2", colors.colordark2)
    scene.background = new Three.Color(0x111111)

  }
}

mode.onclick = () => {
  currentMode = currentMode === "sunny" ? "moon" : "sunny";
  mode.childNodes[1].name = currentMode;
  changeTheme();
  // console.log("modechanged")
}

changeTheme();
