Coins = localStorage.getItem("Coins") || 0;

document.getElementById("coins").textContent = Coins;

function skinChange1() {

	if (Coins > 0 && Coins >= 2) {

		Coins = Coins - 2

	    localStorage.setItem("Coins", Coins);

	    document.getElementById("coins").textContent = Coins;

	    document.getElementById("fishBtn").src = "fishskin.png";

		localStorage.setItem("FishSkin1", true);

	} else {

		alert("Not enough coins!");

	}

	

}

function skinChange2() {

	if (Coins > 0 && Coins >= 8) {

		Coins = Coins - 8

	    localStorage.setItem("Coins", Coins);

	    document.getElementById("coins").textContent = Coins;

	    document.getElementById("fishBtn").src = "fishlord.png";

		localStorage.setItem("FishSkin2", true);

	} else {

		alert("Not enough coins!");

	}

	
function skinChange3() {



	if (Coins > 0 && Coins >= 1000) {

		Coins = Coins - 1000

	    localStorage.setItem("Coins", Coins);

	    document.getElementById("coins").textContent = Coins;

	    document.getElementById("fishBtn").src = "Buff.png";

		localStorage.setItem("FishSkin3", true);

	} else {

		alert("Not enough coins!");

	}

	

}


  
  
  
}

function bgChange1() {

	if (Coins > 0 && Coins >= 5) {

		Coins = Coins - 5

	    localStorage.setItem("Coins", Coins);

	    document.getElementById("coins").textContent = Coins;

		document.body.style.backgroundImage = "url('https://i.pinimg.com/originals/b9/aa/9a/b9aa9a90f6e7047aa698144179c9e1e6.jpg')";

		localStorage.setItem("FishWallaper1", true);

	} else {

		alert("Not enough coins!");

	}

}



// here you go

const sBB = [document.getElementsByTagName('button')[8], document.getElementsByTagName('button')[9]];



setInterval(() => {

	localStorage.getItem('FishSkin1') === 'true' ? sBB[0].innerHTML = 'Equip skin' : sBB[0].innerHTML = 'Buy this skin! (2 Coins)';

	localStorage.getItem('FishSkin2') === 'true' ? sBB[1].innerHTML = 'Equip skin' : sBB[1].innerHTML = 'Buy this skin! (8 Coins)';

}, 1);



sBB[0].addEventListener('click', () => {

	localStorage.getItem('FishSkin1') === 'true' ? document.getElementById("fishBtn").src = "fishskin.png" : skinChange1();

});



sBB[1].addEventListener('click', () => {

	localStorage.getItem('FishSkin2') === 'true' ? document.getElementById("fishBtn").src = "fishlord.png" : skinChange2();

});
