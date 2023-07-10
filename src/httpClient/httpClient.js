// HttpClientInterface
// fetch(endPoint, options): Promise<null>

export class HttpClient {
  #baseURL;
  #tokenRepository;

  constructor(baseURL, tokenRepository) {
    this.#baseURL = baseURL;
    this.#tokenRepository = tokenRepository;
  }

  fetch(endPoint, options = {}) {
    const optionsWithAuth = {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
        Authorization: `Bearer ${this.#tokenRepository.get()}`,
      },
    };
    return window.fetch(this.#baseURL + endPoint, optionsWithAuth);
  }
}
