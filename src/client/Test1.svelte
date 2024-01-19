<script lang="ts">
//console.log("#about");
//
async function handleClick() {
console.log('clicked');
  try{  
    const url = "https://kuc-hono-47svelte.pages.dev/api/test1"
		const res = await fetch(url);
    const json = await res.json()
console.log(json);
  } catch (error) {
    console.error(error);
  }   
}
</script>

<!-- -->
<div>
  <hr />
  <h1>Test1</h1>
  <hr />
  <button on:click={handleClick} class="btn btn-primary">Test</button>
</div>

<style>
</style>
