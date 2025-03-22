import { ReactNode } from 'react';

import Spinner from '../Spinner';

import { StyledButton } from './styles';

type Props = {
  type?: 'button' | 'reset' | 'submit' | undefined;
  disabled?: boolean;
  isLoading?: boolean;
  children: ReactNode;
  danger?: boolean;
  onClick?: () => void;
};

export default function Button({
  type = 'button',
  disabled = false,
  isLoading = false,
  children,
  danger = false,
  onClick,
}: Props) {
  return (
    <StyledButton
      type={type}
      disabled={disabled || isLoading}
      $danger={danger}
      onClick={onClick}
    >
      {!isLoading && children}
      {isLoading && <Spinner size={16} />}
    </StyledButton>
  );
}
