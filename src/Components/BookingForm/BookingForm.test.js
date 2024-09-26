import { render, screen } from "@testing-library/react";
import { renderHook } from "@testing-library/react";
import BookingForm from './index';
import { useReducer } from "react";
import { initializeTimes, updateTimes } from "../../pages/BookingPage";

const form = {}
const setForm = () => {}
const availableTimes = []

test('Renders the BookingForm heading', () => {
    render(<BookingForm form={form} setForm={setForm} availableTimes={availableTimes} dispatch={setForm} />);
    const headingElement = screen.getByText('Booking Form');
    expect(headingElement).toBeInTheDocument();
})

test('Renders the BookingForm can be submitted with click', () => {
    render(<BookingForm form={form} setForm={setForm} availableTimes={availableTimes} dispatch={setForm} />);
    const headingElement = screen.g;
    expect(headingElement).toBeInTheDocument();
})

test('Validates that the initializeTime returns empty array when called without payload' , () => {
    const data = initializeTimes()
    expect(data).toEqual([])
})

test('Validates that the initializeTime returns an array of times when called payload' , () => {
    const output = [17, 18, 19, 20, 21, 22]
    const data = initializeTimes('12-09-24')
    expect(data).toEqual(output)
})

test('Validates that the updateTimes returns an array of times when called payload' , () => {
    const output = [17, 18, 19, 20, 21, 22]
    const { result } = renderHook(() => useReducer(updateTimes, initializeTimes('12-09-24')))
    const [state, dispatch] = result.current;
    dispatch({type: 'UPDATE_TIMES'})
    expect(state).toEqual(output)
})