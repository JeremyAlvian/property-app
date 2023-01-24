import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

//     'X-RapidAPI-Key': 'f6d3d9e37amshd8fe203ee2beb82p1880d9jsn84bddebcd4ba',
//     'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
//   }

export const fetchApi = async(url) => {
    const { data } = await axios.get((url), {
        headers:{
            'X-RapidAPI-Key': 'f6d3d9e37amshd8fe203ee2beb82p1880d9jsn84bddebcd4ba',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    });

    return data;
}