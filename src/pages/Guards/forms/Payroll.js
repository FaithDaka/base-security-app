import React, { useState } from "react";

const Payroll = ({
  grossPay,
  lst,
  netPay,
  employeeNssf,
  employerNssf,
  deductions,
  paye,
  setEmployeeNSSF,
  setEmployerNSSF,
  setGrossPay,
  setNetPay,
  setLST,
  setDeductions,
  setPaye,
  guardSubmit,
}) => {
  const [isResult, setIsResult] = useState(false);

  const calculateResults = (pay) => {
    const nssfEmp = Number((10 / 100) * pay);
    const nssfEmpl = Number((5 / 100) * pay);

    let payeAmt;

    if (pay <= 235000) {
      payeAmt = Number((0 / 100) * pay);
    } else if (pay <= 335000) {
      payeAmt = Number((10 / 100) * pay);
    } else if (pay <= 410000) {
      payeAmt = Number((20 / 100) * pay);
    } else if (pay <= 10000000) {
      payeAmt = Number((30 / 100) * pay);
    } else {
      payeAmt = Number((40 / 100) * pay);
    }

    const totalDeduction = Number(nssfEmpl + payeAmt) + Number(lst);
    const netPayAmt = Number(grossPay - totalDeduction);

    setPaye(payeAmt);
    setNetPay(netPayAmt);
    setEmployerNSSF(nssfEmp);
    setEmployeeNSSF(nssfEmpl);
    setDeductions(totalDeduction);
    setIsResult(true);
    return;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateResults(grossPay);
  };

  return (
    <div id="payroll-data" class="pro-overview tab-pane fade show active">
      <div class="row">
        <div class="col-sm-4">
          <div class="form-group">
            <label class="col-form-label">
              Gross Salary <span class="text-danger">*</span>
            </label>
            <input
              class="form-control"
              type="text"
              value={grossPay}
              onChange={(e) => setGrossPay(e.target.value)}
            />
          </div>
        </div>
        <div class="col-sm-4">
          <div class="form-group">
            <label class="col-form-label">Local Service Tax</label>
            <input
              class="form-control"
              type="text"
              value={lst}
              disabled
              onChange={(e) => setLST(e.target.value)}
            />
          </div>
        </div>
        <div class="col-sm-4">
          <div class="form-group">
            <label class="col-form-label">
              Employer NSSF Contribution <span class="text-danger">*</span>
            </label>
            <input
              class="form-control"
              type="number"
              disabled
              value={employerNssf}
            />
          </div>
        </div>
        <div class="col-sm-4">
          <div class="form-group">
            <label class="col-form-label">
              Employee NSSF Contribution <span class="text-danger">*</span>
            </label>
            <input
              class="form-control"
              type="number"
              disabled
              value={employeeNssf}
            />
          </div>
        </div>
        <div class="col-sm-4">
          <div class="form-group">
            <label class="col-form-label">
              PAYE <span class="text-danger">*</span>
            </label>
            <input class="form-control" type="number" disabled value={paye} />
          </div>
        </div>
        <div class="col-sm-4">
          <div class="form-group">
            <label class="col-form-label">Total Deductions</label>
            <input
              class="form-control"
              type="number"
              disabled
              value={deductions}
            />
          </div>
        </div>
        <div class="col-sm-4">
          <div class="form-group">
            <label class="col-form-label">Net Pay</label>
            <input class="form-control" type="number" disabled value={netPay} />
          </div>
        </div>
      </div>

      <div className="d-flex flex-wrap gap-2 mt-3">
        {isResult ? (
          <button
            type="submit"
            className="btn btn-primary"
            onClick={guardSubmit}
          >
            Save Guard Info
          </button>
        ) : (
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Compute Payroll Items
          </button>
        )}
      </div>
    </div>
  );
};

export default Payroll;
