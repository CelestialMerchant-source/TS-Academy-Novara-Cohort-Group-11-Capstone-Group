import PlanetCard from './PlanetCard';

const terrestrial = [
  {
    name: 'Mercury',
    mass: '0.330',
    diameter: '4,878',
    density: '5427',
    gravity: '3.7',
  },
  {
    name: 'Venus',
    mass: '4.867',
    diameter: '12,104',
    density: '5243',
    gravity: '8.9',
  },
  {
    name: 'Earth',
    mass: '5.972',
    diameter: '12,756',
    density: '5514',
    gravity: '9.8',
  },
  {
    name: 'Mars',
    mass: '0.642',
    diameter: '6,792',
    density: '3933',
    gravity: '3.7',
  },
];

const gasGiants = [
  {
    name: 'Jupiter',
    mass: '1898',
    diameter: '142,984',
    density: '1326',
    gravity: '23.1',
  },
  {
    name: 'Saturn',
    mass: '568',
    diameter: '120,536',
    density: '687',
    gravity: '9.0',
  },
];

const iceGiants = [
  {
    name: 'Uranus',
    mass: '86.8',
    diameter: '51,118',
    density: '1271',
    gravity: '8.7',
  },
  {
    name: 'Neptune',
    mass: '102',
    diameter: '49,528',
    density: '1638',
    gravity: '11.0',
  },
];

const dwarf = [
  {
    name: 'Pluto',
    mass: '0.0130',
    diameter: '2,376',
    density: '2095',
    gravity: '0.7',
  },
];

export default function DataTable() {
  return (
    <section className='bg-white py-16' id='section-two'>
      <div className='w-[90%] max-w-[1200px] mx-auto px-4'>
        <h2 className='text-2xl md:text-3xl font-semibold text-[#164baf] mb-4'>
          Planetary Facts at a Glance
        </h2>
        <p className='text-[#0f2a44] text-lg leading-relaxed mb-0'>
          Below is a comparative table of major planets in our solar system. The
          data highlights key physical properties, orbital information, and
          observational landmarks.
        </p>
        <p className='text-[#0f2a44] text-lg font-semibold italic mt-12 mb-4'>
          Data about the planets of our solar system (Planetary Facts taken from
          NASA)
        </p>

        <div className='overflow-x-auto rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.08)] mt-8 -mx-0'>
          <table className='w-full border-collapse bg-white text-[0.95rem]'>
            <thead className='bg-[#164baf] text-white'>
              <tr>
                <th
                  className='p-4 text-center font-semibold border border-[#dddddd]'
                  colSpan={2}
                ></th>
                <th className='p-4 text-center font-semibold border border-[#dddddd] text-[0.9rem]'>
                  Name
                </th>
                <th className='p-4 text-center font-semibold border border-[#dddddd] text-[0.9rem]'>
                  Mass (10²⁴ kg)
                </th>
                <th className='p-4 text-center font-semibold border border-[#dddddd] text-[0.9rem]'>
                  Diameter (km)
                </th>
                <th className='p-4 text-center font-semibold border border-[#dddddd] text-[0.9rem]'>
                  Density (kg/m³)
                </th>
                <th className='p-4 text-center font-semibold border border-[#dddddd] text-[0.9rem]'>
                  Gravity (m/s²)
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Terrestrial Planets */}
              {terrestrial.map((planet, i) => (
                <tr
                  key={planet.name}
                  className='border-b border-[#e0e0e0] hover:bg-[#f8f9fa] transition-colors duration-200'
                >
                  {i === 0 && (
                    <td
                      rowSpan={4}
                      colSpan={2}
                      className='bg-[#c7daf5] text-[#0d3b66] font-semibold text-center align-middle p-4 border-2 border-white text-[0.95rem]'
                    >
                      Terrestrial Planets
                    </td>
                  )}
                  <td className='p-4 font-normal bg-white border border-[#e0e0e0] text-left'>
                    {planet.name}
                  </td>
                  <td className='p-4 text-center border border-[#e0e0e0] bg-white'>
                    {planet.mass}
                  </td>
                  <td className='p-4 text-center border border-[#e0e0e0] bg-white'>
                    {planet.diameter}
                  </td>
                  <td className='p-4 text-center border border-[#e0e0e0] bg-white'>
                    {planet.density}
                  </td>
                  <td className='p-4 text-center border border-[#e0e0e0] bg-white'>
                    {planet.gravity}
                  </td>
                </tr>
              ))}

              {/* Gas Giants */}
              {gasGiants.map((planet, i) => (
                <tr
                  key={planet.name}
                  className='border-b border-[#e0e0e0] hover:bg-[#f8f9fa] transition-colors duration-200'
                >
                  {i === 0 && (
                    <td
                      rowSpan={4}
                      className='bg-[#c7daf5] text-[#0d3b66] font-semibold text-center align-middle p-4 border-2 border-white text-[0.95rem]'
                    >
                      Jovian Planets
                    </td>
                  )}
                  {i === 0 && (
                    <td
                      rowSpan={2}
                      className='bg-[#dae8f7] text-[#0d3b66] font-semibold text-center align-middle p-4 border border-[#c7daf5] text-[0.9rem]'
                    >
                      Gas Giants
                    </td>
                  )}
                  <td className='p-4 font-normal bg-white border border-[#e0e0e0] text-left'>
                    {planet.name}
                  </td>
                  <td className='p-4 text-center border border-[#e0e0e0] bg-white'>
                    {planet.mass}
                  </td>
                  <td className='p-4 text-center border border-[#e0e0e0] bg-white'>
                    {planet.diameter}
                  </td>
                  <td className='p-4 text-center border border-[#e0e0e0] bg-white'>
                    {planet.density}
                  </td>
                  <td className='p-4 text-center border border-[#e0e0e0] bg-white'>
                    {planet.gravity}
                  </td>
                </tr>
              ))}

              {/* Ice Giants */}
              {iceGiants.map((planet, i) => (
                <tr
                  key={planet.name}
                  className='border-b border-[#e0e0e0] hover:bg-[#f8f9fa] transition-colors duration-200'
                >
                  {i === 0 && (
                    <td
                      rowSpan={2}
                      className='bg-[#dae8f7] text-[#0d3b66] font-semibold text-center align-middle p-4 border border-[#c7daf5] text-[0.9rem]'
                    >
                      Ice Giants
                    </td>
                  )}
                  <td className='p-4 font-normal bg-white border border-[#e0e0e0] text-left'>
                    {planet.name}
                  </td>
                  <td className='p-4 text-center border border-[#e0e0e0] bg-white'>
                    {planet.mass}
                  </td>
                  <td className='p-4 text-center border border-[#e0e0e0] bg-white'>
                    {planet.diameter}
                  </td>
                  <td className='p-4 text-center border border-[#e0e0e0] bg-white'>
                    {planet.density}
                  </td>
                  <td className='p-4 text-center border border-[#e0e0e0] bg-white'>
                    {planet.gravity}
                  </td>
                </tr>
              ))}

              {/* Dwarf Planets */}
              {dwarf.map((planet) => (
                <tr
                  key={planet.name}
                  className='border-b border-[#e0e0e0] hover:bg-[#f8f9fa] transition-colors duration-200'
                >
                  <td
                    colSpan={2}
                    className='bg-[#c7daf5] text-[#0d3b66] font-semibold text-center align-middle p-4 border-2 border-white text-[0.95rem]'
                  >
                    Dwarf Planets
                  </td>
                  <td className='p-4 font-normal bg-white border border-[#e0e0e0] text-left'>
                    {planet.name}
                  </td>
                  <td className='p-4 text-center border border-[#e0e0e0] bg-white'>
                    {planet.mass}
                  </td>
                  <td className='p-4 text-center border border-[#e0e0e0] bg-white'>
                    {planet.diameter}
                  </td>
                  <td className='p-4 text-center border border-[#e0e0e0] bg-white'>
                    {planet.density}
                  </td>
                  <td className='p-4 text-center border border-[#e0e0e0] bg-white'>
                    {planet.gravity}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
