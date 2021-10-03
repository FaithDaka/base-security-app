import React, { useEffect, useState } from "react";
import InvoicePage from ".";
import LoadSpinner from "../../components/Handlers/Loadspinner";
import Pagination from "../../components/Pagination";
import API from "../../helpers/api";

const InvoiceList = ({history}) => {
  const [invoices, setInvoices] = useState([]);
  const user = JSON.parse(localStorage.getItem("user")).user;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const hideAlert = () => setShowAlert(false);

  const [currentpage, setCurrentPage] = useState(1);
  const [invoicesPerPage] = useState(10);
  const lastInvoice = currentpage * invoicesPerPage;
  const firstInvoice = lastInvoice - invoicesPerPage;
  const currentInvoices = invoices.slice(firstInvoice, lastInvoice);
  const totalInvoices = invoices.length;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const getInvoices = async () => {
    setLoading(true);
    try {
      const res = await API.get("/api/invoice");
      console.log("Invoices ===>", res);
      setInvoices(res.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("Error fetching invoices", error);
    }
  };

  const addInvoice = () => {
    setLoading(true);
    setTimeout(() => {
      history.push(`/admin/${user._id}/invoices/add_new`);
    }, 1000);
  };

  const getInvoice = (id) => {
    setLoading(true);
    setTimeout(() => {
      history.push(`/admin/${user._id}/invoices/${id}/details`);
    }, 1000);
  };

  useEffect(() => {
    getInvoices();
  }, [totalInvoices]);
  return (
    <InvoicePage>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
              <h4 className="mb-sm-0 font-size-18">Invoices</h4>
              <div className="col-3">
                <div className="text-sm-end" style={{ textAlign: "right" }}>
                  <button
                    type="button"
                    className="btn btn-success btn-rounded waves-effect waves-light me-2"
                    onClick={addInvoice}
                  >
                    <i className="fa fa-plus-circle me-1"></i> New Invoice
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-row mb-2 justify-content-end">
                  <div className="col-sm-4">
                    <div className="search-box me-2 mb-2 d-inline-block">
                      <div className="position-relative">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search..."
                        />
                        <i className="fa fa-search search-icon mt-3 font-size-13"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="table-responsive">
                  <table className="table align-middle table-nowrap table-check table-bordered table-striped">
                    {loading && <LoadSpinner />}
                    <thead className="table-dark">
                      <tr className="tr-head">
                        <th className="align-middle"> Invoice No.</th>
                        <th className="align-middle"> Date</th>
                        <th className="align-middle"> Description</th>
                        <th className="align-middle"> Amount</th>
                        <th className="align-middle"> </th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentInvoices.length > 0 ? (
                        currentInvoices.map((invoice) => (
                          <tr key={invoice._id} className="tr-body">
                            <td>{invoice.invoiceNo}</td>
                            <td>
                              <span className="td-hover"
                              onclick={()=>getInvoice(invoice._id)}>
                                {invoice.timestamp}
                              </span>
                            </td>
                            <td>{invoice.description}</td>
                            <td>{invoice.subtotal}</td>
                            <td>
                              <div className="row ml-2">
                                <span
                                  title="Download"
                                  style={{
                                    marginRight: "20px",
                                    color: "blue",
                                  }}
                                >
                                  <i className="fas fa-download action" />
                                </span>
                                <span
                                  style={{ color: "red" }}
                                  title="Delete invoice"
                                >
                                  <i className="far fa-trash-alt action" />
                                </span>
                              </div>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <span className="text-muted font-size-15 text-align-center text-capitalize">
                            No invoices yet!
                          </span>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Pagination
          productsPerPage={invoicesPerPage}
          totalProducts={totalInvoices}
          paginate={paginate}
        />
      </div>
    </InvoicePage>
  );
};

export default InvoiceList;
