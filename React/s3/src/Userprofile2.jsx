function Userprofile2() {
    const usename="Vu";
    const pic="./images/ava2.jpg";

    return ( <div>
            <h2>{usename}</h2>
            <img src={pic} alt="{username}" className="user-img2"/>

    </div> );
}

export default Userprofile2;