//This is the libaray I am importing into my workspace.
import { createElement, ScriptableScene } from "metaverse-api";

//This section contains my initial variables. Both the networkHz and interval variable help determine the speed this extinct bird is moving.
//Variables x, y, and z reflects the initial position my bird will start on.
//Variable m reflects the steps my bird takes from it's previous position on the x, y, and z coordinate plane. 
const networkHz = 6
const interval = 1000 / networkHz
var	  x = Math.floor(Math.random() * 6)
var	  y = Math.floor(Math.random() * 6)
var   z = Math.floor(Math.random() * 6)
var   m = Math.floor(Math.random() * 6)

/**
  *  This section of my code uses a base class from DCL. That class is called ScriptableScene as you see below.
*/
export default class Robortsurvillance extends ScriptableScene<any, { t: number }> {
  state = { t: 0 }
  
 /**
   * This section of the code is like a loop that is set to position the extinct bird on my plane. 
   * This loop runs at a stop time determined by the interval variable as declared on the top.  
 */ 		
 /**
   * Here is making t a randome variable which I do not really need because I have several random variables in the top.
   * But to make this project work I needed something here. So I just made t a random variable.
*/ 
  timeout = setInterval(() => {   
    this.setState({
      t:  Math.floor(Math.random() * 6)
    })
  }, interval)


 /**
   * This section is supposedly called before a scene is destroyed. Perform any necessary cleanup in this
   * method, such as cancelled network requests, or cleaning up any elements created in
   * sceneDidMount. I am not too clear on this as I really started testing to see if this works. But when you are diving into this type
   * stuff you have to trust to some level what the DCL api is doing.
*/  
  sceneWillUnmount() {
    clearInterval(this.timeout)
  }
 

 /**
   * Here is the interesting part of the code. x, y, and z reflect all axis. I have each poistion fixed to the boundaries of my plane so that the bird does not fly away.
   * m is the incremental position I am moving the bird. You guys can play around with these variables to get an idea of how this works.
*/ 
    async render() {
		
		const  {t} = this.state

		switch (t) {
			
			case 0:
				if (x > 19){
					x = 19
					break				
				}else{
					x = x + m
					break				
				}
			case 1:
				if (x <= -19){
					x = -19
					break				
				}else{
					x = x - m
					break				
				}
			case 2:
				if (y > 30){
					y = 25
					break				
				}else{
					y = y + m
					break				
				}
			case 3:
				if (y <= 1){
					y = 1
					break				
				}else{
					y = y - m
					break				
				}
			case 4:
				if (z > -5){
					z = 8
					break				
				}else{
					z = z + m
					break				
				}
			case 1:
				if (z <= -25){
					z = -23
					break				
				}else{
					z = z - m
					break				
				}
		}

 /**
   * In this section I am showing the bird at different intervals within the screen based on the above variables at their respective intervals.
   * The skelectalAnimation portion came from the scene.gltf file. I had to open it in notepad to find that particular section. Now I did not animate this bird. This bird
   * was created and animated by Charlie Tinley. He uploaded this on Sketchfab. So all I did was download the bird and find where the animation was present in the
   * scene.gltf file. And that section of code was on line 222. Okay guys that is all I have for today. I will have the source code up on GitHub. In the next project which 
   * will be project 18, I will fit this bird into the flying robot and cartoon house scene. Now this code is not perfect. You guys can download it on your local machine, 
   * tweak it, and figure it out from there so you can make it better and also get an idea of how you want to improve your land on DCL. 
   * And if you have any questions, or comments please leave it on YouTube or Steemit and I try to reply back.
*/ 		
        return (
            <scene>
                <gltf-model
                    id="bird"
                    position={{x, y, z}}
					rotation={{ x: t*10*Math.cos(t), y: t*10*Math.sin(t), z: 0 }}	
                    scale={0.5}
                    src="models/scene.gltf"
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
