"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");
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

/* countriesContainer.style.opacity = 1; */

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

const getJSON = (url, errorMsg = "Something went wrong") => {
  return fetch(url).then((res) => {
    if (!res.ok) throw new Error(`${errorMsg}(${res.status})`);

    return res.json();
  });
};

/* const getCountryDataFetch = (country) => {
  getJSON(
    `https://restcountries.eu/rest/v2/name/${country}`,
    "Country not found"
  )
    .then((data) => {
      renderCountry(data[0]);

      const neighbour = data[0].borders[0];

      if (!neighbour) throw new Error("No neighbour found");
      ///fetch nested inside must be returned
      return getJSON(
        `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
        "Country not found"
      );
    })

    .then((data) => renderCountry(data, "neighbour"))
    .catch((err) => {
      `${err}`;
      renderError(`Something went wrong ${err.message}`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener("click", () => {
  getCountryDataFetch("australia");
}); */

/* const requestIP = () => {
  fetch(`demo.json`)
   .then(res => res.json())
   .then(data => {console.log(data)})
   .catch(err => {console.log(`${err}somthing went wrong`)})
  }

   requestIP();  */
////coding chellege

/* const whereAmI = (lat, lng) => {fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
        .then(res => res.json())
        .then(data => {console.log(data)
         console.log(`You are in ${data.city} ${data.region} ${data.country}`)
         });
        }

  whereAmI(13.7563, 100.5018);  */

/*  const whereAmI2 = (lat, lng) => {
    fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
        .then(res => {
            if(!res.ok) throw new Error (`Problem with geocoding ${res.status}`)
            return res.json()
        })
        .then(data => {
            console.log(data);
            console.log(`You are in ${data.country}`)

            return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`)
        })
        .then(res => {
          if (!res.ok) 
          throw new Error (`Country not found ${res.status}`)

          return res.json()
          .then(data => renderCountry(data[0]))
        })
        .catch(err => {console.error(`${err.message}`)
         })
        }

        whereAmI2(52.508, 13.381);  */

/* console.log('test start');
        setTimeout(() => console.log('3 second'), 3);
        Promise.resolve('Resolve promise 1')
        .then(res => console.log(res));
        console.log('Test end');
 */

/*  const lottary = new Promise((resolve, reject) => {
      console.log('Lottary draw is happening');

      setTimeout(() => {
        if(Math.random() >= 0.5) {
          resolve('YOU WIN')
        } else {
          reject(new Error('YOU LOSE'))
        }
      }, 2000);
     });

     lottary.then(res => console.log(res)).catch(err => console.error(err)); */

/*  const wait = (seconds) => {
       return new Promise((resolve) => {
         setTimeout(resolve, seconds * 1000) 
       })
     };

  wait(3).then(() => {console.log(`I waited for 1 seconds`);
  return wait(1)
  })
  .then(() => {console.log(`I waited for 2 seconds`);
  return wait(1)
  })
  .then(() => {console.log(`I waited for 3 seconds`);
  return wait(1)
  })
  .then(() => console.log(`I waited for 4 second`));
 
Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('Problem!')).catch(x => console.error(x));
 */
/* 
const getPostion = () =>
  new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });

getPostion().then((pos) => console.log(pos));

const whereAmI2 = () => {
  getPostion()
    .then((pos) => {
      const { latitude: lat, longtude: lng } = pos.coords;

      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })
    .then((res) => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      console.log(`You are in ${data.country}`);

      return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
    })
    .then((res) => {
      if (!res.ok) throw new Error(`Country not found ${res.status}`);

      return res.json().then((data) => renderCountry(data[0]));
    })
    .catch((err) => {
      console.error(`${err.message}`);
    });
};

btn.addEventListener("click", whereAmI2); */
const renderCountry = function (data, className = "") {
  const html = `<article class="country ${className}">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)}</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
    </article>`;

  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

const renderError = (msg) => {
  countriesContainer.insertAdjacentText("beforeend", msg);
  countriesContainer.style.opacity = 1;
};
/* const getCountryData2 = (country) => {
  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((data) => renderCountry(data[0]));
};

getCountryData2("portugal");
 */
const getPost = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const AsyncCountry = async (country) => {
  try {
    //Geolocation
    const pos = await getPost();
    const { latitude: lat, longtude: lng } = pos.coords;

    //Reverse Geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    const dataGeo = await resGeo.json();
    console.log(dataGeo);
    if (!resGeo.ok) throw new Error(`Problem getting location data`);
    //
    const res = await fetch(`https://restcountries.eu/rest/v2/name/${country}`);
    if (!res.ok) throw new Error(`Problem getting country`);

    console.log(res);
    const data = await res.json();
    renderCountry(data[0]);
  } catch (err) {
    console.error(`${err}`);
    renderError(`Something went wrong${err}`);
  }
};

AsyncCountry("thailand");
