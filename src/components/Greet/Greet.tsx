type GreetProps = {
  name?: string;
};

function Greet({ name }: GreetProps) {
  return <div>Hello {name}</div>;
}

export default Greet;
