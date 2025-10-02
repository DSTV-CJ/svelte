<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<!-- Simple navigation header -->
<header class="bg-white shadow-sm border-b">
	<nav class="container mx-auto px-4 py-4">
		<div class="flex items-center justify-between">
			<a href="/" class="text-2xl font-bold text-gray-900">Cullen Jewellery</a>
		</div>
	</nav>
</header>

<!-- Main content area -->
<main>
	{@render children?.()}
</main>

<!-- Simple footer -->
<footer class="bg-gray-50 border-t mt-12">
	<div class="container mx-auto px-4 py-8 text-center text-gray-600">
		<p>&copy; 2025 Cullen Jewellery. All rights reserved.</p>
	</div>
</footer>
