import React, { useEffect, useState } from "react";
import moment from "moment";
import { Link } from 'react-router-dom';
import LoadSpinner from "../../components/Handlers/Loadspinner";
import Pagination from "../../components/Pagination";
import API from "../../helpers/api";

const ClientInvoices = ({clientId}) => {
  const [invoices, setInvoices] = useState([]);
  const user = JSON.parse(localStorage.getItem("user")).user;
  const [loading, setLoading] = useState(false);

  const clientinvoice = invoices.filter(invoice => invoice.client._id === clientId)

  const [currentpage, setCurrentPage] = useState(1);
  const [invoicesPerPage] = useState(10);
  const lastInvoice = currentpage * invoicesPerPage;
  const firstInvoice = lastInvoice - invoicesPerPage;
  const currentInvoices = clientinvoice.slice(firstInvoice, lastInvoice);
  const totalInvoices = clientinvoice.length;

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

  

  useEffect(() => {
    getInvoices();
  }, [totalInvoices]);
  return (

      <div>
        <div className="row mt-3">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table align-middle table-nowrap table-check table-bordered table-striped">
                    {loading && <LoadSpinner />}
                    <thead className="table-dark">
                      <tr className="tr-head">
                        <th className="align-middle"> Invoice No.</th>
                        <th className="align-middle"> Invoice Date</th>
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
                              <span className="td-hover">
                                <Link to={`/admin/${user._id}/invoices/${invoice._id}`}>
                                  {moment(invoice.invoiceDate).format('l')}
                                </Link>
                              </span>
                            </td>
                            <td>{invoice.description}</td>
                            <td>{invoice.subTotal}</td>
                            <td>
                              <div className="row ml-2">
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

  );
};

export default ClientInvoices;
