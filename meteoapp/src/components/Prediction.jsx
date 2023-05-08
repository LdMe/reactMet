import {useState,useEffect} from 'react';

const Prediction = () => {
    const [predictions, setPredictions] = useState([]);
    const api_key = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkYW5lbC5sYWZ1ZW50ZUB0aGVicmlkZ2VzY2hvb2wuZXMiLCJqdGkiOiJlOGZhMDZlYS05ZTBjLTRkNzUtYjEzNS1hMTNjZjBjYjBkMzgiLCJpc3MiOiJBRU1FVCIsImlhdCI6MTY4MzUzMDkxNSwidXNlcklkIjoiZThmYTA2ZWEtOWUwYy00ZDc1LWIxMzUtYTEzY2YwY2IwZDM4Iiwicm9sZSI6IiJ9.l0LUvCBteV4nzj22Rxv2AeTe3qVzXHntTcY53WvnQ5w'
    useEffect(() => {
        fetch(`https://opendata.aemet.es/opendata/api/prediccion/especifica/municipio/horaria/48004?api_key=${api_key}`)
        .then(response => response.json())
        .then(data => {
            fetch(data.datos)
            .then(response => response.json())
            .then(data => getPredictions(data))
            .catch(error => console.log(error))
        })
        .catch(error => console.log(error))
    },[])
    const getPredictions = (data) => {
        const newPredictions = data[0].prediccion.dia
        setPredictions(newPredictions)
        console.log(newPredictions);
    }

    return (
        <div className="prediction">
        <h1>Prediction</h1>
        {predictions.map((prediction,index) => (
            <article key={index}>
                <h2>fecha: {prediction.fecha}</h2>
                <h2>orto: {prediction.orto}</h2>
                <h2>ocaso: {prediction.ocaso}</h2>
            </article>
        ))}
        </div>
    );
}

export default Prediction;
