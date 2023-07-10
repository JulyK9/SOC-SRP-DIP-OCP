// HttpClientInterface
// fetch(endPoint, options): Promise<null>

class HttpClient {
  #baseURL;

  constructor(baseURL) {
    this.#baseURL = baseURL;
  }

  fetch(endPoint, options = {}) {
    const optionsWithAuth = {
      ...options,
      headers: {
        ...options.headers,
        Authorization: endPoint === 'signin' ? 'ATT' : undefined,
      },
    };
    return window.fetch(this.#baseURL + endPoint, optionsWithAuth);
  }
}

export const httpClient = new HttpClient();
