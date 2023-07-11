// AuthServiceInterface
// signup(email, password): void
// signin(email, password): void
// logout(): void

export class AuthService {
  #httpClient;
  #tokenRepository;

  constructor(httpClient, tokenRepository) {
    this.#httpClient = httpClient;
    this.#tokenRepository = tokenRepository;
  }

  async signin(email, password) {
    // http requset
    const response = await this.#httpClient.fetch('auth/signin', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
    });

    // token get, save
    const { access_token } = await response.json();

    this.#tokenRepository.save(access_token);
  }

  async signup(email, password) {
    const response = await this.#httpClient.fetch('auth/signup', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
    });
  }

  async logout() {
    this.#tokenRepository.remove();
  }
}
