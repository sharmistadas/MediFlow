import axios from "axios";

// Prepared for future Django REST Framework / Flask integration.
// No API calls are made in this frontend-only phase; all pages use dummy data.
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:8000/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// A future JWT token can be attached here after real authentication is added.
export function setAuthToken(token) {
  if (token) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common.Authorization;
  }
}

export default api;
