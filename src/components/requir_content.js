import React from 'react';
import '../assets/requir_content.css'
import '../assets/com_left.css'
function Req_content() {
  return (
    <div className="Requi-detail">
      <h4> Mô tả công việc</h4>
      <div className='Content-terms'>
          <p>
              Xử lý lên xuống hàng hóa <br></br>                    
              Đóng gói<br></br>
              Kiểm đếm hàng hoá<br></br>
              Bàn giao hàng hoá cho các nhân viên giao hàng
          </p>
      </div>
      <h4> Quyền Lợi</h4>
      <div className='Content-terms'>
          <p>
          + 8 tiếng đầu 32,000đ/giờ. Tổng 256,000đ/8 tiếng làm việc thực tế<br></br>
          + Vượt 8 tiếng tính 37,000đ/giờ<br></br>
          + Phụ cấp ca đêm vẫn tính là 7,000đ/h<br></br>
          -  Thời gian trả lương: Muộn nhất là ngày 22/06/2022 (sau sự kiện 3 ngày)<br></br>
          - Chính sách thưởng &amp; phạt:  :XIn nghỉ vui lòng thông báo quản lý trước 12 tiếng ca làm bắt đầu <br></br>
          - Công việc &amp; vị trí cố định <br></br>
          - ĐI làm ca đêm , được nghỉ giữa ca 30 phút - 60 phút (theo quản lý sắp xếp) không bị cấn trừ vào lương 
        
          </p>
      </div>
      <h4> Yêu cầu</h4>
      <div className='Content-terms'>
          <p>
          Ưu tiên tuyển nữ/nam<br></br>
          Có sức khỏe<br></br>
          Có thể làm ổn định theo ca
          </p>
      </div>
    </div>
  );
}

export default Req_content;
