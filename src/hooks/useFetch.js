import { useCallback, useEffect, useState } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    console.log('useFetch');

    const fetchData = useCallback(async () => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Ha ocurrido un error al consumir la API');
                const data = await response.json();
                setData(data);
            }
        } catch (error) {
            console.log(error);
            setData([]);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        console.log('useEffect');
        fetchData();
    }, []);

    return { data, loading, error };
}