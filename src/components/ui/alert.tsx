import Alert from 'react-bootstrap/Alert';
import { type Status } from '~/types';

export default function Warning(props: { message?: string | Status; variant: string }) {
  const { message, variant } = props;

  return (
    <Alert key={variant} variant={variant}>
      {message}
    </Alert>
  );
}
