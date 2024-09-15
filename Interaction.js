var icon = document.getElementById("icon");
var uni_logo = document.getElementById("uni_logo");
var quiz_logo = document.getElementById("quiz_logo");

icon.onclick = function() {
    document.body.classList.toggle("dark-theme");

    // Scrollbar αλλαγές ανάλογα με το theme
    if (document.body.classList.contains("dark-theme")) {
        document.documentElement.style.setProperty('--scrollbar-thumb-color', '#2bc7d5');
        document.documentElement.style.setProperty('--scrollbar-track-color', 'rgb(5, 14, 43)');
    } else {
        document.documentElement.style.setProperty('--scrollbar-thumb-color', '#42602e');
        document.documentElement.style.setProperty('--scrollbar-track-color', '#99BC85');
    }

    if (document.body.classList.contains("dark-theme")) {
        icon.src = "/Images/sun.png"; 
        uni_logo.src = "/Images/uth_logo.png"; 
        quiz_logo.src = "/Images/quiz-logo2.png";
    } else {
        icon.src = "/Images/moon.png";  
        uni_logo.src = "/Images/uth_logo_original.png";
        quiz_logo.src = "/Images/quiz-logo1.png";
    }
}

/*---------------------------------------------------------------------------------*/

document.addEventListener("DOMContentLoaded", function() {
    const codeLearning = document.getElementById("moving-sentence");
    const text = "| Μάθε Python στα ελληνικά!";
    let index = 0;

    function showText() {
        if (index < text.length) {
            codeLearning.innerHTML += text.charAt(index);
            index++;
            setTimeout(showText, 160); // Προσαρμόστε το χρονικό διάστημα ανάλογα με την επιθυμητή ταχύτητα εμφάνισης
        }
    }

    // Εκκίνηση της συνάρτησης για εμφάνιση του μηνύματος
    showText();
});

//Koumpia navigation1 gia selected
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".navigation1 button");
    
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            // Remove 'selected' class from all buttons
            buttons.forEach(btn => btn.classList.remove("selected"));
            
            // Add 'selected' class to the clicked button
            this.classList.add("selected");
        });
    });
});

//Koumpia gia navigation2 gia selected
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".navigation2 button");
    
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            // Remove 'selected' class from all buttons
            buttons.forEach(btn => btn.classList.remove("selected"));
            
            // Add 'selected' class to the clicked button
            this.classList.add("selected");
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Simulate a click on the "Αρχική" button to show the intro section by default
    document.querySelector("#intro-button").click();
});


// Correctly assigning event listeners to their respective buttons
// Event listener for "Intro" button
let a = document.querySelector("#intro-button");
a.addEventListener('click', () => {
    document.querySelector('#intro').classList.remove('hidden');
    document.querySelector('#intro').classList.add('visible');

    document.querySelector('#game').classList.remove('visible');
    document.querySelector('#game').classList.add('hidden');
    
    document.querySelector('#links').classList.remove('visible');
    document.querySelector('#links').classList.add('hidden');
    
    document.querySelector('#introduction').classList.remove('visible');
    document.querySelector('#introduction').classList.add('hidden');
    
    document.querySelector('#data-types-operators').classList.remove('visible');
    document.querySelector('#data-types-operators').classList.add('hidden');
    
    document.querySelector('#arithmetic-logical-operations').classList.remove('visible');
    document.querySelector('#arithmetic-logical-operations').classList.add('hidden');
    
    document.querySelector('#variables').classList.remove('visible');
    document.querySelector('#variables').classList.add('hidden');
    
    document.querySelector('#comments').classList.remove('visible');
    document.querySelector('#comments').classList.add('hidden');
    
    document.querySelector('#built-in-functions').classList.remove('visible');
    document.querySelector('#built-in-functions').classList.add('hidden');
    
    document.querySelector('#basic-commands').classList.remove('visible');
    document.querySelector('#basic-commands').classList.add('hidden');
    
    document.querySelector('#libraries').classList.remove('visible');
    document.querySelector('#libraries').classList.add('hidden');
    
    document.querySelector('#control-flow').classList.remove('visible');
    document.querySelector('#control-flow').classList.add('hidden');
    
    document.querySelector('#functions').classList.remove('visible');
    document.querySelector('#functions').classList.add('hidden');

    document.querySelector('#list').classList.remove('visible');
    document.querySelector('#list').classList.add('hidden'); 

    document.querySelector('.navigation2').classList.remove('visible');
    document.querySelector('.navigation2').classList.add('hidden');
});

// Event listener for "Units" button
let b = document.querySelector("#units-button");
b.addEventListener('click', () => {
    document.querySelector('#intro').classList.remove('visible');
    document.querySelector('#intro').classList.add('hidden');
    
    document.querySelector('#game').classList.remove('visible');
    document.querySelector('#game').classList.add('hidden');
    
    document.querySelector('#links').classList.remove('visible');
    document.querySelector('#links').classList.add('hidden');

    let unitsSection = document.querySelector('#units');
    unitsSection.classList.remove('hidden');
    unitsSection.classList.add('visible');

    // Εμφανίζουμε το navigation2 menu
    let navigation2 = document.querySelector('.navigation2');
    navigation2.classList.remove('hidden');
    navigation2.classList.add('visible');

    let e = document.querySelector("#introduction-button");
        e.addEventListener('click', () => {
            document.querySelector('#intro').classList.remove('visible');
            document.querySelector('#intro').classList.add('hidden');
            
            document.querySelector('#game').classList.remove('visible');
            document.querySelector('#game').classList.add('hidden');
            
            document.querySelector('#links').classList.remove('visible');
            document.querySelector('#links').classList.add('hidden');
            
            document.querySelector('#introduction').classList.remove('hidden');
            document.querySelector('#introduction').classList.add('visible');
            
            document.querySelector('#data-types-operators').classList.remove('visible');
            document.querySelector('#data-types-operators').classList.add('hidden');
            
            document.querySelector('#arithmetic-logical-operations').classList.remove('visible');
            document.querySelector('#arithmetic-logical-operations').classList.add('hidden');
            
            document.querySelector('#variables').classList.remove('visible');
            document.querySelector('#variables').classList.add('hidden');
            
            document.querySelector('#comments').classList.remove('visible');
            document.querySelector('#comments').classList.add('hidden');
            
            document.querySelector('#built-in-functions').classList.remove('visible');
            document.querySelector('#built-in-functions').classList.add('hidden');
            
            document.querySelector('#basic-commands').classList.remove('visible');
            document.querySelector('#basic-commands').classList.add('hidden');
            
            document.querySelector('#libraries').classList.remove('visible');
            document.querySelector('#libraries').classList.add('hidden');
            
            document.querySelector('#control-flow').classList.remove('visible');
            document.querySelector('#control-flow').classList.add('hidden');
            
            document.querySelector('#functions').classList.remove('visible');
            document.querySelector('#functions').classList.add('hidden');    
            
            document.querySelector('#list').classList.remove('visible');
            document.querySelector('#list').classList.add('hidden'); 
    });

    let f = document.querySelector("#data-types-operators-button");
    f.addEventListener('click', () => {
        document.querySelector('#intro').classList.remove('visible');
        document.querySelector('#intro').classList.add('hidden');

        document.querySelector('#game').classList.remove('visible');
        document.querySelector('#game').classList.add('hidden');

        document.querySelector('#links').classList.remove('visible');
        document.querySelector('#links').classList.add('hidden');

        document.querySelector('#introduction').classList.remove('visible');
        document.querySelector('#introduction').classList.add('hidden');

        document.querySelector("#arithmetic-logical-operations").classList.remove('visible');
        document.querySelector("#arithmetic-logical-operations").classList.add('hidden');

        document.querySelector('#data-types-operators').classList.remove('hidden');
        document.querySelector('#data-types-operators').classList.add('visible');

        document.querySelector('#variables').classList.remove('visible');
        document.querySelector('#variables').classList.add('hidden');

        document.querySelector('#comments').classList.remove('visible');
        document.querySelector('#comments').classList.add('hidden');

        document.querySelector('#built-in-functions').classList.remove('visible');
        document.querySelector('#built-in-functions').classList.add('hidden');

        document.querySelector('#basic-commands').classList.remove('visible');
        document.querySelector('#basic-commands').classList.add('hidden');

        document.querySelector('#libraries').classList.remove('visible');
        document.querySelector('#libraries').classList.add('hidden');

        document.querySelector('#control-flow').classList.remove('visible');
        document.querySelector('#control-flow').classList.add('hidden');

        document.querySelector('#functions').classList.remove('visible');
        document.querySelector('#functions').classList.add('hidden');

        document.querySelector('#list').classList.remove('visible');
        document.querySelector('#list').classList.add('hidden'); 
    });

    let g = document.querySelector("#arithmetic-logical-operations-button");
    g.addEventListener('click', () => {
        document.querySelector('#intro').classList.remove('visible');
        document.querySelector('#intro').classList.add('hidden'); // Κάνουμε το introduction κρυφό
        
        document.querySelector('#game').classList.remove('visible');
        document.querySelector('#game').classList.add('hidden'); // Κρύβουμε τα υπόλοιπα
        
        document.querySelector('#links').classList.remove('visible');
        document.querySelector('#links').classList.add('hidden');
        
        document.querySelector('#introduction').classList.remove('visible');
        document.querySelector('#introduction').classList.add('hidden');
        
        document.querySelector('#data-types-operators').classList.remove('visible');
        document.querySelector('#data-types-operators').classList.add('hidden');
        
        document.querySelector("#arithmetic-logical-operations").classList.remove('hidden');
        document.querySelector("#arithmetic-logical-operations").classList.add('visible'); // Κάνουμε το arithmetic-logical-operations ορατό
        
        document.querySelector('#variables').classList.remove('visible');
        document.querySelector('#variables').classList.add('hidden');
        
        document.querySelector('#comments').classList.remove('visible');
        document.querySelector('#comments').classList.add('hidden');
        
        document.querySelector('#built-in-functions').classList.remove('visible');
        document.querySelector('#built-in-functions').classList.add('hidden');
        
        document.querySelector('#basic-commands').classList.remove('visible');
        document.querySelector('#basic-commands').classList.add('hidden');
        
        document.querySelector('#libraries').classList.remove('visible');
        document.querySelector('#libraries').classList.add('hidden');
        
        document.querySelector('#control-flow').classList.remove('visible');
        document.querySelector('#control-flow').classList.add('hidden');
        
        document.querySelector('#functions').classList.remove('visible');
        document.querySelector('#functions').classList.add('hidden');  
        
        document.querySelector('#list').classList.remove('visible');
        document.querySelector('#list').classList.add('hidden'); 
    });

    let h = document.querySelector("#variables-button");
    h.addEventListener('click', () => {
        document.querySelector('#intro').classList.remove('visible');
        document.querySelector('#intro').classList.add('hidden'); // Κάνουμε το introduction κρυφό
        
        document.querySelector('#game').classList.remove('visible');
        document.querySelector('#game').classList.add('hidden'); // Κρύβουμε τα υπόλοιπα
        
        document.querySelector('#links').classList.remove('visible');
        document.querySelector('#links').classList.add('hidden');
        
        document.querySelector('#introduction').classList.remove('visible');
        document.querySelector('#introduction').classList.add('hidden');
        
        document.querySelector('#data-types-operators').classList.remove('visible');
        document.querySelector('#data-types-operators').classList.add('hidden');
        
        document.querySelector("#arithmetic-logical-operations").classList.remove('visible');
        document.querySelector("#arithmetic-logical-operations").classList.add('hidden');
        
        document.querySelector('#variables').classList.remove('hidden');
        document.querySelector('#variables').classList.add('visible'); // Κάνουμε το variables ορατό
        
        document.querySelector('#comments').classList.remove('visible');
        document.querySelector('#comments').classList.add('hidden');
        
        document.querySelector('#built-in-functions').classList.remove('visible');
        document.querySelector('#built-in-functions').classList.add('hidden');
        
        document.querySelector('#basic-commands').classList.remove('visible');
        document.querySelector('#basic-commands').classList.add('hidden');
        
        document.querySelector('#libraries').classList.remove('visible');
        document.querySelector('#libraries').classList.add('hidden');
        
        document.querySelector('#control-flow').classList.remove('visible');
        document.querySelector('#control-flow').classList.add('hidden');
        
        document.querySelector('#functions').classList.remove('visible');
        document.querySelector('#functions').classList.add('hidden');    
        
        document.querySelector('#list').classList.remove('visible');
        document.querySelector('#list').classList.add('hidden'); 
    });

    let i = document.querySelector("#basic-commands-button");
    i.addEventListener('click', () => {
        document.querySelector('#intro').classList.remove('visible');
        document.querySelector('#intro').classList.add('hidden'); // Κρύβουμε το intro
        
        document.querySelector('#game').classList.remove('visible');
        document.querySelector('#game').classList.add('hidden'); // Κρύβουμε το game
        
        document.querySelector('#links').classList.remove('visible');
        document.querySelector('#links').classList.add('hidden'); // Κρύβουμε το links
        
        document.querySelector('#introduction').classList.remove('visible');
        document.querySelector('#introduction').classList.add('hidden'); // Κρύβουμε το introduction
        
        document.querySelector('#data-types-operators').classList.remove('visible');
        document.querySelector('#data-types-operators').classList.add('hidden'); // Κρύβουμε το data-types-operators
        
        document.querySelector("#arithmetic-logical-operations").classList.remove('visible');
        document.querySelector("#arithmetic-logical-operations").classList.add('hidden'); // Κρύβουμε το arithmetic-logical-operations
        
        document.querySelector('#variables').classList.remove('visible');
        document.querySelector('#variables').classList.add('hidden'); // Κρύβουμε το variables
        
        document.querySelector('#comments').classList.remove('visible');
        document.querySelector('#comments').classList.add('hidden'); // Κρύβουμε το comments
        
        document.querySelector('#built-in-functions').classList.remove('visible');
        document.querySelector('#built-in-functions').classList.add('hidden'); // Κρύβουμε το built-in-functions
        
        document.querySelector('#basic-commands').classList.remove('hidden');
        document.querySelector('#basic-commands').classList.add('visible'); // Κάνουμε το basic-commands ορατό
        
        document.querySelector('#libraries').classList.remove('visible');
        document.querySelector('#libraries').classList.add('hidden'); // Κρύβουμε το libraries
        
        document.querySelector('#control-flow').classList.remove('visible');
        document.querySelector('#control-flow').classList.add('hidden'); // Κρύβουμε το control-flow
        
        document.querySelector('#functions').classList.remove('visible');
        document.querySelector('#functions').classList.add('hidden'); // Κρύβουμε το functions    
        
        document.querySelector('#list').classList.remove('visible');
        document.querySelector('#list').classList.add('hidden'); 
    });

    let j = document.querySelector("#comments-button");
    j.addEventListener('click', () => {
        document.querySelector('#intro').classList.remove('visible');
        document.querySelector('#intro').classList.add('hidden'); // Κρύβουμε το intro
        
        document.querySelector('#game').classList.remove('visible');
        document.querySelector('#game').classList.add('hidden'); // Κρύβουμε το game
        
        document.querySelector('#links').classList.remove('visible');
        document.querySelector('#links').classList.add('hidden'); // Κρύβουμε το links
        
        document.querySelector('#introduction').classList.remove('visible');
        document.querySelector('#introduction').classList.add('hidden'); // Κρύβουμε το introduction
        
        document.querySelector('#data-types-operators').classList.remove('visible');
        document.querySelector('#data-types-operators').classList.add('hidden'); // Κρύβουμε το data-types-operators
        
        document.querySelector("#arithmetic-logical-operations").classList.remove('visible');
        document.querySelector("#arithmetic-logical-operations").classList.add('hidden'); // Κρύβουμε το arithmetic-logical-operations
        
        document.querySelector('#variables').classList.remove('visible');
        document.querySelector('#variables').classList.add('hidden'); // Κρύβουμε το variables
        
        document.querySelector('#comments').classList.remove('hidden');
        document.querySelector('#comments').classList.add('visible'); // Κάνουμε το comments ορατό
        
        document.querySelector('#built-in-functions').classList.remove('visible');
        document.querySelector('#built-in-functions').classList.add('hidden'); // Κρύβουμε το built-in-functions
        
        document.querySelector('#basic-commands').classList.remove('visible');
        document.querySelector('#basic-commands').classList.add('hidden'); // Κρύβουμε το basic-commands
        
        document.querySelector('#libraries').classList.remove('visible');
        document.querySelector('#libraries').classList.add('hidden'); // Κρύβουμε το libraries
        
        document.querySelector('#control-flow').classList.remove('visible');
        document.querySelector('#control-flow').classList.add('hidden'); // Κρύβουμε το control-flow
        
        document.querySelector('#functions').classList.remove('visible');
        document.querySelector('#functions').classList.add('hidden'); // Κρύβουμε το functions      
        
        document.querySelector('#list').classList.remove('visible');
        document.querySelector('#list').classList.add('hidden'); 
    });

    let k = document.querySelector("#built-in-functions-button");
    k.addEventListener('click', () => {
        document.querySelector('#intro').classList.remove('visible');
        document.querySelector('#intro').classList.add('hidden'); // Κρύβουμε το intro
        
        document.querySelector('#game').classList.remove('visible');
        document.querySelector('#game').classList.add('hidden'); // Κρύβουμε το game
        
        document.querySelector('#links').classList.remove('visible');
        document.querySelector('#links').classList.add('hidden'); // Κρύβουμε το links
        
        document.querySelector('#introduction').classList.remove('visible');
        document.querySelector('#introduction').classList.add('hidden'); // Κρύβουμε το introduction
        
        document.querySelector('#data-types-operators').classList.remove('visible');
        document.querySelector('#data-types-operators').classList.add('hidden'); // Κρύβουμε το data-types-operators
        
        document.querySelector("#arithmetic-logical-operations").classList.remove('visible');
        document.querySelector("#arithmetic-logical-operations").classList.add('hidden'); // Κρύβουμε το arithmetic-logical-operations
        
        document.querySelector('#variables').classList.remove('visible');
        document.querySelector('#variables').classList.add('hidden'); // Κρύβουμε το variables
        
        document.querySelector('#comments').classList.remove('visible');
        document.querySelector('#comments').classList.add('hidden'); // Κρύβουμε το comments
        
        document.querySelector('#built-in-functions').classList.remove('hidden');
        document.querySelector('#built-in-functions').classList.add('visible'); // Κάνουμε το built-in-functions ορατό
        
        document.querySelector('#basic-commands').classList.remove('visible');
        document.querySelector('#basic-commands').classList.add('hidden'); // Κρύβουμε το basic-commands
        
        document.querySelector('#libraries').classList.remove('visible');
        document.querySelector('#libraries').classList.add('hidden'); // Κρύβουμε το libraries
        
        document.querySelector('#control-flow').classList.remove('visible');
        document.querySelector('#control-flow').classList.add('hidden'); // Κρύβουμε το control-flow
        
        document.querySelector('#functions').classList.remove('visible');
        document.querySelector('#functions').classList.add('hidden'); // Κρύβουμε το functions 
        
        document.querySelector('#list').classList.remove('visible');
        document.querySelector('#list').classList.add('hidden'); 
    });

    let l = document.querySelector("#libraries-button");
    l.addEventListener('click', () => {
        document.querySelector('#intro').classList.remove('visible');
        document.querySelector('#intro').classList.add('hidden'); // Κρύβουμε το intro
        
        document.querySelector('#game').classList.remove('visible');
        document.querySelector('#game').classList.add('hidden'); // Κρύβουμε το game
        
        document.querySelector('#links').classList.remove('visible');
        document.querySelector('#links').classList.add('hidden'); // Κρύβουμε το links
        
        document.querySelector('#introduction').classList.remove('visible');
        document.querySelector('#introduction').classList.add('hidden'); // Κρύβουμε το introduction
        
        document.querySelector('#data-types-operators').classList.remove('visible');
        document.querySelector('#data-types-operators').classList.add('hidden'); // Κρύβουμε το data-types-operators
        
        document.querySelector("#arithmetic-logical-operations").classList.remove('visible');
        document.querySelector("#arithmetic-logical-operations").classList.add('hidden'); // Κρύβουμε το arithmetic-logical-operations
        
        document.querySelector('#variables').classList.remove('visible');
        document.querySelector('#variables').classList.add('hidden'); // Κρύβουμε το variables
        
        document.querySelector('#comments').classList.remove('visible');
        document.querySelector('#comments').classList.add('hidden'); // Κρύβουμε το comments
        
        document.querySelector('#built-in-functions').classList.remove('visible');
        document.querySelector('#built-in-functions').classList.add('hidden'); // Κρύβουμε το built-in-functions
        
        document.querySelector('#basic-commands').classList.remove('visible');
        document.querySelector('#basic-commands').classList.add('hidden'); // Κρύβουμε το basic-commands
        
        document.querySelector('#libraries').classList.remove('hidden');
        document.querySelector('#libraries').classList.add('visible'); // Κάνουμε το libraries ορατό
        
        document.querySelector('#control-flow').classList.remove('visible');
        document.querySelector('#control-flow').classList.add('hidden'); // Κρύβουμε το control-flow
        
        document.querySelector('#functions').classList.remove('visible');
        document.querySelector('#functions').classList.add('hidden'); // Κρύβουμε το functions 
        
        document.querySelector('#list').classList.remove('visible');
        document.querySelector('#list').classList.add('hidden'); 
    });

    let m = document.querySelector("#control-flow-button");
    m.addEventListener('click', () => {
        document.querySelector('#intro').classList.remove('visible');
        document.querySelector('#intro').classList.add('hidden'); // Κρύβουμε το intro 

        document.querySelector('#game').classList.remove('visible');
        document.querySelector('#game').classList.add('hidden'); // Κρύβουμε το game

        document.querySelector('#links').classList.remove('visible');
        document.querySelector('#links').classList.add('hidden'); // Κρύβουμε το links

        document.querySelector('#introduction').classList.remove('visible');
        document.querySelector('#introduction').classList.add('hidden'); // Κρύβουμε το introduction

        document.querySelector('#data-types-operators').classList.remove('visible');
        document.querySelector('#data-types-operators').classList.add('hidden'); // Κρύβουμε το data-types-operators

        document.querySelector("#arithmetic-logical-operations").classList.remove('visible');
        document.querySelector("#arithmetic-logical-operations").classList.add('hidden'); // Κρύβουμε το arithmetic-logical-operations

        document.querySelector('#variables').classList.remove('visible');
        document.querySelector('#variables').classList.add('hidden'); // Κρύβουμε το variables

        document.querySelector('#comments').classList.remove('visible');
        document.querySelector('#comments').classList.add('hidden'); // Κρύβουμε το comments

        document.querySelector('#built-in-functions').classList.remove('visible');
        document.querySelector('#built-in-functions').classList.add('hidden'); // Κρύβουμε το built-in-functions

        document.querySelector('#basic-commands').classList.remove('visible');
        document.querySelector('#basic-commands').classList.add('hidden'); // Κρύβουμε το basic-commands

        document.querySelector('#libraries').classList.remove('visible');
        document.querySelector('#libraries').classList.add('hidden'); // Κρύβουμε το libraries

        document.querySelector('#control-flow').classList.remove('hidden');
        document.querySelector('#control-flow').classList.add('visible'); // Κάνουμε το control-flow ορατό

        document.querySelector('#functions').classList.remove('visible');
        document.querySelector('#functions').classList.add('hidden'); // Κρύβουμε το functions

        document.querySelector('#list').classList.remove('visible');
        document.querySelector('#list').classList.add('hidden'); 
    });

    let n = document.querySelector("#functions-button");
    n.addEventListener('click', () => {
        document.querySelector('#intro').classList.remove('visible');
        document.querySelector('#intro').classList.add('hidden'); // Κρύβουμε το intro
        
        document.querySelector('#game').classList.remove('visible');
        document.querySelector('#game').classList.add('hidden'); // Κρύβουμε το game
        
        document.querySelector('#links').classList.remove('visible');
        document.querySelector('#links').classList.add('hidden'); // Κρύβουμε το links
        
        document.querySelector('#introduction').classList.remove('visible');
        document.querySelector('#introduction').classList.add('hidden'); // Κρύβουμε το introduction
        
        document.querySelector('#data-types-operators').classList.remove('visible');
        document.querySelector('#data-types-operators').classList.add('hidden'); // Κρύβουμε το data-types-operators
        
        document.querySelector("#arithmetic-logical-operations").classList.remove('visible');
        document.querySelector("#arithmetic-logical-operations").classList.add('hidden'); // Κρύβουμε το arithmetic-logical-operations
        
        document.querySelector('#variables').classList.remove('visible');
        document.querySelector('#variables').classList.add('hidden'); // Κρύβουμε το variables
        
        document.querySelector('#comments').classList.remove('visible');
        document.querySelector('#comments').classList.add('hidden'); // Κρύβουμε το comments
        
        document.querySelector('#built-in-functions').classList.remove('visible');
        document.querySelector('#built-in-functions').classList.add('hidden'); // Κρύβουμε το built-in-functions
        
        document.querySelector('#basic-commands').classList.remove('visible');
        document.querySelector('#basic-commands').classList.add('hidden'); // Κρύβουμε το basic-commands
        
        document.querySelector('#libraries').classList.remove('visible');
        document.querySelector('#libraries').classList.add('hidden'); // Κρύβουμε το libraries
        
        document.querySelector('#control-flow').classList.remove('visible');
        document.querySelector('#control-flow').classList.add('hidden'); // Κρύβουμε το control-flow
        
        document.querySelector('#functions').classList.remove('hidden');
        document.querySelector('#functions').classList.add('visible'); // Κάνουμε το functions ορατό    
        
        document.querySelector('#list').classList.remove('visible');
        document.querySelector('#list').classList.add('hidden'); 
    });

    let o = document.querySelector("#list-button");
    o.addEventListener('click', () => {
        document.querySelector('#intro').classList.remove('visible');
        document.querySelector('#intro').classList.add('hidden'); // Κρύβουμε το intro
        
        document.querySelector('#game').classList.remove('visible');
        document.querySelector('#game').classList.add('hidden'); // Κρύβουμε το game
        
        document.querySelector('#links').classList.remove('visible');
        document.querySelector('#links').classList.add('hidden'); // Κρύβουμε το links
        
        document.querySelector('#introduction').classList.remove('visible');
        document.querySelector('#introduction').classList.add('hidden'); // Κρύβουμε το introduction
        
        document.querySelector('#data-types-operators').classList.remove('visible');
        document.querySelector('#data-types-operators').classList.add('hidden'); // Κρύβουμε το data-types-operators
        
        document.querySelector("#arithmetic-logical-operations").classList.remove('visible');
        document.querySelector("#arithmetic-logical-operations").classList.add('hidden'); // Κρύβουμε το arithmetic-logical-operations
        
        document.querySelector('#variables').classList.remove('visible');
        document.querySelector('#variables').classList.add('hidden'); // Κρύβουμε το variables
        
        document.querySelector('#comments').classList.remove('visible');
        document.querySelector('#comments').classList.add('hidden'); // Κρύβουμε το comments
        
        document.querySelector('#built-in-functions').classList.remove('visible');
        document.querySelector('#built-in-functions').classList.add('hidden'); // Κρύβουμε το built-in-functions
        
        document.querySelector('#basic-commands').classList.remove('visible');
        document.querySelector('#basic-commands').classList.add('hidden'); // Κρύβουμε το basic-commands
        
        document.querySelector('#libraries').classList.remove('visible');
        document.querySelector('#libraries').classList.add('hidden'); // Κρύβουμε το libraries
        
        document.querySelector('#control-flow').classList.remove('visible');
        document.querySelector('#control-flow').classList.add('hidden'); // Κρύβουμε το control-flow
        
        document.querySelector('#functions').classList.remove('visible');
        document.querySelector('#functions').classList.add('hidden'); // Κάνουμε το functions ορατό 
        
        document.querySelector('#list').classList.remove('hidden');
        document.querySelector('#list').classList.add('visible'); // Κάνουμε το functions ορατό  
    });

    // Set the "Introduction" button as selected and show its content
    const buttons = document.querySelectorAll(".navigation2 button");
    buttons.forEach(btn => btn.classList.remove("selected")); // Remove 'selected' class from all buttons
    e.classList.add("selected"); // Add 'selected' class to the "Introduction" button

    document.querySelector('#introduction').classList.remove('hidden');
    document.querySelector('#introduction').classList.add('visible');
});

// Event listener for "Game" button
let c = document.querySelector("#game-button");
c.addEventListener('click', () => {
    document.querySelector('#intro').classList.remove('visible');
    document.querySelector('#intro').classList.add('hidden'); // Κρύβουμε το intro
    
    document.querySelector('#game').classList.remove('hidden');
    document.querySelector('#game').classList.add('visible'); // Κάνουμε το game ορατό
    
    document.querySelector('#links').classList.remove('visible');
    document.querySelector('#links').classList.add('hidden'); // Κρύβουμε το links
    
    document.querySelector('#introduction').classList.remove('visible');
    document.querySelector('#introduction').classList.add('hidden'); // Κρύβουμε το introduction
    
    document.querySelector('#data-types-operators').classList.remove('visible');
    document.querySelector('#data-types-operators').classList.add('hidden'); // Κρύβουμε το data-types-operators
    
    document.querySelector("#arithmetic-logical-operations").classList.remove('visible');
    document.querySelector("#arithmetic-logical-operations").classList.add('hidden'); // Κρύβουμε το arithmetic-logical-operations
    
    document.querySelector('#variables').classList.remove('visible');
    document.querySelector('#variables').classList.add('hidden'); // Κρύβουμε το variables
    
    document.querySelector('#comments').classList.remove('visible');
    document.querySelector('#comments').classList.add('hidden'); // Κρύβουμε το comments
    
    document.querySelector('#built-in-functions').classList.remove('visible');
    document.querySelector('#built-in-functions').classList.add('hidden'); // Κρύβουμε το built-in-functions
    
    document.querySelector('#basic-commands').classList.remove('visible');
    document.querySelector('#basic-commands').classList.add('hidden'); // Κρύβουμε το basic-commands
    
    document.querySelector('#libraries').classList.remove('visible');
    document.querySelector('#libraries').classList.add('hidden'); // Κρύβουμε το libraries
    
    document.querySelector('#control-flow').classList.remove('visible');
    document.querySelector('#control-flow').classList.add('hidden'); // Κρύβουμε το control-flow
    
    document.querySelector('#functions').classList.remove('visible');
    document.querySelector('#functions').classList.add('hidden'); // Κρύβουμε το functions
    
    document.querySelector('.navigation2').classList.remove('visible');
    document.querySelector('.navigation2').classList.add('hidden'); // Κρύβουμε το navigation2   
    
    document.querySelector('#list').classList.remove('visible');
    document.querySelector('#list').classList.add('hidden'); // Κάνουμε το functions ορατό 
});

// Event listener for "Links" button
let d = document.querySelector("#links-button");
d.addEventListener('click', () => {
    document.querySelector('#links').classList.remove('hidden');
    document.querySelector('#links').classList.add('visible'); // Κάνουμε το links ορατό
    
    document.querySelector('#intro').classList.remove('visible');
    document.querySelector('#intro').classList.add('hidden'); // Κρύβουμε το intro
    
    document.querySelector('#game').classList.remove('visible');
    document.querySelector('#game').classList.add('hidden'); // Κρύβουμε το game
    
    document.querySelector('#introduction').classList.remove('visible');
    document.querySelector('#introduction').classList.add('hidden'); // Κρύβουμε το introduction
    
    document.querySelector('#data-types-operators').classList.remove('visible');
    document.querySelector('#data-types-operators').classList.add('hidden'); // Κρύβουμε το data-types-operators
    
    document.querySelector("#arithmetic-logical-operations").classList.remove('visible');
    document.querySelector("#arithmetic-logical-operations").classList.add('hidden'); // Κρύβουμε το arithmetic-logical-operations
    
    document.querySelector('#variables').classList.remove('visible');
    document.querySelector('#variables').classList.add('hidden'); // Κρύβουμε το variables
    
    document.querySelector('#comments').classList.remove('visible');
    document.querySelector('#comments').classList.add('hidden'); // Κρύβουμε το comments
    
    document.querySelector('#built-in-functions').classList.remove('visible');
    document.querySelector('#built-in-functions').classList.add('hidden'); // Κρύβουμε το built-in-functions
    
    document.querySelector('#basic-commands').classList.remove('visible');
    document.querySelector('#basic-commands').classList.add('hidden'); // Κρύβουμε το basic-commands
    
    document.querySelector('#libraries').classList.remove('visible');
    document.querySelector('#libraries').classList.add('hidden'); // Κρύβουμε το libraries
    
    document.querySelector('#control-flow').classList.remove('visible');
    document.querySelector('#control-flow').classList.add('hidden'); // Κρύβουμε το control-flow
    
    document.querySelector('#functions').classList.remove('visible');
    document.querySelector('#functions').classList.add('hidden'); // Κρύβουμε το functions
    
    document.querySelector('.navigation2').classList.remove('visible');
    document.querySelector('.navigation2').classList.add('hidden'); // Κρύβουμε το navigation2  
    
    document.querySelector('#list').classList.remove('visible');
    document.querySelector('#list').classList.add('hidden'); // Κάνουμε το functions ορατό 
});