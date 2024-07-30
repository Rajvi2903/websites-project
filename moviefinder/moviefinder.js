
    function toggleFaq(element) {
        const answer = element.querySelector('.answer');
        const icon = element.querySelector('img');
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            icon.style.transform = 'rotate(0deg)';
        } else {
            answer.style.display = 'block';
            icon.style.transform = 'rotate(45deg)';
        }
    }

    document.getElementById('signInBtn').addEventListener('click', function() {
        document.getElementById('signInContainer').classList.toggle('show');
    });