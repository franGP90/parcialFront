"use client"
import './cocktail.css'

type Params = {
    cocktailImg: string | null,
    cocktailName: string,
}

const Cocktail = ({cocktailImg, cocktailName}: Params) => {
    return(
        <div className='cocktail'>
            {cocktailImg && <img src={cocktailImg}></img>}
            <p>{cocktailName}</p>
        </div>
    );
}

export default Cocktail;