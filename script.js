'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
////////////////////////////

/* const getCountryData = function (country) {
const request = new XMLHttpRequest();
request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
request.send();
console.log(request.responseText);
request.addEventListener('load',function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    const html = `<article class="country">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
    `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};
getCountryData('thailand');
getCountryData('germany');  */
///////////////call back hell////////////////////////
const renderCountry = function(data, className = '') {
  const html = `<article class="country ${className}">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
    </article>
      `;
  
      countriesContainer.insertAdjacentHTML('beforeend', html);
      /* countriesContainer.style.opacity = 1; */
};
/* const getCountryAndNeighbour = function (country) {
 ///AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
  request.send();
  console.log(request.responseText);
  
  request.addEventListener('load',function () {
  
      const [data] = JSON.parse(this.responseText);
      console.log(data);
    //renderCountry 1
     renderCountry(data);
     //renderCountry 2
    const [neighbour] = data.borders;
    const data2 = JSON.parse(this.responseText);
    console.log(data2);
    if(!neighbour) return;
     //AJAX call country 2
  const request2 = new XMLHttpRequest();
  request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbour}`);
  request2.send();
  request2.addEventListener('load', function () {
        const data2 = JSON.parse(this.responseText);
        console.log(data2);
        renderCountry(data2, 'neighbour');
      });
    });
  };
  getCountryAndNeighbour('netherland');  */
 /////fetch API
 const renderError = (msg) => {
   countriesContainer.insertAdjacentText('beforeend', msg);
  /*  countriesContainer.style.opacity = 1; */
 }

 const getJSON = (url, errorMsg = 'Something went wrong') => {
   return fetch(url).then(res => {
    if(!res.ok)
    throw new Error(`${errorMsg}(${res.status})`)
  
    return res.json();
   })
 };

 const getCountryDataFetch = (country) => {
       getJSON(`https://restcountries.eu/rest/v2/name/${country}`, 'Country not found')

       .then(data => {renderCountry(data[0])

        const neighbour = data[0].borders[0];

        if(!neighbour) throw new Error('No neighbour found');
        ///fetch nested inside must be returned
        return getJSON(`https://restcountries.eu/rest/v2/alpha/${neighbour}`,'Country not found')
      })
      
      .then(data => renderCountry(data, 'neighbour'))
      .catch(err => {
        (`${err}`)
        renderError(`Something went wrong ${err.message}`);
      })
      .finally(() => {
        countriesContainer.style.opacity = 1;
      })
      
};

btn.addEventListener('click', () => {
  getCountryDataFetch('australia');
});




/* const requestIP = () => {
  fetch(`demo.json`)
   .then(res => res.json())
   .then(data => {console.log(data)})
   .catch(err => {console.log(`${err}somthing went wrong`)})
  }

   requestIP();  */
  ////coding chellege



  const getGeolocation = (lat, lng) => {fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.error(`${err}`))
        }

  getGeolocation();