import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('관리자페이지');
  }

  async getHtml() {
    return `
    <div class="columns">
      <aside class="column is-2 aside hero is-fullheight">
        <div>
          <div class="compose has-text-centered">
            <a class="button is-danger is-block is-bold">
              <span class="compose">Infinity</span>
            </a>
          </div>
          <div class="main">
            <a href="#" class="item active">
              <span class="icon">
                <i class="fa fa-home fa-fw"></i>
              </span>
              <span class="name">General</span>
            </a>
            <a href="#" class="item">
              <span class="icon">
                <i class="fa fa-star"></i>
              </span>
              <span class="name">Sales History</span>
            </a>
            <a href="#" class="item">
              <span class="icon">
                <i class="fa fa-envelope-o"></i>
              </span>
              <span class="name">Category</span>
            </a>
            <a href="#" class="item">
              <span class="icon">
                <i class="fa fa-folder-o"></i>
              </span>
              <span class="name">Product</span>
            </a>
            <a href="#" class="item">
              <span class="icon">
                <i class="fa fa-inbox"></i>
              </span>
              <span class="name">Order</span>
            </a>
          </div>
        </div>
      </aside>
      <div class="column messages hero is-fullheight">
        <div>
          <table class="adminTable">
            <thead class="adminThead">
              <tr class="adminTheadTr">
                <th><input type="checkbox" id="checkbox1" /></th>
                <th>회원정보</th>
                <th>이메일</th>
                <th>구매 가격</th>
                <th>배송 상태</th>
                <th>구매 날짜</th>
                <th>결제 수단</th>
                <th>주문번호</th>
              </tr>
            </thead>
            <tbody class="adminTbody">
              <tr class="adminTbodyTr">
                <td><input type="checkbox" id="checkbox1" /></td>
                <td>최민식</td>
                <td>asdf1234@naver.com</td>
                <td>69,000원</td>
                <td>배송 완료</td>
                <td>2024.02.17</td>
                <td>카카오페이</td>
                <td>2084984631</td>
              </tr>
              <tr class="adminTbodyTr">
                <td><input type="checkbox" id="checkbox1" /></td>
                <td>황정민</td>
                <td>zxcv1234@naver.com</td>
                <td>142,000원</td>
                <td>배송완료</td>
                <td>2024.02.16</td>
                <td>카카오페이</td>
                <td>3578645610</td>
              </tr>
              <tr class="adminTbodyTr">
                <td><input type="checkbox" id="checkbox1" /></td>
                <td>전지현</td>
                <td>pulu1234@naver.com</td>
                <td>39,000원</td>
                <td>배송 완료</td>
                <td>2024.02.15</td>
                <td>무통장입금</td>
                <td>1235897520</td>
              </tr>
              <tr class="adminTbodyTr">
                <td><input type="checkbox" id="checkbox1" /></td>
                <td>박보영</td>
                <td>cute1004@naver.com</td>
                <td>99,000원</td>
                <td>배송 완료</td>
                <td>2024.02.15</td>
                <td>토스</td>
                <td>3489311552</td>
              </tr>
              <tr class="adminTbodyTr">
                <td><input type="checkbox" id="checkbox1" /></td>
                <td>유주환</td>
                <td>lkjh1234@naver.com</td>
                <td>72,000원</td>
                <td>배송 완료</td>
                <td>2024.02.14</td>
                <td>무통장입금</td>
                <td>2589743612</td>
              </tr>
              <tr class="adminTbodyTr">
                <td><input type="checkbox" id="checkbox1" /></td>
                <td>정영준</td>
                <td>awtg521@naver.com</td>
                <td>152,000원</td>
                <td>배송 완료</td>
                <td>2024.02.13</td>
                <td>토스</td>
                <td>1597819456</td>
              </tr>
              <tr class="adminTbodyTr">
                <td><input type="checkbox" id="checkbox1" /></td>
                <td>류효종</td>
                <td>ngcv524@naver.com</td>
                <td>69000원</td>
                <td>배송 완료</td>
                <td>2024.02.12</td>
                <td>카카오페이</td>
                <td>7894536942</td>
              </tr>
              <tr class="adminTbodyTr">
                <td><input type="checkbox" id="checkbox1" /></td>
                <td>이정은</td>
                <td>lxoo221@naver.com</td>
                <td>142,000원</td>
                <td>배송 완료</td>
                <td>2024.02.11</td>
                <td>카드결제</td>
                <td>6899422180</td>
              </tr>
              <tr class="adminTbodyTr">
                <td><input type="checkbox" id="checkbox1" /></td>
                <td>이고헌</td>
                <td>aqoz333@naver.com</td>
                <td>39,000원</td>
                <td>배송 완료</td>
                <td>2024.02.10</td>
                <td>카드결제</td>
                <td>8871254443</td>
              </tr>
              <tr class="adminTbodyTr">
                <td><input type="checkbox" id="checkbox1" /></td>
                <td>정한석</td>
                <td>fapp190@naver.com</td>
                <td>72,000원</td>
                <td>배송 완료</td>
                <td>2024.02.09</td>
                <td>토스</td>
                <td>1788894820</td>
              </tr>
            </tbody>
          </table>
          <div class="change">
            <a href="#" class="applyChange">변경사항 적용</a>
            <a href="#" class="cancel">취소</a>
          </div>
          <div class="paging">
            <a class="backPage" href="#">＜</a>
            <a href="#" class="currentPage">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <a class="nextPage" href="#">＞</a>
          </div>
        </div>
      </div>
    </div>
    `;
  }
}