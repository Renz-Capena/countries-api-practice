const btn = document.querySelector("#showCtry");
const result = document.querySelector("#result");

btn.addEventListener('click',function(){
    result.innerHTML = null

    let xhr = new XMLHttpRequest();

    xhr.open('GET','https://restcountries.com/v3.1/all',true)

    xhr.onload = function(){
        if(xhr.status == 200){
            // console.log('success')

            let countries =  JSON.parse(this.response)
            // console.log(countries)

            countries.forEach(async country => {
                // console.log(country.flags.png)
                const countryCard = document.createElement('div')
                countryCard.classList.add('card')

                const countryName = document.createElement('div')
                countryName.classList.add('card-body')
                countryName.textContent = await country.name.common

                const flag = document.createElement('img')
                flag.classList.add('card-img-top')
                flag.src = await country.flags.png

                const col = document.createElement('div')
                col.classList.add('col')

                countryCard.append(flag,countryName)

                col.append(countryCard)

                result.append(col)
                

            });
        }
    }

    xhr.send()
})


const searchBtn = document.querySelector("#searchInput");

searchBtn.addEventListener('keyup',function(){

    result.innerHTML = null

    const word = this.value;

    // console.log(word);

    const countryApi = new XMLHttpRequest();

    countryApi.open('GET','https://restcountries.com/v3.1/all',true);

    countryApi.onload = function(){

        if(countryApi.status == 200){
            
            let countries =  JSON.parse(this.response)

            countries.forEach(country=>{

                if(word == country.name.common){
                    
                    const countryCard = document.createElement('div')
                    countryCard.classList.add('card')

                    const countryName = document.createElement('div')
                    countryName.classList.add('card-body')
                    countryName.textContent = country.name.common

                    const flag = document.createElement('img')
                    flag.classList.add('card-img-top')
                    flag.src = country.flags.png

                    const col = document.createElement('div')
                    col.classList.add('col')

                    countryCard.append(flag,countryName)

                    col.append(countryCard)

                    result.append(col)

                }

            })

        }
        
    }

    countryApi.send()
})