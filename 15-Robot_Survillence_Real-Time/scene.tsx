import { createElement, ScriptableScene } from 'metaverse-api'

const networkHz = 6
const interval = 1000 / networkHz

export default class Robortsurvillance extends ScriptableScene<any, { t: number }> {
  state = { t: 0 }

  timeout = setInterval(() => {
    this.setState({
      t: performance.now() * 0.001
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
            </scene>			
        );
    }
}