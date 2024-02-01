<script>
    import { page } from '$app/stores'
    export let thislang
    export let targetlang
    let pagepath = $page.url.pathname

    function linkLanguage(thislang, targetlang){
		if (pagepath === "/") {
			return pagepath + targetlang + '/'
		} else {
			return pagepath.replace('/' + thislang+'/', '/' + targetlang +'/')
		}
	}

</script>

<li><a target="_self" href="{linkLanguage(thislang, targetlang)}" class:active="{thislang === targetlang}"> {targetlang}</a></li>

<style>
    li {
       display: inline; 
    }

    a {
		text-decoration: none;
		border-bottom: none;
		color: var(--color-t-blue);
	}

    a.active {
		font-weight: 900;
		color: var(--color-h-blue);
	}

</style>