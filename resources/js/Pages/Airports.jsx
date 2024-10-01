import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';

export default function Airports({ airports: initialAirports }) {
    const [showForm, setShowForm] = useState(false);
    const [editingAirport, setEditingAirport] = useState(null);
    const { data, setData, post, put, delete: destroy, reset, processing, errors } = useForm({
        name: '',
        code: '',
        city: '',
    });

    // Handle input change
    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingAirport) {
            put(`/airports/${editingAirport.id}`, {
                onSuccess: () => {
                    reset();
                    setShowForm(false);
                    setEditingAirport(null);
                },
            });
        } else {
            post('/airports', {
                onSuccess: () => {
                    reset();
                    setShowForm(false);
                },
            });
        }
    };

    // Handle edit button click
    const handleEdit = (airport) => {
        setEditingAirport(airport);
        setData({
            name: airport.name,
            code: airport.code,
            city: airport.city,
        });
        setShowForm(true);
    };

    // Handle delete button click
    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this airport?')) {
            destroy(`/airports/${id}`, {
                onSuccess: () => {
                    // Optionally handle success
                },
            });
        }
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Airports</h1>
            {/* Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200 bg-blue-900">
                    <thead>
                        <tr className="text-white">
                            <th className="py-2 px-4 border-b">Name</th>
                            <th className="py-2 px-4 border-b">Code</th>
                            <th className="py-2 px-4 border-b">City</th>
                            <th className="py-2 px-4 border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {initialAirports.map((airport) => (
                            <tr key={airport.id} className="bg-white">
                                <td className="py-2 px-4 border-b">{airport.name}</td>
                                <td className="py-2 px-4 border-b">{airport.code}</td>
                                <td className="py-2 px-4 border-b">{airport.city}</td>
                                <td className="py-2 px-4 border-b">
                                    <button
                                        onClick={() => handleEdit(airport)}
                                        className="mr-2 mt-2     py-1 px-3 bg-green-500 text-white font-semibold rounded hover:bg-yellow-500 transition duration-300"
                                    >
                                        Update
                                    </button>
                                    <button
                                        onClick={() => handleDelete(airport.id)}
                                        className="mr-2 mt-2 py-1 px-3 bg-red-400 text-white font-semibold rounded hover:bg-red-500 transition duration-300"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Button to show form */}
            <button
                onClick={() => {
                    setShowForm(!showForm);
                    setEditingAirport(null);
                    reset();
                }}
                className="mt-4 py-2 px-6 bg-blue-400 text-white font-semibold rounded hover:bg-blue-500 transition duration-300"
            >
                {showForm ? 'Hide Form' : 'Add New Airport'}
            </button>

            {/* Create/Edit Form */}
            {showForm && (
                <div className="mt-4 bg-white p-6 rounded shadow-lg">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <input
                            type="text"
                            name="name"
                            value={data.name}
                            onChange={handleChange}
                            placeholder="Name"
                            className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.name && <div className="text-red-500">{errors.name}</div>}

                        <input
                            type="text"
                            name="code"
                            value={data.code}
                            onChange={handleChange}
                            placeholder="Code"
                            className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.code && <div className="text-red-500">{errors.code}</div>}

                        <input
                            type="text"
                            name="city"
                            value={data.city}
                            onChange={handleChange}
                            placeholder="City"
                            className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.city && <div className="text-red-500">{errors.city}</div>}

                        <button
                            type="submit"
                            disabled={processing}
                            className={`py-2 px-4 bg-blue-500 text-white font-semibold rounded hover:bg-green-600 transition duration-300 ${processing ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            {processing ? 'Processing...' : editingAirport ? 'Update' : 'Create'}
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}
