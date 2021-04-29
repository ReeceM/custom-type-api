import { Response } from "node-fetch";
import HttpFetch from "../../utils/interface";

class Types {
  private repository: string;
  private http: HttpFetch;

  constructor(repository: string, http: HttpFetch) {
    this.repository = repository

    this.http = http.withHeaders({
      'repository': this.repository,
    });
  }

  public async getOne(customType: string): Promise<Response> {

    return await this.http.get(`https://customtypes.prismic.io/customtypes/${customType}`);
  }

  public async getAll(): Promise<Response> {

    return await this.http.get('https://customtypes.prismic.io/customtypes');
  }


  public async insert(customType: object, safe?: boolean): Promise<Response> {

    return await this.http.post('https://customtypes.prismic.io/customtypes/insert', customType);
  }

  public async update(customType: object): Promise<Response> {

    return await this.http.post('https://customtypes.prismic.io/customtypes/update', customType);
  }
}

export default Types;