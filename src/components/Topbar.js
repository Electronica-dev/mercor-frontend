export default function Topbar() {
  return (
    <div id='topbar' className='h-14 flex mx-8 items-center gap-x-6'>
      <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="md:hidden p-2 rotate-180 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span className="sr-only">Open sidebar</span>
          <img src="collapse.svg" alt="" />
      </button>
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
      <div className='flex flex-row [&>button]:mx-3'>
        <button>
          <img src="calendar_main.svg" alt="calendar" />
        </button>
        <button>
          <img src="message-question.svg" alt="messages" />
        </button>
        <button>
          <img src="notification.svg" alt="notifications" />
        </button>
      </div>
      <div className='flex flex-row [&>div]:px-3 max-md:[&>div]:px-1 items-center'>
        <div className='flex flex-col'>
          <div className='text-[#0D062D]'>Anima Agarwal</div>
          <div className='max-lg:invisible max-lg:h-0 visible text-[#787486] text-[14px]'>U.P, India</div>
        </div>
        <div className="shrink-0">
          <img className="w-[38px] h-[38px] rounded-full" src="anima_agarwal.png" alt="anima agarwal" />
        </div>
        <button>
          <img src="arrow-down.svg" alt="arrow-down" />
        </button>
      </div>
    </div>
  )
}