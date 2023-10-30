import { Doughnut } from 'react-chartjs-2';
import  { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from "chart.js"; // Import 'chart.js/auto' for the complete Chart.js library

ChartJs.register(Tooltip, Title, ArcElement, Legend);



const Piechart = (props) => {
    const data = {
        datasets: [{
          data: [props.estreturns,props.invested],
          backgroundColor: ['blue', 'grey'],
        }],
        labels: ['Est. Returns', 'Total Investement']
      };
  return (
    <div >
      <Doughnut data={data} />
    </div>
  );
}

export default Piechart;
