const searchInput = document.getElementById('search-input');
const questions = Array.from(document.querySelectorAll('.question'));

searchInput.addEventListener('input', function() {
	const filter = this.value.toLowerCase();
	if (!filter.trim()) {
		questions.forEach(function(question) {
			question.style.display = 'block';
		});
	} else {
		questions.forEach(function(question) {
			const title = question.querySelector('h2').textContent.toLowerCase().trim();
			const answer = question.querySelector('p').textContent.toLowerCase().trim();
			if (title.includes(filter) || answer.includes(filter)) {
				question.style.display = 'block';
			} else {
				question.style.display = 'none';
			}
		});
	}
});
