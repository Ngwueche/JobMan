import { useState, useEffect } from "react";
import axios from "axios";
// import { RAPID_API_KEY } from "react-native-dotenv";

// const rapidApiKey = RAPID_API_KEY;
const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const axios = require("axios");

    const options = {
        method: "GET",
        url: `https://jsearch.p.rapidapi.com/${endpoint}`, //customized to allow individual search.
        headers: {
            "X-RapidAPI-Key": 'f168d02dd4mshd4c0f5056fc9016p1d4307jsn960637302e62',
            "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
        },
        params: {...query},
    };
    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await axios.request(options);
            setData(response.data.data);
            isLoading(false);
        } catch (error) {
            setError(error);
            alert("Something went wrong, Check your internet connection.");
        } finally {
            setIsLoading(false);
        }
    };
    useEffect (()=>{
        fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }
    return { data, isLoading, error, refetch}
};
export default useFetch;