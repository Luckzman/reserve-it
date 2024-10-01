import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import BookingForm from "../BookingForm";
import { BrowserRouter } from "react-router-dom";

const MockBookingForm = () => {
    return (
        <BrowserRouter>
            <BookingForm getDate={jest.fn()} availableTimes={['10:00', '10:30']} />
        </BrowserRouter>
    )
}

describe('Booking Form', () => {
    describe('Form Elements exist', () => {
        it('should render the Form\'s Date input', () => {
            render(<MockBookingForm />);
            const dateInputElement = screen.getByLabelText(/Choose date/i);
            expect(dateInputElement).toBeInTheDocument();
        })
        it('should render the Form\'s time select dropdown', () => {
            render(<MockBookingForm />);
            const timeSelectElement = screen.getByLabelText(/Choose time/i);
            expect(timeSelectElement).toBeInTheDocument();
        })
        it('should render the Form\'s guest input', () => {
            render(<MockBookingForm />);
            const guestInputElement = screen.getByLabelText(/Number of guests/i);
            expect(guestInputElement).toBeInTheDocument();
        })
        it('should render the Form\'s occasion dropdown', () => {
            render(<MockBookingForm />);
            const occasionSelectElement = screen.getByLabelText(/occasion/i);
            expect(occasionSelectElement).toBeInTheDocument();
        })
    })

    describe('Form Validation', () => {
        it('should display error message if Date input is not selected on blur', async () => {
            render(<MockBookingForm />);
            const dateInputElement = screen.getByLabelText(/Choose date/i)
            fireEvent.blur(dateInputElement)
            const errorMessage = await screen.findByTestId('date-error');
            expect(errorMessage).toBeInTheDocument();
            expect(errorMessage).toHaveTextContent('Required')
        })
        it('should have the value of the selected date', async () => {
            render(<MockBookingForm />);
            const dateInputElement = screen.getByLabelText(/Choose date/i)
            fireEvent.change(dateInputElement, {target: {value: '2024-09-26'}})
            const timeOptions = await screen.findAllByTestId(/time-list/i)
            expect(timeOptions.length).toBe(2)
        })
        it('should display error message if time select dropdown is not picked', async () => {
            render(<MockBookingForm />);
            const timeInputElement = screen.getByLabelText(/Choose time/i)
            fireEvent.blur(timeInputElement)
            const errorMessage = await screen.findByTestId('time-error');
            expect(errorMessage).toBeInTheDocument();
            expect(errorMessage).toHaveTextContent('Required')
        })
        it('should display error message if occasion select dropdown is not picked', async () => {
            render(<MockBookingForm />);
            const occasionElement = screen.getByLabelText(/Occasion/i)
            fireEvent.blur(occasionElement)
            const errorMessage = await screen.findByTestId('occasion-error');
            expect(errorMessage).toBeInTheDocument();
            expect(errorMessage).toHaveTextContent('Required')
        })
        it('should show all error message if no field is selected while submitting the form', async () => {
            render(<MockBookingForm />);
            const submitButton = screen.getByTestId('booking-form')
            fireEvent.submit(submitButton)
            const errorMessages = await screen.findAllByTestId(/error/i);
            expect(errorMessages.length).toBe(3)

        })
        it('should redirect to booking success page if all fields are selected while submitting the form', async () => {
            render(<MockBookingForm />);
            const dateInputElement = screen.getByLabelText(/Choose date/i)
            fireEvent.change(dateInputElement, {target: {value: '2024-09-26'}})
            const timeInputElement = screen.getByLabelText(/Choose time/i)
            fireEvent.change(timeInputElement, {target: {value: '10:00'}})
            const occasionElement = screen.getByLabelText(/Occasion/i)
            fireEvent.change(occasionElement, {target: {value: 'birthday'}})
            const submitButton = screen.getByTestId('booking-form')
            fireEvent.submit(submitButton)
            await waitFor(() => {
                expect(window.location.pathname).toBe('/booking-success')
            })
        })
    })
})