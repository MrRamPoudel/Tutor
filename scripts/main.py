#pip3 install Faker
from faker import Faker
import random;
import json
faker = Faker()
#number of fake students
totalInfo = 100

class Tutor:
    def __init__(self, firstName="", lastName="",studentId="",password="", email="", major=[], classes=[]):
        self.firstName = firstName
        self.lastName = lastName
        self.studentId = studentId
        self.password = password
        self.email = email
        self.major = major
        self.classes = classes
def eraseTitle(fullname):
    #Erase the title
    if '.' in fullname:
        fullname = fullname.split()
        fullname.pop(0)
    else:
        fullname = fullname.split()
    return fullname

def getFirstandLast(fullname):
     #extract first and last name
    first = fullname[0]
    #incase it has middle name
    if(len(fullname) == 3):
        last = fullname[2]
    else:
        last = fullname[1]
    return first,last

stem_degrees = ['Biology', 'Chemistry','Computer Science','Electrical Engineering','Mechanical Engineering', 'Physics']
classes = ["Computer Science I", "Computer Science II", "Pre-Calculus", "English Comp I", "English Comp II", "Calculus I", "Caclulus II", "Calculus III", "Chemistry", "Biology"]

x = {"initial":[],"count":[]}
tutors = []
for i in range(1,totalInfo+1):
    tut = Tutor()
    #get name, email
    num = faker.unique.numerify('######')
    fullname = eraseTitle(faker.name())
    first,last = getFirstandLast(fullname)
    initial = first[0] + last[0]
    if(initial in x):
        x[initial] += 1
    else:
        x[initial] = 1
    #add the first infos
    email = first[0] + last[0] + str(x[initial]) + "@example.com"

    #Add it to the tutor
    tut.firstName = first
    tut.lastName = last
    tut.email = email.lower()
    tut.studentId = num
    tut.password = last + str(num)
    #Generate classes and major they can tutor
    numClasses = random.randint(1,4)
    chosen = random.sample(classes, numClasses)
  
    chosenMajor = random.sample(stem_degrees, numClasses)
    tut.major = chosenMajor
    tut.classes = chosen
    #add each tutor
    tutors.append(tut)

tutors_dict = [tutor.__dict__ for tutor in tutors]

#write to json file
with open("tutor.json", 'w') as f:
    json.dump(tutors_dict, f)

