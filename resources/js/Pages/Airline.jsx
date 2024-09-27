import React, { useState } from 'react';

export default function Airline() {
    const [airlines, setAirlines] = useState([
        { name: "Garuda Indonesia", code: "GA", logo: "" },
        { name: "Lion Air", code: "JT", logo: "" },
        { name: "AirAsia", code: "AK", logo: "" },
        { name: "Citilink", code: "QG", logo: "" },
        { name: "Sriwijaya Air", code: "SJ", logo: "" }
    ]);

    const [newAirline, setNewAirline] = useState({ name: "", code: "", logo: "" });

    const handleCreate = (e) => {
        e.preventDefault();
        console.log("Creating new airline:", newAirline); // Log data maskapai baru
        if (newAirline.name && newAirline.code && newAirline.logo) {
            setAirlines([...airlines, newAirline]);
            setNewAirline({ name: "", code: "", logo: "" });
            document.getElementById('create-form').style.display = 'none';
        }
    };

    return (
        <div className="container">
            <h1 className="title">Airline Lists</h1>
            {/* Airline Table */}
            <table className="table">
                <thead>
                    <tr>
                        <th className="table-header">Logo</th>
                        <th className="table-header">Name</th>
                        <th className="table-header">Code</th>
                    </tr>
                </thead>
                <tbody>
                    {airlines.map((airline, index) => (
                        <tr key={index}>
                            <td className="table-data">
                                <img src={airline.logo} alt={`${airline.name} logo`} className="airline-logo" />
                            </td>
                            <td className="table-data">{airline.name}</td>
                            <td className="table-data">{airline.code}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Create Button */}
            <div className="button-container">
                <button
                    className="button"
                    onClick={() => document.getElementById('create-form').style.display = 'block'}
                >
                    Create New Airline
                </button>
            </div>

            {/* Form for Creating New Airline */}
            <div id="create-form" className="form-container">
                <h3 className="form-title">Create Airline</h3>
                <form onSubmit={handleCreate} className="form">
                    <div className="form-group">
                        <label className="label">Name: </label>
                        <input
                            type="text"
                            value={newAirline.name}
                            onChange={(e) => setNewAirline({ ...newAirline, name: e.target.value })}
                            required
                            className="input"
                        />
                    </div>
                    <div className="form-group">
                        <label className="label">Code: </label>
                        <input
                            type="text"
                            value={newAirline.code}
                            onChange={(e) => setNewAirline({ ...newAirline, code: e.target.value })}
                            required
                            className="input"
                        />
                    </div>
                    <div className="form-group">
                        <label className="label">Logo URL: </label>
                        <input
                            type="file"
                            value={newAirline.logo}
                            onChange={(e) => setNewAirline({ ...newAirline, logo: e.target.value })}
                            required
                            className="input"
                        />
                    </div>
                    <button type="submit" className="submit-button">Create</button>
                </form>
            </div>
        </div>
    );
}
