var func = () => {
};

// 追加ボタン
$("#add_unload").on("click", () => {
    $("#result").append(new Date() + " : unloadイベント追加<br>");
    window.addEventListener("unload", func);
});

// 削除ボタン
$("#add_unload").on("click", () => {
    $("#result").append(new Date() + " : unloadイベント削除<br>");
    window.removeEventListener("unload", func);
});

$(document).ready(() => {
    $("#result").append(new Date() + " : readyが呼ばれました<br>");
    $("#result").append("リファラ : " + document.referrer + "<br>");
});