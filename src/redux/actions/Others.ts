import axios from "axios";

export const countResponse = async (url: string) => {
    const response = await axios.get(url);
    return response.data.length
}