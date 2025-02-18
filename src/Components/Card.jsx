export default function Card({ src, alt, playTurnFn }) {
    
    return (
        <div className="card" onClick={() => playTurnFn(alt)}>
            <img className="card-img" src={src} alt={alt} />
            <h1 className="card-title">{alt}</h1>
        </div>
    )
}