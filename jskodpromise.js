const url = 'https://fakeapi.net'
interface User {
    id: number
    email: string
    username: string
    name: string
    address: string
    phone: string
}
function getUserData(id: number): Promise<User> {
    return fetch(`${url}/users/${id}`)
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            console.log("Пользователь загружен:")
            console.log(data)
            return data
        })
        .catch(function(error) {
            console.log("Произошла ошибка:", error)
            throw error
        })
}
getUserData(4)
