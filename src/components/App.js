import React, { useEffect, useState } from "react";

function App (props) {
    const [dogImg, setDogImg] = useState(null);

    useEffect(() => {
        fetch(`https://dog.ceo/api/breeds/image/random`)
        .then( res => res.json())
        .then( data => setDogImg(data.message))
        .catch( error => console.log(error.message));
    }, [])

    return !dogImg
        ? <p>Loading...</p>
        : <img src={dogImg} alt="A Random Dog" />
}

export default App;
