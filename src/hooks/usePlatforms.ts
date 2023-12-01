import { useQuery } from "@tanstack/react-query";
import ApiClient, { FetchResponse } from "../services/api-client";
import { Platform } from "../entities/Platform";

const apiClient = new ApiClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
    useQuery<FetchResponse<Platform>, Error>({
        queryKey: ["platforms"],
        queryFn: () => apiClient.getAll(),
        staleTime: 24 * 60 * 60 * 1000, // 24h
    });

export default usePlatforms;
