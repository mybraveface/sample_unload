var func = () => {
};

// 追加ボタン
$(document).on("click", "#add_unload", () => {
    $("#result").append(new Date() + " : unloadイベント追加<br>");
    window.addEventListener("unload", func);
});

// 削除ボタン
$(document).on("click", "#remove_unload", () => {
    $("#result").append(new Date() + " : unloadイベント削除<br>");
    window.removeEventListener("unload", func);
});

$(document).ready(() => {
    $("#result").append(new Date() + " : readyが呼ばれました<br>");
    $("#result").append("リファラ : " + document.referrer + "<br>");
});