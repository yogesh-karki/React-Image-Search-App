import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',

    headers: {
        Authorization: 'Client-ID f0rUqOA73pQroPJLKnPZqeRv4dYpPnKzozbeQTgtxpU'
    }
});

