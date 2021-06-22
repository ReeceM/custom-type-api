import { Response } from "node-fetch";
import { SliceModel } from "../../Models/SliceModel";
import HttpFetch from "../../utils/interface";
import { slices as sliceRoute} from '../../utils/routes';
import ApiInterface from "../api-interface";

class Slices implements ApiInterface {
  private repository: string;
  private http: HttpFetch;

  constructor(repository: string, http: HttpFetch) {
    this.repository = repository;
    this.http = http.withHeaders({
      'repository': this.repository,
    });
  }

  public async getOne(slice: string): Promise<SliceModel> {
    try {

      const response = await (await this.http.get(sliceRoute.show(slice)));

      if (response.status === 403) {
        let json = await response.json()

        let message = json?.message as string

        throw message.search('not a valid key=value pair (missing equal-sign) in Authorization header:')
          ? new Error('Incorrect Url or Token issue')
          : new Error('Unauthorized');
      }

      const sliceModel: SliceModel = await response.json();

      return sliceModel;
    } catch (error) {
      throw new Error(`[ERROR] Unable to fetch the slice: ${slice}`)
    }
  }

  public async getAll(): Promise<SliceModel[]> {
    try {

      const response = await this.http.get(sliceRoute.index);

      const slices: SliceModel[] = await response.json();

      return slices;
    } catch (error) {
      throw new Error(error)
    }
  }

  public async insert(slice: SliceModel): Promise<Response> {

    return await this.http.post(sliceRoute.insert, slice);
  }

  public async update(slice: SliceModel): Promise<Response> {

    return await this.http.post(sliceRoute.update, slice);
  }
}

export default Slices;
