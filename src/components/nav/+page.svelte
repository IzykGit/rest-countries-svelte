<script>
  const { current } = $props();

  $effect(() => {
    console.log(current);
  });
</script>

<nav class="h-20">
  <p>Where in the world?</p>
</nav>
