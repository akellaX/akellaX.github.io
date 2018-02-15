function Progress_bar() {
	this.value = 0;

	this.progress_block = document.getElementsByClassName("progress-bar")[0];

	this.progress_block.innerHTML = "<div class='container'><svg class='loader' width='200' height='200'><circle class = 'b_circle' r = '90' cx = '100' cy = '100' fill = 'transparent' stroke-dasharray='565.48' stroke-dashoffset='0'></circle><circle class = 's_circle bar' r='90' cx='100' cy='100' fill='transparent' stroke-dasharray='565.48' stroke-dashoffset='0'></circle></svg></div>";


	this.loader = document.getElementsByClassName("loader")[0];
	this.setValue(0);

}

Progress_bar.prototype.setValue = function (val) {
	val = parseInt(val);
	if (isNaN(val))
		alert("wrong value");
	else {
		this.value = val;
		var radius = document.getElementsByClassName("b_circle")[0].getAttribute("r");
		var k = Math.PI * (radius * 2);
		if (val < 0) {
			val = 0;
		}
		if (val > 100) {
			val = 100;
		}
		var change = ((100 - val) / 100) * k;
		document.getElementsByClassName("s_circle")[0].style.strokeDashoffset = change;
		console.log(change);

	}
}


	Progress_bar.prototype.setMod = function(anim, flag) {
		if(anim != 'animated')
			throw "wrong first argument";
		else {
			if (flag == "yes") {
				this.loader.style.animationPlayState = "running";
			}
			else {
				if (flag == "") {
				this.loader.style.animationPlayState = "paused";
				}
				else
					throw"wrong second argument";
			}
		}
	}
