<script>
  const { current } = $props();
  import darkIcon from "../../assets/night-mode.png";

  $effect(() => {
    console.log(current);
  });
</script>

<nav class="h-20 border-b">
  <div
    class="max-w-[1400px] px-12 mx-auto flex items-center justify-between h-full"
  >
    <p class="text-xl font-bold">Where in the world?</p>

    <button class="cursor-pointer">
      <img src={darkIcon} alt="Icon" class="w-6 h-6" />
    </button>
  </div>
</nav>
