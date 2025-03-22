import { Link } from 'react-router';

import { arrow } from '../../assets';

import { Container } from './styles';

type Props = {
  title: string;
};

export default function PageHeader({ title }: Props) {
  return (
    <Container>
      <Link to="../">
        <img src={arrow} alt="Arrow" />
        <span>Voltar</span>
      </Link>
      <h1>{title}</h1>
    </Container>
  );
}
