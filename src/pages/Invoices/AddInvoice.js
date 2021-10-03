import React, { useState } from "react";
import { Link } from "react-router-dom";
import InvoicePage from ".";
import LoadHandler from "../../components/Handlers/LoadHandler";

const AddInvoice = () => {
  const [loading, setLoading] = useState(false);
  const user = JSON.parse(localStorage.getItem("user")).user;
  const deleterow = () => {};
  return (
    <InvoicePage>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
              <span className="col-4 row" title="Go back">
                <Link to={`/admin/${user._id}/invoices`}>
                  <i className="fa fa-arrow-left"></i>
                </Link>
                <h4 className="ml-3 mb-sm-0 font-size-16">
                  Create new invoice
                </h4>
              </span>
            </div>
          </div>
        </div>
        <div className="row add-invoice">
          <div className="col-12">
            <h4 className="card-title mb-5 font-size-18 text-capitalize">
              Fill in all the necessary details
            </h4>
            <form>
              <div className="row justify-content-between ml-2">
                <div className="col-lg-5 mb-3">
                  <div className="card">
                    <div className="card-body bg-light bg-soft">
                      <div className="mb-2 text-align-right">
                        <label>Invoice Date:</label>
                        <input type="date" className="invoice-input" required />
                      </div>
                      <div className="mb-2 text-align-right">
                        <label>Issue Date:</label>
                        <input type="date" className="invoice-input" required />
                      </div>
                      <div className="text-align-right">
                        <label>Next Bill Date:</label>
                        <input type="date" className="invoice-input" required />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 mb-3">
                  <div className="card">
                    <div className="card-body bg-light bg-soft">
                      <div className="mb-2 text-align-right">
                        <label>Vat No:</label>
                        <input type="text" className="invoice-input" required />
                      </div>
                      <div className="mb-2 text-align-right">
                        <label>Tin No:</label>
                        <input type="text" className="invoice-input" required />
                      </div>
                      <div className="text-align-right">
                        <label>Payment Terms:</label>
                        <input type="text" className="invoice-input" required />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-lg-7 mb-3">
                    <div className="card">
                      <div className="card-body bg-info bg-soft text-light">
                        <div className="mb-2 text-align-right">
                          <label>Bill Address:</label>
                          <input
                            type="text"
                            className="invoice-input"
                            required
                          />
                        </div>
                        <div className="mb-2 text-align-right">
                          <label>Customer No:</label>
                          <input
                            type="text"
                            className="invoice-input"
                            required
                          />
                        </div>
                        <div className="text-align-right">
                          <label>Payment Terms:</label>
                          <input
                            type="text"
                            className="invoice-input"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 mb-3">
                    <div className="card">
                      <div className="card-body bg-danger bg-soft text-light">
                        <div className="mb-2 text-align-right">
                          <label>Checked By:</label>
                          <input
                            type="text"
                            className="invoice-input"
                            required
                          />
                        </div>
                        <div className="text-align-right">
                          <label>Authorised By:</label>
                          <input
                            type="text"
                            className="invoice-input"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 table-responsiveness mt-5">
                <table className="table table-nowrap table-bordered">
                  <thead>
                    <tr>
                      <td style={{ width: "60px" }}>Item </td>
                      <td>Description</td>
                      <td style={{ width: "20px" }}>Unit Price</td>
                      <td style={{ width: "20px" }}>Quantity</td>
                      <td>Tax</td>
                      <td style={{ width: "60px" }}>Sub total</td>
                      <td style={{ width: "60px" }}></td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <span
                          class="input"
                          role="textbox"
                          className="span-text-area"
                          contentEditable
                        ></span>
                      </td>
                      <td>
                        <span
                          class="input"
                          role="textbox"
                          className="span-text-area"
                          contentEditable
                        ></span>
                      </td>
                      <td>
                        <span
                          class="input"
                          role="textbox"
                          className="span-text-area"
                          contentEditable
                        ></span>
                      </td>
                      <td>
                        <span
                          class="input"
                          role="textbox"
                          className="span-text-area"
                          contentEditable
                        ></span>
                      </td>
                      <td>
                        <span
                          class="input"
                          role="textbox"
                          className="span-text-area"
                          contentEditable
                        ></span>
                      </td>
                      <td>{}</td>
                      <td>
                        <span onClick={() => deleterow()}>
                          <i className="fas fa-minus-square text-danger"></i>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <span>
                  <button className="btn btn-success font-size-15 text-light">
                    <i className="fas fa-plus-square font-size-18 text-light mr-2"></i>
                    Add New Item
                  </button>
                </span>
              </div>
              <div className="d-flex flex-wrap gap-2 mt-5">
                <button type="submit" className="btn btn-primary">
                  {loading ? <LoadHandler /> : "Create Invoice"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </InvoicePage>
  );
};

export default AddInvoice;
