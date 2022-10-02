import { createContext, useState, useEffect } from "react";

const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {

    const [customers, setCustomers] = useState([])
    useEffect(() => {
        const fetchDate = async () => {
            const response = await fetch('http://localhost:3001/customers');
            const responseData = await response.json();
            setCustomers(responseData);
        }
        fetchDate();
    }, [])
    const DeleteCustomer = async (id) => {
        await fetch(`http://localhost:3001/customers/${id}`, { method: 'DELETE' })
        setCustomers(customers.filter((customer) => customer.id !== id))
    }
    const createCustomer = async ({ name, details, gender, rating }) => {
        console.log(rating)
        const response = await fetch('http://localhost:3001/customers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, details, gender, rating })
        })
        const data = response.json();
        setCustomers([data, ...customers])
    }
    return (
        <CustomerContext.Provider value={{ customers, DeleteCustomer, createCustomer }}>
            {children}
        </CustomerContext.Provider>
    )
}

export default CustomerContext