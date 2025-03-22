import HttpClient from './utils/HttpClient';
import ContactMapper from './mappers/ContactMapper';

class ContactsService {
  constructor() {
    // @ts-expect-error TS(2339): Property 'httpClient' does not exist on type 'Cont... Remove this comment to see the full error message
    this.httpClient = new HttpClient('http://localhost:3001');
  }

  async listContacts(orderBy = 'asc', signal: any) {
    // @ts-expect-error TS(2339): Property 'httpClient' does not exist on type 'Cont... Remove this comment to see the full error message
    const contacts = await this.httpClient.get(`/contacts?orderBy=${orderBy}`, {
      headers: { Authorization: 'meutoken' },
      signal,
    });

    return contacts.map(ContactMapper.toDomain);
  }

  async getContactById(id: any, signal: any) {
    // @ts-expect-error TS(2339): Property 'httpClient' does not exist on type 'Cont... Remove this comment to see the full error message
    const contact = await this.httpClient.get(`/contacts/${id}`, { signal });
    return ContactMapper.toDomain(contact);
  }

  createContact(contact: any) {
    const body = ContactMapper.toPersistence(contact);
    // @ts-expect-error TS(2339): Property 'httpClient' does not exist on type 'Cont... Remove this comment to see the full error message
    return this.httpClient.post('/contacts', { body });
  }

  updateContact(id: any, contact: any) {
    const body = ContactMapper.toPersistence(contact);
    // @ts-expect-error TS(2339): Property 'httpClient' does not exist on type 'Cont... Remove this comment to see the full error message
    return this.httpClient.put(`/contacts/${id}`, { body });
  }

  deleteContact(id: any) {
    // @ts-expect-error TS(2339): Property 'httpClient' does not exist on type 'Cont... Remove this comment to see the full error message
    return this.httpClient.delete(`/contacts/${id}`);
  }
}

export default new ContactsService();
