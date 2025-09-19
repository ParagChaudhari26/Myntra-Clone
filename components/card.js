import ethnic_wear from '../images/ethnic_wear.jpg';
import casual_wear from '../images/casual_wear.jpg';
import mens_activewear from '../images/mens_activewear.jpg';
import womens_activewear from '../images/womens_activewear.jpg';
import western_wear from '../images/western_wear.jpg';
import sports_wear from '../images/sports_wear.jpg';

import kids_wear from '../images/kids_wear.jpg';
import mens_footwear from '../images/mens_footwear.jpg';
import womens_footwear from '../images/womens_footwear.jpg';
import belts from '../images/belts.jpg';
import office_wear from '../images/office_wear.jpg';
import mens_ethnic_wear from '../images/mens_ethnic_wear.jpg';
 
import home_decor from '../images/home_decor.jpg';
import hand_bags from '../images/hand_bags.jpg';
import headphones_speakers from '../images/headphones_speakers.jpg';
import jwellery from '../images/jwellery.jpg';
import size_inclusive from '../images/size_inclusive.jpg';
import inclusive_men from '../images/inclusive_men.jpg';

import watches_wearables from '../images/watches_wearables.jpg';
import sleepwear from '../images/sleepwear.jpg';
import workwear from '../images/workwear.jpg';
import eyewear from '../images/eyewear.jpg';
import workwear from '../images/workwear.jpg';
import casual_styles from '../images/casual_styles.jpg';

import belts_bags from '../images/belts_bags.jpg';
import luggage_bags from '../images/luggage_bags.jpg';
import flipflops from '../images/flipflops.jpg';

function Create_card (props){
    return(
        <div className="card">
            <div className="cardtextdata">
                <img src={props.image}/>
                <p className="type">{props.type}</p>
                <p className="off">{props.off}</p>
                <p className="shopnow">Shop Now</p>
            </div>
        </div>
    )
}

// Cards
const row1 = <div className="row">
    <Create_card image={ethnic_wear} type="Ethinic Wear" off="50-80% OFF"/>
    <Create_card image={casual_wear} type="Casual Wear" off="40-80% OFF"/>
    <Create_card image={mens_activewear} type="Men's Activewear" off="50-80% OFF"/>
    <Create_card image={womens_activewear} type="Womens's Activewear" off="30-70% OFF"/>
    <Create_card image={western_wear} type="Western Wear" off="40-80% OFF"/>
    <Create_card image={sports_wear} type="Sportswear" off="50-80% OFF"/>
</div>

const row2 = <div className="row">
    <Create_card image={kids_wear} type="Kids Wear" off="50-70% OFF"/>
    <Create_card image={mens_footwear} type="Men's Footwear" off="50-70% OFF"/>
    <Create_card image={womens_footwear} type="Womens's Footwear" off="40-80% OFF"/>
    <Create_card image={belts} type="Bans,Belts & Wallets" off="40-70% OFF"/>
    <Create_card image={office_wear} type="Office Wear" off="40-70% OFF"/>
    <Create_card image={mens_ethnic_wear} type="Men's Ethnic Wear" off="50-80% OFF"/>
</div>

const row3 = <div className="row">
    <Create_card image={home_decor} type="Home Decor" off="40-70% OFF"/>
    <Create_card image={hand_bags} type="Handbags" off="40-80% OFF"/>
    <Create_card image={headphones_speakers} type="Headphones & Speakers" off="40-80% OFF"/>
    <Create_card image={jwellery} type="Jewellery" off="40-70% OFF"/>
    <Create_card image={size_inclusive} type="Size-Inclusive Styles" off="40-70% OFF"/>
    <Create_card image={inclusive_men} type="Inclusive Styles" off="50-80% OFF"/>
</div>

const row4 = <div className="row">
    <Create_card image={watches_wearables} type="Watches & Wareables" off="40-70% OFF"/>
    <Create_card image={sleepwear} type="Sleepwear" off="30-70% OFF"/>
    <Create_card image={workwear} type="Workwear" off="40-70% OFF"/>
    <Create_card image={eyewear} type="Eyewear" off="50-70% OFF"/>
    <Create_card image={workwear} type="Workwear" off="40-80% OFF"/>
    <Create_card image={casual_styles} type="Casual Styles" off="50-80% OFF"/>
</div>

const row5 = <div className="row">
    <Create_card image={belts_bags} type="Bags & Backpacks" off="30-80% OFF"/>
    <Create_card image={luggage_bags} type="Trolleys & Luggage Bags" off="30-70% OFF"/>
    <Create_card image={flipflops} type="Flipflops" off="30-70% OFF"/>
</div>

const allcards =( <>
    {row1} {row2} {row3} {row4} {row5}
</> )

export default allcards;