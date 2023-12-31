import React,{useState} from "react"
import './App.css';
import Modal from './component/Modal';
function App() {

  const [openModal, setOpenModal]= useState(false)

  return (
    <div className="App">
      <h2>Hey click on the button to open the modal</h2>
     <button className="openModalBtn" onClick={()=>{
      setOpenModal(true)
      }}>Open</button>
    {openModal && <Modal closeModal={setOpenModal}/>}
    </div>
  );
}

export default App;
