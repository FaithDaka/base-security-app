import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API from "../../helpers/api";
import InvoicePage from ".";
import LoadHandler from "../../components/Handlers/LoadHandler";

const AddInvoice = ({match}) => {
  const [invoiceNo, setInvoiceNo] = useState("");
  const [vatNo, setVatNo] = useState("");
  const [tinNo, setTinNo] = useState("");
  const [billAddress, setBillAddress] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [nextBillDate, setNextBillDate] = useState("");
  const [issueDate, setIssueDate] = useState("");
  const [paymentTerms, setPaymentTerms] = useState("");
  const [item, setItem] = useState("");
  const [description, setDescription] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [subTotal, setSubTotal] = useState("");
  const [currency, setCurrency] = useState("");
  const [checkedBy, setCheckedBy] = useState("");
  const [authorisedBy, setAuthorisedBy] = useState("");
  const [client, setClient] = useState("");

  const [loading, setLoading] = useState(false);
  const user = JSON.parse(localStorage.getItem("user")).user;

  const id = match.params.id;
  const [clientInfo, setClientInfo] = useState({});

  const getClient = async (id) => {
    try {
      const res = await API.get(`/api/client/${id}`);
      setClientInfo(res.data)
      setClient(res.data.fname)
      console.log("Client Fetch Backend ===>", res);
      
    } catch (error) {
      console.log("Error fetching guard", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getClient(id);
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      invoiceNo,
      vatNo,
      tinNo,
      billAddress,
      invoiceDate,
      nextBillDate,
      issueDate,
      paymentTerms,
      item,
      description,
      unitPrice,
      quantity,
      subTotal,
      currency,
      checkedBy,
      authorisedBy,
      client: id,
    };

    try {
      const response = await API.post("/api/invoice", data);
      console.log("Posted Invoice Data ===>", response);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };

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
            <form onSubmit={handleSubmit}>
              <div className="row justify-content-between ml-2">
                <div className="col-lg-5 mb-3">
                  <div className="card">
                    <div className="card-body bg-light bg-soft">
                      <div className="mb-2 text-align-right">
                        <label>Invoice Date:</label>
                        <input
                          type="date"
                          className="invoice-input"
                          value={invoiceDate}
                          onChange={(e) => setInvoiceDate(e.target.value)}
                        />
                      </div>
                      <div className="mb-2 text-align-right">
                        <label>Issue Date:</label>
                        <input
                          type="date"
                          className="invoice-input"
                          value={issueDate}
                          onChange={(e) => setIssueDate(e.target.value)}
                        />
                      </div>
                      <div className="text-align-right">
                        <label>Next Bill Date:</label>
                        <input
                          type="date"
                          className="invoice-input"
                          value={nextBillDate}
                          onChange={(e) => setNextBillDate(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 mb-3">
                  <div className="card">
                    <div className="card-body bg-light bg-soft">
                      <div className="mb-2 text-align-right">
                        <label>Vat No:</label>
                        <input
                          type="text"
                          className="invoice-input"
                          value={vatNo}
                          onChange={(e) => setVatNo(e.target.value)}
                        />
                      </div>
                      <div className="mb-2 text-align-right">
                        <label>Tin No:</label>
                        <input
                          type="text"
                          className="invoice-input"
                          value={tinNo}
                          onChange={(e) => setTinNo(e.target.value)}
                        />
                      </div>
                      <div className="text-align-right">
                        <label>Payment Terms:</label>
                        <input
                          type="text"
                          className="invoice-input"
                          value={paymentTerms}
                          onChange={(e) => setPaymentTerms(e.target.value)}
                        />
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
                            value={billAddress}
                            onChange={(e) => setBillAddress(e.target.value)}
                          />
                        </div>
                        <div className="mb-2 text-align-right">
                          <label>Customer No:</label>
                          <input
                            type="text"
                            className="invoice-input"
                            value={client}
                            onChange={(e) => setClient(e.target.value)}
                            disabled
                          />
                        </div>
                        <div className="text-align-right">
                          <label>Payment Terms:</label>
                          <input
                            type="text"
                            className="invoice-input"
                            value={paymentTerms}
                            onChange={(e) => setPaymentTerms(e.target.value)}
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
                            value={checkedBy}
                            onChange={(e) => setCheckedBy(e.target.value)}
                          />
                        </div>
                        <div className="text-align-right">
                          <label>Authorised By:</label>
                          <input
                            type="text"
                            className="invoice-input"
                            value={authorisedBy}
                            onChange={(e) => setAuthorisedBy(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 mt-5">
                <table className="table table-responsiveness table-nowrap table-bordered">
                  <thead>
                    <tr>
                      <td style={{ width: "60px" }}>Item </td>
                      <td>Description</td>
                      <td style={{ width: "20px" }}>Unit Price</td>
                      <td style={{ width: "20px" }}>Quantity</td>
                      <td style={{ width: "60px" }}>Sub total</td>
                      <td style={{ width: "60px" }}></td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <input
                          type="text"
                          className="invoice-input"
                          value={item}
                          onChange={(e) => setItem(e.target.value)}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="invoice-input"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="invoice-input"
                          value={unitPrice}
                          onChange={(e) => setUnitPrice(e.target.value)}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="invoice-input"
                          value={quantity}
                          onChange={(e) => setQuantity(e.target.value)}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="invoice-input"
                          value={subTotal}
                          onChange={(e) => setSubTotal(e.target.value)}
                        />
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
