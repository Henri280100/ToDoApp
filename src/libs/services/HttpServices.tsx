import axios, { AxiosInstance } from "axios";
import { BaseUrl } from "./RoutePath";

class HttpServices {
  instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      baseURL: BaseUrl,
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

const Http = new HttpServices().instance;

export default Http;
