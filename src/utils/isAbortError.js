export default function isAbortError(error) {
  return error instanceof DOMException && error.name === 'AbortError';
}
