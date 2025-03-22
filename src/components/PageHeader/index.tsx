import { Link } from 'react-router';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';

// @ts-expect-error TS(2307): Cannot find module '../../assets/images/icons/arro... Remove this comment to see the full error message
import arrow from '../../assets/images/icons/arrow.svg';
import { Container } from './styles';

export default function PageHeader({
  title
}: any) {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Container>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Link to="../">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <img src={arrow} alt="Arrow" />
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <span>Voltar</span>
      </Link>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <h1>{title}</h1>
    </Container>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
