import iconArrow from '../assets/icon-arrow.svg';

export const IpAddressInput = () => {
  return (
    <div className='flex rounded-lg overflow-hidden'>
      <input 
        type='text'
        className="py-3 px-4 w-10/12"
        placeholder="Search for any IP address or domain"
      />
      <button 
        className='bg-[#2b2b2b] w-2/12 flex justify-center items-center'
      >
        <img src={iconArrow} alt="icon arrow" />
      </button>
    </div>
  )
}
