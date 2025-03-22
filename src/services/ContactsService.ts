import HttpClient from './utils/HttpClient';
import ContactMapper from './mappers/ContactMapper';
import { ContactFormInput } from '../types';

class ContactsService {
  httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001');
  }

  async listContacts(orderBy = 'asc', signal?: AbortSignal) {
    const contacts = await this.httpClient.get(`/contacts?orderBy=${orderBy}`, {
      headers: { Authorization: 'meutoken' },
      signal,
    });

    return contacts.map(ContactMapper.toDomain);
  }

  async getContactById(id: string, signal?: AbortSignal) {
    const contact = await this.httpClient.get(`/contacts/${id}`, { signal });
    return ContactMapper.toDomain(contact);
  }

  createContact(contact: ContactFormInput, signal?: AbortSignal) {
    const body = ContactMapper.toPersistence(contact);
    return this.httpClient.post('/contacts', { body, signal });
  }

  updateContact(id: string, contact: ContactFormInput, signal?: AbortSignal) {
    const body = ContactMapper.toPersistence(contact);
    return this.httpClient.put(`/contacts/${id}`, { body, signal });
  }

  deleteContact(id: string, signal?: AbortSignal) {
    return this.httpClient.delete(`/contacts/${id}`, { signal });
  }
}

export default new ContactsService();
