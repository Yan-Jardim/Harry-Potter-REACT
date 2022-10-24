import { render } from '@testing-library/react'
import Button from '.'

describe(':: MyComponent', () => {
    it('Render component Button', () => {
        const { getByTestId } = render(
            <Button
            action={() => jest.fn()}
            label1='teste'
                label2='teste'
            />)
        expect(getByTestId('test-button')).toBeTruthy()
    })
})
