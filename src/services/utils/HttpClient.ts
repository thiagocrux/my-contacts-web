import APIError from '../../errors/APIError';
import delay from '../../utils/delay';

type Options = {
  method?: string;
  headers?: Record<string, string>;
  signal?: AbortSignal;
  body?: unknown;
};

class HttpClient {
  baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  async get(path: string, options: Options) {
    return this.makeRequest(path, {
      method: 'GET',
      headers: options?.headers,
      signal: options?.signal,
    });
  }

  post(path: string, options: Options) {
    return this.makeRequest(path, {
      method: 'POST',
      body: options.body,
      headers: options?.headers,
    });
  }

  put(path: string, options: Options) {
    return this.makeRequest(path, {
      method: 'PUT',
      body: options.body,
      headers: options.headers,
    });
  }

  delete(path: string, options?: Options) {
    return this.makeRequest(path, {
      method: 'DELETE',
      headers: options?.headers,
    });
  }

  async makeRequest(path: string, options: Options) {
    await delay(500);
    const headers = new Headers();

    if (options.body) {
      headers.append('Content-Type', 'application/json');
    }

    if (options.headers) {
      Object.entries(options.headers).forEach(
        ([name, value]: [string, string]) => {
          headers.append(name, value);
        }
      );
    }

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
