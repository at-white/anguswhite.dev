<script lang="ts">
  import 'mdsvex';
	import '../app.css';

	let { children } = $props();
</script>

<title>anguswhite.dev</title>
<div class="flex flex-col h-screen justify-between">
  <nav class="flex gap-x-8 px-6 py-6" aria-label="Navbar">
    <a href="/" class="text-sm/6 font-semibold text-gray-900">About</a>
    <a href="/posts" class="text-sm/6 font-semibold text-gray-900">Posts</a>
  </nav>
  <main class="flex-grow prose prose-stone prose-lg prose-headings:font-[Bentham] mx-auto p-4">
    {@render children()}
  </main>
  <footer class="mx-auto flex gap-x-6 place-content-center px-3 py-4 static bottom-0 w-full" aria-label="Footer">
    <a href="mailto:me@anguswhite.dev" class="text-sm/6 font-semibold text-gray-900">Email Me</a>
  </footer>
</div>
