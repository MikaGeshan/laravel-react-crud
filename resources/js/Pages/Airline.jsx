import React, { useState, useEffect } from 'react';
import { useForm } from '@inertiajs/react';

export default function Airline({ airlines: initialAirlines, flash }) {
    const [airlines, setAirlines] = useState(initialAirlines);
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        code: '',
        logo: null
    });

    useEffect(() => {
        if (flash.success) {
            alert(flash.success);
            reset(); // Reset form after successful submission
        }
        if (flash.error) {
            alert(flash.error);
        }
    }, [flash]);

    const handleChange = (e) => {
        setData(e.target.name, e.target.type === 'file' ? e.target.files[0] : e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('code', data.code);
        formData.append('logo', data.logo);

        post('/airlines', formData);
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
                    {Array.isArray(airlines) && airlines.map((airline, index) => (
                        <tr key={index}>
                            <td className="table-data">
                                <img src={airline.logo_url} alt={`${airline.name} logo`} className="airline-logo" />
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
                <form onSubmit={handleSubmit} className="form">
                    <div className="form-group">
                        <label className="label">Name: </label>
                        <input
                            type="text"
                            name="name"
                            value={data.name}
                            onChange={handleChange}
                            required
                            className="input"
                        />
                        {errors.name && <span className="error">{errors.name}</span>}
                    </div>
                    <div className="form-group">
                        <label className="label">Code: </label>
                        <input
                            type="text"
                            name="code"
                            value={data.code}
                            onChange={handleChange}
                            required
                            className="input"
                        />
                        {errors.code && <span className="error">{errors.code}</span>}
                    </div>
                    <div className="form-group">
                        <label className="label">Logo: </label>
                        <input
                            type="file"
                            name="logo"
                            onChange={handleChange}
                            required
                            className="input"
                        />
                        {errors.logo && <span className="error">{errors.logo}</span>}
                    </div>
                    <button
                        type="submit"
                        className="submit-button"
                        disabled={processing}
                    >
                        {processing ? 'Creating...' : 'Create'}
                    </button>
                </form>
            </div>
        </div>
    );
}
