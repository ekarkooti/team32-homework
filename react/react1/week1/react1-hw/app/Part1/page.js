// Part1-2
function Greetings() {
  return <h1>Hello react!</h1>;
}

function Card() {
  return (
    <div>
      <h2>Card Title</h2>
      <p>This is a card component</p>
    </div>
  );
}

// Part1-3
function Cards() {
  return (
    <div>
      <Card />
      <Card />
    </div>
  );
}

// Part1-4
function Persons() {
  const name = "Ehsan";
  const age = 44;
  return <div>{age > 18 ? `${name} is an adult` : `${name} is a minor`}</div>;
}

// Part2-1

export default function Home() {
  return (
    <>
      <Greetings />
    </>
  );
}
