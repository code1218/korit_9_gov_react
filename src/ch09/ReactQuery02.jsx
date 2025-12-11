import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

const api = axios.create({
    baseURL: "http://localhost:8080",
});

api.interceptors.request.use(config => {
    const accessToken = localStorage.getItem("AccessToken");
    if (!!accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
});

function useDataQuery(index) {
    return useQuery({
        queryKey: ["data", index],
        queryFn: async () => await api.get("/api/security/data", {params: {index}}),
    });
}

function ReactQuery02() {
    const queryClient = new QueryClient();

    return <QueryClientProvider client={queryClient}>
        <IndexShowBox1 />
        <IndexShowBox2 />
    </QueryClientProvider>
}

function IndexShowBox1() {
    const [ index, setIndex ] = useState("0");
    const dataQuery = useDataQuery(index);

    const handleOnClick = () => {
        dataQuery.refetch();
    }

    return <div>
        <input type="text" value={index} onChange={(e) => setIndex(e.target.value)}/>
        <button onClick={handleOnClick}>확인</button>
        <h1>{dataQuery.isLoading ? "로딩중..." : dataQuery.data?.data}</h1>
    </div>
}

function IndexShowBox2() {

    return <div>

    </div>
}

export default ReactQuery02;