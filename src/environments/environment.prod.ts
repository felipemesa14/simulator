import { API_RESOURCES } from "src/app/core/http/api-resources";

export const environment = {
  production: false
};

export const headers = {
  'Ocp-Apim-Subscription-Key': 'b0dc8eb7924540e1913ab262b8500721',
  SCLocation: '0,0',
  SCOrigen: 'Development',
  country: 'co'
};

export const requestURL = {...API_RESOURCES};
export const endpoint = {
  credinetSimulator: 'https://devapi.credinet.co/simulator/'
};
