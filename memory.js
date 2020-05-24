document.addEventListener("DOMContentLoaded", (event) => {
    const imgFront = [
        ["ambulancia.png", "fiebre.png", "hospital.png", "ambulancia.png"],
        ["fiebre.png", "jabon.png", "manos.png", "manos.png"],
        ["mascarilla.png", "hospital.png", "ojo.png", "jabon.png"],
        ["neumonia.png", "ojo.png", "mascarilla.png", "neumonia.png"]
    ]
    let posLastImage = "";

    for (let row=0; row<imgFront.length; row++){
        for (let col=0; col<imgFront.length; col++){
            const button = document.getElementById(row.toString() + col.toString());
            button.addEventListener("click", function(e) {
                button.src = "assets/" + imgFront[row][col];

                if (posLastImage) {
                    if (check(imgFront[row][col], imgFront[posLastImage[0]][posLastImage[1]])) {
                        posLastImage = ''
                    } else {
                        setTimeout(() => {
                            document.getElementById(posLastImage).src = "assets/back.png"
                            document.getElementById(row.toString()+col.toString()).src = "assets/back.png"
                            posLastImage = ''
                        }, 1000);
                    }
                } else {
                    posLastImage = row.toString() + col.toString();
                }
            });
        }
    }
    
    function check (current, last) {
        return current === last
    }

    
});




