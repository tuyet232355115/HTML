function Userprofile4(props) {
    return ( <div>
            <h2>{props.usrname}</h2>
            <img src={props.avatar} alt={props.usrname} className="user-img"/>

    </div> );
}

export default Userprofile4;