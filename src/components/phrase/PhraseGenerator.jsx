import React from 'react'

const PhraseGenerator = ({user}) => {

    const phrase = [
        `My user name is ${user.name.first}`,
        `My email address is ${user.email}`,
        `I was born on ${user.dob.date.slice(0, 10)}`,
        `My country is ${user.location.country}`,
        `My phone number ${user.phone}`,
        `My code chat is ${user.password}`
    ]

    return (
        <div>PhraseGenerator</div>
    )
}

export {PhraseGenerator}