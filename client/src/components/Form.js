import React, { useState } from "react";

function Form() {
    const [user, setUser] = useState("")
    const [message, setMessage] = useState("")
    const [successText, setSuccessText] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        const userMessage = { user, message }
        console.log(userMessage)

        fetch('/messages', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(userMessage)
        })

        setUser('')
        setMessage('')
        setSuccessText("Message sent successfully!")
    }

    return (
        <>
            <p><b>Send a message</b></p>
            <form onSubmit={handleSubmit}>
                <label>
                    Enter your name:
                    <input
                        type="text"
                        value={user}
                        onChange={(e) => {
                            setUser(e.target.value)
                            setSuccessText('')
                        }}
                    />
                </label>
                <br />
                <label>
                    Enter your message:
                    <textarea
                        type="text"
                        value={message}
                        onChange={(e) => {
                            setMessage(e.target.value)
                            setSuccessText('')
                        }}
                    />
                </label>
                <br/>
                <button type="submit">Send</button>
                <label>{successText}</label>
            </form>
        </>
    )
}

export default Form