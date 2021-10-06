import React from 'react'

const ClientForm = () => {
    return (
        
    <div class="card">
       <div class="card-body">
          <h3 class="card-title"> Basic Salary Information</h3>
          <form>
             <div class="row">
                <div class="col-sm-4">
                   <div class="form-group">
                      <label class="col-form-label">Salary basis <span class="text-danger">*</span></label>
                      <div class="input-group">
                      <select class="form-control select2 select2-hidden-accessible">
                         <option data-select2-id="select2-data-3-k4fp">Select salary basis type</option>
                         <option>Hourly</option>
                         <option>Daily</option>
                         <option>Weekly</option>
                         <option>Monthly</option>
                      </select>
                      </div>
                   </div>
                </div>
                <div class="col-sm-4">
                   <div class="form-group">
                      <label class="col-form-label">Salary amount <small class="text-muted">per month</small></label>
                      <div class="input-group">
                         <div class="input-group-prepend">
                            <span class="input-group-text">$</span>
                         </div>
                         <input type="text" class="form-control" placeholder="Type your salary amount" value="0.00"/>
                      </div>
                   </div>
                </div>
                <div class="col-sm-4">
                   <div class="form-group">
                      <label class="col-form-label">Payment type</label>
                      <select class="select select2-hidden-accessible" data-select2-id="select2-data-4-1ozu" tabindex="-1" aria-hidden="true">
                         <option data-select2-id="select2-data-6-wmzt">Select payment type</option>
                         <option>Bank transfer</option>
                         <option>Check</option>
                         <option>Cash</option>
                      </select>
                      <span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="select2-data-5-7b7m" style={{width: '100%'}}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-e4xx-container" aria-controls="select2-e4xx-container"><span class="select2-selection__rendered" id="select2-e4xx-container" role="textbox" aria-readonly="true" title="Select payment type">Select payment type</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                   </div>
                </div>
             </div>
             <hr/>
             <h3 class="card-title"> PF Information</h3>
             <div class="row">
                <div class="col-sm-4">
                   <div class="form-group">
                      <label class="col-form-label">PF contribution</label>
                      <select class="select select2-hidden-accessible" data-select2-id="select2-data-7-s1al" tabindex="-1" aria-hidden="true">
                         <option data-select2-id="select2-data-9-47yt">Select PF contribution</option>
                         <option>Yes</option>
                         <option>No</option>
                      </select>
                      <span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="select2-data-8-1pqn" style={{width: '100%'}}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-22xm-container" aria-controls="select2-22xm-container"><span class="select2-selection__rendered" id="select2-22xm-container" role="textbox" aria-readonly="true" title="Select PF contribution">Select PF contribution</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                   </div>
                </div>
                <div class="col-sm-4">
                   <div class="form-group">
                      <label class="col-form-label">PF No. <span class="text-danger">*</span></label>
                      <select class="select select2-hidden-accessible" data-select2-id="select2-data-10-vasy" tabindex="-1" aria-hidden="true">
                         <option data-select2-id="select2-data-12-aw97">Select PF contribution</option>
                         <option>Yes</option>
                         <option>No</option>
                      </select>
                      <span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="select2-data-11-0jtt" style={{width: '100%'}}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-mvip-container" aria-controls="select2-mvip-container"><span class="select2-selection__rendered" id="select2-mvip-container" role="textbox" aria-readonly="true" title="Select PF contribution">Select PF contribution</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                   </div>
                </div>
             </div>
             <div class="row">
                <div class="col-sm-4">
                   <div class="form-group">
                      <label class="col-form-label">Employee PF rate</label>
                      <select class="select select2-hidden-accessible" data-select2-id="select2-data-13-n5eh" tabindex="-1" aria-hidden="true">
                         <option data-select2-id="select2-data-15-ri0j">Select PF contribution</option>
                         <option>Yes</option>
                         <option>No</option>
                      </select>
                      <span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="select2-data-14-kn7c" style={{width: '100%'}}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-izfd-container" aria-controls="select2-izfd-container"><span class="select2-selection__rendered" id="select2-izfd-container" role="textbox" aria-readonly="true" title="Select PF contribution">Select PF contribution</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                   </div>
                </div>
                <div class="col-sm-4">
                   <div class="form-group">
                      <label class="col-form-label">Additional rate <span class="text-danger">*</span></label>
                      <select class="select select2-hidden-accessible" data-select2-id="select2-data-16-j56n" tabindex="-1" aria-hidden="true">
                         <option data-select2-id="select2-data-18-gbee">Select additional rate</option>
                         <option>0%</option>
                         <option>1%</option>
                         <option>2%</option>
                         <option>3%</option>
                         <option>4%</option>
                         <option>5%</option>
                         <option>6%</option>
                         <option>7%</option>
                         <option>8%</option>
                         <option>9%</option>
                         <option>10%</option>
                      </select>
                      <span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="select2-data-17-7w02" style={{width: '100%'}}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-787j-container" aria-controls="select2-787j-container"><span class="select2-selection__rendered" id="select2-787j-container" role="textbox" aria-readonly="true" title="Select additional rate">Select additional rate</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                   </div>
                </div>
                <div class="col-sm-4">
                   <div class="form-group">
                      <label class="col-form-label">Total rate</label>
                      <input type="text" class="form-control" placeholder="N/A" value="11%"/>
                   </div>
                </div>
             </div>
             <div class="row">
                <div class="col-sm-4">
                   <div class="form-group">
                      <label class="col-form-label">Employee PF rate</label>
                      <select class="select select2-hidden-accessible" data-select2-id="select2-data-19-99rt" tabindex="-1" aria-hidden="true">
                         <option data-select2-id="select2-data-21-hdcu">Select PF contribution</option>
                         <option>Yes</option>
                         <option>No</option>
                      </select>
                      <span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="select2-data-20-d2wq" style={{width: '100%'}}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-as7f-container" aria-controls="select2-as7f-container"><span class="select2-selection__rendered" id="select2-as7f-container" role="textbox" aria-readonly="true" title="Select PF contribution">Select PF contribution</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                   </div>
                </div>
                <div class="col-sm-4">
                   <div class="form-group">
                      <label class="col-form-label">Additional rate <span class="text-danger">*</span></label>
                      <select class="select select2-hidden-accessible" data-select2-id="select2-data-22-z08o" tabindex="-1" aria-hidden="true">
                         <option data-select2-id="select2-data-24-holv">Select additional rate</option>
                         <option>0%</option>
                         <option>1%</option>
                         <option>2%</option>
                         <option>3%</option>
                         <option>4%</option>
                         <option>5%</option>
                         <option>6%</option>
                         <option>7%</option>
                         <option>8%</option>
                         <option>9%</option>
                         <option>10%</option>
                      </select>
                      <span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="select2-data-23-p157" style={{width: '100%'}}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-9brx-container" aria-controls="select2-9brx-container"><span class="select2-selection__rendered" id="select2-9brx-container" role="textbox" aria-readonly="true" title="Select additional rate">Select additional rate</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                   </div>
                </div>
                <div class="col-sm-4">
                   <div class="form-group">
                      <label class="col-form-label">Total rate</label>
                      <input type="text" class="form-control" placeholder="N/A" value="11%"/>
                   </div>
                </div>
             </div>
             <hr/>
             <h3 class="card-title"> ESI Information</h3>
             <div class="row">
                <div class="col-sm-4">
                   <div class="form-group">
                      <label class="col-form-label">ESI contribution</label>
                      <select class="select select2-hidden-accessible" data-select2-id="select2-data-25-d2vj" tabindex="-1" aria-hidden="true">
                         <option data-select2-id="select2-data-27-xcm5">Select ESI contribution</option>
                         <option>Yes</option>
                         <option>No</option>
                      </select>
                      <span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="select2-data-26-uc71" style={{width: '100%'}}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-86y4-container" aria-controls="select2-86y4-container"><span class="select2-selection__rendered" id="select2-86y4-container" role="textbox" aria-readonly="true" title="Select ESI contribution">Select ESI contribution</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                   </div>
                </div>
                <div class="col-sm-4">
                   <div class="form-group">
                      <label class="col-form-label">ESI No. <span class="text-danger">*</span></label>
                      <select class="select select2-hidden-accessible" data-select2-id="select2-data-28-5roz" tabindex="-1" aria-hidden="true">
                         <option data-select2-id="select2-data-30-9a6d">Select ESI contribution</option>
                         <option>Yes</option>
                         <option>No</option>
                      </select>
                      <span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="select2-data-29-z4xe" style={{width: '100%'}}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-1004-container" aria-controls="select2-1004-container"><span class="select2-selection__rendered" id="select2-1004-container" role="textbox" aria-readonly="true" title="Select ESI contribution">Select ESI contribution</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                   </div>
                </div>
             </div>
             <div class="row">
                <div class="col-sm-4">
                   <div class="form-group">
                      <label class="col-form-label">Employee ESI rate</label>
                      <select class="select select2-hidden-accessible" data-select2-id="select2-data-31-xpkf" tabindex="-1" aria-hidden="true">
                         <option data-select2-id="select2-data-33-alvm">Select ESI contribution</option>
                         <option>Yes</option>
                         <option>No</option>
                      </select>
                      <span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="select2-data-32-ulzd" style={{width: '100%'}}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-0alp-container" aria-controls="select2-0alp-container"><span class="select2-selection__rendered" id="select2-0alp-container" role="textbox" aria-readonly="true" title="Select ESI contribution">Select ESI contribution</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                   </div>
                </div>
                <div class="col-sm-4">
                   <div class="form-group">
                      <label class="col-form-label">Additional rate <span class="text-danger">*</span></label>
                      <select class="select select2-hidden-accessible" data-select2-id="select2-data-34-ggic" tabindex="-1" aria-hidden="true">
                         <option data-select2-id="select2-data-36-h9vj">Select additional rate</option>
                         <option>0%</option>
                         <option>1%</option>
                         <option>2%</option>
                         <option>3%</option>
                         <option>4%</option>
                         <option>5%</option>
                         <option>6%</option>
                         <option>7%</option>
                         <option>8%</option>
                         <option>9%</option>
                         <option>10%</option>
                      </select>
                      <span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="select2-data-35-tggr" style={{width: '100%'}}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-99dw-container" aria-controls="select2-99dw-container"><span class="select2-selection__rendered" id="select2-99dw-container" role="textbox" aria-readonly="true" title="Select additional rate">Select additional rate</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                   </div>
                </div>
                <div class="col-sm-4">
                   <div class="form-group">
                      <label class="col-form-label">Total rate</label>
                      <input type="text" class="form-control" placeholder="N/A" value="11%"/>
                   </div>
                </div>
             </div>
             <div class="submit-section">
                <button class="btn btn-primary submit-btn" type="submit">Save</button>
             </div>
          </form>
       </div>
    </div>
    )
}

export default ClientForm
