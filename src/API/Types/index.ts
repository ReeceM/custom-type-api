import { Response } from "node-fetch";
import { TypeModel } from "../../Models/TypeModel";
import HttpFetch from "../../utils/interface";
import { types as typeRoute } from "../../utils/routes";
import ApiInterface from "../api-interface";

class Types implements ApiInterface {
  private repository: string;
  private http: HttpFetch;

  constructor(repository: string, http: HttpFetch) {
    this.repository = repository

    this.http = http.withHeaders({
      'repository': this.repository,
    });
  }

  public async getOne(customType: string): Promise<TypeModel> {

    try {
      const response = await this.http.get(typeRoute.show(customType));

      const type:TypeModel = await response.json();

      return type;
    } catch (error) {
      throw new Error(error)
    }
  }

  public async getAll(): Promise<TypeModel[]> {

    try {
      const response = await this.http.get(typeRoute.index);
      const types: TypeModel[] = await response.json()

      return types;
    } catch (error) {
      throw new Error(error)
    }
  }


  public async insert(customType: TypeModel): Promise<Response> {

    if (typeof customType.json !== 'object') {
      throw new Error("JSON field of custom type isn't and object. Please check if it is correct")
    }

    try {

      const insertResponse = await this.http.post(typeRoute.insert, customType);
      const result = await insertResponse.json()

      return result;

    } catch (error) {
      throw new Error(error)
    }
  }

  public async update(customType: TypeModel): Promise<Response> {

    return await this.http.post(typeRoute.update, customType);
  }
}

export default Types;
