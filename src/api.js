import axios from 'axios';
const searchImages= async(term)=>{
 const response= await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
         Authorization:'Client-ID Wh0UKqszHx-wZOFD2N9V3LT1stVWupHORVphCgZiqto'
        },
        params:{
          query: term,
        }
    });
    console.log(response);
    return response.data.results;
};
export default searchImages;