import React from "react";
import InputForm from "../Elements/Input/Index";
import { FaTable } from "react-icons/fa";
import Upload from "../Elements/upload";

function FormProperty() {
  return (
    <form
      action=""
      className="flex flex-col bg-white rounded-xl p-4 shadow-md w-full md:basis-1/3"
    >
      <h2 className="text-l font-semibold mb-4 text-gray-700">
        <FaTable className="inline mb-1 mr-2" />
        Form Input Property
      </h2>
      <Upload />
      <InputForm
        label="JUDUL LISTING"
        name="judulListing"
        type="text"
        placeholder="Ketik judul cok..."
      />
      <InputForm
        label="HARGA"
        name="harga"
        type="text"
        placeholder="Ketik harga cok..."
      />
    </form>
  );
}

export default FormProperty;
