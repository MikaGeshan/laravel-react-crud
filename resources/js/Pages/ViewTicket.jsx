import React from 'react';
import { MdDownload } from 'react-icons/md';
import { format } from 'date-fns';
import jsPDF from 'jspdf';

export default function ViewTicket({ ticket }) {
    const handleDownloadPDF = () => {
        const doc = new jsPDF();

        // Add passenger name and flight details to the PDF
        doc.setFontSize(22);
        doc.text('Airplane Ticket', 20, 20);

        doc.setFontSize(16);
        doc.text(`Passenger: ${ticket.passenger_name}`, 20, 40);
        doc.text(`Flight Number: ${ticket.flight_number}`, 20, 50);

        doc.setFontSize(12);
        doc.text(`Departure: SYD (Sydney) - ${format(new Date(ticket.departure_date), 'dd MMM yyyy')}`, 20, 70);
        doc.text(`Destination: ${ticket.destination}`, 20, 80);
        doc.text(`Class: ${ticket.seat_class}`, 20, 90);
        doc.text(`Seat: ${ticket.seat}`, 20, 100);

        // Add more details if necessary...

        // Save the PDF with a specific file name
        doc.save(`${ticket.passenger_name}_Ticket.pdf`);
    };

    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="p-6">
                <div className="text-center text-xl font-bold">{ticket.passenger_name}</div>
                <div className="text-center text-gray-500 mb-6">{ticket.flight_number}</div>
                <div className="flex flex-col items-center">
                    <div className="text-xl font-bold">✈️</div>
                    <div className="text-sm text-gray-500">{format(new Date(ticket.departure_date), 'dd MMM yyyy')}</div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="text-center">
                        <div className="text-sm text-gray-500">{ticket.departure_location}</div>
                    </div>
                    <div className="text-center">
                        <div className="text-sm text-gray-500">{ticket.destination}</div>
                    </div>
                </div>
                <div className="border-t border-gray-200 my-4"></div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                        <div className="text-gray-500">Class</div>
                        <div className="font-bold">{ticket.seat_class}</div>
                    </div>
                    <div>
                        <div className="text-gray-500">Seat</div>
                        <div className="font-bold">{ticket.seat}</div>
                    </div>
                </div>
                <div className="border-t border-gray-200 my-4"></div>
                <div className="mt-6">
                    <button
                        onClick={handleDownloadPDF}
                        className="w-full py-2 px-4 bg-blue-600 text-white rounded-full text-sm"
                    >
                        <MdDownload className="inline-block mr-2 text-xl" />
                        Download Ticket
                    </button>
                </div>
            </div>
        </div>
    );
}
