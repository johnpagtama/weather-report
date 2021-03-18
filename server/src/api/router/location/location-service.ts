import axios from 'axios';

export const location = async (currentLocUrl: string) => axios.get(currentLocUrl).then((res) => ({
        city: res.data.location.city,
        country: res.data.location.country
    })
);