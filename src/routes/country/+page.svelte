<script lang="ts">
  import { countryData } from "$lib/country.js";
  import Nav from "../../components/nav/+page.svelte";

  let data = $countryData;
</script>

<div>
  <header>
    <Nav />
  </header>
  <main>
    {#if data}
      <img src={data.flags.png} alt="" />
      <h1>{data.name.common}</h1>
    {/if}
  </main>
</div>
