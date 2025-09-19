import myntra_logo from '../images/myntra_logo.png';

function Header (){
    return(
    <div className='header'>
        <img src={myntra_logo} className='myntra_logo'/>
       
        <button>MEN</button>
        <button>WOMEN</button>
        <button>KIDS</button>
        <button>HOME & LIVING</button>
        <button>BEAUTY</button>
        <button>STUDIO</button>

        <input type="text" className="input" placeholder='   Search for products,brands and more'></input>

        <button>Profile</button>
        <button>Wishlist</button>
        <button>Bag</button>

    </div>

)}

export default Header;