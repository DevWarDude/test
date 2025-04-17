import Chart from "./Chart";

function ResponsiveChart() {
  return (
    <div className="md:flex-1">
      <div className="card col-span-1 md:col-span-2 lg:col-span-4">
        <div className="card-header">
          <p className="card-title">Overview</p>
        </div>
        <Chart />
      </div>
    </div>
  );
}

export default ResponsiveChart;
