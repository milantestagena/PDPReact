import type { ReactNode } from "react";

type User = { name: string };

function Drilling() {
  const user = { name: "Ana" };
  return (
    <Page>
      <Header right={<Avatar user={user} />} />
    </Page>
  );
}

function Page({ children }: { children: ReactNode }) {
  return <main className="p-4">{children}</main>;
}

function Header({ right }: { right: ReactNode }) {
  return (
    <header className="flex justify-between">
      <h1>Sailing</h1>
      {right}
    </header>
  );
}

function Avatar({ user }: { user: User }) {
  return <span>{user.name}</span>;
}

export default Drilling;
