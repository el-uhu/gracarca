<script>
    import { base } from "$app/paths";
    export let article;
    // console.log(article);
</script>

<div class="card-container">
    <div class="icon-left">
        <img src="/img/icons/{article.slug}.png"/>        
    </div>
    <div class="text-right">
        <h6>
            <a href= "{article.slug}" target="_self"> {article.slug} {article.title}</a>
        </h6>
        <p>
            {article.description}
        </p>
    </div>
</div>

<style>
    .card-container{
        display: flex;
    }

    .icon-left{
        display:flex;
        justify-content: center;
        width: 25%;
        vertical-align: middle;
        align-items: center;
    }

    .text-right{
        width: 70%;
        align-items: right;
    }

</style>