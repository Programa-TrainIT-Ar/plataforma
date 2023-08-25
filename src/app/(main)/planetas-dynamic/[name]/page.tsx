import React from "react";


const PlanetaPorNombre = ({params}: { params: { name: string } }) => {
    console.log(params);
    return (
        <h2>

            {params.name}
        </h2>
    );
};

export default PlanetaPorNombre;
