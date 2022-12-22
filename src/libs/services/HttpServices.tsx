import axios, { AxiosInstance } from "axios";
import { BaseUrl } from "./RoutePath";

class Http {
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
