import { useState } from 'react'
import { FaStar, FaRegStar } from 'react-icons/fa'

const StarRating = ({ initialRating, color }) => {
    const [currentRating, setCurrentRating] = useState(initialRating)
    
    const changeRating = rating => {
        setCurrentRating(rating)
    }

    return (
        <div>
            {[1, 2, 3, 4, 5].map((star) =>
                star <= currentRating 
                    ? <FaStar key={star} color={color || "black"} onClick={() => changeRating(star)} style={{ cursor: 'pointer' }}/>
                    : <FaRegStar key={star} color={color || "black"} onClick={() => changeRating(star)} style={{ cursor: 'pointer' }}/>
            )}
        </div>
    )
}

export default StarRating