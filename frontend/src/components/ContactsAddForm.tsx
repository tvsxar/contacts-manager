import { useState } from 'react';
import type { ContactData } from '../types/types';
import { Button, TextField } from '@mui/material';

interface ContactFormProps {
    addContact: (contactData: ContactData) => void;
}

const ContactsAddForm = ({ addContact }: ContactFormProps) => {
    const [contactData, setContactData] = useState<ContactData>({
        name: '',
        phone: '',
        email: '',
        city: ''
    })

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setContactData(prev => ({ ...prev, [name]: value }));
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        addContact(contactData);
        setContactData({
            name: '',
            phone: '',
            email: '',
            city: ''
        });
    }

    return (
        <div className="p-4 border border-gray-200 rounded-lg shadow-lg max-w-lg mx-auto bg-white">
            <form onSubmit={handleSubmit} className="flex flex-col gap-2 justify-between md:gap-4">
                <div className="flex gap-2 md:gap-4">
                    <TextField
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={contactData.name}
                        onChange={handleInput}
                        size="small"
                        fullWidth />
                    <TextField
                        type="text"
                        name="phone"
                        placeholder="Phone number"
                        value={contactData.phone}
                        onChange={handleInput}
                        size="small"
                        fullWidth />
                </div>

                <div className="flex gap-2 md:gap-4">
                    <TextField
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={contactData.email}
                        onChange={handleInput}
                        size="small"
                        fullWidth />
                    <TextField
                        type="text"
                        name="city"
                        placeholder="City"
                        value={contactData.city}
                        onChange={handleInput}
                        size="small"
                        fullWidth />
                </div>

                <Button
                    type="submit"
                    variant="contained"
                    className="mt-2 rounded-md shadow-sm text-sm py-2"
                >
                    Add Contact
                </Button>
            </form>
        </div>
    )
}

export default ContactsAddForm
