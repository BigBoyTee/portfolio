document.addEventListener('DOMContentLoaded', function () {
    var toggleItems = document.querySelectorAll('.toggle-item > a');

    toggleItems.forEach(function (item) {
        item.addEventListener('click', function (event) {
            event.preventDefault();

            var nestedList = this.nextElementSibling;
            var isCurrentlyVisible = nestedList.style.display === 'block';

            // Close all nested lists
            document.querySelectorAll('.nested-list').forEach(function (list) {
                list.style.display = 'none';
            });

            // Toggle the clicked nested list
            if (!isCurrentlyVisible) {
                nestedList.style.display = 'block';
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('dynamic-text');
    const words = ['...Records manager!', '...Front end developer!', '...Resume maker!'];
    let wordIndex = 0;
    let letterIndex = 0;
    let isDeleting = false;
    const typingSpeed = 140;
    const deletingSpeed = 280;
    const delayBetweenWords = 2000;

    function type() {
        const currentWord = words[wordIndex];
        const currentLength = textElement.textContent.length;

        if (isDeleting) {
            textElement.textContent = currentWord.substring(0, currentLength - 1);
        } else {
            textElement.textContent = currentWord.substring(0, currentLength + 1);
        }

        if (!isDeleting && textElement.textContent.length === currentWord.length) {
            setTimeout(() => isDeleting = true, delayBetweenWords);
        } else if (isDeleting && textElement.textContent.length === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }

        const speed = isDeleting ? deletingSpeed : typingSpeed;
        setTimeout(type, speed);
    }

    type();
});
