import React, { useState } from "react";
import API from "../../helpers/api";
import LoadHandler from "../../components/Handlers/LoadHandler";

const AddSalary = ({ close, emplId }) => {
  const [employee, setEmployee] = useState("");
  const [grossPay, setGrossPay] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = { employee: emplId, grossPay };

    try {
      const response = await API.post("/api/payroll", data);
      console.log("Baisc Salary Added ===>", response);
      setLoading(false);
      setEmployee("");
      setGrossPay("");
      close();
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
              <label>Gross Pay</label>
              <input
                type="text"
                className="form-control"
                placeholder=""
                value={grossPay}
                onChange={(e) => setGrossPay(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              {loading ? <LoadHandler /> : "Add Gross Pay"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddSalary;
