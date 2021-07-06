import Slices from "./API/Slices";
import Types from "./API/Types";
import login from "./utils/login";

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

  async login(email: string, password: string, registeredCallback?: Function) {

    if (!this.token) {
      this.token = await this.generateToken(email, password)

      registeredCallback ? registeredCallback(this.token) : null;
    }

    this.init()
  }

  public init() {
    let http:HttpFetch = new HttpFetch(this.token as string)

    this._slices = new Slices(this.repository, http);
    this._types = new Types(this.repository, http);
  }

  private async generateToken(email: string, password: string) {

    console?.warn("[WARN] using email login method, an API key is safer.");

    try {
      const response = await login({email, password})

      const token = await response.text();

      return token;
    } catch (error) {
      throw new Error(`[Custom Type API] Unable to log in with using password & email details`)
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
