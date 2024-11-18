function Userprofile5({ username, avatar }) {
    return (
        <div>
            <h2>{username}</h2>
            <img src={avatar} alt={username} className="user-img" />
        </div>
    );
}

export default Userprofile5;
