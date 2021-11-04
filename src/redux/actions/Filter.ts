import { axios } from "../../utils";

export const filterKota = async (pid: string) => {
    return new Promise(resolve => {
        const url = `http://survey.kadence.co.id:9999/api/${pid}/data/Kota/attribute`
        const response = axios.Get({
            url
        })
        resolve(response);
    })
}

export const filterAge = async () => {
    return new Promise(resolve => {
        const url = "http://survey.kadence.co.id:9999/api/IDD3834/data/S7/attribute"
        const response = axios.Get({
            url
        })
        resolve(response);
    })
}

export const filterUsership = async () => {
    return new Promise(resolve => {
        const url = "http://survey.kadence.co.id:9999/api/IDD3834/data/PR7a/attribute"
        const response = axios.Get({
            url
        })
        resolve(response);
    })
}

export const reportsFlexmonster = async (url: string) => {
    return new Promise(resolve => {
        const response = axios.Get({
            url
        })
        resolve(response)
    })
}

