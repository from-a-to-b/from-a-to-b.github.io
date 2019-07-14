
export const TOTAL_AREA = 311627063.88968754;

export const DEFAULT_STATE = {
  windowWidth: 1024,
  windowHeight: 768,
  dataStatus: 'init', // loading, loaded
  mapLoaded: false,
  data: null,
  currentIdx: 0,
  speculativeTripID: null,
  pdfListIds: []
};

export const API_URL = process.env.NODE_ENV === "development" ? "http://localhost:8080" : "https://from-a-to-b-api.wonyoung.so"
export const heightPercentage = 0.5;

// 1448928000
// 1448928052