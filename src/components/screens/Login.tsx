import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { useParams } from "react-router-dom";
import lodash from "lodash";

const API_URL = "https://www.googleapis.com/books/v1/volumes";
// let searchQuery = (queryParam: string, setResults: (result: any[]) => void, setLoading: (loading: boolean) => void) => {
//     axios
//         .get(API_URL, { params: { q: queryParam } })
//         .then((response: AxiosResponse<{ totalItems: number; items: any[] }, any>) => {
//             const { totalItems, items } = response.data;
//             setLoading(false);
//             setResults(items ? items : []);
//         });
// };
// const debouncer = lodash.debounce(searchQuery);

interface Props {
    queryParam: string;
}

const searchQuery = (
    queryParam: string,
    setResults: (result: any[]) => void,
    setLoading: (loading: boolean) => void
) => {
    axios
        .get(API_URL, { params: { q: queryParam } })
        .then((response: AxiosResponse<{ totalItems: number; items: any[] }, any>) => {
            const { items } = response.data;
            setLoading(false);
            setResults(items ? items : []);
        });
};

const debouncer = lodash.debounce(searchQuery);
const search = debouncer;

const useSearch = ({ queryParam }: Props) => {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<any[]>([]);

    useEffect(() => {
        if (!queryParam) {
            search.cancel();
            setLoading(false);
            setResult([]);
        } else {
            setLoading(true);
            search(queryParam.trim(), setResult, setLoading);
        }
    }, [queryParam]);

    return {
        result,
        loading,
    };
};

const Login = () => {
    // const [loading, setLoading] = useState(false);
    const [searchText, setSearchText] = useState("");
    const { result } = useSearch({ queryParam: searchText });

    const { who } = useParams();

    // const onSearch = (text: string) => {
    //     const search = debouncer;
    //     if (!text) {
    //         setLoading(false);
    //         setResult([]);
    //         search.cancel();
    //     } else {
    //         setLoading(true);
    //         search(text.trim(), setResult, setLoading);
    //     }
    // };

    const otherSearch = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
    }, []);

    return (
        <div className="container">
            <form>
                <input placeholder="username" type="text" onChange={(e) => setSearchText(e.target.value)} />
                {result.map((book) => {
                    const { id, selfLink } = book;
                    return (
                        <div key={id}>
                            <span>{selfLink}</span>
                        </div>
                    );
                })}
            </form>
            <input onChange={otherSearch} />
            <span>{who}</span>
        </div>
    );
};

export default Login;
