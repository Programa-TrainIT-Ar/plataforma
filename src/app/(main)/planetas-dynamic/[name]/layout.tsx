import React from "react";

interface AppLayoutProps {
    children: React.ReactNode;
    params:{ name: string;};
    }

export default function PlanetLayout({children, params}: AppLayoutProps) {
    console.log('PLANET LAYOUT', params);
    return <div>
        <h2>{params.name}</h2>

        {children}
    </div>;
}
