import React from "react";


const Country = ({params}: { params: { name: string; country: string } }) => {
    console.log('COUNTRY:', params);
    return (
        <>

            <h3>{params.country}</h3>
        </>
    );
};

export default Country;
/**
 * /countries/:name
 *     COMPONENT name
 *
 * /states/:stateName/countries/:name
 *     COMPONENT_2 stateName Name
 *
 */