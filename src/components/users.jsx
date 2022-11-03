// import { useEffect, useState } from 'react';
// import axios from 'axios';
import '../App.css';
import { Table, Container } from 'react-bootstrap';
import '../styles/Table.css';

function User() {
    // const [data, setData] = useState({});
    // const [error, setError] = useState('');
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     axios.post('linkapi/users/')
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
                 <h3> Agregar usuario</h3>
                    <form>
                        <div>
                            <label htmlFor="email">Email </label>
                            <input id="email" type="text" />
                        </div>
                        <div>
                            <label htmlFor="password">Contraseña </label>
                            <input id="password" type="password" />
                        </div>
                        <button>Submit</button>
                    </form>
             </Container>
        </div>
    );
}


export default User;