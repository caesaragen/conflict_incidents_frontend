import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import IncidenceModal from '@/components/IncidenceModal';
import IncidenceForm from '@/components/IncidenceForm';


import React, { useState } from 'react';

const ConservationForm = () => {
    const [formData, setFormData] = useState({
      conservationArea: '',
      station: '',
      outpost: '',
      reportingFromDate: '',
      reportingToDate: '',
      incidents: [],
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleIncidentChange = (e, index) => {
      const { name, value } = e.target;
      const updatedIncidents = [...formData.incidents];
      updatedIncidents[index][name] = value;
      setFormData({ ...formData, incidents: updatedIncidents });
    };
  
    const handleAddIncident = () => {
      setFormData({
        ...formData,
        incidents: [
          ...formData.incidents,
          {
            date: '',
            type: '',
            affected: '',
            acres: '',
            gpsArea: '',
            location: '',
            animal: '',
            responsible: '',
            actionTaken: '',
            kwsObNo: '',
            xCoord: '',
            yCoord: '',
          },
        ],
      });
    };
  
    const handleRemoveIncident = (index) => {
      const updatedIncidents = [...formData.incidents];
      updatedIncidents.splice(index, 1);
      setFormData({ ...formData, incidents: updatedIncidents });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData);
      // Handle form submission here (e.g., send data to server, save to database, etc.)
    };
  
    return (
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="conservationArea">
              CONSERVATION AREA
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="conservationArea"
              name="conservationArea"
              type="text"
              value={formData.conservationArea}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="station">
              STATION____________________________________
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="station"
              name="station"
              type="text"
              value={formData.station}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="outpost">
              OUTPOST____________________
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="outpost"
              name="outpost"
              type="text"
              value={formData.outpost}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="reportingFromDate">
              REPORTING DATE (From)
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="reportingFromDate"
              name="reportingFromDate"
              type="date"
              value={formData.reportingFromDate}
              onChange={handleInputChange}
            />
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="reportingToDate">
              to
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="reportingToDate"
              name="reportingToDate"
              type="date"
            //   value={formData.reportingToDate}
            //   onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr>
                  <th>S/NO</th>
                  <th>DATE</th>
                  <th>INCIDENT TYPE</th>
                  <th>AFFECTED</th>
                  <th>ACRES/SUM</th>
                  <th>GPS AREA</th>
                  <th>LOCATION</th>
                  <th>ANIMAL</th>
                  <th>RESPONSIBLE</th>
                  <th>ACTION TAKEN</th>
                  <th>KWS OB NO</th>
                  <th>X-COORD</th>
                  <th>Y-COORD</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {formData.incidents.map((incident, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <input
                        type="date"
                        name="date"
                        value={incident.date}
                        onChange={(e) => handleIncidentChange(e, index)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="type"
                        value={incident.type}
                        onChange={(e) => handleIncidentChange(e, index)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="affected"
                        value={incident.affected}
                        onChange={(e) => handleIncidentChange(e, index)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="acres"
                        value={incident.acres}
                        onChange={(e) => handleIncidentChange(e, index)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="gpsArea"
                        value={incident.gpsArea}
                        onChange={(e) => handleIncidentChange(e, index)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="location"
                        value={incident.location}
                        onChange={(e) => handleIncidentChange(e, index)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="animal"
                        value={incident.animal}
                        onChange={(e) => handleIncidentChange(e, index)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="responsible"
                        value={incident.responsible}
                        onChange={(e) => handleIncidentChange(e, index)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="actionTaken"
                        value={incident.actionTaken}
                        onChange={(e) => handleIncidentChange(e, index)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="kwsObNo"
                        value={incident.kwsObNo}
                        onChange={(e) => handleIncidentChange(e, index)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="xCoord"
                        value={incident.xCoord}
                        onChange={(e) => handleIncidentChange(e, index)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="yCoord"
                        value={incident.yCoord}
                        onChange={(e) => handleIncidentChange(e, index)}
                      />
                    </td>
                    <td>
                      <button type="button" onClick={() => handleRemoveIncident(index)}>
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button type="button" onClick={handleAddIncident}>
              Add Incident
            </button>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-x-coord">
              X-COOD
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-x-coord"
              name="xCoord"
              type="text"
              value={formData.xCoord}
              onChange={handleInputChange}
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-y-coord">
              Y-COOD
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-y-coord"
              name="yCoord"
              type="text"
              value={formData.yCoord}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          {/* Any other fields or elements you may want to add */}
        </div>
        <div className="flex justify-center">
          <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200">
            Submit
          </button>
        </div>
      </form>
    );
  };
const Dashboard = () => {
    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Incidence Report Form
                </h2>
            }>
            <Head>
                <title>Incidence Report Form</title>
            </Head>

            <div className="py-12">
                <div className=" mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <IncidenceModal/>
                     
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default Dashboard
