import { fireEvent, render, screen } from "@testing-library/react";
import BookingPage from "../BookingPage";
import { BrowserRouter } from "react-router-dom";

const MockBookingPage = () => {
    return (
        <BrowserRouter>
            <BookingPage />
        </BrowserRouter>
    )
}

describe('Booking Page', () => {
    it('should render the Booking Page heading', () => {
        render(<MockBookingPage />);
        const headingElement = screen.getByText(/Booking Form/i);
        expect(headingElement).toBeInTheDocument();
    })

    it('should return empty array when initialize function is called initially', () => {
        render(<MockBookingPage />);
        const timeInput = screen.getByLabelText('Choose time');
        expect(timeInput.value).toBe('')
    })

    it('should populate time select field when updateTimes function is called', async () => {
        render(<MockBookingPage />);
        const dateInput = screen.getByLabelText('Choose date');
        fireEvent.change(dateInput, {target: {value: '2024-09-01'}})
        const optionsInSelect = await screen.findAllByTestId(/time-list/i)
        expect(optionsInSelect.length).toBe(10)
    })
})