import Link from 'next/link';

const outputs = [
  { id: 1, title: 'Output name 1' },
  { id: 2, title: 'Output name 2' },
  { id: 3, title: 'Output name 3' },
  { id: 4, title: 'Output name 4' },
  { id: 5, title: 'Output name 5' }
];

export default function Outputs() {
  return (
    <>
      {outputs.map(output => (
        <li key={output.id}>
          <Link href={`/awards-and-outputs/outputs/${output.id}`}>{output.title}</Link>
        </li>
      ))}
    </>
  );
}
