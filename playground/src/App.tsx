function Greeting({ name }: { name: string }) {
  return <h1>Hello, {name}!</h1>;
}

function App() {
  const name = "John Doe";

  return (
    <>
      <Greeting name={name} />
      <Greeting name="Jane Smith" />
    </>
  );
}

export default App;
