<script>
	import { Canvas } from '@threlte/core'
    import { T, OrbitControls } from '@threlte/core'
	import { GLTF, useGltfAnimations } from '@threlte/extras'
    import { spring } from 'svelte/motion'
    import { degToRad } from 'three/src/math/MathUtils'

    export let cameraSettings;

    export let camera
    $: console.log(camera);

</script>

<div class="canvascontainer">
	<Canvas>
        <T.PerspectiveCamera bind:ref={camera} makeDefault position={cameraSettings.pos} rotation={cameraSettings.rot} fov={75} far={7500}>
            {#if cameraSettings.orbitcontrols == true}
                <OrbitControls/>
            {/if}
        </T.PerspectiveCamera>
        
        <GLTF url="/models/Gracarca_SkyView_Weg_Tafeln_2023-03-22.gltf"/>
	</Canvas>
</div>


<style>
    .canvascontainer {
        height: 500px;
    }
</style>