<script lang="ts">
  import { onMount } from "svelte";
  import { getAllCountries } from "../api/fetchCountries.js";
  import Nav from "../components/nav/+page.svelte";

  let allCountries = $state([]);

  let inputValue = $state("");

  onMount(async () => {
    allCountries = await getAllCountries();
  });

  $effect(() => {
    console.log(allCountries);
  });

  $effect(() => {
    console.log(inputValue);
  });
</script>

<div>
  <header>
    <Nav />
  </header>

  <main>
    <div>
      <form>
        <input type="text" bind:value={inputValue} />
      </form>

      <select>
        <option>placeholder</option>
        <option>placeholder</option>
        <option>placeholder</option>
        <option>placeholder</option>
        <option>placeholder</option>
      </select>
    </div>

    <section>
      {#if allCountries.length > 0}
        {#each allCountries as country}
          <div>
            <img src={country.flags.png} alt={country.name.common} />
            <div>
              <h2>{country.name.common}</h2>
              <div>
                <p>
                  <span class="font-bold">Population:</span>
                  {country.population}
                </p>
                <p><span>Region:</span> {country.region}</p>
                <p><span>Capital:</span> {country.capital}</p>
              </div>
            </div>
          </div>
        {/each}
      {/if}
    </section>
  </main>
</div>
