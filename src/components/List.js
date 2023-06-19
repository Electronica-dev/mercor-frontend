import Card from "./Card"

export default function List({colour, lineColour, name, cardList}) {
  return (
    <div className='flex flex-col w-[32.5%] bg-[#F5F5F5] p-4'>
      <div className='flex flex-row items-center'>
        <span className={`rounded-full ${colour} w-2 h-2 mr-2`}></span>
        <div className='mr-4'>
          {name}
        </div>
        <div className='rounded-full w-[20px] h-[20px] bg-[#E0E0E0] mr-auto'>
          <div className='text-center align-middle leading-[20px] text-[#625F6D]'>
            {cardList.length}
          </div>
        </div>
        <button>
          <img src="add-purple.svg" alt="add" width={"24px"} height={"24px"} />
        </button>
      </div>
      <div className={`border-[1px] ${lineColour} my-4`}></div>
      <div className='flex flex-col overflow-auto [&>*]:mb-4'>
        {
          cardList.map((x) => {
            return (
              <Card
                importance={x.importance}
                title={x.title}
                textDescription={x.textDescription}
                comments={x.comments}
                files={x.files}
                assignedTo={x.assignedTo}
              />
            )
          })
        }
      </div>
    </div>
  )
}