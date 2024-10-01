import React, { useState, useEffect } from 'react';
import { useForm, Link } from '@inertiajs/react'; // Import Link for navigation and routing

export default function Airline({ airlines: initialAirlines, flash }) {
    const [airlines] = useState(initialAirlines || []);
    const [editingAirline, setEditingAirline] = useState(null);
    const { data, setData, post, put, processing, errors, reset, delete: destroy } = useForm({
        name: '',
        code: '',
        logo: '',
    });

    useEffect(() => {
        if (flash.success) {
            alert(flash.success);
            reset();
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
        if (data.logo) formData.append('logo', data.logo);

        if (editingAirline) {
            // Update existing airline
            put(`/airlines/${editingAirline.id}`, formData);
        }
    };

    const handleDelete = (id) => {
        destroy(route('airlines.destroy', id));
    };

    const handleEdit = (airline) => {
        setEditingAirline(airline);
        setData('name', airline.name);
        setData('code', airline.code);
        setData('logo', '');
        const updateForm = document.getElementById('update-form');
        updateForm.style.display = updateForm.style.display === 'block' ? 'none' : 'block'; // Toggle update form
    };

    const toggleCreateForm = () => {
        const createForm = document.getElementById('create-form');
        createForm.style.display = createForm.style.display === 'block' ? 'none' : 'block';
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
                        <th className="table-header">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(airlines) && airlines.map((airline, index) => (
                        <tr key={index}>
                            <td className="table-data">
                                <img src={airline.logo_url} alt={`${airline.name}`} className="airline-logo" />
                            </td>
                            <td className="table-data">{airline.name}</td>
                            <td className="table-data">{airline.code}</td>
                            <td className="table-data">
                                <button
                                    onClick={() => handleEdit(airline)}
                                    className="bg-green-500 rounded-md text-sm px-2 py-1 text-white mr-2"
                                >
                                    Update
                                </button>
                                <button
                                    onClick={() => handleDelete(airline.id)}
                                    className="bg-red-500 rounded-md text-sm px-2 py-1 text-white"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Create Button*/}
            <div className="button-container">
                <button
                    className="button"
                    onClick={toggleCreateForm}
                >
                    Add New Airline
                </button>
            </div>

            {/* Form for Creating New Airline (Unchanged) */}
            <div id="create-form" className="form-container">
                <h3 className="form-title">Create Airline</h3>
                <form onSubmit={(e) => { e.preventDefault(); post('/airlines', new FormData(e.target)); }} className="form">
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

            {/* Form for Updating Existing Airline */}
            <div id="update-form" className="form-container" style={{ display: 'none' }}>
                <h3 className="form-title">Update Airline</h3>
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
                            className="input"
                        />
                        {errors.logo && <span className="error">{errors.logo}</span>}
                    </div>
                    <button
                        type="submit"
                        className="submit-button"
                        disabled={processing}
                    >
                        {processing ? 'Updating...' : 'Update'}
                    </button>
                </form>
            </div>
        </div>
    );
}
