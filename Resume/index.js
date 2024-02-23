var icon = document.getElementById("icon");

    icon.onclick = function() {
        document.body.classList.toggle("dark-theme");
        if (document.body.classList.contains("dark-theme")){
            icon.src = "https://static-00.iconduck.com/assets.00/sun-icon-2048x2048-ylj2peao.png"; 
        } else { 
            icon.src = "https://i.pinimg.com/originals/1c/22/43/1c22433b8d3aec799fd8187ca3030193.jpg";
        }
        };
        
    