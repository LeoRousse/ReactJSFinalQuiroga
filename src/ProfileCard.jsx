
function ProfileCard({titulo, handle, descripcion, url}) {
    return (
        <div>
            <img src={url} alt="logo"/>
            <h2>{titulo}</h2>
            <p>{handle}</p>
            <p>{descripcion}</p>
        </div>
    )
}

export default ProfileCard;