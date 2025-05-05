import { Link } from "react-router-dom";
import { activies } from "../data/activites";

export default function Activities() {
  return (
    <div
      className="mx-2 mt-24 flex flex-col gap-5 sm:mx-[11%] md:mx-5 md:grid md:grid-cols-2 lg:grid-cols-3"
      id="activities"
    >
      {activies.map((activity, index) => {
        return (
          <div
            className="flex flex-col items-center gap-5 rounded-lg border-[1px] px-4 py-10"
            key={index}
          >
            <activity.icon className="" size={60} />
            <div className="font-poppins text-3xl font-extrabold">
              {activity.title}
            </div>
            <div className="text-lg">{activity.details}</div>
            <Link
              className="rounded-md bg-slate-100 px-8 py-3 text-lg font-semibold text-slate-950"
              to="signup"
            >
              Click here!
            </Link>
          </div>
        );
      })}
    </div>
  );
}
