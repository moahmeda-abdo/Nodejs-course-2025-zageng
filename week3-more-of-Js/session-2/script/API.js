/*
 API : Application Programming Interface
 ->  is a way for two applications to talk to each other (Client-Server Model)
 ->  A bridge between client and server
 ->  API in our life
        You (the client) order food (make a request).
        The waiter (API) takes your order to the kitchen (server).
        The kitchen prepares the food (processes the request).
        The waiter brings the food back to you (returns a response).

->  API in web development
        Client (Frontend) sends a request to the server.
        Server (Backend) processes the request.
        Server sends back a response (usually in JSON format).
->  types of API
     - REST API
     - GraphQL

 */

// fetch : is a built-in function that allows us to make HTTP requests to a server.
fetch("https://jsonplaceholder.typicode.com/posts")
        .then(data => data.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))



//async keyword
async function getData() {
        try {
                const res = await fetch("https://jsonplaceholder.typicode.com/posts")
                throw new Error("error from getData")

                const data = await res.json()
                console.log(data)

        } catch (error) {
                console.log(error.message)
                console.log(error)
        }

}
getData()