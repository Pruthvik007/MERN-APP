import React from 'react'
import { ToastContainer } from "react-toastify";

const Toast = () => {
  return (
    <div>
      <ToastContainer
        toastId="toast"
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        theme="light"
      />
    </div>
  )
}

export default Toast
