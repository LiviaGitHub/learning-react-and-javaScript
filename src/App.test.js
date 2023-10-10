import React from 'react';
import App from './App';

import { describe, test, expect, screen, render } from '@jest/globals';

// Writing tests - The three "A"s
// -> Arrange - setup the component
// -> Act - execute the component
// -> Assert - check the output
describe('App', () => {
    test('renders App component', () => {
        // Arrange
        render(<App />);
        // Act
        // Assert
        expect(screen.getByText(/Home/i)).toBeInTheDocument();
    });
});