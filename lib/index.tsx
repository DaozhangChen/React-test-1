import Icon from './icon'
import ReactDOM from 'react-dom'
import React from 'react'

const fn = () => {
    console.log('fn')
}
ReactDOM.render(<div>
    <Icon name='qq' onClick={fn} />
</div>, document.querySelector('#root'))