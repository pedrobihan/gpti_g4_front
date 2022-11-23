import { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';
import { Table, Container } from 'react-bootstrap';
import '../styles/Table.css';

function Querys() {
    const [data, setData] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://gpti-stats-app.herokuapp.com/querys')
            .then(response => {
                setData(response.data);
                // console.log("Data city:", response.data)
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
                setError(error);
            })
            .finally( () => {
                setLoading(false)
            })
    }, [])

    if (error) {
        console.log(error)
    }

    if (loading) return (
        <div>
            <h1> Loading...</h1>
        </div>
    )

    let common_names = {};
    let common_types = {};
    let common_names_dict = {};
    let common_types_dict = {};

    if (data && data.querys) {
        console.log(data)
        // top 3 names most common 'name' inside querys[i] and top 3 most common 'type' of querys
        for (let i = 0; i < data.querys.length; i++) {
            if (common_names[data.querys[i].name]) {
                common_names[data.querys[i].name] += 1;
            }
            else {
                common_names[data.querys[i].name] = 1;
            }
            if (common_types[data.querys[i].type]) {
                common_types[data.querys[i].type] += 1;
            }
            else {
                common_types[data.querys[i].type] = 1;
            }
        }
        // get the 3 most common names in object with name and count
        let common_names_array = [];
        for (let name in common_names) {
            common_names_array.push({name: name, count: common_names[name]});
        }
        common_names_array.sort((a, b) => b.count - a.count);
        common_names_array = common_names_array.slice(0, 3);
        for (let i = 0; i < common_names_array.length; i++) {
            common_names_dict[common_names_array[i].name] = common_names_array[i].count;
        }
        
        // get the 3 most common types in object with type and count
        let common_types_array = [];
        for (let type in common_types) {
            common_types_array.push({type: type, count: common_types[type]});
        }
        common_types_array.sort((a, b) => b.count - a.count);
        common_types_array = common_types_array.slice(0, 3);
        for (let i = 0; i < common_types_array.length; i++) {
            common_types_dict[common_types_array[i].type] = common_types_array[i].count;
        }
    }

    return (
        <div className="providerProductsTable__container">
            <Container className="d-flex flex-column gap-3 mt-4">
                <h3> Top 3 nombres de llamados más frecuentes</h3>
                <Table >
                    <thead>
                        <tr>
                            <th >Nombre</th>
                            <th >Número consultas</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(common_names_dict).map(([key, value]) => (
                            <tr key={key}>
                                <td >{key}</td>
                                <td >{value}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <h3> Top 3 tipos más frecuentes</h3>
                <Table >
                    <thead>
                        <tr>
                            <th >Tipo</th>
                            <th >Número consultas</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(common_types_dict).map(([key, value]) => (
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


export default Querys;