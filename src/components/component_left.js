import React from 'react';
import '../assets/com_left.css'
import '../assets/model.css'

function Comleft() {
  return (
    <div className="Model-job-dic">
        <div className='Sort-job'>
            <p>Thời vụ</p>
        </div>
        <hr className='Left-bar'></hr>
        <div className='Content-banner'>
        <div className='Detail-jobs'>
              <h2>CTV Phân loại hàng 16h - 24h (cố định + thưởng)</h2>
              <p>URUA</p>
              <p>Mã việc: 97592 | Quận Long Biên, Hà Nội</p>
        </div>
        <div className='Job-button'>
        <div class="container">
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
              APPLY
            </button>
            <div class="modal fade" id="myModal">
              <div class="modal-dialog modal-sm">
                <div class="modal-content">
                  <div class="modal-header">
                    <h4 class="modal-title">From Đăng Kí Nghề Nghiệp</h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                  </div>
                    <div class="containerr">
                      <div class="container__item">
                        <form class="form">
                          <input type="email" class="form__field" placeholder="Your E-Mail Address" />  <br></br>
                          <input type="email" class="form__field" placeholder="Your E-Mail Address" />  <br></br>
                          <input type="email" class="form__field" placeholder="Your E-Mail Address" />  <br></br>
                          <input type="email" class="form__field" placeholder="Your E-Mail Address" />  <br></br>
                          <input type="email" class="form__field" placeholder="Your E-Mail Address" /><br></br>
                          <button type="button" class="btn btn--primary btn--inside uppercase">Send</button>
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
              <h4><i class='fas fa-dollar-sign'></i> Chính sách tiền thương</h4>
            </div>
            <div className='Detail-money'>
            <h4>33,000/giờ</h4>
            </div>
            
          </div>
          <div className='Charge-money'>
          <blockquote>
            <ul class="Content-terms">
            <li class="">Thu nhập thực lãnh (Chưa tính thuế TNCN nếu có)</li>
            <li class="">GHN ủy quyền Việc Có thanh toán Thù lao cho Cộng tác viên</li>
            <li class="">Hỗ trợ thanh toán theo chu kì tuần làm việc</li>
            <li class="">Trả 2 lần/ tháng, vào ngày 15 - 20 và 01 - 05</li>
            </ul>
          </blockquote>
          </div>
        </div>
        <div className='Money-section'>
          <div className='Amount-money'>
            <div className='Title-money'>
              <h4><i class='fa fa-gift'></i> Thù lao</h4>
            </div>
            <div className='Detail-money'>
            </div>
            
          </div>
        </div>
    </div>
  );
}

export default Comleft;
