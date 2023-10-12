<script>
    import { base } from '$app/paths';
	import { Canvas } from '@threlte/core'
    import { T, OrbitControls } from '@threlte/core'
	import { GLTF, useGltfAnimations } from '@threlte/extras'
    import { spring } from 'svelte/motion'
    import { degToRad } from 'three/src/math/MathUtils'
    import { TextureLoader } from 'three';
    import { useLoader } from '@threlte/core';

    export let cameraSettings;
    let camera

</script>

<div class="canvascontainer">
	<Canvas>
        <T.PerspectiveCamera bind:ref={camera} makeDefault position={cameraSettings.pos} rotation={cameraSettings.rot} fov={75} far={7500}>
            {#if cameraSettings.orbitcontrols == false}
                <OrbitControls/>
            {/if}
        </T.PerspectiveCamera>
        
        <GLTF url={base + "/models/Gracarca_SkyView_Weg_Tafeln_2023-03-22.gltf"}/>

	</Canvas>
</div>


<style>
    .canvascontainer {
        height: 500px;
    }
</style>