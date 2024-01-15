<script lang="ts">
	import type { PageData } from "./$types";

    export let data: PageData

</script>

<ul data-sveltekit-preload-data="false">
<li><a href="/?base=1">base=1</a></li>
<li><a href="/?base=2">base=2</a></li>
<li><a href="/?foo=1">foo=2</a></li>
<li><a href="/?foo=1">foo=1</a></li>
<li><a href="/?foo=2">foo=2</a></li>
<li><a href="/?bar=1">bar=1</a></li>
<li><a href="/?bar=2">bar=2</a></li>

<li><a href="/?base=1&foo=1&bar=1"> base=1 foo=1 bar=1</a></li>
<li><a href="/?base=2&foo=1&bar=2"> base=2 foo=1 bar=2</a></li>
<li><a href="/?base=1&foo=2&bar=1"> base=1 foo=2 bar=1</a></li>
<li><a href="/?base=2&foo=2&bar=2"> base=2 foo=2 bar=2</a></li>

<li><a href="/?foo=1&bar=1"> foo=1 bar=1</a></li>
<li><a href="/?foo=1&bar=2"> foo=1 bar=2</a></li>
<li><a href="/?foo=2&bar=1"> foo=2 bar=1</a></li>
<li><a href="/?foo=2&bar=2"> foo=2 bar=2</a></li>
</ul>
<pre>{JSON.stringify(data, null, 2)}</pre>