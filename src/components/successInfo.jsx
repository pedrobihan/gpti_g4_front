// import { useEffect, useState } from 'react';
// import axios from 'axios';
import '../App.css';
import { PieChart } from 'react-minimal-pie-chart';

function SuccessInfo() {
    // const [data, setData] = useState({});
    // const [error, setError] = useState('');
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     axios('linkapi/success')
    //         .then(response => {
    //             setData(response.data);
    //         })
    //         .catch(error => {
    //             console.error("Error fetching data: ", error);
    //             setError(error);
    //         })
    //         .finally( () => {
    //             setLoading(false)
    //         })
    // }, [])

    // if (error) {
    //     console.log(error)
    // }

    // if (loading) return (
    //     <div>
    //         <h1> Loading...</h1>
    //     </div>
    // )

    // if (data) return (
    //     <div>
    //         <p>{data}</p>
    //     </div>
    // );

    return (
        <div>
            <div>
              <h3> Gráfico de estado consultas</h3>
              <div className='pie-chart'>
                <PieChart
                  data={[
                    { title: 'Consultas Exitosas', value: 25, color: '#008000' },
                    { title: 'Consultas Fallidas', value: 15, color: '#C13C37' }
                  ]}
                />
              </div>
              <h5> Consultas Exitosas: 25 - Consultas Fallidas: 15</h5>
            </div>
        </div>
      );
}


export default SuccessInfo;