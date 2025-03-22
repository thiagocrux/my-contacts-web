import { magnifierQuestion } from '../../../../assets';

import { Container } from './styles';

type Props = {
  searchTerm: string;
};

export default function SearchNotFound({ searchTerm }: Props) {
  return (
    <Container>
      <img src={magnifierQuestion} alt="Magnifier question" />
      <span>
        Nenhum resultado foi encontrado para{' '}
        <strong>&ldquo;{searchTerm}&rdquo;</strong>.
      </span>
    </Container>
  );
}
