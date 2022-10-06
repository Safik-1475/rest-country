function allCountriesLoad() {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => displayAllCountries(data))
};

function displayAllCountries(countries) {
    // console.log(countries);
    const container = document.getElementById('container');
    // console.log(countriesContainer);
    countries.forEach(country => {
        // console.log(country);
        const div = document.createElement('div');
        div.classList.add('border-2', 'p-4', 'overflow-hidden', 'box-content', 'rounded-lg')
        div.innerHTML = `
            <img class='max-w-sm' src=${country.flags.png} alt="Country Flag">
            <h3 class='text-center uppercase py-4 font-bold' >${country?.name?.common}</h3>
            <p><span class='font-bold' >Capital City : ${country?.capital}, Area : ${country.area ? country.area : `No Border Of Any Country`}</span></p>
            <p>Population : ${country.population}</p>
            `;
        container.appendChild(div);
    })

};
allCountriesLoad();