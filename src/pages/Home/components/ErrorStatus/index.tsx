// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';

// @ts-expect-error TS(2307): Cannot find module '../../../../assets/images/icon... Remove this comment to see the full error message
import sad from '../../../../assets/images/icons/sad.svg';
// @ts-expect-error TS(6142): Module '../../../../components/Button' was resolve... Remove this comment to see the full error message
import Button from '../../../../components/Button';

import { Container } from './styles';

export default function ErrorStatus({
  onTryAgain
}: any) {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Container>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <img src={sad} alt="Sad" />
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div className="details">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <strong>Ocorreu um erro ao obter os seus contatos</strong>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Button type="button" onClick={onTryAgain}>
          Tentar novamente
        </Button>
      </div>
    </Container>
  );
}

ErrorStatus.propTypes = {
  onTryAgain: PropTypes.func.isRequired,
};
