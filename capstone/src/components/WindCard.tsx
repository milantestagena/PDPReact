type WindCardProps = {
  location: string;
  windSpeedKnots: number;
  directionDeg: number;
};

function WindCard(props: WindCardProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-900">
        Location: {props.location}
      </h2>
      <div className="mt-2 text-sm text-slate-700">
        <p>Wind Speed: {props.windSpeedKnots} knots</p>
        <p>Direction: {props.directionDeg}°</p>
      </div>
    </div>
  );
}

export default WindCard;
export type { WindCardProps };
