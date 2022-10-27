import { render } from '@testing-library/react'
import LogoTodos from '.'

describe(':: LogoTodos', () => {
    it('Render component LogoTodos', () => {
        const { getByTestId } = render(
            <LogoTodos
            action={() => jest.fn()}            
            ></LogoTodos>)
        expect(getByTestId('test-logo-todos')).toBeTruthy()
    })
})
