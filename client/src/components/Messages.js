import React, { useEffect, useState } from "react";



function Messages() {
    const [messages, setMessages] = useState([{}])

    useEffect(() => {
        fetch("/messages")
            .then(
                response => response.json()
            )
            .then(
                data => {
                    setMessages(data.messages)
                    console.log(data)
                }
            )
    }, [])


    return (
        <>
            <h2>Messages</h2>
            <ul>
                {messages.map(message => (
                    <li key={message.id}>
                        <p>User: <b>{message.user}</b></p>
                        <p>Text: {message.message}</p>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Messages