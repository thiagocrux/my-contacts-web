import APIError from '../../errors/APIError';
import delay from '../../utils/delay';

class HttpClient {
  constructor(baseURL: any) {
    // @ts-expect-error TS(2339): Property 'baseURL' does not exist on type 'HttpCli... Remove this comment to see the full error message
    this.baseURL = baseURL;
  }

  async get(path: any, options: any) {
    return this.makeRequest(path, {
      method: 'GET',
      headers: options?.headers,
      signal: options?.signal,
    });
  }

  post(path: any, options: any) {
    return this.makeRequest(path, {
      method: 'POST',
      body: options.body,
      headers: options?.headers,
    });
  }

  put(path: any, options: any) {
    return this.makeRequest(path, {
      method: 'PUT',
      body: options.body,
      headers: options?.headers,
    });
  }

  delete(path: any, options: any) {
    return this.makeRequest(path, {
      method: 'DELETE',
      headers: options?.headers,
    });
  }

  async makeRequest(path: any, options: any) {
    await delay(500);
    const headers = new Headers();

    if (options.body) {
      headers.append('Content-Type', 'application/json');
    }

    if (options.headers) {
      // @ts-expect-error TS(2550): Property 'entries' does not exist on type 'ObjectC... Remove this comment to see the full error message
      Object.entries(options.headers).forEach(([name, value]) => {
        headers.append(name, value);
      });
    }

    // @ts-expect-error TS(2339): Property 'baseURL' does not exist on type 'HttpCli... Remove this comment to see the full error message
    const response = await fetch(`${this.baseURL}${path}`, {
      method: options.method,
      body: JSON.stringify(options.body),
      headers,
      signal: options.signal,
    });

    let responseBody = null;
    const contentType = response.headers.get('Content-Type');

    if (contentType?.includes('application/json')) {
      responseBody = await response.json();
    }

    if (response.ok) {
      return responseBody;
    }

    throw new APIError(response, responseBody);
  }
}

export default HttpClient;
