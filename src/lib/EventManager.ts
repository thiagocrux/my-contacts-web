import { Toast } from '../types';

type Payload = Omit<Toast, 'id'>;
type Listener = (payload: Payload) => void;

export default class EventManager {
  listeners;

  constructor() {
    this.listeners = new Map();
  }

  // addEventListener
  on(event: string, listener: Listener) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }

    this.listeners.get(event).push(listener);
  }

  // dispatchEvent
  emit(event: string, payload: Payload) {
    if (!this.listeners.has(event)) {
      return;
    }

    this.listeners.get(event).forEach((listener: Listener) => {
      listener(payload);
    });
  }

  // removeEventListener
  removeListener(event: string, listenerToRemove: Listener) {
    const listeners = this.listeners.get(event);

    if (!listeners) {
      return;
    }

    const filteredListeners = listeners.filter(
      (listener: Listener) => listener !== listenerToRemove
    );

    this.listeners.set(event, filteredListeners);
  }
}
