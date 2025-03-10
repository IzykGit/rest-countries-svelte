

export async function getAllCountries() {


    try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        return await response.json();

    }
    catch (e) {
        console.log(e)
        throw new Error(`Failed to fetch from api ${e}`)
    }
}