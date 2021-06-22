import fetch, { Response } from "node-fetch";

interface Credentials {
  email: string,
  password: string
}

export default async (credentials: Credentials): Promise<Response> => {
  try {
    return await fetch("https://auth.prismic.io/login", {
      method: 'POST',
      body: JSON.stringify(credentials),
      redirect: 'follow'
    });
  } catch (error) {
    throw new Error(`[Custom Type API] Unable to perform log in action`)
  }
}
