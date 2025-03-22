export default class APIError extends Error {
  constructor(response: any, body: any) {
    super();
    this.name = 'APIError';
    // @ts-expect-error TS(2339): Property 'response' does not exist on type 'APIErr... Remove this comment to see the full error message
    this.response = response;
    // @ts-expect-error TS(2339): Property 'body' does not exist on type 'APIError'.
    this.body = body;
    this.message = body?.error || `${response.status} - ${response.statusText}`;
  }
}
