import './CircledIconLink.scss'

export function CircledIconLink ({ to, target, children }) {
    return <a href={to} target={target} className="circled-icon-link">
        <div className="inset-icon">{children}</div>
    </a>
}