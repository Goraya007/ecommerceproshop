import React from 'react'
import {Alert} from 'react-bootstrap'

const message = (varient, children) => {
  return (
    <Alert variant='varient'>
        {children}
    </Alert>
  )
}


message.defaultProps = {
    varient: 'info',
}
export default message