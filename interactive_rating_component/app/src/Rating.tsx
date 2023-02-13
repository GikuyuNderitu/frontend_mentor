import { useState } from 'react'
import './Rating.css';
import iconStar from './assets/icon-star.svg'

const RATINGS = [1, 2, 3, 4, 5] as const;

const Phases = {
    rating: 'rating',
    submitted: 'submitted',
} as const;

type Phase = keyof typeof Phases;

export function Rating() {
    const [rating, setRating] = useState<number | null>(null)
    const [phase, setPhase] = useState<Phase>(Phases.rating);
    return <div className="Rating">
        <div className="Container">
            {phase == Phases.rating &&
                (<>
                    <Icon />

                    <h3 className='Title'>How did we do?</h3>

                    <p className='Description'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offerings!</p>

                    <div className="Option-container">
                        {RATINGS.map((val, idx) => (
                            <RatingOption
                                key={idx}
                                value={val}
                                selected={rating != null && rating == idx}
                                onClick={(_) => setRating(idx)} />
                        ))}
                    </div>

                    <button disabled={rating === null} onClick={(e) => setPhase(Phases.submitted)} className="submit-btn">SUBMIT</button>
                </>
                )
            }
            {phase == Phases.submitted && (
                <>
                    <div className="centered">

                        <img className='centered' src="/illustration-thank-you.svg" alt="" />
                    </div>

                    <div className="centered">
                        <div className="selected-info-container">
                            <p>
                                You selected {RATINGS[rating ?? 0]} out of 5
                            </p>
                        </div>

                    </div>

                    <h3 className='submitted-title centered'>Thank you!</h3>

                    <p className='Description submitted-description centered'>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
                </>
            )
            }
        </div>
    </div>
}

type RatingOptionProps = {
    value: number
    selected?: boolean
    onClick: React.MouseEventHandler
}

function RatingOption({ value, selected = false, onClick }: RatingOptionProps) {
    return <button onClick={onClick} className={selected ? "Option selected-option" : "Option"}>
        {value}
    </button>
}

function Icon() {
    return <div className="Icon">
        <img src={iconStar} alt="" />
    </div>
}