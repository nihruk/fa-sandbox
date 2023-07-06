export default function Error(props: { error: string }) {
  return (
    <div className="alert alert-danger" role="alert">
      <strong>{props.error}</strong>
    </div>
  );
}
