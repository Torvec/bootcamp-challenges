// EVENT LISTENER FOR SIGNING OUT


// Event listener for signing out with either the desktop or mobile menu
document.addEventListener("DOMContentLoaded", () => {
  const signoutMenuLink = document.getElementById("signoutLink");
  const signoutMenuLinkMobile = document.getElementById("signoutLinkMobile");
  const signoutHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/users/signout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        window.location.replace("/signin");
      } else {
        alert("Failed to sign out");
      }
    } catch (err) {
      console.error("Error signing out:", err);
    }
  };
  if (signoutMenuLink) {
    signoutMenuLink.addEventListener("click", signoutHandler);
  }
  if (signoutMenuLinkMobile) {
    signoutMenuLinkMobile.addEventListener("click", signoutHandler);
  }
});