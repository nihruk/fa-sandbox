import Alert from 'react-bootstrap/Alert';

export default function Warning(props: { error: string; variant: string }) {
  return (
    <Alert key={props.variant} variant={props.variant}>
      {props.error}
    </Alert>
  );
}
