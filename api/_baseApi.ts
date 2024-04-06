import axios, { AxiosRequestConfig } from "axios";

export default class BaseApi {
  private mergeRequestConfig(config?: AxiosRequestConfig): AxiosRequestConfig {
    if (!config) config = {};
    if (!config.baseURL) config.baseURL = `https://dev-ngnair.cloudupscale.com`;

    if (!config.headers) config.headers = {}

    return config;
  }

  async post(url: string, body: any, config?: AxiosRequestConfig) {
    config = this.mergeRequestConfig(config);
    console.log("in post ", body);

    return axios.post(url, body, config);
  }

  async get(url: string, config?: AxiosRequestConfig) {
    config = this.mergeRequestConfig(config);

    return axios.get(url, config);
  }

  async patch(url: string, body: any, config?: AxiosRequestConfig) {
    config = this.mergeRequestConfig(config);

    return axios.patch(url, body, config);
  }

  async put(url: string, body: any, config?: AxiosRequestConfig) {
    config = this.mergeRequestConfig(config);

    return axios.put(url, body, config);
  }

  async delete(url: string, body?: any, config?: AxiosRequestConfig) {
    config = this.mergeRequestConfig(config);
    if (body) config.data = body;

    return axios.delete(url, config);
  }

  buildUrl(url: string, params?: any): string {
    return `${url}${this.buildQueryString(params)}`;
  }

  private buildQueryString(params: any): string {
    let qs = "";
    const seperator = "&";

    if (params) {
      qs = Object.entries(params)
        .filter(([key, value]) => value != null)
        .map((v) => {
          let [key, value] = v;
          switch (typeof value) {
            case "undefined":
              value = null;
            case "object":
              if (value instanceof Date) {
                value = value.toISOString();
              } else if (value instanceof Array) {
                return value
                  .map((v) => `${key}[]=${encodeURIComponent(v as string)}`)
                  .join(seperator);
              } else {
                throw new Error("Object is unsupported by this parser");
              }
              break;
          }

          return `${key}=${encodeURIComponent(value as string)}`;
        })
        .join(seperator);
    }

    return qs ? "?" + qs : qs;
  }
}