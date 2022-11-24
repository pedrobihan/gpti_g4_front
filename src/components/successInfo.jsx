import { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';
import { PieChart } from 'react-minimal-pie-chart';

function SuccessInfo() {
    const [data, setData] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    // setData({success : {true: 0, false: 0}});
    let successfull_querys = 0;
    let unsuccessfull_querys = 0;

    useEffect(() => {
        axios.get('https://gpti-stats-app.herokuapp.com/success/',
        {
          headers: {
            'X-Access-Control-Allow-Origin': '*',
            withCredentials: false,
          }
        }
      )
      // axios({
      //   method: 'get',
      //   url: `https://gpti-stats-app.herokuapp.com/success/`,
      //   withCredentials: false,
      //   headers: {
      //     'Content-Type' : 'text/plain',
      //     'Access-Control-Allow-Origin': '*',
      //   }
      // })
            .then(response => {
                setData(response.data);
                // console.log("response data DESPUES:", response.data)
                // console.log("data:", data);
                // if (!data.success.false) {
                //   data.success.false = 0;
                // }
                console.log("DATA SUCCESS:", response.data);
                
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
                setError(error);
            })
            .finally( () => {
              setLoading(false)
          })
            
    }, [])
    if (loading) return (
        <div>
            <h1> Loading...</h1>
        </div>
    )
    // let successfull_querys = 0;
    // let unsuccessfull_querys = 0;
    if (data && data.success) {
      successfull_querys = data.success.true;
      unsuccessfull_querys = data.success.false;
    };
    let porcentaje_exito = 100*successfull_querys/(successfull_querys+unsuccessfull_querys);
    let porcentaje_fracaso = 100*unsuccessfull_querys/(successfull_querys+unsuccessfull_querys)
    return (
        <div>
            <div>
              <h3> Gráfico de estado consultas</h3>
              <div className='pie-chart'>
                <PieChart
                  data={[
                    { title: 'Consultas Exitosas', value: successfull_querys, color: '#008000' },
                    { title: 'Consultas Fallidas', value: unsuccessfull_querys, color: '#C13C37' }
                  ]}
                />
              </div>
              <h5> Consultas Exitosas: {successfull_querys} - Consultas Fallidas: {unsuccessfull_querys}</h5>
              <h5> Porcentaje exito: {porcentaje_exito} % - Porcentaje fracaso: {porcentaje_fracaso} %</h5>
              
            </div>
        </div>
      );
}


export default SuccessInfo;