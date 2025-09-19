import big_img from '../images/big_img.png';

function Main(){
    return(
        <div className="main_part">
             <img src={big_img} className='main_big_img'/>
             <p className='sbc'>Shop By Category</p>
        </div>

    )
}

export default Main;