export default function Card({ importance, completed, title, textDescription, imageDescription, comments, files, assignedTo }) {
  return (
    <div className='rounded-2xl bg-white p-4'>
      <div className='flex flex-row text-center align-middle'>
        {completed === 'false' && importance === 'low' && <div className='rounded-md text-[#D58D49] text-[12px] bg-[#DFA874] bg-opacity-[20%] w-min px-1 py-0.5'>
          Low
        </div>}
        {completed === 'false' && importance === 'high' && <div className='rounded-md text-[#D8727D] text-[12px] bg-[#D8727D] bg-opacity-[10%] w-min px-1 py-0.5'>
          High
        </div>}
        {completed === 'true' && <div className='rounded-md text-[#68B266] text-[12px] bg-[#83C29D] bg-opacity-[20%] w-min px-1 py-0.5'>
          Completed
        </div>}
        <div className='ml-auto'>
          <button>
            ...
          </button>
        </div>
      </div>
      <div className='font-semibold text-[18px]'>
        {title}
      </div>
      {
        textDescription &&
        <div className='text-[12px] text-[#787486]'>
          {textDescription}
        </div>
      }
      {
        imageDescription.length !== 0 &&
        <div className="flex justify-between">
          {
            imageDescription.map(element => {
              return (
                <div key={element}>
                  <img src={element} alt="" className="max-w-[95%]"/>
                </div>
              )
            })
          }
        </div>

      }
      <div className='py-2'></div>
      <div className='flex items-center'>
        <div className='flex -space-x-2 overflow-hidden [&>div]:ring-1 [&>div]:ring-white shrink-0'>
          {
            assignedTo.map((x) => {
              return (
                <img
                  className="w-[24px] h-[24px] rounded-full max-xl:w-0 max-xl:invisible"
                  key={x.src}
                  src={x.src}
                  alt={x.alt}
                />
              )
            })
          }
        </div>
        <div className="max-xl:visible max-xl:w-[24px] invisible w-[0px] h-[24px] rounded-full bg-[#F4D7DA] text-[#D25B68] text-center text-xs align-middle leading-[24px] shrink-0">{assignedTo.length}</div>
        <div className='ml-auto'></div>
        <div className='flex text-[#787486]'>
          <img className='px-1' src="comment-card.svg" alt="comments" />
          <div className='text-[12px] flex items-center'>
            {comments == null ? 0: comments}
            <div className="max-xl:w-0 max-xl:invisible">&nbsp;comments</div>
          </div>
        </div>
        <div className='mx-1'></div>
        <div className='flex text-[#787486]'>
          <img className='px-1' src="attachment-card.svg" alt="attachments" />
          <div className='text-[12px] flex items-center'>
            {files == null ? 0: files}
            <div className="max-xl:w-0 max-xl:invisible">&nbsp;files</div>
          </div>
        </div>
      </div>
    </div>
  )
}