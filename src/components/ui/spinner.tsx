import Spinner from 'react-bootstrap/Spinner';
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function Loader() {
  return (
    <div className="text-center pt-5 pb-5">
      <Spinner animation="border" variant="danger" role="status" className="mb-5">
        <span className="visually-hidden">Loading...</span>
      </Spinner>

      <div className="mb-5">
        <ProgressBar
          animated
          striped
          variant="light"
          now={95}
          className="mb-1"
          style={{ height: '27px' }}
        />

        <ProgressBar
          animated
          striped
          variant="light"
          now={90}
          className="mb-3"
          style={{ height: '27px' }}
        />

        <ProgressBar animated striped variant="light" now={37.5} className="mb-3" />

        <ProgressBar animated striped variant="light" now={20} className="mb-1" />

        <ProgressBar animated striped variant="light" now={20} className="mb-1" />
      </div>

      <div className="mb-5">
        <ProgressBar
          animated
          striped
          variant="light"
          now={95}
          className="mb-1"
          style={{ height: '27px' }}
        />

        <ProgressBar
          animated
          striped
          variant="light"
          now={90}
          className="mb-3"
          style={{ height: '27px' }}
        />

        <ProgressBar animated striped variant="light" now={37.5} className="mb-3" />

        <ProgressBar animated striped variant="light" now={20} className="mb-1" />

        <ProgressBar animated striped variant="light" now={20} className="mb-1" />
      </div>

      <div className="mb-5">
        <ProgressBar
          animated
          striped
          variant="light"
          now={95}
          className="mb-1"
          style={{ height: '27px' }}
        />

        <ProgressBar
          animated
          striped
          variant="light"
          now={90}
          className="mb-3"
          style={{ height: '27px' }}
        />

        <ProgressBar animated variant="light" striped now={37.5} className="mb-3" />

        <ProgressBar animated striped variant="light" now={20} className="mb-1" />

        <ProgressBar animated striped variant="light" now={20} className="mb-1" />
      </div>
    </div>
  );
}
