import Spinner from 'react-bootstrap/Spinner';

export default function Loader() {
  return (
    <div className="text-center">
      <Spinner animation="border" role="status" variant="danger">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}
