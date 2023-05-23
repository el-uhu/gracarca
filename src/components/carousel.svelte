<script>
  import emblaCarouselSvelte from 'embla-carousel-svelte'
  import { base } from "$app/paths";
  let galleryContent;
</script>

<div class="embla" use:emblaCarouselSvelte>
  <div class="embla__container">
    {#each {galleryContent} as p }
      <div class="embla__slide">
        <img src={p.path} alt={p.description}>
        <p>{p.description}</p>
      </div>
    {/each}
  </div>
</div>

<style>
  .embla {
    overflow: hidden;
  }
  .embla__container {
    display: flex;
  }
  .embla__slide {
    flex: 0 0 100%;
    min-width: 0;
  }
</style>
