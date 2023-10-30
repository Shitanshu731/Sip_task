import{ useState } from 'react'


const Navbar = () => {
    const [btn, setBtn] = useState<boolean>(false);
    function handleClick(){
        setBtn(btn=>!btn);
       }
       let toggleClassCheck = btn ? 'small-sidebar':null; 

  return (
   
    <div>
      <nav className = "bg-slate-300 shadow-lg flex justify-between items-center p-3">
        <ul>
            <li><img  className = "w-54 h-7" src = "https://sip-safe.com/wp-content/uploads/2020/07/SIP-S-logo-01.png" alt = "Company Logo" /></li>
        </ul>
        <ul className = "flex items-center gap-4 sm:hidden ">
            <li><img className = "cursor-pointer w-5 h-5" src = "http://cdn.onlinewebfonts.com/svg/img_176563.png"/></li>
            <li className = "cursor-pointer z-50"><img onClick={handleClick}  className = "w-6 h-6 " src = "https://cdn4.iconfinder.com/data/icons/yellow-commerce/100/.svg-19-512.png"/></li>
        </ul>
        <ul className='max-sm:hidden'>
          <button className ="bg-blue-300 duration-150 ">Register</button>
        </ul>
      </nav>
      <div className = {` ${toggleClassCheck} absolute h-screen w-0 opacity-0 truncate top-0 right-0 z-20 bg-white border-2 duration-75`} >
        <div className = "flex items-center bg-blue-200 ">
            <section className='mt-5'><img className = "w-10 h-16 m-3" src = "https://static.vecteezy.com/system/resources/previews/000/648/372/original/vector-computer-icon-symbol-sign.jpg" /></section>
            <section className = "mt-5">
            <h2 className = "text-sm">Simple and Free Investing</h2>
            <button className='w-28 text-sm flex items-center p-2 h-6'>Login/Register</button>
            </section>
        </div>
        <div className='p-3 gap-4 flex flex-col'>
        <h2>Filter Stocks</h2>
        <h2>Filter Mutual Funds</h2>
        <h2>Filter Us Stocks</h2>
        </div>
        <div className='p-3 gap-4 flex flex-col'>
        <h2>Smart Save</h2>
        <h2>Compare Funds</h2>
        </div>
        <div className='p-3 gap-4 flex flex-col'>
        <h2>Credit</h2>
        </div>
        <div className='p-3 gap-4 flex flex-col'>
        <h2>View In App</h2>
        <h2>Help and Support</h2>
        </div>
        
      </div>
      
    </div>
  )
}

export default Navbar
