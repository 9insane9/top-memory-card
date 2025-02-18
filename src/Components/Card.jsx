import Tilt from 'react-parallax-tilt'

export default function Card({ src, alt, playTurnFn }) {

    return (
        <Tilt
            glareEnable={true}
            glareMaxOpacity={0.4}
            perspective={750}
            glareBorderRadius='10px'   
        >
            <div className="card" onClick={() => playTurnFn(alt)}>
                <div className='img-wrapper'>
                    <img className="card-img" src={src} alt={alt} />
                </div>
                <h2 className="card-title">{alt}</h2>
            </div>
        </Tilt>
    )
}