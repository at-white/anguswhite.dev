<script lang="ts">
  import 'mdsvex';
	import '../app.css';

	let { children } = $props();
</script>

<title>anguswhite.dev</title>
<nav class="mx-auto flex place-items-center justify-between p-6 lg:px-8" aria-label="Global">
	<div class="flex gap-x-12">
		<a href="/" class="-m-1.5 p-1.5">
			<span class="sr-only">Your Company</span>
			<img
				class="h-8 w-auto"
				src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
				alt=""
			/>
		</a>

		<a href="/" class="text-sm/6 font-semibold text-gray-900">About</a>
		<a href="/posts" class="text-sm/6 font-semibold text-gray-900">Posts</a>
	</div>
</nav>
<main class="prose prose-stone prose-lg prose-headings:font-[Bentham] mx-auto">
	{@render children()}
</main>
<footer>
	<div class="mx-auto w-full max-w-screen-xl">
		<a href="mailto:me@anguswhite.dev" class="text-sm/6"> Email Me </a>
	</div>
</footer>
