document.getElementById('shopNowButton').addEventListener('click', function() {
    
    window.location.href = 'shopnow.html';
});

document.querySelector('.search-bar button').addEventListener('click', function() {
    let searchTerm = document.querySelector('.search-bar input[type="text"]').value;
    if (searchTerm.trim() !== "") {
        alert(`Searching for: ${searchTerm}`);
        // Replace this alert with your actual search logic (e.g., AJAX)
    } else {
        alert("Please enter a search term.");
    }
});
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    let query = document.querySelector("input[name='query']").value;
    if (query.trim() !== "") {
        window.location.href = "search_results.html?q=" + encodeURIComponent(query);
    }
});