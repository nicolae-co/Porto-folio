const countries = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombi',
  'Comoros',
  'Congo (Brazzaville)',
  'Congo',
  'Costa Rica',
  "Cote d'Ivoire",
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'East Timor (Timor Timur)',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia, The',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Korea, North',
  'Korea, South',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia and Montenegro',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Togo',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe',
];

const titleCount = document.querySelector('.title--count');
titleCount.innerHTML = `<span>Total Number of countries: </span> <span style="color:orangered;">${countries.length}</span>`;

const searchCount = document.querySelector('.search--count');

const btnLetter = document.querySelector('.btn--letter');
const btnWord = document.querySelector('.btn--word');
const btnSort = document.querySelector('.btn--sort');
const btnSearch = document.querySelector('.btn--search');

const input = document.querySelector('.input');

const resultsContainer = document.querySelector('.results');

// countries.forEach(country => {
//   const countryEl = document.createElement('div');
//   countryEl.textContent = country;
//   resultsContainer.appendChild(countryEl);
// });

const addCountry = function (arr) {
  arr.forEach(country => {
    const countryEl = document.createElement('div');
    countryEl.textContent = country;
    countryEl.className = 'country';
    resultsContainer.appendChild(countryEl);
  });
};

let currentFilter = 'start';

function searchCountry() {
  const value = input.value.toLowerCase();
  let filteredCountries = [];
  if (currentFilter === 'start') {
    filteredCountries = countries.filter(country =>
      country.toLowerCase().startsWith(value)
    );
    searchCount.innerHTML = `<span>Countries start with </span><span style="color:blue;">${value.toUpperCase()}</span><span>: </span> <span style="color:deepskyblue;">${
      filteredCountries.length
    }</span>`;
  } else if (currentFilter === 'contains') {
    filteredCountries = countries.filter(country =>
      country.toLowerCase().includes(value)
    );
    searchCount.innerHTML = `<span>Countries containing </span><span style="color:blue;">${value.toUpperCase()}</span><span>: </span> <span style="color:deepskyblue;">${
      filteredCountries.length
    }</span>`;
  }
  resultsContainer.innerHTML = '';
  addCountry(filteredCountries);
}

btnLetter.addEventListener('click', function () {
  currentFilter = 'start';
  btnLetter.style.backgroundColor = 'salmon';
  btnWord.style.backgroundColor = '';
});
btnWord.addEventListener('click', function () {
  currentFilter = 'contains';
  btnWord.style.backgroundColor = 'salmon';
  btnLetter.style.backgroundColor = '';
});
btnSearch.addEventListener('click', searchCountry);

let sortAscending = false;

btnSort.addEventListener('click', function () {
  const countryEl = resultsContainer.getElementsByClassName('country');
  const sortedCountries = Array.from(countryEl).map(el => el.textContent);

  sortedCountries.sort((a, b) => {
    if (sortAscending) {
      return a.localeCompare(b);
    } else {
      return b.localeCompare(a);
    }
  });

  resultsContainer.innerHTML = '';

  addCountry(sortedCountries);

  sortAscending = !sortAscending;
});
