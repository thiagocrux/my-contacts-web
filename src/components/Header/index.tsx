// @ts-expect-error TS(2307): Cannot find module '../../assets/images/logo.svg' ... Remove this comment to see the full error message
import logo from '../../assets/images/logo.svg';
import { Container } from './styles';

export default function Header() {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Container>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <img src={logo} alt="MyContacts logo" width={201} />
    </Container>
  );
}
