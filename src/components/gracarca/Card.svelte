<script>
    import { base } from "$app/paths";
    export let article;
    // console.log(article);
</script>

<div>
    <h6>
        <a href= "{article.slug}" target="_self"> {article.slug} {article.title}</a>
    </h6>
    <p>
        {article.description}
    </p>
</div>

<style>

</style>