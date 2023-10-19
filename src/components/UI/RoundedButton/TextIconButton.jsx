import './RoundedButton.scss'

export default function ({ name, icon }) {
    return (
        <button className='rounded icon'>
            {name}
            <div className="icon">
                <figure dangerouslySetInnerHTML={{ __html: icon }}></figure>
            </div>
        </button>
    )
}