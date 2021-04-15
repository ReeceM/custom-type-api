import fetch from "node-fetch";
import Slices from "./API/Slices";
import Types from "./API/Types";
import HttpFetch from "./utils/interface";

class Api {
  private _slices!: Slices;
  private _types!: Types;

  repository: string;
  token: string | undefined;

  constructor(repository: string, token?: string) {
    this.repository = repository;
    this.token = token;
  }

  async login(email: string, password: string, registeredCallback: Function) {

    if (!this.token) {
      this.token = await this.generateToken(email, password)

      registeredCallback(this.token);
    }

    let http = new HttpFetch(this.token)

    this._slices = new Slices(this.repository, http);
    this._types = new Types(this.repository, http);
  }

  private async generateToken(email: string, password: string) {
    try {
      const response = await fetch("https://auth.prismic.io/login", {
        method: 'POST',
        body: JSON.stringify({
          email,
          password
        }),
        redirect: 'follow'
      })

      const token = await response.text();

      return token;
    } catch (error) {
      throw new Error(`[Unable to login] ${error}`)
    }
  }

  public slices(): Slices {
    return this._slices
  }

  public types(): Types {
    return this._types
  }
}

export default Api;
