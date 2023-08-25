interface AppLayoutProps {
    children: React.ReactNode;
}

export default function PlanetLayout({children}: AppLayoutProps) {
    return <div>
        <h1>PLANETA</h1>
        <br/>
        <br/>
        {children}
    </div>;
}
