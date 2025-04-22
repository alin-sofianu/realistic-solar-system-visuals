import React from "react";

function InfoTable() {
  return (
    <div>
      <div className="top-14 left-14">
        <table className="min-w-full bg-gray-800 text-white">
          <thead>
            <tr className="bg-gray-900">
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Planet
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Distance from Sun (million km)
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Size (Earth = 1)
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Orbit Duration (Earth days)
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Spin Duration (Earth days)
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            <tr className="hover:bg-gray-700">
              <td className="px-6 py-4 whitespace-nowrap">Mercury</td>
              <td className="px-6 py-4 whitespace-nowrap">57.9</td>
              <td className="px-6 py-4 whitespace-nowrap">0.383</td>
              <td className="px-6 py-4 whitespace-nowrap">88</td>
              <td className="px-6 py-4 whitespace-nowrap">58.6</td>
            </tr>
            <tr className="hover:bg-gray-700">
              <td className="px-6 py-4 whitespace-nowrap">Venus</td>
              <td className="px-6 py-4 whitespace-nowrap">108.2</td>
              <td className="px-6 py-4 whitespace-nowrap">0.949</td>
              <td className="px-6 py-4 whitespace-nowrap">225</td>
              <td className="px-6 py-4 whitespace-nowrap">243</td>
            </tr>
            <tr className="hover:bg-gray-700">
              <td className="px-6 py-4 whitespace-nowrap">Earth</td>
              <td className="px-6 py-4 whitespace-nowrap">149.6</td>
              <td className="px-6 py-4 whitespace-nowrap">1.000</td>
              <td className="px-6 py-4 whitespace-nowrap">365</td>
              <td className="px-6 py-4 whitespace-nowrap">1</td>
            </tr>
            <tr className="hover:bg-gray-700">
              <td className="px-6 py-4 whitespace-nowrap">Mars</td>
              <td className="px-6 py-4 whitespace-nowrap">227.9</td>
              <td className="px-6 py-4 whitespace-nowrap">0.532</td>
              <td className="px-6 py-4 whitespace-nowrap">687</td>
              <td className="px-6 py-4 whitespace-nowrap">1.03</td>
            </tr>
            <tr className="hover:bg-gray-700">
              <td className="px-6 py-4 whitespace-nowrap">Jupiter</td>
              <td className="px-6 py-4 whitespace-nowrap">778.5</td>
              <td className="px-6 py-4 whitespace-nowrap">11.209</td>
              <td className="px-6 py-4 whitespace-nowrap">4,333</td>
              <td className="px-6 py-4 whitespace-nowrap">0.41</td>
            </tr>
            <tr className="hover:bg-gray-700">
              <td className="px-6 py-4 whitespace-nowrap">Saturn</td>
              <td className="px-6 py-4 whitespace-nowrap">1,434.0</td>
              <td className="px-6 py-4 whitespace-nowrap">9.449</td>
              <td className="px-6 py-4 whitespace-nowrap">10,759</td>
              <td className="px-6 py-4 whitespace-nowrap">0.45</td>
            </tr>
            <tr className="hover:bg-gray-700">
              <td className="px-6 py-4 whitespace-nowrap">Uranus</td>
              <td className="px-6 py-4 whitespace-nowrap">2,871.0</td>
              <td className="px-6 py-4 whitespace-nowrap">4.007</td>
              <td className="px-6 py-4 whitespace-nowrap">30,687</td>
              <td className="px-6 py-4 whitespace-nowrap">0.72</td>
            </tr>
            <tr className="hover:bg-gray-700">
              <td className="px-6 py-4 whitespace-nowrap">Neptune</td>
              <td className="px-6 py-4 whitespace-nowrap">4,495.0</td>
              <td className="px-6 py-4 whitespace-nowrap">3.883</td>
              <td className="px-6 py-4 whitespace-nowrap">60,190</td>
              <td className="px-6 py-4 whitespace-nowrap">0.67</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default InfoTable;
