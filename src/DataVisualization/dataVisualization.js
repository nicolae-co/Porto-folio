const populationBtn = document.querySelector('.population-btn');
const languagesBtn = document.querySelector('.languages-btn');

function topTenCountries(arr) {
  let worldPopulation = 0;
  const newCountriesArr = [];

  for (let country of arr) {
    newCountriesArr.push({
      name: country.name,
      population: country.population,
    });
    worldPopulation += country.population;
  }

  const topTenPopultation = newCountriesArr
    .sort((a, b) => b.population - a.population)
    .slice(0, 9);

  topTenPopultation.unshift({ name: 'World', population: worldPopulation });

  return topTenPopultation;
}

function mostSpokenLanguages(arr) {
  const count = {};
  const languages = arr.map(item => item.languages);
  languages.forEach(language => {
    language.forEach(lang => {
      if (count[lang.name]) {
        count[lang.name]++;
      } else {
        count[lang.name] = 1;
      }
    });
  });

  const countArr = [];
  for (let language in count) {
    countArr.push({ language: language, count: count[language] });
  }

  const sortedCountArr = countArr.sort((a, b) => b.count - a.count);

  return sortedCountArr.slice(0, 10);
}

const fetchData = async function () {
  const countriesAPI = 'https://restcountries.com/v2/all';
  try {
    const response = await fetch(countriesAPI);
    const countries = await response.json();
    return countries;
  } catch (err) {
    console.log(err);
  }
};
const countriesListPop = document.querySelector('.countriesPopulation');
const countriesListLang = document.querySelector('.countriesLanguages');

async function displayData() {
  try {
    const countries = await fetchData();

    const topPopulation = topTenCountries(countries);

    const canvasPopulation = document
      .getElementById('chartPopulation')
      .getContext('2d');

    new Chart(canvasPopulation, {
      type: 'bar',
      data: {
        labels: topPopulation.map(item => item.name),
        datasets: [
          {
            label: false,
            data: topPopulation.map(item => item.population),
            backgroundColor: 'orange',
            borderWidth: 1,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false, // hide legend labels
          },
        },
        indexAxis: 'y',
      },
    });

    const topTenLanguages = mostSpokenLanguages(countries);

    const canvasLanguages = document
      .getElementById('chartLanguages')
      .getContext('2d');

    new Chart(canvasLanguages, {
      type: 'bar',
      data: {
        labels: topTenLanguages.map(item => item.language),
        datasets: [
          {
            label: false,
            data: topTenLanguages.map(item => item.count),
            backgroundColor: 'orange',
            borderWidth: 1,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false, // hide legend labels
          },
        },
        indexAxis: 'y',
      },
    });
  } catch (err) {
    console.log(err);
  }
}

displayData();

populationBtn.addEventListener('click', function () {
  countriesListPop.style.display = 'block';
  countriesListLang.style.display = 'none';
  countriesListPop.style.width = '800px';
  countriesListPop.style.height = '400px';
});

languagesBtn.addEventListener('click', function () {
  countriesListLang.style.display = 'block';
  countriesListPop.style.display = 'none';
  countriesListLang.style.width = '800px';
  countriesListLang.style.height = '400px';
});
