import React, { Component } from "react";
import '../assets/com_left.css';
import '../assets/model.css';
import axios from 'axios';

class Component_left extends Component {
  constructor(props) {
    super(props);
    this.state={
      products: [],
      id: '',
      name : '',
      address : '',
      phone : '',
      time: '',
      email : '',
      image : '',
    }
    this.onChange = this.onChange.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    var {match} = this.props;
    if (match) {
      var id = match.params.id;
      axios({
      method: 'GET',
      url :`https://629191d6cd0c91932b64d9c6.mockapi.io/from/${id}`,
      data : null
     }).then(res =>{
      var data =res.data;
        this.setState({
          id: data.id,
          name : data.name,
          address : data.address,
          phone : data.phone,
          time: data.time,
          email : data.email,
          image : data.image,
        });
      }).catch( err =>{
    });
   }
    axios.get('https://629191d6cd0c91932b64d9c6.mockapi.io/from').then(res => {
      this.setState({ products:  res.data});
    })
    if(this.state.id==''){
      document.getElementById('image-edit').style.display = 'none';
    }else{
      document.getElementById('image-edit').style.display = 'block';
    }
  }
  onChange = (event) =>{
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  onChangeImage = (event) =>{
    this.setState({
      [event.target.name]: "images/"+event.target.files[0].name,
    });
    console.log(event.target.files[0].name);
  }
  onSave = (event) => {
    event.preventDefault();
      if(this.state.name !== '' && this.state.address!=='' && this.state.phone !== '' && this.state.time!=='' && this.state.email!=='' && this.state.image!==''){
        axios({
          method:'POST',
          url :`https://629191d6cd0c91932b64d9c6.mockapi.io/from`,
          data: {
            name: this.state.name,
            address: this.state.address,
            phone : this.state.phone,
            time : this.state.time,
            email : this.state.email,
            image : this.state.image,
          }
  
        }).then(res => {
          this.componentDidMount();
          alert("Successfully");
        })
      }else{
        alert("Empty something");
      }
  }

  render() {
    return (
      <div className="Model-job-dic">
      <div className='Sort-job'>
          <p>Th???i v???</p>
      </div>
      <hr className='Left-bar'></hr>
      <div className='Content-banner'>
      <div className='Detail-jobs'>
            <h2>CTV Ph??n lo???i h??ng 16h - 24h (c??? ?????nh + th?????ng)</h2>
            <p>URUA</p>
            <p>M?? vi???c: 97592 | Qu???n Long Bi??n, H?? N???i</p>
      </div>
      <div className='Job-button'>
      <div class="container">
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
            ????ng K??
          </button>
          <div class="modal fade" id="myModal">
            <div class="modal-dialog modal-sm">
              <div class="modal-content">
                <div class="modal-header">
                  <h4 class="modal-title">From ????ng K?? Ngh??? Nghi???p</h4>
                  <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                  <div class="containerr">
                    <div class="container__item">
                      <form class="" onSubmit={this.onSave}>                       
                        <input type="text" name="name" onChange = {this.onChange} value={this.state.name} class="form__field" placeholder="Nh???p T??n"  required/>  <br></br>
                       
                        <input type="text" name="address" onChange = {this.onChange} value={this.state.address} class="form__field" placeholder="Nh???p ?????a Ch???" required/>  <br></br>
                        <input type="text" name="phone" onChange = {this.onChange} value={this.state.phone} class="form__field" placeholder="Nh???p s??? ??i???n tho???i" required/>  <br></br>
                        <input type="text" name="time" onChange = {this.onChange} value={this.state.time} class="form__field" placeholder="Nh???p Tho???ng Th???i Gian" required />  <br></br>
                        <input type="text" name="email" onChange = {this.onChange} value={this.state.email} class="form__field" placeholder="Nh???p Email" required/><br></br>
                        <input type="file" name="image" onChange = {this.onChange} class="form__field" placeholder="Your Image"  required/>  <br></br>
                        <div className="form-group" id = "image-edit" style={{ display: "none" }}>
                          <label>Image</label>
                            <img src={"./"+this.state.image} style={{ width: "100px" }}/>
                        </div>
                
                        <button type="submit" class="btn btn--primary btn--inside uppercase">Send</button>
                      </form>               
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  </div>
              </div>
            </div>
          </div>
      </div>
      </div>
      </div>
      <hr className='Left-bar'></hr>
      <div className='Money-section'>
        <div className='Amount-money'>
          <div className='Title-money'>
            <h4><i class='fas fa-dollar-sign'></i> Ch??nh s??ch ti???n th????ng</h4>
          </div>
          <div className='Detail-money'>
          <h4>33,000/gi???</h4>
          </div>
          
        </div>
        <div className='Charge-money'>
        <blockquote>
          <ul class="Content-terms">
          <li class="">Thu nh???p th???c l??nh (Ch??a t??nh thu??? TNCN n???u c??)</li>
          <li class="">GHN ???y quy???n Vi???c C?? thanh to??n Th?? lao cho C???ng t??c vi??n</li>
          <li class="">H??? tr??? thanh to??n theo chu k?? tu???n l??m vi???c</li>
          <li class="">Tr??? 2 l???n/ th??ng, v??o ng??y 15 - 20 v?? 01 - 05</li>
          </ul>
        </blockquote>
        </div>
      </div>
      <div className='Money-section'>
        <div className='Amount-money'>
          <div className='Title-money'>
            <h4><i class='fa fa-gift'></i> Th?? lao</h4>
          </div>
          <div className='Detail-money'>
          </div>
          
        </div>
      </div>
  </div>
);

    
  }
}

export  default Component_left;