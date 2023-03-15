import React from 'react'
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './privateRoute';

export default function AppRouter() {
  return (
    <Routes>
        <Route path="/" element={<div>Public Route</div>} />
        <Route path="/dashboard" element={
                                          <PrivateRoute>
                                            <div>Public Route</div>
                                          </PrivateRoute>
        } />
    </Routes>
  )
}
