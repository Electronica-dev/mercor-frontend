import './App.css';
import { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Card from './components/Card';
import List from './components/List';
import { cards } from './cards';

function App() {
  const [size, setSize] = useState(window.innerWidth); // check size size of the window
    const handleWindowSizeChange = () => {
      setSize(window.innerWidth);
    };
    console.log(size);
    // call your useEffect
    useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
      };
    }, []);
  return (
    <div className="h-full">
      <div className='flex h-full flex-row'>
        <div className='basis-1/5'>
          <Sidebar />
        </div>
        <div className='border-[0.5px] border-[#DBDBDB]'></div>
        <div className='basis-4/5 max-h-full'>
          <Topbar />
          <div className='border-[0.5px] border-[#DBDBDB]'></div>
          <div className='p-8'>
            <div className='flex flex-row'>
              <div className='flex flex-row mr-auto'>
                <div className='text-[46px] font-semibold pr-4'>
                  Mobile App
                </div>
                <button>
                  <img src="edit.svg" alt="edit" width={"30px"} height={"30px"}/>
                </button>
                <div className='mr-2'></div>
                <button>
                  <img src="share.svg" alt="share" width={"30px"} height={"30px"}/>
                </button>
              </div>
              <div className='flex flex-row items-center'>
                <button>
                  <img src="add-purple.svg" alt="add" />
                </button>
                <div className='text-[#5030E5] mx-2'>
                  Invite
                </div>
                <div className='flex -space-x-2 overflow-hidden [&>div]:ring-1 [&>div]:ring-white'>
                  <img className="w-[38px] h-[38px] rounded-full" src="1guy.png" alt="anima agarwal" />
                  <img className="w-[38px] h-[38px] rounded-full" src="2girl.png" alt="anima agarwal" />
                  <img className="w-[38px] h-[38px] rounded-full" src="3guy.png" alt="anima agarwal" />
                  <img className="w-[38px] h-[38px] rounded-full" src="4guy.png" alt="anima agarwal" />
                  <div className="w-[38px] h-[38px] rounded-full bg-[#F4D7DA] text-[#D25B68] text-center align-middle leading-[38px]">+2</div>
                </div>
              </div>
            </div>
            <div className='my-8'></div>
            <div className='flex flex-row items-center'>
              <button className='flex space-x-2 items-center px-3 py-2 rounded-md border border-[#787486] text-[#787486]'>
                <img className='mr-1' src="filter.svg" alt="filter" />
                Filter
                <img src="arrow-down.svg" alt="down" width={"14px"} height={"14px"}/>
              </button>
              <div className='mx-1.5'></div>
              <button className='flex space-x-2 items-center px-3 py-2 rounded-md border border-[#787486] text-[#787486]'>
                <img className='mr-1' src="calendar.svg" alt="calendar" />
                Today
                <img src="arrow-down.svg" alt="down" width={"14px"} height={"14px"}/>
              </button>
              <div className='mr-auto'></div>
              <button className='flex space-x-2 items-center px-3 py-2 rounded-md border border-[#787486] text-[#787486]'>
                <img className='mr-1' src="share_secondary.svg" alt="share" />
                Today
                <img src="arrow-down.svg" alt="down" width={"14px"} height={"14px"}/>
              </button>
              <div className='border-[0.5px] border-[#787486] mx-4 h-[28px]'></div>
              <button className='flex items-center p-[10px] rounded-md bg-[#5030E5]'>
                <img src="orientation-1.svg" alt="orientation-1"/>
              </button>
              <div className='mx-1'></div>
              <button className='flex items-center p-[10px] rounded-md'>
                <img src="orientation-2.svg" alt="orientation-1"/>
              </button>
            </div>
          </div>
          <div className='px-8 flex flex-row [&>div]:rounded-2xl justify-between'>
            <List colour={"bg-[#5030E5]"} lineColour={"border-[#5030E5]"} name={"To Do"} cardList={cards.todo}/>
            <List colour={"bg-[#FFA500]"} lineColour={"border-[#FFA500]"} name={"On Progress"} cardList={cards.onprogress}/>
            <List colour={"bg-[#76A5EA]"} lineColour={"border-[#8BC48A]"} name={"Done"} cardList={cards.completed}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
