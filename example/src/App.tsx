import React from 'react'

import { ExampleComponent, LoginComponent } from 'shared-web-auth'
import 'shared-web-auth/dist/index.css'

const App = () => {
  return (
    <>
      <ExampleComponent text="Create React Library Example" />
      <LoginComponent />
    </>
  )
}

export default App
