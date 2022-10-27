import { render } from '@testing-library/react'
import Stage from '.'

describe(':: Stage', () => {
    it('Render component Stage', () => {
        const { getByTestId } = render(
            <Stage text={'test'}/>)
        expect(getByTestId('test-stage')).toBeTruthy()
    })
})
