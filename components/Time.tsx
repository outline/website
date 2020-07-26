import { format } from "date-fns";

export default function Time({ date }) {
  return (
    <time dateTime={date} className="time">
      {format(new Date(date), "MMMM do, yyyy")}
    </time>
  );
}
