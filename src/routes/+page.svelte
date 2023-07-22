<script>
	import { onMount } from "svelte";
	import { error, redirect } from '@sveltejs/kit';
	let loading = true;
	export let data
	

	onMount(() => {
		//Load stuff
		
	loading = false;
	});
</script>
{#if loading}
	<div class="container h-full mx-auto flex justify-center items-center">
			<figure class="progress-radial progress-radial relative overflow-hidden w-20 " data-testid="progress-radial" role="meter" aria-labelledby="" aria-valuenow="0" aria-valuetext="Indeterminate Spinner" aria-valuemin="0" aria-valuemax="100"><svg viewBox="0 0 512 512" class="rounded-full animate-spin"><circle class="progress-radial-track fill-transparent stroke-primary-500/30" stroke-width="150" r="256" cx="50%" cy="50%"></circle><circle class="progress-radial-meter fill-transparent transition-[stroke-dashoffset] duration-200 -rotate-90 origin-[50%_50%] stroke-primary-500" stroke-width="150" r="256" cx="50%" cy="50%" style="stroke-dasharray: 1608.5, 1608.5; stroke-dashoffset: 1206.37;"></circle></svg></figure>
	</div>
{/if}
<div class="container h-full mx-auto flex justify-center">
	<div class="space-y-5 mt-20%">
		<h1 class="text-center h1">Let's get started!</h1>
		<div class="text-center space-x-5">
			<a href="/login" type="button" class="btn variant-filled font-bold">Login</a>
			<a  href="/signup" type="button" class="btn variant-filled font-bold">Sign up</a>
		</div>
	</div>
</div>
