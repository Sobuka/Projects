import { createElement, ScriptableScene } from 'metaverse-api'

const networkHz = 6
const interval = 1000 / networkHz

export default class Robortsurvillance extends ScriptableScene<any, { t: number }> {
  state = { t: 0 }

  timeout = setInterval(() => {
    this.setState({
      t: performance.now() * 0.01
    })
  }, interval)

  sceneWillUnmount() {
    clearInterval(this.timeout)
  }
	
    async render() {

		const {t}	= this.state
		const r 	= 10	
		const x 	= r*Math.sin(t)
		const y 	= 8
		const z 	= r*Math.cos(t)
		var bx		= 0
		var by      = 0
		var m       = 0
				
		switch (Math.floor(Math.random() * 2)){

			case 0: bx = 0
					by = 90
					m = 0					
					break
			case 1: by = 90
					bx = 90
					m = 2
					break
		}
				
        return (
            <scene>
                <gltf-model
                    id="robot"
                    position={{x, y, z}}
					rotation={{ x: 40*Math.cos(t), y: 40*Math.sin(t), z: 0 }}					
					scale={0.042}
                    src="models/scene.gltf"
                />
                <gltf-model
                    position={{ x: 0, y: 0, z: 0 }}
					scale={0.042}
                    src="models2/scene.gltf"
					id="cartoonBuilding"
                />
                <gltf-model
                    id="bird"
                    position={{x:-18+m, y:10, z:3}}
					rotation={{ x: bx, y: by, z: 0 }}	
                    scale={0.5}
                    src="FlyingBird1/scene.gltf"
                    skeletalAnimation={
                        [
                            { clip: "bird_flap_wings", weight: 0.5, playing: true }
                        ]
                    }
                />				
            </scene>			
        );
    }
}