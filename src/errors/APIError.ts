export default class APIError extends Error {
  public response: Response;
  public body: { error: string };

  constructor(response: Response, body: { error: string }) {
    super();
    this.name = 'APIError';
    this.response = response;
    this.body = body;
    this.message = body?.error || `${response.status} - ${response.statusText}`;
  }
}
