import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ShoppingCart from './ShoppingCart'

const plants = [{"name":"Peperomia Rosso","id":143,"scientificName":"Peperomia caperata rosso","difficulty":"easy","light":"direct","img":"https://cdn.shopify.com/s/files/1/2781/9558/products/PEPEROMIA_ROSSO-1_800x.png?v=1587156590","sizes":["small"],"watering":2,"description":"Rosalia is a stunner with glossy green leaves accompanied by bright red undersides. Her oval shaped leaves are deeply grooved, adding depth to her figure. Flower spikes will appear with bright light, adding even more character to this absolute beaut.","price":21}] // with each object being a mock plant
test("displays plants in cart", () => {
    render(<ShoppingCart cart={plants} />)
    const lambdaInput = screen.getByText(/Peperomia Rosso/i)
    expect(lambdaInput).toBeInTheDocument();

})