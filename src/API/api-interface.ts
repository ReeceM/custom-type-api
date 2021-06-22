import { Response } from "node-fetch";

interface ApiInterface {
  getOne(name: string): Promise<Response>;
  getAll(): Promise<Response>;
  insert(data: object): Promise<Response>;
  update(data: object): Promise<Response>;
}

export default ApiInterface;
