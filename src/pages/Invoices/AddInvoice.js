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
      <div class="container-fluid">
   <div class="page-header">
      <div class="row">
         <div class="col-sm-12">
            <h3 class="page-title">Create Client Invoice for - {clientInfo.fname} {clientInfo.lname}</h3>
         </div>
      </div>
   </div>
   <div class="row">
      <div class="col-sm-12">
      
         <form onSubmit={handleSubmit}>
            <div class="row">
               <div class="col-sm-6 col-md-3">
                  <div class="form-group">
                     <label>Client ID <span class="text-danger">*</span></label>
                     <input class="form-control" type="text" 
                     value={id}
                     onChange={(e) => setClient(e.target.value)}
                     disabled
                     />
                  </div>
               </div>
               <div class="col-sm-6 col-md-3">
                  <div class="form-group">
                     <label>Authorised By</label>
                     <input class="form-control" type="text" 
                     value={authorisedBy}
                     onChange={(e) => setAuthorisedBy(e.target.value)}
                     />
                  </div>
               </div>
               <div class="col-sm-6 col-md-3">
                  <div class="form-group">
                     <label>Payment Terms <span class="text-danger">*</span></label>
                     <input class="form-control" type="text" 
                     value={paymentTerms}
                     onChange={(e) => setPaymentTerms(e.target.value)}
                     />
                  </div>
               </div>
               <div class="col-sm-6 col-md-3">
                  <div class="form-group">
                     <label>VAT</label>
                     <input class="form-control" type="text" 
                     value={vatNo}
                     onChange={(e) => setVatNo(e.target.value)}
                     />
                  </div>
               </div>
               <div class="col-sm-6 col-md-3">
                  <div class="form-group">
                     <label>Client Address</label>
                     <textarea class="form-control" rows="3"
                     value={billAddress}
                     onChange={(e) => setBillAddress(e.target.value)}
                     />
                  </div>
               </div>
               <div class="col-sm-6 col-md-3">
                  <div class="form-group">
                     <label>Billing Address</label>
                     <textarea class="form-control" rows="3"
                     value={billAddress}
                     onChange={(e) => setBillAddress(e.target.value)}
                     />
                  </div>
               </div>
               <div class="col-sm-6 col-md-3">
                  <div class="form-group">
                     <label>Invoice date <span class="text-danger">*</span></label>
                     <div class="cal-icon">
                        <input class="form-control" type="date" 
                        value={invoiceDate}
                        onChange={(e) => setInvoiceDate(e.target.value)}
                        />
                     </div>
                  </div>
               </div>
               <div class="col-sm-6 col-md-3">
                  <div class="form-group">
                     <label>Due Date <span class="text-danger">*</span></label>
                     <div class="cal-icon">
                        <input class="form-control" type="date"
                        value={issueDate}
                        onChange={(e) => setIssueDate(e.target.value)}
                        />
                     </div>
                  </div>
               </div>
            </div>
            <div class="row">
               <div class="col-md-12 col-sm-12">
                  <div class="table-responsive">
                  <div className="card">
              <div className="card-body">
                     <table class="table table-hover table-white">
                        <thead>
                           <tr>
                              <th style={{width: '20px'}}>#</th>
                              <th class="col-sm-2">Item</th>
                              <th class="col-md-6">Description</th>
                              <th style={{width:'100px'}}>Unit Cost</th>
                              <th style={{width:'80px'}}>Qty</th>
                              <th>Amount</th>
                              <th> </th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <td>1</td>
                              <td>
                                 <input class="form-control" type="text" style={{minWidth:'150px'}}
                                 value={item}
                                 onChange={(e) => setItem(e.target.value)}
                                 />
                              </td>
                              <td>
                                 <input class="form-control" type="text" style={{minWidth:'150px'}} 
                                 value={description}
                                 onChange={(e) => setDescription(e.target.value)}
                                 />
                              </td>
                              <td>
                                 <input class="form-control" style={{width:'100px'}} type="text" 
                                 value={unitPrice}
                                 onChange={(e) => setUnitPrice(e.target.value)}
                                 />
                              </td>
                              <td>
                                 <input class="form-control" style={{width:'80px'}} type="text" 
                                 value={quantity}
                                 onChange={(e) => setQuantity(e.target.value)}
                                 />
                              </td>
                              <td>
                                 <input class="form-control" readonly="" style={{width:'120px'}} type="text"
                                 value={subTotal}
                                 onChange={(e) => setSubTotal(e.target.value)}
                                 />
                              </td>
                              <td><a href="javascript:void(0)" class="text-success font-18" title="Add"><i class="fa fa-plus"></i></a></td>
                           </tr>
                           <tr>
                              <td>2</td>
                              <td>
                                 <input class="form-control" type="text" style={{minWidth:'150px'}}/>
                              </td>
                              <td>
                                 <input class="form-control" type="text" style={{minWidth:'150px'}}/>
                              </td>
                              <td>
                                 <input class="form-control" style={{width:'100px'}} type="text"/>
                              </td>
                              <td>
                                 <input class="form-control" style={{width:'80px'}} type="text"/>
                              </td>
                              <td>
                                 <input class="form-control" readonly="" style={{width:'120px'}}type="text"/>
                              </td>
                              <td><a href="javascript:void(0)" class="text-danger font-18" title="Remove"><i class="fa fa-trash-o"></i></a></td>
                           </tr>
                        </tbody>
                     </table>
                     </div>
                     </div>
                  </div>
                  <div class="table-responsive">
                  <div className="card">
              <div className="card-body">
                     <table class="table table-hover table-white">
                        <tbody>
                           <tr>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td class="text-right">Total</td>
                              <td style={{textAlign: 'right', paddingRight: '30px', width: '230px'}}>0</td>
                           </tr>
                           <tr>
                              <td colspan="5" class="text-right">Tax</td>
                              <td style={{textAlign: 'right', paddingRight: '30px', width: '230px'}}>
                                 <input class="form-control text-right" value="0" readonly="" type="text"/>
                              </td>
                           </tr>
                           <tr>
                              <td colspan="5" class="text-right">
                                 Discount %
                              </td>
                              <td style={{textAlign: 'right', paddingRight: '30px', width: '230px'}}>
                                 <input class="form-control text-right" type="text"/>
                              </td>
                           </tr>
                           <tr>
                              <td colspan="5" style={{textAlign: 'right', fontWeight: 'bold'}}>
                                 Grand Total
                              </td>
                              <td style={{textAlign: 'right', paddingRight: '30px', fontWeight: 'bold', fontSize: '16px',width: '230px'}}>
                                 UGX 0.00
                              </td>
                           </tr>
                        </tbody>
                     </table>
                     </div>
                     </div>
                  </div>
                  <div class="row">
                     <div class="col-md-12">
                        <div class="form-group">
                           <label>Other Information</label>
                           <textarea class="form-control"/>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="submit-section">
               <button class="btn btn-custom m-r-10">Save &amp; Send</button>
               <button class="btn btn-custom ml-3">Save</button>
            </div>
            
         </form>

      </div>
   </div>
</div>
    </InvoicePage>
  );
};

export default AddInvoice;
