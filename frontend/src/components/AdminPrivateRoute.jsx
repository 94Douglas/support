import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import {useAdminAuthStatus} from '../hooks/useAdminAuthStatus'
import Spinner from './Spinner'

// Checks if admin is logged in or not.
const AdminPrivateRoute = () => {
    const {adminLoggedIn, checkingStatus} = useAdminAuthStatus()
    
    if(checkingStatus){
        return <Spinner />
    }
    return adminLoggedIn ? <Outlet /> : <Navigate to="/login" />
}

export default AdminPrivateRoute