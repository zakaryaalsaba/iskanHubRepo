// config.js

// Detect environment
const isLocal = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";

// Base URL for API
const CONFIG = {
  BASE_URL: isLocal 
    ? "http://localhost:3000" // local backend
    : "https://x8ki-letl-twmt.n7.xano.io/api:pcPw3c4T" // GitHub / production backend
};