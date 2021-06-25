import './style.css'
import {Scene, WebGLRenderer, PerspectiveCamera} from 'three'

const scene = new Scene()
const camera = new PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000)
const renderer = WebGLRenderer({
  canvas: document.getElementById("canvas")
})



 