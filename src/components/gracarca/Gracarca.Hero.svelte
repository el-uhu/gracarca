<script>
    export let title;
    export let heroImage;

</script>

<div id="hero" style="background-image:url({heroImage})" class="has-fixed-background">
    <h2>{title}</h2>
    <!-- <img src={heroImage} alt=""> -->
</div>

<style>
    #hero {
        /* height: 200px; */
        padding: 2em;
        background-color: var(--color-fg);
    }
</style>