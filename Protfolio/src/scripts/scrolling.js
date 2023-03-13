const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add("active")
		} else {
			entry.target.classList.remove("active")
		}
	})
})

const targets = document.querySelectorAll(".hidden")
