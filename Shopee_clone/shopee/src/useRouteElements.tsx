import React from 'react'
import { useRoutes } from 'react-router-dom'
import ProductList from './pages/ProductList'
import Login from './pages/Login'
import Register from './pages/Register'
import RegisterLayouts from './layouts/RegisterLayouts'

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: '/',
      element: <ProductList />
    },
    {
      path: '/login',
      element: (
        <RegisterLayouts>
          <Login />
        </RegisterLayouts>
      )
    },
    {
      path: '/register',
      element: (
        <RegisterLayouts>
          <Login />
        </RegisterLayouts>
      )
    }
  ])
  return routeElements
}
