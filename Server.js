// Ioannis Kalaitzidis, 2120067, Thesis

// Listener για την επικοινωνία μεταξύ Unity και JavaScript μέσω μηνυμάτων--------------------------------------------------------------------------

let unityScore = null; // Αρχική τιμή του score

// Listener για μηνύματα από το Unity
window.addEventListener('message', function(event) {
    if (event.data.type === 'sendScore') {
        unityScore = event.data.score; // Αποθήκευση του score
        console.log("Score received from Unity:", unityScore);

        // Υποβολή score μόνο αν είναι γνωστό το email
        const email = document.getElementById('login-email').value;
        if (email) {
            submitScoreAutomatically(unityScore, email);
        } else {
            console.warn("Το email του χρήστη δεν είναι διαθέσιμο.");
        }
    }
}, false);

// Υποβολή score του χρήστη στη βάση δεδομένων------------------------------------------------------------------------------------------------------
  
function submitScoreAutomatically(score, email) {
    // Αποθήκευση του score στη βάση δεδομένων κάτω από τον χρήστη
    firebase.database().ref('users').orderByChild('email').equalTo(email).once('value', snapshot => {
        if (snapshot.exists()) {
            snapshot.forEach(childSnapshot => {
                const userId = childSnapshot.key;

                // Προσθήκη του score στον πίνακα score του χρήστη
                firebase.database().ref(`users/${userId}/scores`).push({ score }).then(() => {
                    alert("Το score υποβλήθηκε επιτυχώς!");

                    // Ενημέρωση του πίνακα βαθμολογίας
                    const scoreBody = document.getElementById('score-body');
                    const row = document.createElement('tr');
                    const cell = document.createElement('td');
                    cell.textContent = score;
                    row.appendChild(cell);
                    scoreBody.insertBefore(row, scoreBody.firstChild);
                }).catch(error => {
                    console.error("Αποτυχία υποβολής score:", error);
                    alert("Αποτυχία υποβολής: " + error.message);
                });
            });
        } else {
            alert("Ο χρήστης δεν βρέθηκε.");
        }
    });
}

window.addEventListener('load', () => {

    // Στοιχεία server στην Firebase
    const firebaseConfig = {
        apiKey: "AIzaSyAm8drsIneT_w8cdD-NdCRsl4AyFMkww4g",
        authDomain: "pythonistas-62563.firebaseapp.com",
        databaseURL: "https://pythonistas-62563-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "pythonistas-62563",
        storageBucket: "pythonistas-62563.appspot.com",
        messagingSenderId: "119761311080",
        appId: "1:119761311080:web:012d48383c0e99ad65f2dd",
        measurementId: "G-16715M4QVS"
    };

    // Εκτέλεση Firebase
    firebase.initializeApp(firebaseConfig);

// Έλεγχος ορισμάτων (Όνομα, Επίθετο, Email)--------------------------------------------------------------------------------------------------------

    // Έλεγχος Ονόματος
    function validateFirstName(firstName) {
        const namePattern = /^[a-zA-Z-]+$/;
        if (!namePattern.test(firstName)) {
            return ['Το όνομα πρέπει να περιέχει μόνο λατινικούς χαρακτήρες και παύλα (-).'];
        }
        return [];
    }

    // Έλεγχος Επίθετου
    function validateLastName(lastName) {
        const namePattern = /^[a-zA-Z-]+$/;
        if (!namePattern.test(lastName)) {
            return ['Το επώνυμο πρέπει να περιέχει μόνο λατινικούς χαρακτήρες και παύλα (-).'];
        }
        return [];
    }

    // Έλεγχος Email
    function validateEmail(email) {
        let errorMessages = [];
        if (!email.includes('@')) {
            errorMessages.push('Ένα έγκυρο email περιέχει το σύμβολο @.');
        } else {
            const domainPattern = /@(gmail|outlook|hotmail|live|msn|yahoo|ymail|icloud|aol|protonmail|zoho|mail|gmx)\./;
            if (!domainPattern.test(email)) {
                errorMessages.push('Ο πάροχος email δεν υποστηρίζεται. Παρακαλώ χρησιμοποιήστε έναν έγκυρο πάροχο.');
            }
            const tldPattern = /\.(com|gr)$/;
            if (!tldPattern.test(email)) {
                errorMessages.push('Η κατάληξη email πρέπει να είναι .com ή .gr.');
            }
        }
        return errorMessages;
    }
    
// Reset ορισμάτων----------------------------------------------------------------------------------------------------------------------------------

    //  Κάνει reset τα ορίσματα του χρήστη, στην περίπτωση που ο χρήστης επιλέξει κάποιο κουμπί
    function resetForm() {
        document.getElementById('firstName').value = '';
        document.getElementById('lastName').value = '';
        document.getElementById('email').value = '';
        document.getElementById('login-email').value = '';
    }

    // Καλείται η συνάρτηση για το reset των ορισμάτων όταν ο χρήστης επιλέγει το κουμπί 'Δημιουργία Λογαριασμού'/'Είσοδος'/'Αποσύνδεση'
    document.getElementById('create-account-button').addEventListener('click', resetForm);
    document.getElementById('login-button').addEventListener('click', resetForm);
    document.getElementById('logout-button').addEventListener('click', resetForm);

// Έλεγχος ύπαρξης χρήστη στον server μέσω Email----------------------------------------------------------------------------------------------------

    function checkIfUserExists(email, callback) {
        firebase.database().ref('users').once('value', snapshot => {
            let exists = false;
            snapshot.forEach(childSnapshot => {
                const userData = childSnapshot.val();
                console.log("Ανακτήθηκε χρήστης από τη Firebase:", userData);
                if (userData.email === email.trim()) {
                    exists = true;
                }
            });
            callback(exists);
        });
    }

// Εμφανίζει τα scores του χρήστη από τη βάση δεδομένων---------------------------------------------------------------------------------------------

    function displayScores(userId) {
        const scoreBody = document.getElementById('score-body');
        scoreBody.innerHTML = ''; // Καθαρισμός του πίνακα πριν την εμφάνιση των scores

        firebase.database().ref(`users/${userId}/scores`).once('value', snapshot => {
            const scores = [];
            snapshot.forEach(childSnapshot => {
                const scoreData = childSnapshot.val();
                scores.push(scoreData.score);
            });

            // Ταξινόμηση των scores αν χρειάζεται (π.χ. από το πιο πρόσφατο)
            scores.reverse(); // Ανάποδη σειρά (πιο πρόσφατο πρώτο)

            // Εμφάνιση scores στον πίνακα
            scores.forEach(score => {
                const row = document.createElement('tr');
                const cell = document.createElement('td');
                cell.textContent = `${score}`;
                row.appendChild(cell);
                scoreBody.appendChild(row);
            });
        });
    }

//  Όταν ο χρήστης επιλέγει το κουμπί 'Δημιουργία Λογαριασμού'--------------------------------------------------------------------------------------

    document.getElementById('new-acc-button').addEventListener('click', function(event) {
        event.preventDefault(); // Αποτρέπει την προεπιλεγμένη συμπεριφορά της φόρμας
    
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;

        console.log("Προσπάθεια δημιουργίας λογαριασμού με στοιχεία:", { firstName, lastName, email });
    
        // Έλεγχος αν όλα τα πεδία είναι συμπληρωμένα
        if (!firstName || !lastName || !email) {
            alert("Εισάγετε όλα τα στοιχεία για να δημιουργηθεί ο λογαριασμός.");
            return; // Σταματά την εκτέλεση αν λείπουν στοιχεία
        }
    
        checkIfUserExists(email, exists => {
            if (exists) {
                alert("Λογαριασμός με αυτό το email υπάρχει ήδη!");
            } else {
                let errors = [...validateFirstName(firstName), ...validateLastName(lastName), ...validateEmail(email)];
    
                if (errors.length === 0) {
                    firebase.database().ref('users').push({ firstName, lastName, email }).then(() => {
                        alert("Ο λογαριασμός δημιουργήθηκε επιτυχώς!");
                    }).catch(error => {
                        console.error("Failed to submit data:", error);
                        alert("Αποτυχία καταχώρησης: " + error.message);
                    });
                } else {
                    alert("Παρακαλώ διορθώστε τα σφάλματα:\n" + errors.join("\n"));
                }
            }
        });
    });

//  Όταν ο χρήστης επιλέγει το κουμπί 'Είσοδος'-----------------------------------------------------------------------------------------------------

    document.getElementById('submit-login-button').addEventListener('click', function(event) {
        event.preventDefault();

        const email = document.getElementById('login-email').value;
        const firstName = document.getElementById('firstName').value; // Παίρνει την τιμή του firstName input
        const lastName = document.getElementById('lastName').value;   // Παίρνει την τιμή του lastName input

        // Έλεγχος και διαδικασία σύνδεσης (ίδιος με πριν)
        checkIfUserExists(email, exists => {
            if (exists) {

                // Απόκρυψη των στοιχείων σύνδεσης
                document.getElementById('button-container').style.display = 'none';
                document.getElementById('submit-login-button').style.display = 'none';
                document.getElementById('login-email').style.display = 'none';
                document.getElementById('explain').style.display = 'none';

                // Ανάκτηση του ονόματος και επωνύμου του χρήστη από τη βάση δεδομένων
                firebase.database().ref('users').orderByChild('email').equalTo(email).once('value', snapshot => {
                    if (snapshot.exists()) {
                        snapshot.forEach(childSnapshot => {
                            const userData = childSnapshot.val();
                            const firstName = userData.firstName;
                            const lastName = userData.lastName;
                            const userId = childSnapshot.key;
                
                            // Δημιουργία και εμφάνιση του μηνύματος καλωσορίσματος
                            const welcomeMessage = `Καλώς ήρθες, <b>${firstName} ${lastName}</b>! Καλή διασκέδαση!`;
                            document.getElementById('welcome-message').innerHTML = welcomeMessage;
                            
                            // Εμφάνιση του μηνύματος καλωσορίσματος και του παιχνιδιού
                            document.getElementById('quiz_iframe').style.display = 'block';
                            document.getElementById('logout-button').style.display = 'block';
                            document.getElementById('score-section').style.display = 'block';
                            document.getElementById('welcome-message').style.display = 'block';

                            // Υποβολή σκορ αν είναι διαθέσιμο
                            if (unityScore !== null) {
                                const email = document.getElementById('login-email').value;
                                submitScoreAutomatically(unityScore, email);
                            } else {
                                console.warn("Το σκορ από το Unity δεν είναι ακόμα διαθέσιμο.");
                            }
                            
                            // Εμφάνιση των scores του χρήστη στον πίνακα
                            displayScores(userId);
                        });
                    } 
                });
            } else {
                alert("Δεν υπάρχει λογαριασμός με αυτό το email.");
            }
        });
    });

//  Όταν ο χρήστης επιλέγει το κουμπί 'Αποσύνδεση'--------------------------------------------------------------------------------------------------

    document.getElementById('logout-button').addEventListener('click', function() {

        // Επαναφορά των scores στον πίνακα
        const scoreBody = document.getElementById('score-body');
        scoreBody.innerHTML = ''; // Καθαρισμός του πίνακα σκορ
        unityScore = null; // Επαναφορά του σκορ

        // Επαναφορά των κουμπιών και απόκρυψη του παιχνιδιού
        document.getElementById('button-container').style.display = 'flex';
        document.getElementById('quiz_iframe').style.display = 'none';
        document.getElementById('logout-button').style.display = 'none';
        document.getElementById('welcome-message').style.display = 'none';
        document.getElementById('score-section').style.display = 'none';
        // document.getElementById('InsertScore').style.display = 'none';

        // Επαναφορά των στοιχείων του κουμπιού "Είσοδος"
        document.getElementById('submit-login-button').style.display = 'block';
        document.getElementById('login-email').style.display = 'block';
        document.getElementById('explain').style.display = 'block';
    });

});