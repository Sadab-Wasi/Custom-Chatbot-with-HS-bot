if (window.HubSpotConversations) {
  chatbot_start();
} else {
  window.hsConversationsOnReady = [
    () => {
      widget_ready();
    },
  ];
}

function widget_ready() {
  window.HubSpotConversations.on("widgetLoaded", (payload) => {
    // console.log(payload.message);

    // --- keep the chat menu closed
    window.HubSpotConversations.widget.close();

    chatbot_start();
  });
}

function chatbot_start() {}

var channel_active = false;

var select_curr = "hs_bot";

var open_time = {
  hs_time: false,
  hs_time2: false,
  wa_time: false,
};
function click_time(option) {
  if (option == "hs_bot") {
    if (!open_time.hs_time) {
      let temp_time = new Date().toLocaleString().split(", ")[1];
      let time_hh = parseInt(temp_time.split(":")[0]) < 10 && temp_time.split(":")[0].length < 2 ? 0 + temp_time.split(":")[0] : temp_time.split(":")[0];
      let time_mm = parseInt(temp_time.split(":")[1]) < 10 && temp_time.split(":")[1].length < 2 ? 0 + temp_time.split(":")[1] : temp_time.split(":")[1];
      let better_time = time_hh + ":" + time_mm;

      open_time.hs_time = better_time;
    }

    $("#click_time").text(open_time.hs_time);

    // if (second_hs) {
    //   $("#open_again2").html(temp_html());
    // }
  } else if (option == "wa_bot") {
    if (!open_time.wa_time) {
      let temp_time = new Date().toLocaleString().split(", ")[1];
      let time_hh = parseInt(temp_time.split(":")[0]) < 10 ? 0 + temp_time.split(":")[0] : temp_time.split(":")[0];
      let time_mm = parseInt(temp_time.split(":")[1]) < 10 ? 0 + temp_time.split(":")[1] : temp_time.split(":")[1];
      let better_time = time_hh + ":" + time_mm;

      open_time.wa_time = better_time;
    }

    $("#click_time").text(open_time.wa_time);
  } else if (option == "hs_bot2") {
    if (!open_time.hs_time2) {
      let temp_time = new Date().toLocaleString().split(", ")[1];
      let time_hh = parseInt(temp_time.split(":")[0]) < 10 && temp_time.split(":")[0].length < 2 ? 0 + temp_time.split(":")[0] : temp_time.split(":")[0];
      let time_mm = parseInt(temp_time.split(":")[1]) < 10 && temp_time.split(":")[1].length < 2 ? 0 + temp_time.split(":")[1] : temp_time.split(":")[1];
      let better_time = time_hh + ":" + time_mm;

      open_time.hs_time2 = better_time;
    }

    // $("#open_again2").html(temp_html());
  }
}

$("#main-chat-menu").hide();
$("#talk_icn1_icon").hide();

$(".btn_chat").click(function () {
  let hs_bot = $(this).hasClass("icon1");
  let wa_bot = $(this).hasClass("fa-whatsapp");
  let em_bot = $(this).hasClass("fa-envelope");

  if (hs_bot) {
    // color icons
    // $(".icon1").css({ color: "#DE469C", "border-color": "#DE469C" });
    $(".icon1").css({ "border-color": "#DE469C" });
    $("#icon1").css("background-image", "url(img/chat_2.png)");
    $(".fa-whatsapp").css({ color: "gray", "border-color": "white" });
    $(".fa-envelope").css({ color: "gray", "border-color": "white" });

    $("#talk_icn1").attr("src", "./img/person_1.png");
    $("#talk_icn1").show();
    $("#talk_icn1_icon").hide();
    // $("#talk_icn2").attr("src", "./img/person_1.png");
    $("#talk_msg").html("Hi! Welcome to Trengo 😁. Let us help you to find the right information or team member. Please click on <strong>'start conversation'</strong>.");
    $("#talk_go").text("Start conversation");
    $("#talk_go").css({ color: "#000", "background-color": "transparent" });

    select_curr = "hs_bot";

    $(".not_mail").show();
    $(".is_mail").hide();

    click_time("hs_bot");

    if (second_hs) {
      //   $("#open_again2").html(temp_html());
      $("#talk_go").text("Restart conversation");
    }
  }
  if (wa_bot) {
    // color icons
    // $(".icon1").css({ color: "gray", "border-color": "white" });
    $(".icon1").css({ "border-color": "white" });
    $("#icon1").css("background-image", "url(img/chat_1.png)");
    $(".fa-whatsapp").css({ color: "#DE469C", "border-color": "#DE469C" });
    $(".fa-envelope").css({ color: "gray", "border-color": "white" });

    $("#talk_icn1").attr("src", "./img/person_1.png");
    $("#talk_icn1").hide();
    $("#talk_icn1_icon").show();
    // $("#talk_icn2").attr("src", "./img/person_1.png");
    $("#talk_msg").text("Reach us on WhatsApp! Start a conversation using the button below and we will try to reply as soon as possible.");
    $("#talk_go").text("Open WhatsApp 💬");
    $("#talk_go").css({ color: "#000", "background-color": "transparent" });

    select_curr = "wa_bot";

    $(".not_mail").show();
    $(".is_mail").hide();

    click_time("wa_bot");

    // $("#open_again2").html("");
  }
  if (em_bot) {
    // color icons
    // $(".icon1").css({ color: "gray", "border-color": "white" });
    $(".icon1").css({ "border-color": "white" });
    $("#icon1").css("background-image", "url(img/chat_1.png)");
    $(".fa-whatsapp").css({ color: "gray", "border-color": "white" });
    $(".fa-envelope").css({ color: "#DE469C", "border-color": "#DE469C" });

    $("#talk_icn1").attr("src", "./img/person_1.png");
    $("#talk_icn1").show();
    $("#talk_icn1_icon").hide();
    // $("#talk_icn2").attr("src", "./img/person_1.png");
    $("#talk_msg").html("Hi! Welcome to Trengo 😁. Let us help you to find the right information or team member. Please click on <strong>'start conversation'</strong>.");
    $("#talk_go").text("Send");
    $("#talk_go").css({ color: "#fff", "background-color": "#DE469C" });

    select_curr = "em_bot";

    $(".not_mail").hide();
    $(".is_mail").show();

    // $("#open_again2").html("");
  }
});

$("#talk_go").click(function () {
  if (select_curr == "hs_bot") {
    window.HubSpotConversations.widget.open();
    channel_active = "hs_bot";
    $("#main-chat-btn-icon").removeClass("fa-message");
    $("#main-chat-btn-icon").addClass("fa-xmark");

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      $("#main-chat-btn").css({ bottom: "auto", top: "5px", right: "25px" });
    } else {
      $("#main-chat-btn").css({ top: "auto", bottom: "10px", right: "10px" });
    }
  } else if (select_curr == "wa_bot") {
    window.open("https://api.whatsapp.com/send?phone=+8801648914767");
    channel_active = "wa_bot";
  } else if (select_curr == "em_bot") {
    send_to_hubspot();
  }
});

var first_count = false;
var second_hs = false;
$("#main-chat-btn").click(function () {
  if (!channel_active) {
    $("#main-chat-menu").show();
    channel_active = true;

    $("#main-chat-btn-icon").removeClass("fa-message");
    $("#main-chat-btn-icon").addClass("fa-xmark");
    // $("#main-chat-btn_text").hide();

    if (!first_count) {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $("#btn_wa_chat").click();
        click_time("wa_bot");
        select_curr = "wa_bot";
      } else {
        $("#btn_hs_chat").click();
        click_time("hs_bot");
        select_curr = "hs_bot";
      }

      first_count = true;

      $(".not_mail").show();
      $(".is_mail").hide();
    }
  } else if (channel_active == "hs_bot") {
    window.HubSpotConversations.widget.close();
    channel_active = true;
    select_curr = "hs_bot";

    $("#main-chat-btn-icon").removeClass("fa-message");
    $("#main-chat-btn-icon").addClass("fa-xmark");
    // $("#main-chat-btn_text").hide();

    // --- for Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini
    $("#main-chat-btn").css({ top: "auto", bottom: "10px", right: "10px" });

    second_hs = true;
    click_time("hs_bot2");
    $("#talk_go").text("Restart conversation");
  } else if (channel_active == "wa_bot") {
    channel_active = true;
    select_curr = false;

    $("#main-chat-btn-icon").addClass("fa-message");
    $("#main-chat-btn-icon").removeClass("fa-xmark");
    // $("#main-chat-btn_text").show();
  } else if (channel_active == "em_bot") {
    channel_active = true;
    select_curr = false;

    $("#main-chat-btn-icon").addClass("fa-message");
    $("#main-chat-btn-icon").removeClass("fa-xmark");
    // $("#main-chat-btn_text").show();
  } else {
    $("#main-chat-menu").hide();
    channel_active = false;
    select_curr = false;

    $("#main-chat-btn-icon").addClass("fa-message");
    $("#main-chat-btn-icon").removeClass("fa-xmark");
    // $("#main-chat-btn_text").show();
  }
});

$("#main-chat-min").click(function () {
  $("#main-chat-btn").trigger("click");
});

$("#mail_message").on("input", function () {
  let temp_height = parseInt($(this).prop("scrollHeight") - 20) + "px";
  $(this).height(temp_height);
});

var count_int = true;
setInterval(() => {
  if (count_int) {
    $(".btn_shado").css({ scale: 1.03 });
    count_int = false;
  } else {
    $(".btn_shado").css({ scale: 1.0 });
    count_int = true;
  }
}, 1000);

function send_to_hubspot() {
  console.log("sending to hubspot");

  let formData = {
    fields: [
      {
        name: "display_name",
        value: document.getElementById("name").value,
      },
      {
        name: "email",
        value: document.getElementById("email").value,
      },
      {
        name: "message",
        value: document.getElementById("mail_message").value,
      },
      // Add other form fields here
    ],
    context: {
      // You can add context data here like pageUri and pageName
    },
  };

  fetch("https://api.hsforms.com/submissions/v3/integration/submit/44202825/738a2eb4-af1c-4109-ada7-bfa927371b47", {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      $(".is_mail").hide();
      $("#talk_go").hide();
      $("#is_mail_sent").show();
      $("#is_mail_sent").text(data.inlineMessage);

      setTimeout(() => {
        $(".is_mail").show();
        $("#talk_go").show();
        $("#is_mail_sent").hide();
      }, 5 * 1000);
    })
    .catch((error) => {
      console.error("error");
      console.error(error);
    });
}
