import { logo } from '../../assets';

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="MyContacts logo" width={201} />
    </Container>
  );
}
