import axios from "axios";

interface Props {
  url: any;
  params?: any;
  data?: any;
  token?: string;
  cancelToken?: string;
}

type GetProps = Omit<Props, "data">;

const queryParser = (params: any) => {
  let queryParams = "";
  for (let key in params) {
    if (!queryParams) {
      queryParams = queryParams.concat(`?${key}=${params[key]}`);
    } else {
      queryParams = queryParams.concat(`&${key}=${params[key]}`);
    }
  }
  return queryParams;
};

const defaultHeaders = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  // Authorization: "Basic ZGVtbzpkZW1v"
};

// const multipartHeaders = {
//   Accept: 'application/json',
//   "Content-Type": "multipart/form-data",
//   Authorization: "Basic ZGVtbzpkZW1v"
// };

const getUserToken = () => {
  let userToken = "";

  return userToken;
};

const Axios = {
  Get: ({ url, params, token }: GetProps) => {
    return new Promise((resolve, reject) => {
      axios
        .request({
          url: url + queryParser(params),
          method: "GET",
          headers: {
            ...defaultHeaders,
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          if (axios.isCancel(error)) {
            console.log("Request canceled", error);
          } else {
            reject(error);
          }
        });
    });
  },
  Post: ({ url, data, token = "" }: Props) => {
    return new Promise((resolve, reject) => {
      axios
        .post(url, data, {
          headers: {
            ...defaultHeaders,

            // Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          if (axios.isCancel(error)) {
            console.log("Request canceled", error);
          } else {
            reject(error);
          }
        });
    });
  },
  PostFormData: ({ url, data, token }: Props) => {
    return new Promise((resolve, reject) => {
      axios
        .post(url, data, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          if (axios.isCancel(error)) {
            console.log("Request canceled", error);
          } else {
            reject(error);
          }
        });
    });
  },
  Put: ({ url, params, data, token }: Props) => {
    const userToken = getUserToken();
    if (userToken) {
      data["x-access-token"] = userToken;
    }

    return new Promise((resolve, reject) => {
      axios
        .request({
          url: url + queryParser(params),
          method: "PUT",
          headers: {
            ...defaultHeaders,
            Authorization: `Bearer ${token}`,
          },
          data,
        })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          if (axios.isCancel(error)) {
            console.log("Request canceled", error);
          } else {
            reject(error);
          }
        });
    });
  },
  Patch: ({ url, params, data, token }: Props) => {
    const userToken = getUserToken();
    if (userToken) {
      data["x-access-token"] = userToken;
    }

    return new Promise((resolve, reject) => {
      axios
        .request({
          url: url + queryParser(params),
          method: "PATCH",
          headers: {
            ...defaultHeaders,
            Authorization: `Bearer ${token}`,
          },

          data,
        })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          if (axios.isCancel(error)) {
            console.log("Request canceled", error);
          } else {
            reject(error);
          }
        });
    });
  },
  Delete: ({ url, params, data, token }: Props) => {
    const userToken = getUserToken();
    if (userToken) {
      data["x-access-token"] = userToken;
    }

    return new Promise((resolve, reject) => {
      axios
        .request({
          url: url + queryParser(params),
          method: "DELETE",
          headers: {
            ...defaultHeaders,
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          if (axios.isCancel(error)) {
            console.log("Request canceled", error);
          } else {
            reject(error);
          }
        });
    });
  },
};

export default Axios;
