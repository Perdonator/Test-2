let codeFlag = localStorage.getItem("codeFlag") || "false";
score = localStorage.getItem("clickerScore") || 0;
localStorage.setItem("codeFlag", "false");
function revealSecrets() {
	  let SecretFound = localStorage.getItem("SecretFound") || 0;
      var code = document.getElementById("codeInput").value.toLowerCase();
      if (code === "fish") {
        var video = document.getElementById("fishVideo");
        video.style.display = "block"; // Show the video
        video.play(); // Play the video
        setTimeout(function() {
          video.style.display = "none"; // Hide the video after it finishes
        }, video.duration * 1000); // Hide the video after it finishes playing
	  } else if (code === "ballsack" && codeFlag === "false") {
		  let score = localStorage.getItem("clickerScore") || 0;
		  localStorage.setItem("clickerScore", parseInt(score) + 1);
		  document.getElementById("score").textContent = score;
		  localStorage.setItem("codeFlag", "true");
		  console.log("code activated!");
		  alert("AMGOUS CODE ACTIVATED");
	  } else if (code === "noah"){
		  document.getElementById("fishBtn").src = "fishlord.png";
		  localStorage.setItem("FishSkin2", true);
		  alert("YOU GOT FISH LORD!");
		  console.log("noah activated!")
	  } else {
        alert("Incorrect code. Try again.");
      }
    }
