import Alert from 'react-bootstrap/Alert';

export default function Warning(props: { error: string; variant: string }) {
  const { error, variant } = props;

  return (
    <Alert key={variant} variant={variant}>
      {error}
    </Alert>
  );
}
