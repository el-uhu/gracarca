<script>
    export let camera
      
</script>

<div id="sketchfab-container">
    <div class="sketchfab-embed-wrapper"> 
        <iframe title="Gracarca_SkyView_Weg_Tafeln_2023-03-22" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/1b157d9bde36479a841b2018e5d89c69/embed?autostart=1&camera=0&annotations_visible=1&dnt=0{camera}" width=100% height=400px> </iframe>
    </div>
</div>

<style>
    #sketchfab-container{
        display: grid;
        grid-template-columns: 1fr 4fr 1fr;
        justify-items: center;
    }

    .sketchfab-embed-wrapper {
        justify-self: stretch;
        grid-column: 2;
        margin-left:1em;
        margin-right: 1em;
    }

    @media (max-width: 768px){
        #sketchfab-container{
            grid-template-columns: 1fr;
        }

        .sketchfab-embed-wrapper{
            grid-column: 1;
        }
    }


</style>