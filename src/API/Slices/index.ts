import { Response } from "node-fetch";
import HttpFetch from "../../utils/interface";


class Slices {
  private repository: string;
  private http: HttpFetch;

  constructor(repository: string, http: HttpFetch) {
    this.repository = repository
    this.http = http;
  }

  public async getOne(slice: string): Promise<Response> {

    return await this.http
      .withHeaders({
        'repository': this.repository,
      })
      .get(`https://customtypes.prismic.io/slices/${slice}`);
  }

  public async getAll(): Promise<Response> {

    return await this.http
      .withHeaders({
        'repository': this.repository,
      })
      .get('https://customtypes.prismic.io/slices');
  }


  public async insert(customType: object): Promise<Response> {

    return await this.http
      .withHeaders({
        'repository': this.repository,
      })
      .post('https://customtypes.prismic.io/slices/insert', customType);
  }

  public async update(customType: object): Promise<Response> {

    return await this.http
      .withHeaders({
        'repository': this.repository,
      })
      .post('https://customtypes.prismic.io/slices/update', customType);
  }
}

export default Slices;