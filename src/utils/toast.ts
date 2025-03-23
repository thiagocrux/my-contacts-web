import { Message } from '../types';

import EventManager from '../lib/EventManager';

export const toastEventManager = new EventManager();

export default function toast({
  type,
  text,
  duration = 7000,
}: Omit<Message, 'id'>) {
  toastEventManager.emit('addtoast', { type, text, duration });
}
