import React, { useState } from 'react';
import axios from '@/lib/axios';

const IncidenceForm = () => {
    const [formData, setFormData] = useState({
        conservationArea: '',
        station: '',
        outpost: '',
        incidentType: '',
        affected: '',
        acresSum: '',
        area: '',
        location: '',
        animalResponsible: '',
        actionTaken: '',
        kwsObNo: '',
        xCoord: '',
        yCoord: '',
        reportingFromDate: '',
        reportingToDate: '',
    });
    
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          // Send the form data to the server using Axios POST request
          const response = await axios.post('/api/incident', formData);
          console.log('Response:', response.data);
          // Handle any success actions (e.g., show success message, redirect, etc.)
    
        } catch (error) {
          console.error('Error:', error);
          // Handle any error actions (e.g., show error message, etc.)
        }
    };
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

    return (

        <section>
            <form onSubmit={handleSubmit}>
            <div className="form-group">
                <div className='flex flex-col lg:flex-row gap-2 justify-between items-center -mx-3 mb-6 '>
                    <div className="form-field">
                        <label className="block uppercase tracking-wide dark:text-gray-200 text-gray-800 text-xs font-bold mb-2" htmlFor="conservationArea">
                            CONSERVATION AREA
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 dark:text-gray-200 text-gray-800 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="conservationArea"
                            name="conservationArea"
                            type="text"
                            value={formData.conservationArea}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-field">
                        <label className="block uppercase tracking-wide dark:text-gray-200 text-gray-800 text-xs font-bold mb-2" htmlFor="station">
                            STATION
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 dark:text-gray-200 text-gray-800 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="station"
                            name="station"
                            type="text"
                            value={formData.station}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-field">
                        <label className="block uppercase tracking-wide dark:text-gray-200 text-gray-800 text-xs font-bold mb-2" htmlFor="station">
                            OUTPOST
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 dark:text-gray-200 text-gray-800 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="station"
                            name="station"
                            type="text"
                            value={formData.outpost}
                            onChange={handleChange}
                        />
                    </div>
                </div>



                <div className='flex flex-col lg:flex-row gap-2 justify-between items-center -mx-3 mb-6 '>
                    <div className="form-field">
                        <label className="block uppercase tracking-wide dark:text-gray-200 text-gray-800 text-xs font-bold mb-2" htmlFor="conservationArea">
                            INCIDENT TYPE
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 dark:text-gray-200 text-gray-800 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="conservationArea"
                            name="conservationArea"
                            type="text"
                            value={formData.incidentType}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-field">
                        <label className="block uppercase tracking-wide dark:text-gray-200 text-gray-800 text-xs font-bold mb-2" htmlFor="station">
                            AFFECTED
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 dark:text-gray-200 text-gray-800 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="station"
                            name="station"
                            type="text"
                            value={formData.affected}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-field">
                        <label className="block uppercase tracking-wide dark:text-gray-200 text-gray-800 text-xs font-bold mb-2" htmlFor="station">
                            ACRES/
                            SUM
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 dark:text-gray-200 text-gray-800 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="station"
                            name="station"
                            type="text"
                            value={formData.acresSum}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row gap-2 justify-between items-center -mx-3 mb-6 '>
                    <div className="form-field">
                        <label className="block uppercase tracking-wide dark:text-gray-200 text-gray-800 text-xs font-bold mb-2" htmlFor="conservationArea">
                            AREA
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 dark:text-gray-200 text-gray-800 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="conservationArea"
                            name="conservationArea"
                            type="text"
                            value={formData.area}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-field">
                        <label className="block uppercase tracking-wide dark:text-gray-200 text-gray-800 text-xs font-bold mb-2" htmlFor="station">
                            LOCATION
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 dark:text-gray-200 text-gray-800 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="station"
                            name="station"
                            type="text"
                            value={formData.location}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-field">
                        <label className="block uppercase tracking-wide dark:text-gray-200 text-gray-800 text-xs font-bold mb-2" htmlFor="station">
                            ANIMAL
                            RESPONSIBLE
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 dark:text-gray-200 text-gray-800 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="station"
                            name="station"
                            type="text"
                            value={formData.animalResponsible}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row gap-2 justify-between items-center -mx-3 mb-6 '>
                    <div className="form-field">
                        <label className="block uppercase tracking-wide dark:text-gray-200 text-gray-800 text-xs font-bold mb-2" htmlFor="conservationArea">
                            ACTION TAKEN
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 dark:text-gray-200 text-gray-800 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="conservationArea"
                            name="conservationArea"
                            type="text"
                            value={formData.actionTaken}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-field">
                        <label className="block uppercase tracking-wide dark:text-gray-200 text-gray-800 text-xs font-bold mb-2" htmlFor="station">
                            KWS OB NO
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 dark:text-gray-200 text-gray-800 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="station"
                            name="station"
                            type="text"
                            value={formData.kwsObNo}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div class="items-center justify-center text-xs dark:text-gray-5 sm:px-6 flex gap-2">
                    <span className='dark:text-gray-200 text-gray-800 font-bold text-lg'>GPS</span>
                </div>
                <div className='flex flex-col lg:flex-row gap-2 justify-between items-center -mx-3 mb-6 '>
                    <div className="form-field">
                        <label className="block uppercase tracking-wide dark:text-gray-200 text-gray-800 text-xs font-bold mb-2" htmlFor="conservationArea">
                            X-COOD
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 dark:text-gray-200 text-gray-800 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="conservationArea"
                            name="conservationArea"
                            type="text"
                            value={formData.xCoord}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-field">
                        <label className="block uppercase tracking-wide dark:text-gray-200 text-gray-800 text-xs font-bold mb-2" htmlFor="station">
                            Y-COOD
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 dark:text-gray-200 text-gray-800 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="station"
                            name="station"
                            type="text"
                            value={formData.yCoord}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row flex-wrap gap-2 -mx-3 mb-6 justify-between items-center">
                    <div className="form-field">
                        <label className="block uppercase tracking-wide dark:text-gray-200 text-gray-800 text-xs font-bold mb-2" htmlFor="reportingFromDate">
                            REPORTING DATE (From)
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-300 dark:text-gray-200 text-gray-800 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="reportingFromDate"
                            name="reportingFromDate"
                            type="date"
                            value={formData.reportingFromDate}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-field">
                        <label className="block uppercase tracking-wide dark:text-gray-200 text-gray-800 text-xs font-bold mb-2" htmlFor="reportingToDate">
                            to
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-300 dark:text-gray-200 text-gray-800 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="reportingToDate"
                            name="reportingToDate"
                            type="date"
                            value={formData.reportingToDate}
                            onChange={handleChange}
                        />
                    </div>

                </div>
                <div className="flex justify-center">
                    <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200">
                        Submit
                    </button>
                </div>
            </div>
            </form>
        </section>
    )
}

export default IncidenceForm