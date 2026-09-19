import { Outlet } from 'react-router'
import { Sidebar } from '../sidebar/sidebar'
import './AppLayout.css'

export function AppLayout() {
  return (
    <div className="app-layout">
      <aside className="app-layout__sidebar">
        <Sidebar />
      </aside>

      <main className="app-layout__content">
        <Outlet />
      </main>
    </div>
  )
}