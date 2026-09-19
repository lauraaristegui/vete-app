import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'

import { router } from './app/router/router'
import './design-system/index.css'
import { AppointmentsProvider } from './app/context/AppointmentsProvider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <AppointmentsProvider>
    <RouterProvider router={router} />
  </AppointmentsProvider>
  </StrictMode>,

)