import { useState, type ReactNode } from "react";

function Slow({ name }: { name: string }) {
  console.log(`${name} rendered`);
  return <p>{name}</p>;
}

function CounterA() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button type="button" onClick={() => setCount(count + 1)}>
        A: {count}
      </button>
      <Slow name="Inside A" />
    </div>
  );
}

function CounterB({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button type="button" onClick={() => setCount(count + 1)}>
        B: {count}
      </button>
      {children}
    </div>
  );
}

function ChildrenRender() {
  const [parentCount, setParentCount] = useState(0);

  return (
    <>
      <button type="button" onClick={() => setParentCount(parentCount + 1)}>
        Parent: {parentCount}
      </button>
      <CounterA />
      <CounterB>
        <Slow name="Inside B" />
      </CounterB>
    </>
  );
}


export default ChildrenRender;
