const btn = document.getElementById('calculateWeight');
const weightCalc = document.getElementById('weight');
const imgPlanet = document.getElementById('planetImg');
const badSelect = document.querySelector('.badSelect');
const badInput = document.querySelector('.badInput');
const result = document.querySelector('.result');

function calculateWeight() {
  const massInput = parseFloat(document.querySelector('#massInput').value);

  const planetSelect = document.getElementById('planets');
  const selectedPlanet = planetSelect.options[planetSelect.selectedIndex].value;

  const gravityConstants = {
    mercury: 0.38,
    venus: 0.91,
    earth: 1,
    mars: 0.38,
    jupiter: 2.34,
    saturn: 1.06,
    uranus: 0.92,
    neptune: 1.19,
  };
  const planetsImgs = {
    mercury: './planetsSvg/mercury.svg',
    venus: './planetsSvg/venus.svg',
    earth: './planetsSvg/earth.svg',
    mars: './planetsSvg/mars.svg',
    jupiter: './planetsSvg/jupiter.svg',
    saturn: './planetsSvg/saturn.svg',
    uranus: './planetsSvg/uranus.svg',
    neptune: './planetsSvg/neptune.svg',
  };

  const weight = massInput * gravityConstants[selectedPlanet];
  const planetImg = planetsImgs[selectedPlanet];

  if (selectedPlanet === 'select') {
    badSelect.classList.add('active');
    badInput.classList.remove('active');
    badInput.classList.add('hidden');
    result.classList.add('hidden');
  } else if (massInput === '' || isNaN(massInput)) {
    badSelect.classList.remove('active');
    badSelect.classList.add('hidden');
    badInput.classList.add('active');
    result.classList.add('hidden');
  } else {
    result.classList.remove('hidden');
    badSelect.classList.remove('active');
    badInput.classList.remove('active');
    badInput.classList.add('hidden');
    weightCalc.textContent = `${weight.toFixed(2)} kg`;
    imgPlanet.src = planetImg;
  }
}

btn.addEventListener('click', calculateWeight);
