import React, { useState, useEffect } from "react";
import API from "../../helpers/api";
import LoadHandler from "../../components/Handlers/LoadHandler";

const UpdateItem = ({ close, items, id, show }) => {
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");

  const [loading, setLoading] = useState(false);

  const getItem = async () => {
    setLoading(true);
    if (id !== undefined && show === true) {
      try {
        const res = await API.get(`/api/store/${id}`);
        console.log("Fetched Items ===>", res);
        setLoading(false);
        setItemName(res.data.itemName);
        setQuantity(res.data.quantity);
        setCategory(res.data.category);
      } catch (error) {
        console.log("Fetch gun details error", error);
        setLoading(false);
      }
    } else setLoading(false);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await API.patch(`/api/store/${id}`, {
        itemName,
        quantity,
        category,
      });
      setLoading(false);
      console.log("Updated Store Items ==>", res);
      setLoading(false);
      setItemName("");
      setQuantity("");
      setCategory();
      close();
      items();
    } catch (err) {
      console.log("Gun update error", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    getItem();
  }, [id]);

  return (
    <>
      <div className="card">
        <div className="card-body gun">
          <form onSubmit={handleUpdate}>
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
                required
              />
            </div>
            <div className="form-group">
              <label>Quantity</label>
              <input
                type="text"
                className="form-control"
                placeholder=""
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              {loading ? <LoadHandler /> : "Save Gun"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateItem;
