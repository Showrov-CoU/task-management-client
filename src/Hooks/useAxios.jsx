import axios from "axios";

const fetchWithAxios = axios.create({
  baseURL: "http://localhost:5000",
});

const useAxios = () => {
  return fetchWithAxios;
};

export default useAxios;
