'use client'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from '@/redux/store'
import { ToastContainer } from 'react-toastify'

const MainLayout = ({ children }) => {
    return (
        <section>
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <Header />
                    <main className="pt-16 lg:pt-32 mt-20 ">
                        {children}
                    </main>
                    <Footer />
                    <ToastContainer/>
                </PersistGate>
            </Provider>
        </section>

    )
}

export default MainLayout