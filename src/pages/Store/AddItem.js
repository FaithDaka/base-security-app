import React, { useState } from "react";
import API from "../../helpers/api";
import LoadHandler from "../../components/Handlers/LoadHandler";

const AddItem = ({ close, items }) => {
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = { itemName, quantity, category };

    try {
      const response = await API.post("/api/store", data);
      console.log("Store Items Data ===>", response);
      setLoading(false);
      setItemName('');
      setQuantity('');
      setCategory();
      close();
      items();
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="card">
        <div className="card-body gun">
          <form onSubmit={handleSubmit}>
          <div className="form-group">
              <label>Category</label>
              <select
                className="form-control select2 select2-hidden-accessible"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option>Select Category</option>
                <option value="uniforms">Uniforms</option>
                <option value="phones">Phones</option>
                <option value="boots">Boots</option>
                <option value="alarms">Alarms</option>
              </select>
            </div>
            <div className="form-group">
              <label>ItemName</label>
              <input
                type="text"
                className="form-control"
                placeholder=""
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                required/>
            </div>
            <div className="form-group">
              <label>Quantity</label>
              <input
                type="text"
                className="form-control"
                placeholder=""
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                required/>
            </div>
            <button type="submit" className="btn btn-primary">
              {loading ? <LoadHandler/>: "Save Gun"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddItem;
