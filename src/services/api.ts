export const apiurl = process.env.NEXT_PUBLIC_API_URL as string

export class API {
  apiurl: string;
  constructor() {
    this.apiurl = apiurl;
  }

  async get(endpoint: string, token?: string) {
    const response = await fetch(`${this.apiurl}/${endpoint}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token ? `Bearer ${token}` : "",
      },
    });

    return response.json();
  }

  async post(endpoint: string, body: any, token?: string) {
    const response = await fetch(`${this.apiurl}/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token ? `Bearer ${token}` : "",
      },
      body: JSON.stringify(body),
    });

    return response
  }

  async put(endpoint: string, body: any, token?: string) {
    const response = await fetch(`${this.apiurl}/${endpoint}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: token ? `Bearer ${token}` : "",
      },
      body: JSON.stringify(body),
    });

    return response.json();
  }

  async delete(endpoint: string, token?: string) {
    const response = await fetch(`${this.apiurl}/${endpoint}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: token ? `Bearer ${token}` : "",
      },
    });

    return response.json();
  }
}
