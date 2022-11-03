// import { useEffect, useState } from 'react';
// import axios from 'axios';
import '../App.css';
import { Table, Container } from 'react-bootstrap';
import '../styles/Table.css';

function UserQuerys() {
    // const [data, setData] = useState({});
    // const [error, setError] = useState('');
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     axios('linkapi/querys/${id}')
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
        <div className="providerProductsTable__container">
            <Container className="d-flex flex-column gap-3 mt-4">
                <h3> Consulta de radiación UV por usuario</h3>
                <Table >
                    <thead>
                        <tr>
                            <th >Consultas</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Alexa dime la radiación UV de Coyhaique de ayer</td>
                        </tr>
                        <tr>
                            <td>Alexa cuál es la radiación UV de Viña hoy</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </div>
    );
}


export default UserQuerys;