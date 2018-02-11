window.onload = function () {
	initCheckbox();
	input = document.getElementById("percent");
	input.addEventListener("change", function(){
		var val = parseInt(this.value);
		if(isNaN(val))
			alert("wrong value");
		else {
			var radius = document.getElementById("b_circle").getAttribute("r");
			var k = Math.PI * (radius*2);
			if (val < 0) {
				val = 0;
			}
			if (val > 100) {
				val = 100;
			}
			var change = ((100-val)/100)*k;
			document.getElementById("s_circle").style.strokeDashoffset = change;
			console.log(change);

		}
	})
}

function initCheckbox() {
	document.getElementById("animation").addEventListener("change", function() {
		if(this.checked)
			{
			document.getElementById("loader").style.animationPlayState = "running";
			}
		else
			document.getElementById("loader").style.animationPlayState = "paused";
	})
		document.getElementById("hide").addEventListener("change", function() {
		if(this.checked)
			{
			document.getElementById("loader").style.display = "none";
			}
		else
			document.getElementById("loader").style.display = "block";
	})
}


