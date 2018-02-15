var progress = new Progress_bar();
window.onload = function () {
	initInterface();
}
// Иницилизация интерфейса: чекбоксов и инпута
function initInterface() {
	var input = document.getElementsByClassName("interface__input")[0];
	input.addEventListener("change", function () {
		progress.setValue(this.value);
	});
	document.getElementsByClassName("switch_box__switch_1")[0].addEventListener("change", function () {
		if (this.checked) {
			progress.setMod("animated", "yes")
		} else
			progress.setMod("animated", "")
	})
	document.getElementsByClassName("switch_box__switch_1")[1].addEventListener("change", function () {
		if (this.checked) {
			progress.setMod("hide", "yes");
		} else
			progress.setMod("hide", "");
	})
}
