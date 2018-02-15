var progress = new Progress_bar();
window.onload = function () {
	initInterface();
}

function initInterface() {
	var input = document.getElementsByClassName("percent")[0];
	input.addEventListener("change", function () {
		progress.setValue(this.value);
	});
	document.getElementsByClassName("switch_1")[0].addEventListener("change", function () {
		if (this.checked) {
			progress.setMod("animated","yes")
		} else
			progress.setMod("animated","")
	})
	document.getElementsByClassName("switch_1")[1].addEventListener("change", function () {
		if (this.checked) {
			document.getElementsByClassName("loader")[0].style.visibility = "hidden";
		} else
			document.getElementsByClassName("loader")[0].style.visibility = "visible";
	})
}
