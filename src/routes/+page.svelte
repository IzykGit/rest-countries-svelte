<script lang="ts">
  import { onMount } from "svelte";
  import { getAllCountries } from "../api/fetchCountries.js";
  import Nav from "../components/nav/+page.svelte";
  import SearchIcon from "../assets/magnifying-glass.png";
  import { goto } from "$app/navigation";
  import { countryData } from "$lib/country.js";

  let allCountries: any = $state([]);

  let filterDropDown = $state(false);

  let filterByText = $state("");
  let filterByRegion = $state("Filtered By Region");

  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

  onMount(async () => {
    allCountries = await getAllCountries();
  });

  const filteredCountries = $derived(() => {
    let result = allCountries;

    if (filterByText) {
      result = result.filter((country: any) =>
        country.name.common.toLowerCase().includes(filterByText.toLowerCase())
      );
    }

    if (filterByRegion !== "Filtered By Region") {
      result = result.filter(
        (country: any) =>
          country.region.toLowerCase() === filterByRegion.toLowerCase()
      );
    }

    return result;
  });

  function navigateToCountry(country: object) {
    countryData.set(country);
    goto("/country");
  }
</script>

<div>
  <header>
    <Nav />
  </header>

  <main class="max-w-[1400px] mx-auto px-12">
    <div class="flex flex-col gap-4 md:flex-row justify-between my-12">
      <form
        class="py-4 px-6 w-full md:w-96 text-md rounded-md shadow-lg flex items-center gap-4"
      >
        <img src={SearchIcon} alt="Search Icon" class="w-5 h-5" />
        <input
          type="text"
          bind:value={filterByText}
          placeholder="Search for a country"
          class="focus:outline-0"
        />
      </form>

      <div class="relative">
        <button
          class="shadow-lg py-4 px-6 w-60 h-16 flex items-center justify-between cursor-pointer mb-1"
          onclick={() => (filterDropDown = !filterDropDown)}
          >{filterByRegion}
          <span class="ms-2 w-2 [&>svg]:h-5 [&>svg]:w-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clip-rule="evenodd"
              />
            </svg>
          </span></button
        >
        <ul
          class={`bg-white rounded-md absolute z-10 py-6 px-6 ${filterDropDown ? "flex h-fit" : "hidden h-0"} flex-col gap-4 w-full overflow-hidden`}
        >
          {#each regions as region}
            <li class="w-full">
              <button
                class="cursor-pointer duration-200 hover:font-bold"
                onclick={() => (
                  (filterByRegion = region), (filterDropDown = !filterDropDown)
                )}
              >
                {region}
              </button>
            </li>
          {/each}
        </ul>
      </div>
    </div>

    <section class="grid grid-cols-[repeat(auto-fit,minmax(288px,1fr))] gap-8">
      {#each filteredCountries() as country}
        <button
          onclick={() => navigateToCountry(country)}
          class="shadow-md cursor-pointer hover:scale-[1.01] duration-200 w-72 h-fit flex flex-col justify-between text-text-dark font-Nunito"
        >
          <img
            src={country.flags.png}
            alt={country.name.common}
            class="h-46 w-full"
          />
          <div class="h-fit flex flex-col px-8 py-12 text-left">
            <h2 class="text-xl font-bold mb-4">{country.name.common}</h2>
            <div>
              <p class="font-light">
                <span class="font-medium">Population:</span>
                {country.population}
              </p>
              <p class="font-light">
                <span class="font-medium">Region:</span>
                {country.region}
              </p>
              <p class="font-light">
                <span class="font-medium">Capital:</span>
                {country.capital}
              </p>
            </div>
          </div>
        </button>
      {/each}
    </section>
  </main>
</div>
