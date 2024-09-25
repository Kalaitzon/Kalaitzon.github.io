# Ioannis Kalaitzidis, 2120067, Thesis
# Codes I used in my website for examples

# --Variables--

ilikia = 18
ilikia = 20

print(ilikia)

# --List--

# Λίστα με αριθμούς
arithmoi = [1, 2, 3, 4, 5]
# Λίστα με λέξεις
onomata = ["Ioannis", "Maria", "Kostas"]
# Λίστα με διαφορετικούς τύπους δεδομένων
mix = [12, "Markos", 3.14, onomata]

# Εκτυπώνουμε τα περιεχόμενα των λιστών
print(arithmoi)
print(onomata)
print(mix)

#-------------------------------------------------------------  

# Λίστα με αριθμούς
arithmoi = [1, 2, 3, 4, 5]
arithmoi.append(6)  # Προσθέτει το 6 στο τέλος της λίστας
print(arithmoi)

#-------------------------------------------------------------  

# Λίστα με λέξεις
onomata = ["Ioannis", "Maria", "Kostas"]
onomata.remove("Maria")  # Αφαιρεί το στοιχείο "Maria"
print(onomata) 

#-------------------------------------------------------------  

# Λίστα με αριθμούς
arithmoi = [1, 2, 3, 4, 5]
arithmoi[2] = 10 # Αλλάζει το 3ο στοιχείο (index 2) σε 10
print(arithmoi)

#-------------------------------------------------------------  

# Λίστα με λέξεις
onomata = ["Ioannis", "Maria", "Kostas"]
print(onomata[1])  # Επιστρέφει το 2ο στοιχείο (index 1): "Maria"

#-------------------------------------------------------------  

# Λίστα με αριθμούς
arithmoi = [1, 2, 3, 4, 5]
arithmoi.pop(3)  # Αφαιρεί το στοιχείο στην 4η θέση (index 3)
print(arithmoi)

# --Built-in-functions--

print(float(5))        
print(int(5.99))       
print(str(123))        
print(abs(-10))        
print(pow(2, 3))     
print(divmod(10, 3))
print(len("Hello")) 
print(len([1, 2, 3, 4, 5, 6]))
print(max(4, 7, 2)) 
print(min(4, 7, 2))
print(sum([5, 3, 2])) 

# --basic-commands--

print(42)
print(3.14)
print(3, 5-2, 2**2)
name = "Alice"
print(name)

#-------------------------------------------------------------  

# Λήψη εισόδων από τον χρήστη
ilikia = input("Poso xronwn eisai? ")
onoma = input("Pws se lene? ")
vathmos = int(input("Poios einai o vathmos sou? "))
ypsos = float(input("Poio einai to ypsos sou se metra? "))

# Εκτύπωση των αποτελεσμάτων
print("Ilikia: " + ilikia)
print("Onoma: " + onoma)
print("Vathmos: " + str(vathmos))  # Μετατροπή του αριθμού σε συμβολοσειρά
print("Ypsos: " + str(ypsos))      # Μετατροπή του αριθμού σε συμβολοσειρά

# --comments--

print('Hello World!') #Εκτυπώνει το μήνυμα Hello World!

#-------------------------------------------------------------  

print('Hello World!')  

"""
Εκτυπώνει 
το 
μήνυμα 
Hello 
World!
"""

# --libraries--

import math
apotelesma = math.sqrt(25)
print(apotelesma)

#-------------------------------------------------------------  

import math
apotelesma = int(math.sqrt(25))
print(apotelesma)

#------------------------------------------------------------- 

import math
print(math.sin(math.pi/2))  

#-------------------------------------------------------------  

import random
arithmos = random.randint(1,10) # Μπορεί να τυπώσει οποιονδήποτε αριθμό από το 1 έως το 10
print(arithmos) 

#-------------------------------------------------------------  

import random
arithmos = random.randrange(1,10) # Μπορεί να τυπώσει οποιονδήποτε αριθμό από το 1 έως το 9
print(arithmos) 

#-------------------------------------------------------------  

import random
arithmos = random.randrange(10) # Μπορεί να τυπώσει οποιονδήποτε αριθμό από το 0 έως το 9
print(arithmos) 

#-------------------------------------------------------------  

import random
zari = [1, 2, 3, 4, 5, 6]
apotelesma = random.choice(zari)
print(apotelesma)

# --control-flow--

#Βήμα 1: Παίρνουμε τον πρώτο αριθμό
a = 5
#Βήμα 2: Παίρνουμε τον δεύτερο αριθμό
b = 10
#Βήμα 3: Προσθέτουμε τους δύο αριθμούς
result = a + b
#Βήμα 4: Τυπώνουμε το αποτέλεσμα
print(result)

#-------------------------------------------------------------  

arithmos = 10
if (arithmos >= 5):
    print("Ο αριθμός είναι μεγαλύτερος από 5 ή ίσος με 5")

#-------------------------------------------------------------  

arithmos = 10
if (arithmos >= 5):
    print("Ο αριθμός είναι μεγαλύτερος από 5 ή ίσος με 5")
else:
    print("Ο αριθμός είναι μικρότερος από 5")
 
#-------------------------------------------------------------  

arithmos = 0
if arithmos > 0:
    print("Ο αριθμός είναι θετικός")
elif arithmos < 0:
    print("Ο αριθμός είναι αρνητικός")
else:
    print("Ο αριθμός είναι μηδέν")

#-------------------------------------------------------------  

arithmos = 10
if arithmos >= 5:
    if arithmos == 5:
        print("Ο αριθμός είναι ίσος με 5")
    else: 
        print("Ο αριθμός είναι μεγαλύτερος από 5")
else:
    print("Ο αριθμός είναι μικρότερος από 5")
    
#-------------------------------------------------------------  

for i in range(5):
    print('Hello World!')

#-------------------------------------------------------------  

print(list(range(10)))
print(list(range(1, 8)))
print(list(range(8, -1, -1)))

#-------------------------------------------------------------  

pontoi = 0
while pontoi < 100:
    pontoi = pontoi + 1
print(pontoi)

# --functions--

def hello():
    print('Hello World!')

#-------------------------------------------------------------  

def hello():
    print('Hello World!')
    
hello()

#-------------------------------------------------------------  

def hello():
    print('Hello World!')

def epanalave_hello():
    hello()
    hello()
 
epanalave_hello()

#-------------------------------------------------------------  

def ginomeno(a, b):
    x = a * b
    return x

#-------------------------------------------------------------  

def ginomeno(a, b):
    x = a * b
    return x

print(ginomeno(5, 10))

# --examples--

# -1-
# Λίστα με αγαπημένα φαγητά
fagita = ["Pizza", "Pasta", "Burger", "Sushi"]

# Προσθήκη ενός νέου φαγητού
fagita.append("Salata")
print(fagita)  

# Αφαίρεση του πρώτου στοιχείου
fagita.pop(0)
print(fagita)  

# Αντικατάσταση του τελευταίου στοιχείου
fagita[-1] = "Gyros"
print(fagita)  

#------------------------------------------------------------- 

# -2-
# Βαθμός
vathmos = int(input("Ποιος είναι ο βαθμός σου; "))

# Έλεγχος βαθμού
if vathmos > 18:
    print("Άριστα")
elif 15 <= vathmos <= 17:
    print("Πολύ καλά")
else:
    print("Χρειάζεται βελτίωση")

#-------------------------------------------------------------  

# -3-
# Συνάρτηση για πολλαπλασιασμό
def pollaplasiasmos(a, b):
    return a * b

# Λίστα με ζεύγη αριθμών
zevgi = [(2, 3), (5, 10), (8, 7)]

# Υπολογισμός και εκτύπωση γινομένου για κάθε ζεύγος
for z in zevgi:
    apotelesma = pollaplasiasmos(z[0], z[1])
    print(f"Το γινόμενο των {z[0]} και {z[1]} είναι: {apotelesma}")

#-------------------------------------------------------------  

# -4-
import random

# Λίστα για να αποθηκεύσουμε τα αποτελέσματα των ρίψεων
apotelesmata = []

# Ρίψη ζαριού 10 φορές
for i in range(10):
    zari = random.randint(1, 6)  # Παράγει τυχαίο αριθμό από 1 έως 6
    apotelesmata.append(zari)
    print(f"Ρίψη {i+1}: {zari}")

# Εύρεση του μεγαλύτερου αποτελέσματος
megalytero_apotelesma = max(apotelesmata)
print(f"Το μεγαλύτερο αποτέλεσμα από τις ρίψεις είναι: {megalytero_apotelesma}")

#-------------------------------------------------------------  

# -5-
# Λίστα με ονόματα
onomata = ["Ioannis", "Maria", "Kostas", "Eleni"]

# Ζήτηση ονόματος από τον χρήστη
onoma_xristi = input("Ποιο είναι το όνομά σου; ")

# Έλεγχος αν το όνομα του χρήστη είναι στη λίστα
if onoma_xristi in onomata:
    # Κρατάμε μόνο το όνομα του χρήστη
    onomata = [onoma_xristi]
    print("Το όνομα υπήρχε στη λίστα.")
else:
    # Αν το όνομα δεν υπάρχει, προσθέτουμε το όνομα του χρήστη και αφαιρούμε τα υπόλοιπα
    onomata = [onoma_xristi]
    print("Το όνομα δεν υπήρχε στη λίστα.")

# Εκτύπωση της νέας λίστας
print("Η νέα λίστα είναι:", onomata)
