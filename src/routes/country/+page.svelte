<script lang="ts">
  import { goto } from "$app/navigation";
  import { countryData } from "$lib/country.js";
  import Nav from "../../components/nav/+page.svelte";

  import Back from "../../assets/back.png";

  function returnHome() {
    goto("/");
  }

  const langkey = Object.keys($countryData.languages)[0];
  const language = $countryData.languages[langkey];
  console.log(language);

  console.log($countryData);
</script>

<div>
  <header>
    <Nav />
  </header>
  <main class="flex gap-20 flex-col max-w-[1400px] mx-auto px-12 py-12">
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
          class="h-72 md:h-96 w-full md:w-1/2"
        />

        <section class="py-4 flex flex-col gap-4">
          <h1 class="font-bold text-2xl">{$countryData.name.common}</h1>

          <ul class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <li>
              <p>
                <span class="font-medium text-lg">Native Name:</span>
                {$countryData.name.official}
              </p>
            </li>
            <li>
              <p>
                <span class="font-medium text-lg">Population:</span>
                {$countryData.population}
              </p>
            </li>
            <li>
              <p>
                <span class="font-medium text-lg">Region:</span>
                {$countryData.region}
              </p>
            </li>
            <li>
              <p>
                <span class="font-medium text-lg">Sub Region:</span>
                {$countryData.subregion}
              </p>
            </li>
            <li>
              <p>
                <span class="font-medium text-lg">Capital:</span>
                {$countryData.capital[0]}
              </p>
            </li>
            <li>
              <p>
                <span class="font-medium text-lg">Top Level Domain:</span>
                {$countryData.tld[0]}
              </p>
            </li>
            <li>
              <p>
                <span class="font-medium text-lg">Currencies:</span>
                {$countryData.currencies.CHF?.name}
              </p>
            </li>
            <li>
              <p>
                <span class="font-medium text-lg">Languages:</span>
                {language}
              </p>
            </li>
          </ul>

          <div class="mt-6 flex flex-wrap items-center gap-4">
            <p class="font-medium text-lg mr-4">Border Countries:</p>

            {#each $countryData.borders as border}
              <p class="p-4 shadow-md">{border}</p>
            {/each}
          </div>
        </section>
      </div>
    {/if}
  </main>
</div>
