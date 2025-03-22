import CategoryMapper from './mappers/CategoryMapper';
import HttpClient from './utils/HttpClient';

class ContactsService {
  constructor() {
    // @ts-expect-error TS(2339): Property 'httpClient' does not exist on type 'Cont... Remove this comment to see the full error message
    this.httpClient = new HttpClient('http://localhost:3001');
  }

  async listCategories(signal: any) {
    // @ts-expect-error TS(2339): Property 'httpClient' does not exist on type 'Cont... Remove this comment to see the full error message
    const categories = await this.httpClient.get(`/categories`, { signal });
    return categories.map(CategoryMapper.toDomain);
  }
}

export default new ContactsService();
