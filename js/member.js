$(document).ready(function () {
  tabCutover2();
});

//滑動切換登入/註冊
function tabCutover2() {
  //抓出data-tablink的內容
  let tablink = $(".slide_tab input:checked").data("tablink");
  $("#" + tablink)
    .show()
    .siblings(".form")
    .hide();

  //當tab標題li被點到時，
  $(".slide_tab input").click(function () {
    $("#" + $(this).data("tablink"))
      .show()
      .siblings(".form")
      .hide();
    $(this).prop("checked", true).siblings("input").prop("checked", false);
  });
}

//第三方登入

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const code = urlParams.get("code");
let userId = "";
let nickname = "";
let accountTypeID = "";

$(".lineLogin").click((response) => {
  let client_id = "1661225682";
  let redirect_uri = "https://karenchuan.github.io/vevenailscolor/";
  let link = "https://access.line.me/oauth2/v2.1/authorize?";
  link += "response_type=code";
  link += "&client_id=" + client_id;
  link += "&redirect_uri=" + redirect_uri;
  link += "&state=login";
  link += "&scope=openid%20profile";
  window.location.href = link;
  console.log(response);

  $.ajax({
    url: "https://api.line.me/oauth2/v2.1/token",
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: {
      grant_type: "authorization_code",
      code: code,
      redirect_uri: "https://tibamef2e.com/tgd104/g2/index",
      client_id: "1661225682",
      client_secret: "4eba1aabc152c555d41e33187e9f70f8",
    },
    success: function (response) {
      const accessToken = response.access_token;
      const expiresIn = response.expires_in;
      const idToken = response.id_token;

      // 使用idToken從LINE API獲取使用者資訊
      $.ajax({
        url: "https://api.line.me/oauth2/v2.1/verify",
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: "Bearer " + accessToken,
        },
        data: {
          id_token: idToken,
          client_id: "1661225682",
        },
        success: function (response) {
          userId = response.sub;
          nickname = response.name;
          accountTypeID = 1;
          console.log(response.data);

          // 在此處處理使用者資訊
          console.log(userId.value, nickname.value, accountTypeID.value);

          axios
            .post(`${API_URL}lineLogin.php`, {
              userId: userId.value,
              nickname: nickname.value,
              accountTypeID: accountTypeID.value,
            })
            .then((response) => {
              localStorage.setItem("token", response.data.id);
              window.location.reload();
            })
            .catch((error) => {
              alert("發生了一些錯誤，請聯絡管理員!");
            });
        },
        error: function (error) {
          console.log(error);
        },
      });
    },
  });
});
