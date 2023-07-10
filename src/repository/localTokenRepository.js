// Interface

// save(toaken): void
// get(): string
// remove(): void

export class LocalTokenRepository {
  #TOKEN_KEY = 'ACCESS_TOKEN';

  // 전개될 코드에서 생각하면 주입받을 의존성이 없으므로 constructor가 필요 없음

  save(token) {
    localStorage.setItem(this.#TOKEN_KEY, token);
  }

  get() {
    return localStorage.getItem(this.#TOKEN_KEY);
  }

  remove() {
    localStorage.removeItem(this.#TOKEN_KEY);
  }
}
