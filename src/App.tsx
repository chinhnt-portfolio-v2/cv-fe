import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import HomePage from '@/pages/HomePage'
import CvPage from '@/pages/CvPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/en" element={<CvPage lang="en" />} />
        <Route path="/vi" element={<CvPage lang="vi" />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
