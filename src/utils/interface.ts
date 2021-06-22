import fetch, { Headers, RequestInit, Response } from 'node-fetch';

interface Handler {
  get(url: string): Promise<Response>,
  post(url: string, body: object): Promise<Response>,
}

class HttpFetch implements Handler{
  headers: Headers;

  constructor(token: string) {
    this.headers = new Headers;

    this.headers.append('Authorization', `Bearer ${token}`)
  }

  request(method: string, body?: any | object): RequestInit {

    return {
      method: method,
      headers: this.headers,
      body,
      redirect: 'follow',
    };
  }

  async post(url: string, body: object) {

    return await fetch(url, this.request('POST', JSON.stringify(body)));
  }

  async get(url: string) {

    return await fetch(url, this.request('GET'))
  }

  withHeaders(newHeaders: {[key: string]: any}) {
    for (const header in newHeaders) {
      this.headers?.append(header, newHeaders[header])
    }

    return this;
  }
}

export default HttpFetch
