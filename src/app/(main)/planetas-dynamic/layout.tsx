interface AppLayoutProps {
    children: React.ReactNode;
}

export default function AppLayout({children}: AppLayoutProps) {
    return <div>
        <h1>PLANETAS DYNAMIC</h1>
        <br/>
        <br/>
        {children}
    </div>;
}
