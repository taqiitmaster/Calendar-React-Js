import React from 'react'

function Month() {
  return (
   <>
   
   <div className="ul text-8xl flex justify-between pt-5">
    <ul className='pl-16'>
    <li><button>Jan</button></li>
    <li><button>Feb</button></li>
    <li><button>Mar</button></li>
    <li><button>Apr</button></li>
    <li><button>May</button></li>
    <li><button>Jun</button></li></ul>
    <div className="table">
    <div className="box">
        <h1 className='text-4xl border border-black p-5'>Monday</h1>
    </div>
    <div className="box">
        <h1 className='text-4xl border border-black p-5'>Monday</h1>
    </div>
    <div className="box">
        <h1 className='text-4xl border border-black p-5'>Monday</h1>
    </div>
    <div className="box">
        <h1 className='text-4xl border border-black p-5'>Monday</h1>
    </div>
    <div className="box">
        <h1 className='text-4xl border border-black p-5'>Monday</h1>
    </div>
    <div className="box">
        <h1 className='text-4xl border border-black p-5'>Monday</h1>
    </div>
    <div className="box">
        <h1 className='text-4xl border border-black p-5'>Monday</h1>
    </div>
   </div>
    <ul className='pr-16'>
    <li><button>Jul</button></li>
    <li><button>Aug</button></li>
    <li><button>Sep</button></li>
    <li><button>Oct</button></li>
    <li><button>Nov</button></li>
    <li><button>Dec</button></li></ul>
   </div>
   </>
  )
}

export default Month
