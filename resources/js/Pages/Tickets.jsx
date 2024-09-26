import React from 'react'
import { MdSearch } from 'react-icons/md';
import airasiaLogo from '../../../public/assets/airasia.png';
import garudaIndLogo from '../../../public/assets/garudaindonesia.png';

export default function Tickets() {
  return (
    <div className="p-4">
      <div className="flex justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-md">
            <div>
              <p className="text-sm text-gray-500">From</p>
              <p className="text-lg font-semibold">Jakarta, CGK</p>
            </div>
            <div className="flex items-center justify-center w-10 h-10 bg-black text-white rounded-full">
              <span className="transform rotate-90">⇄</span>
            </div>
            <div>
              <p className="text-sm text-gray-500">To</p>
              <p className="text-lg font-semibold">Switzerland, ZRH</p>
            </div>
          </div>
        </div>
        <div className="flex-1 ml-4">
          <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-md">
            <div>
              <p className="text-sm text-gray-500">Departure Date</p>
              <p className="text-lg font-semibold">Wed, 21 Jun</p>
            </div>
            <div className="flex items-center justify-center w-10 h-10 bg-black text-white rounded-full">
              <MdSearch size={20} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="w-1/4 p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-4">Filters</h2>
          <div className="mb-4">
            <h3 className="text-sm font-semibold mb-2">Transit Amount</h3>
            <div>
              <label className="flex items-center mb-2">
                <input type="radio" name="transit" className="mr-2" /> All
              </label>
              <label className="flex items-center mb-2">
                <input type="radio" name="transit" className="mr-2" /> Non-Transit
              </label>
              <label className="flex items-center mb-2">
                <input type="radio" name="transit" className="mr-2" /> 1 stop
              </label>
              <label className="flex items-center mb-2">
                <input type="radio" name="transit" className="mr-2" /> 2 stop
              </label>
            </div>
          </div>
          <div className="mb-4">
            <h3 className="text-sm font-semibold mb-2">Price Range</h3>
            <input type="range" min="20" max="600" className="w-full" />
            <div className="flex justify-between text-sm mt-2">
              <span>USD 20</span>
              <span>USD 600</span>
            </div>
          </div>
          <div className="mb-4">
            <h3 className="text-sm font-semibold mb-2">Flight Class</h3>
            <div>
              <label className="flex items-center mb-2">
                <input type="radio" name="class" className="mr-2" /> All
              </label>
              <label className="flex items-center mb-2">
                <input type="radio" name="class" className="mr-2" /> Economy
              </label>
              <label className="flex items-center mb-2">
                <input type="radio" name="class" className="mr-2" /> Business
              </label>
              <label className="flex items-center mb-2">
                <input type="radio" name="class" className="mr-2" /> First Class
              </label>
              <label className="flex items-center mb-2">
                <input type="radio" name="class" className="mr-2" /> Private
              </label>
            </div>
          </div>
          <div className="mb-4">
            <h3 className="text-sm font-semibold mb-2">Airlines</h3>
            <div>
              <label className="flex items-center mb-2">
                <input type="checkbox" className="mr-2" /> Garuda Indonesia
              </label>
              <label className="flex items-center mb-2">
                <input type="checkbox" className="mr-2" /> Qatar Airways
              </label>
              <button className="text-red-500 text-sm">Show More</button>
            </div>
          </div>
          <button className="w-full bg-black text-white py-2 rounded-lg">Apply Filters</button>
        </div>
        <div className="w-3/4 p-4">
          <div className="bg-white rounded-lg shadow-md p-4 mb-4">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <img src={garudaIndLogo} alt="Garuda Indonesia" className="w-10 h-10 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold">Garuda Indonesia</h3>
                  <p className="text-sm text-gray-500">GI 2112 | 14 h 30 min</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full mr-2">Economy Class</span>
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">Direct Flight</span>
              </div>
            </div>
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-sm text-gray-500">10:00 PM</p>
                <p className="text-lg font-semibold">Jakarta</p>
                <p className="text-sm text-gray-500">Soekarno-Hatta International Airport (CGK)</p>
              </div>
              <div className="flex items-center">
                <span className="text-gray-500 mx-2">14 hours 30 minutes</span>
                <span className="text-red-500">Non-Transit</span>
              </div>
              <div>
                <p className="text-sm text-gray-500">1:30 AM</p>
                <p className="text-lg font-semibold">Switzerland</p>
                <p className="text-sm text-gray-500">Zurich International Airport (ZRH)</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold">USD 540.45 / person</p>
              <button className="bg-black text-white py-2 px-4 rounded-lg">Select Flight</button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <img src={airasiaLogo} alt="AirAsia" className="w-10 h-10 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold">AirAsia</h3>
                  <p className="text-sm text-gray-500">QA 1444 | 14 h 30 min</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full mr-2">Economy Class</span>
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">Direct Flight</span>
              </div>
            </div>
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-sm text-gray-500">10:00 PM</p>
                <p className="text-lg font-semibold">Jakarta</p>
                <p className="text-sm text-gray-500">Soekarno-Hatta International Airport (CGK)</p>
              </div>
              <div className="flex items-center">
                <span className="text-gray-500 mx-2">14 hours 30 minutes</span>
                <span className="text-red-500">Non-Transit</span>
              </div>
              <div>
                <p className="text-sm text-gray-500">1:30 AM</p>
                <p className="text-lg font-semibold">Switzerland</p>
                <p className="text-sm text-gray-500">Zurich International Airport (ZRH)</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold">USD 615.30 / person</p>
              <button className="bg-black text-white py-2 px-4 rounded-lg">Select Flight</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
