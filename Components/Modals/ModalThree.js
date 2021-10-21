import React from "react";


function ModalThree({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>escolher o  combo</h1>
        </div>
        <div className="body">
          <p>segundo texto</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            cancelar
          </button>
          <button>Confirmar</button>
        </div>
      </div>
    </div>
  );
}

export default ModalThree;