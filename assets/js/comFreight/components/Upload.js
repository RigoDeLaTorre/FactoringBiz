import React, { Component} from 'react'
import ReactDOM from 'react-dom'

export default class Upload extends Component {
  constructor () {
    super()
    this.state = {
    upload1:'',
    upload2:'',
    upload1Category:'',
    upload2Category:'',
    invoiceAmount:'',
    billTo:'',
    billToAddress:'',
    firstPickup:'',
    finalDestination:'',
    loadNumber:'',
    equipmentType:'',
    loadLength:'',
    isPayed:false
    }
  }

  componentWillMount() {
    this.initialState = this.state
}

handleSubmit = (e) =>{
  console.log('testing submit')
  let load = {
    upload1:this.state.upload1,
    upload1:this.state.upload1,
    upload1Category:this.state.upload1Category,
    upload2Category:this.state.upload2Category,
    invoiceAmount:this.state.invoiceAmount,
    billTo:this.state.billTo,
    billToAddress:this.state.billToAddress,
    firstPickup:this.state.firstPickup,
    finalDestination:this.state.finalDestination,
    loadNumber:this.state.loadNumber,
    equipmentType:this.state.equipmentType,
    loadLength:this.state.loadLength,
    isPayed:this.state.isPayed
  }

  //If user confirms to add the load, it will also reset the state of the form to the inital.
  if (confirm("Click Ok to Add the Load")) {
    this.props.handleLoads(load)
  this.setState(this.initialState)
  } else {
    return false;
  }
}

//updates the form state
handleChange = (e)=>{
    if(e.target.type=='checkbox'){
      this.setState({
        [e.target.name]: e.target.checked
      })
    }else{
      this.setState({
        [e.target.name]: e.target.value
      })
    }
}

  render () {
    return (<section id='upload'>
        <div className="upload-container">
          <form >
            <section className="group-container invoice-section">
              <h2 className="form-title">Upload your Documents *</h2>
              <div className="file-upload">
                  <div className="group upload-group">
                  <label htmlFor="upload1" className="custom-file-upload"> Upload a file {this.state.upload1}</label>
                  <input id="upload1" type="file" name="upload1" value ={this.state.myFile1} onChange ={this.handleChange}/>
                </div>
                <div className="group group-select">
                    <select name="upload1Category" value ={this.state.upload1Category} onChange ={this.handleChange}>
                      <option value="choose">Please Choose</option>
                      <option value="bol">Bill of Lading</option>
                      <option value="rateConfirmation">Rate Confirmation</option>
                      <option value="invoice">Invoice</option>
                    </select>
                </div>
            </div>
            <div className="file-upload">
                <div className="group upload-group">
                <label htmlFor="upload2" className="custom-file-upload"> Upload a file {this.state.upload2}</label>
                <input id="upload2" type="file" name="upload2" value ={this.state.upload2} onChange ={this.handleChange}/>
              </div>
              <div className="group  group-select">
                  <select name="upload2Category" value ={this.state.upload2Category} onChange ={this.handleChange}>
                    <option value="choose">Please Choose</option>
                    <option value="bol">Bill of Lading</option>
                    <option value="rateConfirmation">Rate Confirmation</option>
                    <option value="invoice">Invoice</option>
                  </select>
              </div>
          </div>
              <div className ="form-group invoice-details">
                <div className="group">
                    <label htmlFor="invoiceAmount">Total Invoice Amount</label>
                    <input type="text" placeholder="$ 0.00" name="invoiceAmount" value ={this.state.invoiceAmount} onChange ={this.handleChange} />
                </div>
                <div className="group">
                    <label htmlFor="billTo">Bill To Company</label>
                    <input type="text" placeholder="Company Name" name="billTo" value ={this.state.billTo} onChange ={this.handleChange} />
                </div>
                <div className="group">
                    <label htmlFor="invoiceAmount">Bill To Company Address</label>
                    <input type="text" placeholder="Company Address" name="billToAddress" value ={this.state.billToAddress} onChange ={this.handleChange} />
                </div>
                <div className="details-button">
                  <button type="button">Details</button>
              </div>

              </div>
              </section>
            <section className ="group-container load-details">
              <div className="group">
                  <label htmlFor="firstPickup">First Pickup</label>
                  <input type="text" placeholder="Los Angeles, California" name="firstPickup" value ={this.state.firstPickup} onChange ={this.handleChange} />
              </div>
                <div className="group">
                  <label htmlFor="finalDestination">Final Destination</label>
                  <input type="text" placeholder="Long Beach, California" name="finalDestination" value ={this.state.finalDestination} onChange ={this.handleChange} />
              </div>
                <div className="group">
                  <label htmlFor="loadNumber">Load Number</label>
                  <input type="text" placeholder="0" name="loadNumber" value ={this.state.loadNumber} onChange ={this.handleChange} />
              </div>

                <div className="group equipment">
                  <div className="group group-select-equipment">
                      <label htmlFor="equipmentType">Equipment Type</label>
                      <select name="equipmentType" value ={this.state.equipmentType} onChange ={this.handleChange}>
                        <option value="Choose">Please Choose</option>
                        <option value="dryVan">Dry Van</option>
                        <option value="flatBed">Flat Bed</option>
                        <option value="refeer">Reefer</option>
                      </select>
                  </div>
                  <div className="group">
                    <label htmlFor="loadLength" className="loadlength">Load Length *</label>
                    <input type="text" placeholder="Ft 00" name="loadLength" value ={this.state.loadLength} onChange ={this.handleChange} />
                </div>
              </div>

            <div className="load-info">
              <div className="group">
                <h5>Wire Transfer Needed <span>$25</span></h5>
              </div>
               <div className="group">
                  <label className="switch">
                    <input type="checkbox" name="isPayed" value ={this.state.isPayed} onChange ={this.handleChange}/>
                    <span className="slider round"></span>
                  </label>
              </div>
            </div>
            <div className="load-info">
              <div className="group">
                <h6>Your Rate 0%</h6>
              </div>
               <div className="group">
                  <h6>TOTAL TO BE PAID</h6>
              </div>
            </div>
                <h6 style ={{color:'red', fontSize:'.7rem'}}>*Required Field</h6>
          </section>
          <div className="add-load" onClick={this.handleSubmit}>
           <img src="./img/plus.svg"/>
          </div>
        </form>
      </div>
    </section>)
  }
}
