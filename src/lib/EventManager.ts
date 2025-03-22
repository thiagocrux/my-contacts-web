export default class EventManager {
  constructor() {
    // @ts-expect-error TS(2339): Property 'listeners' does not exist on type 'Event... Remove this comment to see the full error message
    this.listeners = new Map();
  }

  // addEventListener
  on(event: any, listener: any) {
    // @ts-expect-error TS(2339): Property 'listeners' does not exist on type 'Event... Remove this comment to see the full error message
    if (!this.listeners.has(event)) {
      // @ts-expect-error TS(2339): Property 'listeners' does not exist on type 'Event... Remove this comment to see the full error message
      this.listeners.set(event, []);
    }

    // @ts-expect-error TS(2339): Property 'listeners' does not exist on type 'Event... Remove this comment to see the full error message
    this.listeners.get(event).push(listener);
  }

  // dispatchEvent
  emit(event: any, payload: any) {
    // @ts-expect-error TS(2339): Property 'listeners' does not exist on type 'Event... Remove this comment to see the full error message
    if (!this.listeners.has(event)) {
      return;
    }

    // @ts-expect-error TS(2339): Property 'listeners' does not exist on type 'Event... Remove this comment to see the full error message
    this.listeners.get(event).forEach((listener: any) => {
      listener(payload);
    });
  }

  // removeEventListener
  removeListener(event: any, listenerToRemove: any) {
    // @ts-expect-error TS(2339): Property 'listeners' does not exist on type 'Event... Remove this comment to see the full error message
    const listeners = this.listeners.get(event);

    if (!listeners) {
      return;
    }

    const filteredListeners = listeners.filter(
      (listener: any) => listener !== listenerToRemove,
    );

    // @ts-expect-error TS(2339): Property 'listeners' does not exist on type 'Event... Remove this comment to see the full error message
    this.listeners.set(event, filteredListeners);
  }
}
