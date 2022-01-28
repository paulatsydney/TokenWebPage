const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

function copyAddress() {
  /* Get the text field */
  var copyText = document.getElementById("addressInput");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);

  /* Alert the copied text */
  document.getElementById("btnCopyAddress").innerText = "Address Copied!";
  // alert("Copied the text: " + copyText.value);

  setTimeout(function () {
    document.getElementById("btnCopyAddress").innerText = "Copy to Clipboard";
  }, 3000);
}
