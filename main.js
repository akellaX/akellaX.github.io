var progress = new Progress_bar();
window.onload = function () {
	initInterface();
}

function initInterface() {
	var input = document.getElementsByClassName("interface__input")[0];
	input.addEventListener("change", function () {
		progress.setValue(this.value);
	});
	document.getElementsByClassName("interface__switch_box__switch_1")[0].addEventListener("change", function () {
		if (this.checked) {
			progress.setMod("animated", "yes")
		} else
			progress.setMod("animated", "")
	})
	document.getElementsByClassName("interface__switch_box__switch_1")[1].addEventListener("change", function () {
		if (this.checked) {
			document.getElementsByClassName("progress-bar__loader")[0].style.visibility = "hidden";
		} else
			document.getElementsByClassName("progress-bar__loader")[0].style.visibility = "visible";
	})
}
