import { STRONG_WIND_KNOTS } from "../constants/WindCard";
import Card from "./Card";

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
    <Card
      title={`Wind Spot: ${props.location}`}
      actions={
        <button
          type="button"
          onClick={props.onRemove}
          className="rounded bg-red-600 px-3 py-1 text-white hover:bg-red-700"
        >
          Remove
        </button>
      }
    >
      <div className="mt-2 text-sm text-slate-700">
        <p>
          Wind Speed: {props.windSpeedKnots} knots{" "}
          {props.windSpeedKnots >= STRONG_WIND_KNOTS && <span title="Strong wind">🚀</span>}
        </p>
        <p>Direction: {props.directionDeg}°</p>
        {props.gustKnots !== undefined && <p>Gust: {props.gustKnots} knots</p>}
      </div>
    </Card>
  );
}

export default WindCard;
export type { WindSpot, WindCardProps };
