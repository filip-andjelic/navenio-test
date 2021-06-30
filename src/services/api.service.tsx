import axios from "axios";

const serverURL = 'https://swapi.dev/api/people';
const UNAUTHORIZED = 401;

axios.interceptors.response.use(
    (response) => response,
    (error) => {
        const { status } = error.response;

        if (status === UNAUTHORIZED) {
            // @ts-ignore
            window.location = "/";
        }

        return Promise.reject(error);
    }
);

const ApiService = {
    people: (name: string): Promise<object> => {
        return axios({
            url: `${serverURL}?search=${name}`,
            method: "GET"
        })
            .then((res) => res.data)
            .catch((e) => console.log('Search failed - ', e));
    },
};
