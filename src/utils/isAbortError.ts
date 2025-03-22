export default function isAbortError(error: any) {
  return error instanceof DOMException && error.name === 'AbortError';
}
