import { Response } from "node-fetch";
import { SliceModel } from "../../Models/SliceModel";
import HttpFetch from "../../utils/interface";


class Slices {
  private repository: string;
  private http: HttpFetch;

  constructor(repository: string, http: HttpFetch) {
    this.repository = repository
    this.http = http.withHeaders({
      'repository': this.repository,
    });
  }

  public async getOne(slice: string): Promise<SliceModel> {
    try {
      const response = await this.http.get(`https://customtypes.prismic.io/slices/${slice}`);
      const sliceModel: SliceModel = await response.json();

      return sliceModel;
    } catch (error) {
      console.error(`[ERROR] Unable to fetch the slice: ${slice}`);
      throw new Error(`[ERROR] Unable to fetch the slice: ${slice}`)
    }
  }

  public async getAll(): Promise<Array<SliceModel>> {
    try {

      const response = await this.http.get('https://customtypes.prismic.io/slices');

      const types: Array<SliceModel> = await response.json();

      return types;
    } catch (error) {
      throw new Error(error)
    }
  }

  public async insert(slice: SliceModel): Promise<Response> {

    return await this.http.post('https://slices.prismic.io/slices/insert', slice);
  }

  public async update(slice: SliceModel): Promise<Response> {

    return await this.http.post('https://customtypes.prismic.io/slices/update', slice);
  }
}

export default Slices;
