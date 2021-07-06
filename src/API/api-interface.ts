import { SliceModel } from "../Models/SliceModel";
import { TypeModel } from "../Models/TypeModel";
import { Response } from 'node-fetch';
interface ApiInterface {
  getOne(name: string): Promise<SliceModel | TypeModel>;
  getAll(): Promise<Array<SliceModel | TypeModel>>
  // insert(data: object): Promise<SliceModel | TypeModel>;
  // update(data: object): Promise<SliceModel | TypeModel>;
  insert(data: object): Promise<Response>;
  update(data: object): Promise<Response>;
}

export default ApiInterface;
