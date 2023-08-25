import Link from "next/link";
import React from "react";


const Planeta = async () => {

    return (
        <div>

        <Link href={'/planeta/venus'}>Venus</Link>
            <br/>
        <Link href={'/planeta/marte'}>Marte</Link>
        </div>
    );
};

export default Planeta;
