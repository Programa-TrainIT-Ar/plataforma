import { Message } from "primereact/message";
import React from "react";
import {UserService} from "../../service/UserService";
import ErrorMessage from "./ErrorMessage";


async function getData(): Promise<{ status: number, data?: User[] }> {
    return UserService.getUsers();
}


const Dashboard = async () => {
    const {status, data} = await getData();

    return (
        <div className="grid">
            {status !== 200 && <ErrorMessage/>}
            {status === 200 && data?.map(user => {
                return <>
                    <br/>
                    {user.id} - {user.username}
                    <br/>
                    <br/>

                </>
            })}

        </div>
    );
};

export default Dashboard;
