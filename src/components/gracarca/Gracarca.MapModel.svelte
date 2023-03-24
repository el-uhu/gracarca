<script>
	import { Canvas } from '@threlte/core'
    import { T, OrbitControls } from '@threlte/core'
	import { GLTF, useGltfAnimations } from '@threlte/extras'
    import { spring } from 'svelte/motion'
	import { degToRad } from 'three/src/math/MathUtils'

    let pos = [-113.6, 1500, -37.7]
    let rot = [degToRad(-90), degToRad(0), degToRad(0)]

    export let camera
    $: console.log(camera);

</script>

<div class="canvascontainer">
	<Canvas>
        <T.PerspectiveCamera bind:ref={camera} makeDefault position={pos} rotation={rot} fov={75} far={7500}>
            <OrbitControls maxPolarAngle={degToRad(80)} enableZoom={true}} />
        </T.PerspectiveCamera>
        
        <GLTF url="/models/Gracarca_SkyView_Weg_Tafeln_2023-03-22.gltf"/>
	</Canvas>
</div>


<style>
    .canvascontainer {
        height: 500px;
    }
</style>