// scroll top effect
let CalcScrollValue = () => {
	let ScrollProgress = document.querySelector(".progress");
	let ProgressValue = document.querySelector(".progress-value");
	let pos = document.documentElement.scrollTop;
	let calcH =
		document.documentElement.scrollHeight -
		document.documentElement.clientHeight;
	let ScrollValue = Math.round((pos * 100) / calcH);
	pos > 100
		? (ScrollProgress.style.display = "grid")
		: (ScrollProgress.style.display = "none");

	ScrollProgress.addEventListener("click", () => {
		document.documentElement.scrollTop = 0;
	});

	ScrollProgress.style.background = `conic-gradient 
   (blur ${ScrollValue}deg, blue ${ScrollValue}deg)`;
};

window.onscroll = CalcScrollValue;
window.onload = CalcScrollValue;

// ----------------------------------------
// counter
const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
	const updateCounter = () => {
		const speed = 600;
		const target = +counter.getAttribute("data-target");
		const count = +counter.innerText;

		const incrementRate = target / speed;

		if (count < target) {
			counter.innerText = Math.round(count + incrementRate);
			setTimeout(updateCounter, 1);
		} else {
			counter.innerText = target;
		}
	};

	updateCounter();
});
