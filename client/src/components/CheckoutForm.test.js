import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {});
    render(<CheckoutForm />)
    
    const header = screen.getByText(/checkout form/i)
    expect(header).toBeInTheDocument()


test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />)

    const lambdaInput = screen.getByLabelText(/First Name:/i)
    const schoolInput = screen.getByLabelText(/Last Name:/i)
    const addressInput = screen.getByLabelText(/Address:/i)
    const cityInput = screen.getByLabelText(/City:/i)
    const stateInput = screen.getByLabelText(/State:/i)
    const zipInput = screen.getByLabelText(/Zip:/i)
    const checkoutButton = screen.getByRole('button')

    fireEvent.change(lambdaInput, {target: {value: 'Lambda'}})
    fireEvent.change(schoolInput, {target: {value: 'School'}})
    fireEvent.change(addressInput, {target: {value: '123'}})
    fireEvent.change(cityInput, {target: {value: 'LA'}})
    fireEvent.change(stateInput, {target: {value: 'CA'}})
    fireEvent.change(zipInput, {target: {value: '123456'}})

    fireEvent.click(checkoutButton)

    const message = screen.getByText(/You have ordered some plants! Woo-hoo!/i)
    expect(message).toBeInTheDocument();
});
