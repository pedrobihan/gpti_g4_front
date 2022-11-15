import { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';
import { PieChart } from 'react-minimal-pie-chart';

function SuccessInfo() {
    const [data, setData] = useState([{}]);
    const [error, setError] = useState('');

    // setData({success : {true: 0, false: 0}});

    useEffect(() => {
        axios.get('/success')
            .then(response => {
                setData(response.data);
                // console.log(response.data)
                console.log(data);
                // if (!data.success.false) {
                //   data.success.false = 0;
                // }
                // console.log(data)
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
                setError(error);
            })
            
    }, [])



    console.log("data:", data);

    return (
        <div>
            <div>
              <h3> Gráfico de estado consultas</h3>
              <div className='pie-chart'>
                <PieChart
                  data={[
                    { title: 'Consultas Exitosas', value: 2, color: '#008000' },
                    { title: 'Consultas Fallidas', value: 1, color: '#C13C37' }
                  ]}
                />
              </div>
              <h5> Consultas Exitosas: 1 - Consultas Fallidas: 0</h5>
            </div>
        </div>
      );
}


export default SuccessInfo;