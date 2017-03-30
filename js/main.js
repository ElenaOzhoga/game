var popup = document.getElementById("popup");
popup.hidden = true;
document.querySelectorAll("td").forEach( function (elem) {
	elem.className = 'empty';
	elem.addEventListener('click', function () {
		if (elem.className === 'empty') {
			elem.className = 'zero';
			elem.innerHTML += 'O';
			var indexElem = Math.floor(0 + Math.random() * 8);
			var crossElem = document.querySelectorAll(".empty")[indexElem];
			setTimeout(function () {
				if (crossElem !== undefined) {
					crossElem.className = 'cross';
					crossElem.innerHTML += 'X';
				} else {
					indexElem = (Math.floor(0 + Math.random() * 8) == indexElem ? Math.floor(0 + Math.random() * 8) - 1 : Math.floor(0 + Math.random() * 8));
					crossElem = document.querySelectorAll(".empty")[indexElem];
					if (crossElem !== undefined) {
						crossElem.className = 'cross';
						crossElem.innerHTML += 'X';
					} else {
						indexElem = (Math.floor(0 + Math.random() * 8) == indexElem ? Math.floor(0 + Math.random() * 8) - 1 : Math.floor(0 + Math.random() * 8));
						crossElem = document.querySelectorAll(".empty")[indexElem];
						if (crossElem !== undefined) {
							crossElem.className = 'cross';
							crossElem.innerHTML += 'X';
						} else {
							indexElem = (Math.floor(0 + Math.random() * 8) == indexElem ? Math.floor(0 + Math.random() * 8) - 1 : Math.floor(0 + Math.random() * 8));
							crossElem = document.querySelectorAll(".empty")[indexElem];
							if (crossElem !== undefined) {
								crossElem.className = 'cross';
								crossElem.innerHTML += 'X';
							} else {
								indexElem = (Math.floor(0 + Math.random() * 8) == indexElem ? Math.floor(0 + Math.random() * 8) - 1 : Math.floor(0 + Math.random() * 8));
								crossElem = document.querySelectorAll(".empty")[indexElem];
								if (crossElem !== undefined) {
									crossElem.className = 'cross';
									crossElem.innerHTML += 'X';
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
			}, 500);
		}
	});
});