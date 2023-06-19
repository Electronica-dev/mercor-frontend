export default function Topbar() {
  return (
    <div id='topbar' className='h-14 flex flex-row mx-8 items-center gap-x-6'>
      <div className='relative w-[30%] mr-auto'>
        <img
          src="/search.svg"
          alt="search-icon"
          width={20}
          height={20}
          className="absolute top-1 left-1"
        />
        <input type="text" className={`rounded-[0.25rem] w-full h-[30px] text-sm pl-8 pr-8 bg-[#F5F5F5]`} placeholder='Search for anything...'/>
      </div>
      <div className='flex flex-row [&>img]:px-3'>
        <img src="calendar_main.svg" alt="calendar" srcset="" />
        <img src="message-question.svg" alt="messages" srcset="" />
        <img src="notification.svg" alt="notifications" />
      </div>
      <div className='flex flex-row [&>div]:px-3'>
        <div className='flex flex-col'>
          <div className='text-[#0D062D]'>Anima Agarwal</div>
          <div className='text-[#787486] text-[14px]'>U.P, India</div>
        </div>
        <div>
          <img className="w-[38px] h-[38px] rounded-full" src="anima_agarwal.png" alt="anima agarwal" />
        </div>
        <button>
          <img src="arrow-down.svg" alt="" srcset="" />
        </button>
      </div>
    </div>
  )
}