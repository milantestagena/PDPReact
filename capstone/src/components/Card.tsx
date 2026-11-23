import type { ReactNode } from "react";

export type CardProps = {
  title: ReactNode;
  children: ReactNode;
  className?: string;
  actions?: ReactNode;
};

function Card(props: CardProps) {
  return (
    <div
      className={`rounded-xl border border-slate-200 bg-white p-5 shadow-sm${props.className ? ` ${props.className}` : ""}`}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-900">
          {props.title}
        </h2>

        {props.actions}
      </div>
      {props.children}
    </div>
  );
}

export default Card;
