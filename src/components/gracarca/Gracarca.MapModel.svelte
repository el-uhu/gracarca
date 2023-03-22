<script>
	import { Canvas, AmbientLight, OrbitControls, PerspectiveCamera } from '@threlte/core'
	import { GLTF, useGltfAnimations } from '@threlte/extras'

    let pos = {
        x: -275,
        y: 1750,
        z: -50
    };

    let rot = {
        x: -270,
        y: 0,
        z: 0
    };

</script>

<div class="canvascontainer">
	<Canvas>
        <!-- <Environment path="/hdr/" files="shanghai_riverside_1k.hdr" /> -->

        <PerspectiveCamera 
            position={pos},
            rotation={rot},
            fov={75},
            near={0.01},
            far={10000}>
            <OrbitControls enableDamping />
        </PerspectiveCamera>
        
        <AmbientLight />
        
        <GLTF 
            url="/models/Gracarca_SkyView_Weg_Tafeln_2023-03-22.gltf"
            useDraco="true" />
	</Canvas>
</div>


<style>
    .canvascontainer {
        height: 500px;
    }
</style>