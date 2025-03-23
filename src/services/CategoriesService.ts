import { CategoryMapper } from './mappers';
import { HttpClient } from './utils';

class ContactsService {
  private httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001');
  }

  async listCategories(signal: AbortSignal) {
    const categories = await this.httpClient.get(`/categories`, { signal });
    return categories.map(CategoryMapper.toDomain);
  }
}

export default new ContactsService();
