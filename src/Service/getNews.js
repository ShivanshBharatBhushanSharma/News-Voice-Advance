import axios from "axios";

export function getNews(category = 'general', country = 'ae' , language = 'ar', source = 'abc-news', term = 'bitcoin', sflag = 'False', tflag = 'True' ) { // deafult removed in function
    const API_Key = `7bdfb1b10aca41c6becea47611b7c35a`;// mynewsapi-> `3e4fc8f113534c7d8b6e608132314081`; `00125696449f44c0a72b69f068ae7d11`; `3e4fc8f113534c7d8b6e608132314081`;
    var API_Endpoint= ``;
    if(sflag === 'True'){
        API_Endpoint = `https://newsapi.org/v2/top-headlines?sources=${source}`;
    }
    else if(tflag === 'True')
    {
        API_Endpoint = `https://newsapi.org/v2/everything?q=${term}`;
    }
    else if(category === '' || country === '' || language === '')
    {
        if(category !== '' && country !== '')
        API_Endpoint = `https://newsapi.org/v2/top-headlines?country=${country}&language=ar&category=${category}`;
        else if(country !== '' && language !== '')
        API_Endpoint = `https://newsapi.org/v2/top-headlines?country=${country}&language=${language}&category=general`;
        else if(language !== '' && category !== '')
        API_Endpoint = `https://newsapi.org/v2/top-headlines?country=ae&language=${language}&category=${category}`; 
        else if(category !== '')
        API_Endpoint = `https://newsapi.org/v2/top-headlines?country=ae&language=ar&category=${category}`; 
        else if(country !== '')
        API_Endpoint = `https://newsapi.org/v2/top-headlines?country=${country}&language=ar&category=general`;
        else if(language !== '')
        API_Endpoint = `https://newsapi.org/v2/top-headlines?country=ae&language=${language}&category=general`;
        else
        API_Endpoint = `https://newsapi.org/v2/top-headlines?country=ae&language=ar&category=general`;     
    }
    else{
        API_Endpoint = `https://newsapi.org/v2/top-headlines?country=${country}&language=${language}&category=${category}`;
    }
        return axios.get(`${API_Endpoint}&apiKey=${API_Key}`)  //return mentioned
        // .then((response) => {
        //     console.log(response.data.articles)
        // })
        // .catch((err) => {
        //     console.log(err)
        // })
}
