import Style from './NavLink.module.scss'

export default function NavLink ({url, name}) {
    return (<a href={url} className={Style.NavLink}>{name}</a>)
}