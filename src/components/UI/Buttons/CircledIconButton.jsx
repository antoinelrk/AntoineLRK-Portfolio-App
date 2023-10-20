import './CircledIconButton.scss'

export function CircledIconButton ({ children, onClick }) {
    return <button onClick={onClick} className="circled-icon-btn">
        <div className="inset-icon">{children}</div>
    </button>
}