// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';

// @ts-expect-error TS(2307): Cannot find module '../../../../assets/images/icon... Remove this comment to see the full error message
import magnifierQuestion from '../../../../assets/images/icons/magnifier-question.svg';

import { Container } from './styles';

export default function SearchNotFound({
  searchTerm
}: any) {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Container>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <img src={magnifierQuestion} alt="Magnifier question" />
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <span>
        Nenhum resultado foi encontrado para{' '}
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <strong>&ldquo;{searchTerm}&rdquo;</strong>.
      </span>
    </Container>
  );
}

SearchNotFound.propTypes = {
  searchTerm: PropTypes.string.isRequired,
};
