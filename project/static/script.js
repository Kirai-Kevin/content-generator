document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.querySelector('form');
    const loadingDiv = document.getElementById('loading');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            loadingDiv.style.display = 'block';
            form.style.display = 'none';
            
            // Submit the form
            fetch(form.action, {
                method: form.method,
                body: new FormData(form)
            })
            .then(response => response.text())
            .then(html => {
                document.body.innerHTML = html;
                loadingDiv.style.display = 'none';
            })
            .catch(error => {
                console.error('Error:', error);
                loadingDiv.style.display = 'none';
                form.style.display = 'block';
            });
        });
    }
});