import React from 'react'
import IncidenceForm from './IncidenceForm'

const IncidenceModal = () => {
    return (
        <div className='w-full'>
            <article className='w-full'>
                <label className="btn btn-primary" htmlFor="modal-1">Report an Incident</label>

                <input className="modal-state" id="modal-1" type="checkbox" />
                <div className="modal  w-screen">
                    <label className="modal-overlay" htmlFor="modal-1"></label>
                    <div className="modal-content flex w-full flex-col gap-5 p-7 max-w-3xl">
                        <label htmlFor="modal-1" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
                        <div className="flex flex-col gap-2">
                            <h2 className="text-center text-2xl font-semibold">Incident Report Form</h2>
                            <p className="mx-auto max-w-xs text-sm text-content2">Report an Incident</p>
                        </div>
                        <IncidenceForm/>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default IncidenceModal