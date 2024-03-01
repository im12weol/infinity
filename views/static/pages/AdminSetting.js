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
        <div class="productSetting">
          <div class="addImage">
            <img src="../images/상품추가 사진.png" /><br />
            <label class="productButton" for="product"
              >이미지 업로드<br />
              <input type="file" id="product" accept="image/png, image/jpeg" style="display: none;"/>
            </label>
          </div>
          <div class="productInformation">
            <label for="productId">상품ID</label><br />
            <input type="text" id="productId" name="productId" size="70" /><br />
            <label for="productName">상품명</label><br />
            <input
              type="text"
              id="productName"
              name="productName"
              size="70"
            /><br />
            <label for="productPrice">상품가격</label><br />
            <input
              type="text"
              id="productPrice"
              name="productPrice"
              size="70"
            /><br />
            <label for="productCategory">상품분류</label><br />
            <input
              type="text"
              id="productCategory"
              name="productCategory"
              size="70"
            /><br />
            <label for="stock">재고</label><br />
            <input type="text" id="stock" name="stock" size="70" /><br />
            <label for="modificationDate">최종 수정일</label><br />
            <input
              type="text"
              id="modificationDate"
              name="modificationDate"
              size="70"
            /><br />
            <div class="productInforButton">
              <a href="#">상품 추가</a>
              <a href="#">상품정보 수정</a>
              <a href="#">상품 삭제</a>
            </div>
          </div>
        </div>
      </div>
        `;
  }
}