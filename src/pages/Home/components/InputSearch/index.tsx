import { ChangeEvent } from 'react';
import { Container } from './styles';

type Props = {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function InputSearch({ value, onChange }: Props) {
  return (
    <Container>
      <input
        value={value}
        type="text"
        placeholder="Pesquisar contato..."
        onChange={onChange}
      />
    </Container>
  );
}
