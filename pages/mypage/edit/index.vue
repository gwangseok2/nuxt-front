<template>
  <div class="profile-edit">
    <ul class="profile-edit-form">
      <li>
        <label>닉네임</label>
        <input type="text" class="error" />
        <span class="error-message">이미 사용중인 닉네임이에요</span>
      </li>
      <li>
        <label>이메일 주소</label>
        <input type="text" placeholder="abcd@gmail.com" disabled />
      </li>
      <li>
        <label>휴대폰 번호</label>
        <input type="text" />
      </li>
      <li>
        <div>연령대</div>
        <select>
          <option>연령대</option>
        </select>
      </li>
      <li>
        <div>성별</div>
        <select>
          <option>성별</option>
        </select>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.profile-edit {
  padding: 0 4.4444444%;
  font-family: Pretendard;
  &-form {
    li {
      width: 100%;
      margin-bottom: 20px;
      label,
      div {
        display: block;
        color: #999;
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: 100%; /* 12px */
        letter-spacing: -0.24px;
        margin-bottom: 8px;
      }
      input,
      select {
        border-radius: 14px;
        background: #fff;
        border: 1px solid #e8e8e8;
        width: 100%;
        height: 50px;
        box-sizing: border-box;
        padding: 0px 14px;
        font-size: 16px;
      }
      input:disabled {
        background: #f7f7f7;
      }
      input.error {
        border: 1px solid #d74343;
      }
      .error-messag {
        display: none;
      }
      input.error + .error-message {
        display: block;
        color: #d74343;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%; /* 12px */
        letter-spacing: -0.24px;
        margin-top: 8px;
      }
    }
  }
}
</style>
