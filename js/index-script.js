document.body.onload = () => {
	$`div.fog_screen`.style.display = "none";
	
	$`button.settings`.onclick = () => $`dialog`.showModal();
	
	$`button.close`.onclick = () => $`dialog`.close();
	
	const myClanMembers = [
		{ id: "#8RV9COR22", name: "Josu", status: "co-leader" },
		{ id: "#9VULCUYLG", name: "DemonsBro47Q", status: "co-leader" },
		{ id: "#LGOVYJPLP", name: "Niander Thrain", status: "co-leader" },
		{ id: "#9VLOPCQRY", name: "JJ009", status: "elder" },
		{ id: "#P9UC228JL", name: "Happy Thomas", status: "member" },
		{ id: "#P8UUG2VJJ", name: "King of Kings", status: "co-leader" },
		{ id: "#P9JCGUVC8", name: "Shadow Warrior", status: "co-leader" },
		{ id: "#LC2UC20C8", name: "Hansel 2", status: "co-leader" },
		{ id: "#LLPRQ2VLR", name: "Night Fury", status: "leader" },
		{ id: "#LPUUCRUQ2", name: "_dream_rider_", status: "co-leader" },
		{ id: "#LU899YOQC", name: "Anandhu", status: "co-leader" },
		{ id: "#LVRUGPQ8P", name: "Monkey Cap", status: "elder" },
	];
	
	myClanMembers.forEach((member, pos) => {
		const list_Item = document.createElement("li");
	
		const memberName = document.createElement("div");
		memberName.textContent = member.name;
		memberName.className = "memberName";
	
		const memberStatus = document.createElement("small");
		memberStatus.textContent = member.status;
		memberStatus.className = "memberStatus";
		
		const memberId = document.createElement("small");
		memberId.textContent = member.id;
		memberId.className = "memberId";
	
		list_Item.appendChild(memberName);
		list_Item.appendChild(memberStatus);
		list_Item.appendChild(memberId);
	
		(member.name == "Niander Thrain") && list_Item.classList.add("Me");
	
		$`ol#my-clan-members`.appendChild(list_Item);
	});
	
	$`div.settings-area > ul:first-of-type a`.forEach(el => {
		el.onclick = function() {
			$`dialog`.close();
		};
	});
	setTimeout(() => {
		alert(getComputedStyle($`div.fog_screen`).display);
	}, 5000);
};


