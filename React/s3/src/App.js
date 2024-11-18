import './App.css';
import Userprofile from './Userprofile';
import Userprofile2 from './Userprofile2';
import Userprofile3 from './Userprofile3';
import Userprofile4 from './Userprofile4';
import Userprofile5 from './Userprofile5';

function App() {

  //khai báo 1 mảng chứa các tên
  const namelist = ["Mot","Hai","Ba"] ;
  //khai báo 1 mảng chứa các phần tử mỗi phần tử là 1 object
  const userlist = [
    {"name" : "Mot" , "pic" : "./images/ava1.jpg"},
    {"name" : "Hai" , "pic" : "./images/ava2.jpg"},
    {"name" : "Ba" , "pic" : "./images/ava3.jpg"}
  ];

  return (
    <div className="App">
      <Userprofile />

      <hr/>
      <Userprofile2 />

      <hr/>
      {namelist.map((n)=>(<Userprofile3 name={n} />))}


      <hr/>
    {userlist.map((usr)=>(<Userprofile4  userName={usr.name} avatar={usr.pic}/>))}
    <hr/>


    {userlist.map((usr)=>(<Userprofile5  userName={usr.name} avatar={usr.pic}/>))}
    </div>
  );
}

export default App;
