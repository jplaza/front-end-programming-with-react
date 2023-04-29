
function searchInput() {
  var searchInput = document.getElementById("search");
  
  function handleChange(evt) {
    console.log("change - input:", evt.target.value);
  }
  searchInput.addEventListener('change', handleChange);
  
  function handleKeydown(evt) {
    console.log("keydown:", evt);
  }
  searchInput.addEventListener('keydown', handleKeydown);
}
