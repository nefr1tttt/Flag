class Countries {
    fOpen = async (url) => {
       let response = await fetch(url);
       
       if(response.ok) return response.json()
       else throw new Error(Bu manzildagi ma'lumotga ulanolmadik ${url})
   }
   getCountryAll = () => this.fOpen(https://restcountries.com/v3.1/all);
   // getCountry = () => this.fOpen()
}
const countryData = new Countries();
function renderCountry () {
// console.log(countryCard)
countryData.getCountryAll().then((data,i) => {
   console.log(data)
   // console.log(data[0].capital[0])
   data.forEach(item => {
       const countryCards = document.querySelector('.country-cards');
       const countryCard = document.createElement('a');
       countryCard.classList.add('country-card')
       countryCard.setAttribute('href','country-inner.html')
       console.log(item)
       countryCard.innerHTML = `
               <img src="${item.flags.png}" alt="Country germany" class="country-card__img">
               <div class="country-card__body">
               <h3 class="country-title">${item.altSpellings[1]}</h3>
               <p class="country-text"><b>Population:</b> ${item.capitalInfo['latlng']}</p>
               <p class="country-text"><b>Region:</b> ${item.region}</p>
               <p class="country-text"><b>Capital:</b> ${item.capital}</p>
               </div>
       `
       countryCards.append(countryCard)
   });
})
}
renderCountry()