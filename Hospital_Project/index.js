
class Doctor {
    constructor(firstName, secondName, phoneNumber, residency) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.phoneNumber = phoneNumber;
        this.residency = residency;
        this.isWithPatientNow = false
        this.patientList = []
    }
    isWithPatient() {
        this.isWithPatientNow = true
    }
    isFree() {
        this.isWithPatientNow = false
    }
    appointmentOfAnAttendingPhysicianOnAListOfPatients(patient) {
        this.patientList.push(patient)
        console.log(`add patient in patient list `);
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
class Room {
    constructor() {

        this.roomBedMap = new Map()
    }
    addBedToTheRoom(roomNmber, availableHospitalBeds) {
        this.roomBedMap.set(roomNmber, availableHospitalBeds)

    }
    showAllRoomsWithAllBeds() {
        this.roomBedMap.entries()
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
    findFreeRooom() {
        console.log(`log from department class`);
        let room;

        for (let i = 0; i < this.rooms.length; i++) {
            room = this.rooms[i].roomBedMap
        }
        return room

    }
    hospitalisationOfAPatientInAHospital(roomNumber, patient) {
        let room = this.findFreeRooom()
        console.log(`update availablehospitalbeds from room class`);

        console.log(room.set(roomNumber, patient));
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
        this.clinicalPathway = new Map()
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
        doctor.appointmentOfAnAttendingPhysicianOnAListOfPatients(patient)
        return diagnosis
    }
    SearchFreeRooomAndBedInTheThreatDepartment(department) {
        let malesInRoom = true
        let correctDepartment;

        let allBedsInAllRoomsInDepartment;
        for (let i = 0; i < this.departments.length; i++) {
            correctDepartment = this.departments[i]

            if (correctDepartment.departmentName === department) {
                allBedsInAllRoomsInDepartment = this.departments[i]
                console.log(`log from hospital func`);
                allBedsInAllRoomsInDepartment.findFreeRooom()
                allBedsInAllRoomsInDepartment.hospitalisationOfAPatientInAHospital(1, [patient2, patient3, patient1])






            }

        }

    }

    determinationOfTreatment(patient) {
        let diagnosis = this.examineThePatient(patient)

        switch (diagnosis) {
            case 'Covid 19':
                this.SearchFreeRooomAndBedInTheThreatDepartment('Virology');
                break;
            case 'Trauma':
                this.SearchFreeRooomAndBedInTheThreatDepartment('Orthopedics');
                break;
            case 'High blood pressure':
                this.SearchFreeRooomAndBedInTheThreatDepartment('Cardiology');
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


let room1 = new Room()
room1.addBedToTheRoom(1, 3)
let room2 = new Room()
room2.addBedToTheRoom(2, 3)
let room3 = new Room()
room3.addBedToTheRoom(3, 3)
let room4 = new Room()
room4.addBedToTheRoom(4, 3)
let room5 = new Room()
room5.addBedToTheRoom(5, 3)
let room6 = new Room()
room6.addBedToTheRoom(6, 3)
let room7 = new Room()
room7.addBedToTheRoom(7, 3)
let room8 = new Room()
room8.addBedToTheRoom(8, 3)
let room9 = new Room()
room9.addBedToTheRoom(9, 3)
let room10 = new Room()
room10.addBedToTheRoom(10, 3)

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




