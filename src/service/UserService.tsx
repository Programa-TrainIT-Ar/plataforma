export const UserService = {
    getUsers() {
        return fetch('http://localhost:3004/users', {cache: "no-cache"})
            .then(async (res) => {
                return {status: res.status, data: await res.json()};
            })
            .catch((error) => ({status: 400}))
    },
    createUser(user: User) {
        // CODIGO PARA HACER POST
    }

}