import $ from 'chirashi-imports'

import THREE from 'three'
var OrbitControls = require('three-orbit-controls')(THREE)

import WAGNER from '@alex_toudic/wagner'

export class World {
    constructor(width, height, postProcessing, data, gui, debug) {
        this.width = width
        this.height = height

        this.debug = debug
        this.postProcessing = postProcessing
        this.data = data

        //init world camera
        this.camera = new THREE.PerspectiveCamera(45, width / height, 1, 8000)
        this.camera.position.z = 1200

        //orbit control
        if (debug) this.controls = new OrbitControls(this.camera)

        //init renderer
        this.renderer = new THREE.WebGLRenderer({antialisaing: true})
        this.renderer.setSize(this.width, this.height)
        this.renderer.setPixelRatio(window.devicePixelRatio)
        this.renderer.setClearColor(0xffffff)
    }
}
