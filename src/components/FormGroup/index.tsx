import { ReactNode } from 'react';
import Spinner from '../Spinner';

import { Container } from './styles';

type Props = {
  children: ReactNode;
  error?: boolean | null;
  isLoading?: boolean;
};
export default function FormGroup({
  children,
  error = null,
  isLoading = false,
}: Props) {
  return (
    <Container>
      <div className="form-item">
        {children}
        {isLoading && (
          <div className="loader">
            <Spinner size={16} />
          </div>
        )}
      </div>
      {error && <small>{error}</small>}
    </Container>
  );
}
