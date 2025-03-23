export type Contact = {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  category?: {
    id: string;
    name: string;
  };
};

export type Category = {
  id: string;
  name: string;
};

export type ContactFormInput = {
  name: string;
  email?: string;
  phone?: string;
  categoryId?: string;
};

export type ContactFormRef = {
  fillFormFields: (contact: Contact) => void;
  resetFields: () => void;
};

export type Message = {
  id: number;
  type: 'default' | 'success' | 'danger';
  text: string;
  duration?: number;
};
