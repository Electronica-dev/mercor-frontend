export default function Sidebar() {
  return (
    <div>
      <div className='h-14'>
        <div className="flex h-full mx-4 place-items-center">
          <img src="project-logo.svg" alt="project-logo"/>
          <div className='pl-1'>Project M.</div>
          <img className='ml-auto' src="collapse.svg" alt="" />
        </div>
      </div>
      <div className='border-[0.5px] border-[#DBDBDB]'></div>
      <div className='text-[#787486] p-4 flex flex-col'>
        <div className='pb-3'>
          <ul className={`[&>li]:py-2.5 [&>li>button]:flex [&>li>button]:items-center [&>li>button]:space-x-3 font-light`}>
            <li>
              <button>
                <img src='home.svg' alt='home'/>
                <span>Home</span>
              </button>
            </li>
            <li>
              <button>
                <img src='messages.svg' alt='messages'/>
                <span>Messages</span>
              </button>
            </li>
            <li>
              <button>
                <img src='tasks.svg' alt='tasks'/>
                <span>Tasks</span>
              </button>
            </li>
            <li>
              <button>
                <img src='members.svg' alt='members'/>
                <span>Members</span>
              </button>
            </li>
            <li>
              <button>
                <img src='settings.svg' alt='settings'/>
                <span>Settings</span>
              </button>
            </li>
          </ul>
        </div>
        <div className='border-[0.5px] border-[#DBDBDB]'></div>
        <div className="flex flex-col">
          <div className='flex'>
            <div className='py-3'>MY PROJECTS</div>
            <button className='ml-auto' >
              <img className="pr-2" src="add.svg" alt="add-projects" />
            </button>
          </div>
          <div>
            <ul className={`
              [&>li]:py-2
              [&>li]:flex
              [&>li>button]:flex
              [&>li>button:first-of-type]:w-full
              [&>li>button:first-of-type>span:first-of-type]:ml-3
              [&>li>button:last-of-type]:pr-3
              [&>li>button]:items-center
              [&>li>button]:space-x-3
              font-light
              text-[16px]`
              }
            >
              <li className='group focus-within:bg-[#5130e5] focus-within:bg-opacity-[8%] focus-within:font-bold focus-within:rounded-md focus-within:text-[#0D062D]'>
                <button className='w-full'>
                  <span className='rounded-full bg-[#7AC555] w-2 h-2'></span>
                  <span className=''>Mobile App</span>
                </button>
                <button className='invisible group-hover:visible'>...</button>
              </li>
              <li className='group focus-within:bg-[#5130e5] focus-within:bg-opacity-[8%] focus-within:font-bold focus-within:rounded-md focus-within:text-[#0D062D]'>
                <button>
                  <span className='rounded-full bg-[#FFA500] w-2 h-2'></span>
                  <span>Website Redesign</span>
                </button>
                <button className='ml-auto invisible group-hover:visible'>...</button>
              </li>
              <li className='group focus-within:bg-[#5130e5] focus-within:bg-opacity-[8%] focus-within:font-bold focus-within:rounded-md focus-within:text-[#0D062D]'>
                <button>
                  <span className='rounded-full bg-[#E4CCFD] w-2 h-2'></span>
                  <span>Design System</span>
                </button>
                <button className='ml-auto invisible group-hover:visible'>...</button>
              </li>
              <li className='group focus-within:bg-[#5130e5] focus-within:bg-opacity-[8%] focus-within:font-bold focus-within:rounded-md focus-within:text-[#0D062D]'>
                <button>
                  <span className='rounded-full bg-[#76A5EA] w-2 h-2'></span>
                  <span>Wireframes</span>
                </button>
                <button className='ml-auto invisible group-hover:visible'>...</button>
              </li>
            </ul>
          </div>
        </div>
        <div className="rounded-2xl bg-[#F5F5F5] flex flex-col p-4 items-center [&>div]:py-1 relative mt-auto">
          <div className="rounded-full bg-[#f5f5f5] w-[66px] h-[66px] absolute -top-[33px]"></div>
          <div className="rounded-full bg-[#fcd44ab3] w-[33px] h-[33px] absolute -top-[17px] filter blur-[17px]"></div>
          <img className="absolute -top-3" src="lamp-on.svg" alt="lamp" />
          <div className="text-[14px] text-center mt-4">
            Thoughts Time
          </div>
          <div className="text-[12px] text-center">
            We don't have any notice for you, till then you can share your thoughts with your peers.
          </div>
          <button className="text-[14px] bg-white w-fit px-8 py-2 rounded-md">
            Write a message
          </button>
        </div>
      </div>
    </div>
  )
}