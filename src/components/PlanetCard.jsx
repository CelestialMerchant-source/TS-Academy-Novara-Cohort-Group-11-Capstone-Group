// Reusable planet data row — used internally by DataTable
export default function PlanetCard({ name, mass, diameter, density, gravity }) {
  return (
    <tr className='border-b border-[#e0e0e0] hover:bg-[#f8f9fa] transition-colors duration-200'>
      <td className='p-4 font-normal bg-white border border-[#e0e0e0] text-left'>
        {name}
      </td>
      <td className='p-4 text-center border border-[#e0e0e0] bg-white'>
        {mass}
      </td>
      <td className='p-4 text-center border border-[#e0e0e0] bg-white'>
        {diameter}
      </td>
      <td className='p-4 text-center border border-[#e0e0e0] bg-white'>
        {density}
      </td>
      <td className='p-4 text-center border border-[#e0e0e0] bg-white'>
        {gravity}
      </td>
    </tr>
  );
}
