// import { useEffect, useState } from 'react';
// import axios from 'axios';
import '../App.css';
import { Table, Container } from 'react-bootstrap';
import '../styles/Table.css';

function ShowCities() {
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

    const cityJson = {
        'citys': {
            "Santiago": 6,
            "Quillota": 1,
            "Valparaiso": 7,
            "Concepción": 2
        }
    }

    return (
        <div className="providerProductsTable__container">
            <Container className="d-flex flex-column gap-3 mt-4">
                <h3> Consulta de radiación UV por ciudad</h3>
                <Table >
                    <thead>
                        <tr>
                            <th >Ciudad</th>
                            <th >Número consultas</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(cityJson.citys).map(([key, value]) => (
                            <tr key={key}>
                                <td >{key}</td>
                                <td >{value}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
}


export default ShowCities;