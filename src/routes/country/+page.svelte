<script lang="ts">
  import { goto } from "$app/navigation";
  import { countryData } from "$lib/country.js";
  import Nav from "../../components/nav/+page.svelte";

  import Back from "../../assets/back.png";

  function returnHome() {
    goto("/home");
  }

  console.log($countryData);
</script>

<div>
  <header>
    <Nav />
  </header>
  <main class="flex gap-20 flex-col max-w-[1400px] mx-auto px-12">
    {#if $countryData}
      <div class="w-full">
        <button
          class="shadow-md h-12 w-40 cursor-pointer flex items-center justify-center gap-4"
          onclick={returnHome}
        >
          <img src={Back} alt="" class="w-4 h-4" />
          Back
        </button>
      </div>
      <div class="flex flex-col md:flex-row gap-16">
        <img
          src={$countryData.flags.png}
          alt={$countryData.name.common}
          class="h-80"
        />

        <section class="py-12 flex flex-col gap-4">
          <h1 class="font-bold text-2xl">{$countryData.name.common}</h1>

          <div>
            <p>
              <span>Native Name:</span>{$countryData.name.nativeName.official}
            </p>
            <p><span>Population:</span>{$countryData.population}</p>
            <p><span>Region:</span>Europe</p>
            <p><span>Sub Region:</span></p>
            <p><span>Capital:</span></p>
            <p><span>Top Level Domain:</span></p>
            <p><span>Currencies:</span></p>
            <p><span>Languages:</span></p>
          </div>
        </section>
      </div>
    {/if}
  </main>
</div>
