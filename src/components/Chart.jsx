import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Chart({ shows }) {
  const chartData = {
    labels: shows.map((show) => show.show.name),
    datasets: [
      {
        label: "Average Rating",
        data: shows.map((show) =>
          show.show.rating.average !== null ? show.show.rating.average : 0
        ),
        backgroundColor: ["rgba(21, 11, 157, 0.6)"],
      },
    ],
  };

  return <Bar data={chartData} />;
}
