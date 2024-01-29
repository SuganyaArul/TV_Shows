import Shows from "./Shows"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
export default function ShowsList({shows}){
    const chartData = {
        labels: shows.map((show) => show.show.name),
        datasets: [
          {
            data: shows.map((show) => (show.show.rating.average !== null ? show.show.rating.average : 0)),
            backgroundColor: [
              'rgba(54, 162, 235, 0.6)','rgba(255, 99, 132, 0.6)','rgba(255, 206, 86, 0.6)'
            ],
          
          },
        ],
      };
    return (
        <>
    <ol>

    {shows.map((show) => {
        // console.log(show.show);
        const {show: {name, rating, genres}} = show
        return <Shows key={`${name}-${rating}`} name={name} rating={rating} genres={genres} />
        
    })}

    </ol>
    {shows.length!==0?
    <h2>Average TV Show Rating Chart</h2>:null}
    <Doughnut 
    data={chartData}
    
    />
    </>
    )
}