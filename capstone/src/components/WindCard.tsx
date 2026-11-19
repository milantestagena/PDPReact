type WindSpot = {
  location: string;
  windSpeedKnots: number;
  directionDeg: number;
  gustKnots?: number;
};

type WindCardProps = WindSpot & {
  onRemove: () => void;
};

function WindCard(props: WindCardProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-900">
          Location: {props.location}
        </h2>

        <button
          type="button"
          onClick={props.onRemove}
          className="rounded bg-red-600 px-3 py-1 text-white hover:bg-red-700"
        >
          Remove
        </button>
      </div>
      <div className="mt-2 text-sm text-slate-700">
        <p>
          Wind Speed: {props.windSpeedKnots} knots{" "}
          {props.windSpeedKnots >= 20 && <span title="Strong wind">🚀</span>}
        </p>
        <p>Direction: {props.directionDeg}°</p>
        {props.gustKnots !== undefined && <p>Gust: {props.gustKnots} knots</p>}
      </div>
    </div>
  );
}

export default WindCard;
export type { WindSpot, WindCardProps };
