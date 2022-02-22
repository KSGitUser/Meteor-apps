import React, {useState} from "react";
import {ContactsCollection} from "../api/ContactsCollection";

export const ContactForm = () => {

    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ imageUrl, setImageUrl ] =useState("");

    const saveContact = () => {
        ContactsCollection.insert({name, email, imageUrl})
        // eslint-disable-next-line no-console
        console.log({name, email, imageUrl });
        setName('')
        setEmail('')
        setImageUrl('')
    }

    const setFieldValue = ({ target }, functionName) => {
        const setFunctions = {
            setName: setName,
            setEmail: setEmail,
            setImageUrl: setImageUrl
        }

        setFunctions[functionName](target.value);
    }

    return (<form>
        <div>
            <label htmlFor="name">
                Name
            </label>
            <input
                id="name"
                value={name}
                onChange={(event) => setFieldValue(event, 'setName')}
                type="text"
            />
        </div>
        <div>
            <label htmlFor="email">
                Email
            </label>
            <input
                id="email"
                value={email}
                onChange={(event) => setFieldValue(event, 'setEmail')}
                type="email"
            />
        </div>
        <div>
            <label htmlFor="imageURL">
                imageURL
            </label>
            <input
                id="imageURL"
                value={imageUrl}
                onChange={(event) => setFieldValue(event, 'setImageUrl')}
                type="text"
            />
        </div>
        <div>
            <button type="button" onClick={saveContact}>Save Contact</button>
        </div>
    </form>)
}
