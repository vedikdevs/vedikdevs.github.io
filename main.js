import './style.css'
import * as Three from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
const scene = new Three.Scene()
const camera = new Three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
const renderer = new Three.WebGLRenderer({
  canvas: document.getElementById("canvas")
})

renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)
camera.position.setZ(30)

const geometry = new Three.TorusGeometry(10, 3, 30, 30)
const material = new Three.MeshStandardMaterial({ color: 0xFF0000 })
const torus = new Three.Mesh(geometry, material)
scene.add(torus)
const pointLight = new Three.PointLight(0xffffff, 1)
const ambientLight = new Three.AmbientLight(0xffffff, 0.3)
pointLight.position.set(5, 5, 5)
const pointLightHelper = new Three.PointLightHelper(pointLight)
const gridHelper = new Three.GridHelper(200, 20)
scene.add(pointLight, ambientLight, pointLightHelper, gridHelper)
const controls = new OrbitControls(camera, renderer.domElement)
const range = 200;

function addStar() {
  const g = new Three.SphereGeometry(0.25, 10, 10)
  const m = new Three.MeshStandardMaterial({ color: 0xFFFFFF })
  const star = new Three.Mesh(g, m)
  var x = Three.MathUtils.randFloatSpread(range)
  var y = Three.MathUtils.randFloatSpread(range)
  var z = Three.MathUtils.randFloatSpread(range)
  star.position.set(x, y, z)
  scene.add(star)
}

Array(300).fill().forEach(()=>{
  addStar()
})

const spaceTexture = new Three.TextureLoader().load('space.jpg')
scene.background = spaceTexture;

function render() {
  renderer.render(scene, camera)
  torus.rotateX(0.01)
  torus.rotateY(0.01)
  torus.rotateZ(0.01)
  controls.update()
  requestAnimationFrame(render)
}

render()


