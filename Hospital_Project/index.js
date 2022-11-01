
class Doctor {
    constructor(firstName, secondName, phoneNumber, residency) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.phoneNumber = phoneNumber;
        this.residency = residency;
        this.isWithPatientNow = false
    }
    isWithPatient() {
        this.isWithPatientNow = true
    }
    isFree() {
        this.isWithPatientNow = false
    }

}


class Nurse {
    constructor(firstName, secondName, yearsОfЕxperience, phoneNumber) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.yearsОfЕxperience = yearsОfЕxperience;
        this.phoneNumber = phoneNumber
    }
}
class HospitalBed {
    constructor(bed) {
        this.bed = bed
        this.isBedFreeNow = true
    }
    BedFree() {
        this.isBedFreeNow = true
    }
    bedIsOccupied() {
        this.isBedFreeNow = false
    }
}
class Room {
    constructor(roomNmber) {
        this.roomNmber = roomNmber;
        this.availableHospitalBeds = []
    }
    addBedToTheRoom(...bed) {
        this.availableHospitalBeds.push(bed)
    }
}
class Department {
    constructor(departmentName) {
        this.departmentName = departmentName;
        this.rooms = []

    }
    addRoomsToDepartment(room) {
        this.rooms.push(...room)

    }

}

class Patient {
    constructor(firstName, secondName, age, phoneNumber, sex) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.age = age;
        this.phoneNumber = phoneNumber
        this.sex = sex
        this.isCured = false
    };
    isCured() {
        this.isCured = true
    }
}

class Hospital {
    constructor(hospitalName) {
        this.hospitalName = hospitalName
        this.doctorsInTheHospital = []
        this.departments = []
    }
    availableHospitalDepartment(department) {
        this.departments.push(department)
    }
    appointedDoctorsToTheHospital(doctor) {
        this.doctorsInTheHospital.push(doctor)
    }

    defineDiagnosis() {
        const diagnosises = ['Covid 19', 'Trauma', 'High blood pressure']
        let diagnosis = diagnosises[Math.floor(Math.random() * diagnosises.length)]

        return diagnosis
    }

    callADoctorToexamineApatient() {
        let findFreeDoc = this.doctorsInTheHospital
        let doctor = findFreeDoc[Math.floor(Math.random() * findFreeDoc.length)]
        if (doctor.isWithPatient()) {
            this.callADoctorToexamineApatient()
        } else { return doctor }
        return doctor
    }
    examineThePatient(patient) {
        let doctor = this.callADoctorToexamineApatient()
        doctor.isWithPatient()

        let diagnosis = this.defineDiagnosis();
        console.log(`Patient ${patient.firstName}, ${patient.secondName} ; Gender: ${patient.sex}. Is admitted with a diagnosis : "${diagnosis}" 
        Treating doctor: Dr ${doctor.firstName}, ${doctor.secondName}`);
        return diagnosis
    }
    findFreeBed(department) {

        let room;
        let bed;
        let freebed;
        for (let i = 0; i < this.departments.length; i++) {
            room = this.departments[i]
            if (room.departmentName === department) {
                room = this.departments[i].rooms
                console.log(room);
                for (let j = 0; j < room.length; j++) {
                    bed = room[j].availableHospitalBeds
                    for (let b = 0; b < bed.length; b++) {
                        freebed = bed[b]
                       console.log(freebed);

                    }
                };

            }

        }

    }

    determinationOfTreatment(patient) {
        let diagnosis = this.examineThePatient(patient)
        console.log(diagnosis);
        switch (diagnosis) {
            case 'Covid 19':
                this.findFreeBed('Virology');
                break;
            case 'Trauma':
                this.findFreeBed('Orthopedics');
                break;
            case 'High blood pressure':
                this.findFreeBed('Cardiology');
                break;
            default:
                console.log(`in default`);
        }





    }
}


let doc1 = new Doctor('Ivan', 'Ivanov', '0888 785 777', 'Virologist')
let doc2 = new Doctor('Dragan', 'Draganov', '0888 785 666', 'Cardiologist')
let doc3 = new Doctor('Petkan', 'Petkov', '0888 785 555', 'Orthopedist')

let nurse1 = new Nurse('Ivanka', 'Ivanova', '7', '0908866557');
let nurse2 = new Nurse('Draganka', 'Draganova', '3', '090833357');
let nurse3 = new Nurse('Petrana', 'Ivanova', '17', '0883776');

let patient1 = new Patient('Yordan', 'Yordanov', '28', '908979878', 'male')
let patient2 = new Patient('Martin', 'Petvor', '38', '908979878', 'male')
let patient3 = new Patient('Mariq', 'Yordanova', '18', '908979878', 'female')
let bed1 = new HospitalBed('first bed')
let bed2 = new HospitalBed('second bed')
let bed3 = new HospitalBed('third bed')
const bed = []
bed.push(bed1, bed2, bed3)

let room1 = new Room(1)
room1.addBedToTheRoom(bed)
let room2 = new Room(2)
room2.addBedToTheRoom(bed)
let room3 = new Room(3)
room3.addBedToTheRoom(bed)
let room4 = new Room(4)
room4.addBedToTheRoom(bed)
let room5 = new Room(5)
room5.addBedToTheRoom(bed)
let room6 = new Room(6)
room6.addBedToTheRoom(bed)
let room7 = new Room(7)
room7.addBedToTheRoom(bed)
let room8 = new Room(8)
room8.addBedToTheRoom(bed)
let room9 = new Room(9)
room9.addBedToTheRoom(bed)
let room10 = new Room(10)
room10.addBedToTheRoom(bed)
const rooms = []
rooms.push(room1, room2, room3, room4, room5, room6, room7, room8, room9, room10)

let virologyDepartment = new Department('Virology')
virologyDepartment.addRoomsToDepartment(rooms)

let cardiologyDepartment = new Department('Cardiology')
cardiologyDepartment.addRoomsToDepartment(rooms)

let orthopaedicDepartment = new Department('Orthopedics')
orthopaedicDepartment.addRoomsToDepartment(rooms)

let hospital = new Hospital('First Hospital')
hospital.availableHospitalDepartment(virologyDepartment)
hospital.availableHospitalDepartment(cardiologyDepartment)
hospital.availableHospitalDepartment(orthopaedicDepartment)
hospital.appointedDoctorsToTheHospital(doc1)
hospital.appointedDoctorsToTheHospital(doc2)
hospital.appointedDoctorsToTheHospital(doc3)
hospital.determinationOfTreatment(patient1)




