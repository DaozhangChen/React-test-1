import renderer from 'react-test-renderer'
import Button from '../button'
import React from 'react'
import { json } from 'node:stream/consumers'

describe('button', () => {
    it('是个div', () => {

        renderer.create(<Button />).toJSON()
        expect(json).toMatchInlineSnapshot(`[Function]`)
    })
})