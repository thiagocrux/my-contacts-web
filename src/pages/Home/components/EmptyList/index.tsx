// @ts-expect-error TS(2307): Cannot find module '../../../../assets/images/icon... Remove this comment to see the full error message
import emptyBox from '../../../../assets/images/icons/empty-box.svg';

import { Container } from './styles';

export default function EmptyList() {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Container>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <img src={emptyBox} alt="Empty box" />
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <p>
        Você ainda não tem nenhum contato cadastrado! Clique no botão{' '}
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <strong>&ldquo;Novo contato&rdquo;</strong> acima para cadastrar o seu
        primeiro.
      </p>
    </Container>
  );
}
