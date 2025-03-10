<script lang="ts">
  import { countryData } from "$lib/country.js";
  import Nav from "../../components/nav/+page.svelte";

  let data = $state({});

  $effect(() => {
    countryData.subscribe((value) => (data = value));
  });
</script>

<div>
  <header>
    <Nav />
  </header>
  <main>
    {#if data}
      <img src={data.name.common} alt="" />
    {/if}
  </main>
</div>
