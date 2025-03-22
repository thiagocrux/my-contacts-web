import emptyBox from '../../../../assets/images/icons/empty-box.svg';

import { Container } from './styles';

export default function EmptyList() {
  return (
    <Container>
      <img src={emptyBox} alt="Empty box" />
      <p>
        Você ainda não tem nenhum contato cadastrado! Clique no botão{' '}
        <strong>&ldquo;Novo contato&rdquo;</strong> acima para cadastrar o seu
        primeiro.
      </p>
    </Container>
  );
}
