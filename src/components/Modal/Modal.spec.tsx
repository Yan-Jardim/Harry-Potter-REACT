import { render } from '@testing-library/react'
import Modal from '.'

describe(':: Modal', () => {
    it('Render component Modal', () => {
        const { getByTestId } = render(
            <Modal>valid-test</Modal>
           )
        expect(getByTestId('test-modal')).toBeTruthy()
    })
})
