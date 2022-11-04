// 追加ボタン
$("#add_unload").on("click", () => {
    $(window).on("unload", () => {});
});

// 削除ボタン
$("#add_unload").on("click", () => {
    $(window).off("unload");
});

$(document).ready(() => {
    $("#result").append(new Date() + " : readyが呼ばれました<br>");
    $("#result").append("リファラ : " + document.referrer + "<br>");
});