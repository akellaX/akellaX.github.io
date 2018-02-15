/**
 * Progress_bar
 * @class
 * @classdesc Progress_bar - это класс, реализующий работу с блоком progresss
  * Данный блок является виджитом загрузки с возможностью проставления процента загрузки и включением анимации вращения
 * @classdesc Progress_bar()
 конструкто не содержит параметров, он работает в случае наличия в html - документе элемента с классом "progress-bar". В этом случае он создаст в нем блок 'progress-bar__loader' для последующей работы с блоком Progress.
 */

function Progress_bar() {
	/** В данной переменной храниться процентное значение Progress_bar */
	/** @memberof Progress_bar */
	this.value = 0;

	/** В данной переменной храниться элемент DOM, в котором находится Progress_bar */
	/** @memberof Progress_bar */
	this.progress_block = document.getElementsByClassName("progress-bar")[0];

	/** Заполенние блока "progress-bar" */
	this.progress_block.innerHTML = "<svg class='progress-bar__loader' width='200' height='200'><circle class = 'loader__b_circle' r = '90' cx = '100' cy = '100' fill = 'transparent' stroke-dasharray='565.48' stroke-dashoffset='0'></circle><circle class = 'loader__s_circle bar' r='90' cx='100' cy='100' fill='transparent' stroke-dasharray='565.48' stroke-dashoffset='0'></circle></svg>";


	this.loader = document.getElementsByClassName("progress-bar__loader")[0];

	/** При создание ставит занчение Progress_bar на 0% */
	/** @memberof Progress_bar */
	this.setValue(0);

}

/**
 * Задает процентное значение для блока Progress
 * @param {number} val - процентное значение
 */
Progress_bar.prototype.setValue = function (val) {
	val = parseInt(val);
	// проверяет является ли число int
	if (isNaN(val))
		alert("wrong value");
	else {
		this.value = val;
		var radius = document.getElementsByClassName("loader__b_circle")[0].getAttribute("r");
		var k = Math.PI * (radius * 2);
		if (val < 0) {
			val = 0;
		}
		if (val > 100) {
			val = 100;
		}
		//высчитывает новый процент закрашивания Progress_bar, где k- это площадь круга
		var change = ((100 - val) / 100) * k;
		// закрашивает нужный процент
		document.getElementsByClassName("loader__s_circle")[0].style.strokeDashoffset = change;
	}
}

/**
 * Задает режим работы блока Progress
 * @param {string} mod - режим работы. Может принимать значения "animated" - позволяет блоку Progress вращаться по часовой стрелке и "hide" - скрывает блок Progress.
 @param {string} flag - включает или выключает режим работы. Может принимать значения "yes" и "".
 */
Progress_bar.prototype.setMod = function (mod, flag) {
	if (mod == 'animated') {
		if (flag == "yes") {
			this.loader.style.animationPlayState = "running";
		} else {
			if (flag == "") {
				this.loader.style.animationPlayState = "paused";
			} else
				throw "wrong second argument";
		}
	}

	if (mod == 'hide') {
		if (flag == "yes") {
			this.loader.style.visibility = "hidden";
		} else {
			if (flag == "") {
				this.loader.style.visibility = "visible";
			} else
				throw "wrong second argument";
		}
	}
}
