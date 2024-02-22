import { useState }from "react"
import { useEffect }from "react"

function SelectedContact({SelectedContactId, setSelectedContactId  }) {
    const [contact, setContact] = useState(null)

    useEffect(() => {
        async function fetchContacts() {
            try {
      
              const response = await fetch( `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${SelectedContactId}` )
              const result = await response.json();
              setContacts(result);
              
            } catch (error) {
              console.error(error);
            }
          }

          fetchSingleContact()

    }, [])

    return (
        <div></div>
    )
}

export default SelectedContact