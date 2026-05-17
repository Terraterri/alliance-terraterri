import axios from "axios";
import { environment } from "./environment";
const authClient = axios.create({
  baseURL: environment.userEndpoint + "/api",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("adminToken")}` || null,
  },
});

const masterClient = axios.create({
  baseURL: environment.mastersEndPoint + "/api/",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
  },
});

const projectClient = axios.create({
  baseURL: environment.servicesEndPoint + "/api/project/",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
  },
});

const expoClient = axios.create({
  baseURL: "https://mmworkspace.com/expo/api/",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
  },
});

// Creating an New API Client for Admin Expo
const expoAdminClient = axios.create({
  // baseURL: 'https://expo.srinivaskurikuri.in/admin/',
  baseURL: environment.expoAdminEndPoint,
  headers: {
    "Content-Type": "application/json",
  },
});

export { authClient, masterClient, projectClient, expoClient, expoAdminClient };
