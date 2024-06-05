import { useEffect, useState } from 'react';

const useFetchData = url => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await fetch(url, {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                });
                const result = await res.json();
                if (!res.ok) {
                    throw new Error(result.message + "❌");
                }
                setData(result.data);
            } catch (err) {
                setError(err);
            } finally {
                setTimeout(() => setLoading(false), 500);
            }
        };

        fetchData();
    }, [url]);

    return {
        data,
        loading,
        error,
    };
};

export default useFetchData;
