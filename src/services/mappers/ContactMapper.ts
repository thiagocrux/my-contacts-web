import { ContactFormInput } from '../../types';

type PersistenceContactParams = {
  id: string;
  name: string;
  email: string | null;
  phone: string | null;
  category_id: string | null;
  category_name: string | null;
};

class ContactMapper {
  toPersistence(domainContact: ContactFormInput) {
    return {
      name: domainContact.name,
      email: domainContact.email,
      phone: domainContact.phone,
      category_id: domainContact.categoryId,
    };
  }

  toDomain(persistenceContact: PersistenceContactParams) {
    return {
      id: persistenceContact.id,
      name: persistenceContact.name,
      email: persistenceContact.email ?? '',
      phone: persistenceContact.phone ?? '',
      category: {
        id: persistenceContact.category_id ?? '',
        name: persistenceContact.category_name ?? '',
      },
    };
  }
}

export default new ContactMapper();
