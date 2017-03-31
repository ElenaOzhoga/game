var popup = document.getElementById("popup");
var tableCell = document.querySelectorAll("td");
var messText = document.querySelectorAll(".message span")[0];
var flag;
popup.hidden = true;
messText.className = 'zero';
messText.innerHTML = 'O';
tableCell.forEach( function (elem) {
	elem.className = 'empty';
	elem.addEventListener('click', function () {
		if (elem.className === 'empty' && !flag) {
			elem.className = 'zero';
			elem.innerHTML += 'O';
			messText.className = 'cross';
			messText.innerHTML = 'X';
			flag = true;
			var indexElem = Math.floor(0 + Math.random() * 8);
			var crossElem = document.querySelectorAll(".empty")[indexElem];
			setTimeout(function () {
				if (crossElem !== undefined) {
					crossElem.className = 'cross';
					crossElem.innerHTML += 'X';
					messText.className = 'zero';
					messText.innerHTML = 'O';
					flag = false;
				} else {
					indexElem = (Math.floor(0 + Math.random() * 8) == indexElem ? Math.floor(0 + Math.random() * 8) - 1 : Math.floor(0 + Math.random() * 8));
					crossElem = document.querySelectorAll(".empty")[indexElem];
					if (crossElem !== undefined) {
						crossElem.className = 'cross';
						crossElem.innerHTML += 'X';
						messText.className = 'zero';
						messText.innerHTML = 'O';
						flag = false;
					} else {
						indexElem = (Math.floor(0 + Math.random() * 8) == indexElem ? Math.floor(0 + Math.random() * 8) - 1 : Math.floor(0 + Math.random() * 8));
						crossElem = document.querySelectorAll(".empty")[indexElem];
						if (crossElem !== undefined) {
							crossElem.className = 'cross';
							crossElem.innerHTML += 'X';
							messText.className = 'zero';
							messText.innerHTML = 'O';
							flag = false;
						} else {
							indexElem = (Math.floor(0 + Math.random() * 8) == indexElem ? Math.floor(0 + Math.random() * 8) - 1 : Math.floor(0 + Math.random() * 8));
							crossElem = document.querySelectorAll(".empty")[indexElem];
							if (crossElem !== undefined) {
								crossElem.className = 'cross';
								crossElem.innerHTML += 'X';
								messText.className = 'zero';
								messText.innerHTML = 'O';
								flag = false;
							} else {
								indexElem = (Math.floor(0 + Math.random() * 8) == indexElem ? Math.floor(0 + Math.random() * 8) - 1 : Math.floor(0 + Math.random() * 8));
								crossElem = document.querySelectorAll(".empty")[indexElem];
								if (crossElem !== undefined) {
									crossElem.className = 'cross';
									crossElem.innerHTML += 'X';
									messText.className = 'zero';
									messText.innerHTML = 'O';
									flag = false;
								}
							}
						}
					}
				}
				if ((document.querySelectorAll("td")[0].className === 'cross' && document.querySelectorAll("td")[1].className === 'cross' &&
					document.querySelectorAll("td")[2].className === 'cross') || (document.querySelectorAll("td")[0].className === 'zero' && document.querySelectorAll("td")[1].className === 'zero' &&
					document.querySelectorAll("td")[2].className === 'zero')) {
					document.querySelectorAll("td")[0].className += ' horizon';
					document.querySelectorAll("td")[1].className += ' horizon';
					document.querySelectorAll("td")[2].className += ' horizon';
					setTimeout(function () {
						popup.hidden = false;
					}, 500);
				}
				if ((document.querySelectorAll("td")[6].className === 'cross' && document.querySelectorAll("td")[8].className === 'cross' &&
					document.querySelectorAll("td")[7].className === 'cross') || (document.querySelectorAll("td")[6].className === 'zero' && document.querySelectorAll("td")[8].className === 'zero' &&
					document.querySelectorAll("td")[7].className === 'zero')) {
					document.querySelectorAll("td")[6].className += ' horizon';
					document.querySelectorAll("td")[7].className += ' horizon';
					document.querySelectorAll("td")[8].className += ' horizon';
					setTimeout(function () {
						popup.hidden = false;
					}, 500);
				}
				if ((document.querySelectorAll("td")[0].className === 'cross' && document.querySelectorAll("td")[3].className === 'cross' &&
					document.querySelectorAll("td")[6].className === 'cross') || (document.querySelectorAll("td")[0].className === 'zero' && document.querySelectorAll("td")[3].className === 'zero' &&
					document.querySelectorAll("td")[6].className === 'zero')) {
					document.querySelectorAll("td")[0].className += ' vertical';
					document.querySelectorAll("td")[3].className += ' vertical';
					document.querySelectorAll("td")[6].className += ' vertical';
					setTimeout(function () {
						popup.hidden = false;
					}, 500);
				}
				if ((document.querySelectorAll("td")[2].className === 'cross' && document.querySelectorAll("td")[5].className === 'cross' &&
					document.querySelectorAll("td")[8].className === 'cross') || (document.querySelectorAll("td")[2].className === 'zero' && document.querySelectorAll("td")[5].className === 'zero' &&
					document.querySelectorAll("td")[8].className === 'zero')) {
					document.querySelectorAll("td")[2].className += ' vertical';
					document.querySelectorAll("td")[5].className += ' vertical';
					document.querySelectorAll("td")[8].className += ' vertical';
					setTimeout(function () {
						popup.hidden = false;
					}, 500);
				}
				if ((document.querySelectorAll("td")[0].className === 'cross' && document.querySelectorAll("td")[4].className === 'cross' &&
					document.querySelectorAll("td")[8].className === 'cross') || (document.querySelectorAll("td")[0].className === 'zero' && document.querySelectorAll("td")[4].className === 'zero' &&
					document.querySelectorAll("td")[8].className === 'zero')) {
					document.querySelectorAll("td")[0].className += ' diag1';
					document.querySelectorAll("td")[4].className += ' diag1';
					document.querySelectorAll("td")[8].className += ' diag1';
					setTimeout(function () {
						popup.hidden = false;
					}, 500);
				}
				if ((document.querySelectorAll("td")[2].className === 'cross' && document.querySelectorAll("td")[4].className === 'cross' &&
					document.querySelectorAll("td")[6].className === 'cross') || (document.querySelectorAll("td")[2].className === 'zero' && document.querySelectorAll("td")[4].className === 'zero' &&
					document.querySelectorAll("td")[6].className === 'zero')) {
					document.querySelectorAll("td")[2].className += ' diag2';
					document.querySelectorAll("td")[4].className += ' diag2';
					document.querySelectorAll("td")[6].className += ' diag2';
					setTimeout(function () {
						popup.hidden = false;
					}, 500);
				}
				if (document.querySelectorAll(".empty").length === 0) {
					setTimeout(function () {
						popup.hidden = false;
					}, 500);
				}
			}, 500);
		}
	});
});
popup.getElementsByTagName("a")[0].addEventListener('click', function () {
	popup.hidden = true;
	tableCell.forEach( function (elem) {
		elem.className = 'empty';
		elem.innerHTML = '';
	});
});