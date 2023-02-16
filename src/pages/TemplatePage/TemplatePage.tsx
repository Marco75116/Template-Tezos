import React, { useState } from "react";
import Modal from "../../components/Modal/Modal";
import ConnectButton from "../../components/ConnectButton/ConnectButton";

const TemplatePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bg-yellow-100 flex flex-col w-screen h-screen">
        <div className="bg-blue-100 p-4 flex justify-end">
          <ConnectButton />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="p-10 text-3xl text-center">Tailwind Template </h1>
          <div
            onClick={() => setIsOpen(true)}
            className="bg-pink-200 w-50 p-4 rounded-md cursor-pointer animate-bounce shadow-lg hover:bg-pink-300"
          >
            Open modal
          </div>
        </div>
      </div>

      <Modal showModal={isOpen} closeFunction={() => setIsOpen(false)}>
        <div className="text-black pt-6">Hello I am a modal</div>
      </Modal>
    </>
  );
};

export default TemplatePage;
