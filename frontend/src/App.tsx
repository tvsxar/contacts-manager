import { useState } from 'react';
import { ContactsAddForm, ContactsGrid } from './components';
import type { Contact, ContactData } from './types/types'

function App() {
  const [contacts, setContacts] = useState<Contact[]>([]);

  const addContact = (contactData: ContactData) => {
    const newContact: Contact = {
      id: Date.now(),
      ...contactData
    }
    setContacts(prev => [...prev, newContact])
  };

  return (
    <div className='p-4 flex flex-col gap-4'>
      <ContactsAddForm addContact={addContact} />
      <ContactsGrid contacts={contacts} />
    </div>
  )
}

export default App
