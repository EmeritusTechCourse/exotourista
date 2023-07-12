import { fireEvent, render, screen } from '@testing-library/react';
import {SearchForm} from './SearchForm';

test('Renders the default option for city', () => {
  render(<SearchForm />);
  const defaultSelected = screen.getByRole('option', { name: 'Karachi' }).selected
  expect(defaultSelected).toBe(true);
});
test('Renders the default option for experience level', () => {
    render(<SearchForm />);
    const defaultSelected = screen.getByRole('option', { name: 'Budget' }).selected
    expect(defaultSelected).toBe(true);
  });
test('Renders correct number of options for city', () => {
   render(<SearchForm />);
   const citySelector = screen.getByRole('combobox', {
    name: 'cities'
   });
   expect(citySelector.childNodes.length).toBe(3);
});

test('Renders correct number of options for experience', () => {
    render(<SearchForm />);
    const experienceSelector = screen.getByRole('combobox', {
     name: 'experience'
    });
    expect(experienceSelector.childNodes.length).toBe(3);
 });

 test('Default state for swimming pool checkbox is true', () => {
    render(<SearchForm/>);
    const swimmingPoolCheckboxChecked = screen.getByRole('checkbox').checked;
    expect(swimmingPoolCheckboxChecked).toBe(false);
 });

 test('renders a search button', () => {
    render(<SearchForm/>);
    const searchButton = screen.getByRole('button');
    expect(searchButton.textContent).toBe('Search');
 });

 test('returns search criteria on search', () => {
    const callback = jest.fn();

    render(<SearchForm onSearch={callback}/>);
    const searchButton = screen.getByRole('button');
    fireEvent(searchButton, new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }));
    expect(callback).toHaveBeenCalledWith({
        city: 'Karachi',
        experience: 'Budget',
        swimmingPool: false
    });
 });