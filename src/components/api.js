import axios from "axios";


const searchImages = async(term) => {

    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers:{
            Authorization:"Client-ID _-Ml_rNcAZD9wFSwz91cGf4QGwHWgf2JNmjCvqvwrFU"
        },
        params:{
            query:term
        }
    });

    console.log(response.data.results);
    return response.data.results;

};

export default searchImages;