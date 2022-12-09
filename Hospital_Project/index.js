
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
        if (this.patientList.length >= 3) {
            console.log(`Dr. ${this.firstName} ${this.secondName} are bisy with his patient, please wait until he free`);
        } else {
            this.patientList.push(patient)
            console.log(`Dr. ${this.firstName} ${this.secondName} ADD PATIENT ${patient.firstName} IN HIS/HER DOCTOR LIST`);
        }
    }
    getPatientList() {
        console.log(this.patientList);
    }

    removingThePatientFromDoctorsListAfterHospitalation() {
        let patientFromPationList;
        let deletedPation;
        for (let i = 0; i < this.patientList.length; i++) {
            patientFromPationList = this.patientList[i]
            if (patientFromPationList.isHospitalized == true || patientFromPationList.isCured == true) {
                deletedPation = indexOf(patientFromPationList)
                console.log(deletedPation);
                this.patientList.splice(deletedPation, 1)
                this.getPatientList()

            }
        }
    }
}


class Nurse {
    constructor(firstName, secondName, yearsOfЕxperience, phoneNumber) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.yearsOfЕxperience = yearsOfЕxperience;
        this.phoneNumber = phoneNumber;
    }
}
class Beds {
    constructor(bedName) {
        this.bedName = bedName
        this.isOccupied = false
        this.patientOnCurrentBed = []

    }
    addPatientToTheBed(patient) {
        this.patientOnCurrentBed.push(patient)
        console.log(`This ${patient.firstName} is in ${this.bedName} and this ${this.bedName} is OCCUPIED!`);


    }

}
let bed1 = new Beds('first bed')
let bed2 = new Beds('second bed')
let bed3 = new Beds('third bed')
const beds = []
beds.push(bed1, bed2, bed3)
class Room {
    constructor(roomNumber) {
        this.roomNumber = roomNumber
        this.room = []
        this.isTheRoomOccupied = false

    }
    addBedToTheRoom(...bed) {
        this.room.push(bed)

    }
    showAllRoomsWithAllBeds() {
        let allrooms;
        for (let i = 0; i < this.room.length; i++) {
            allrooms = this.room[i]
            console.log(this.roomNumber);
            console.log(allrooms);

        }

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
        let room;
        for (let i = 0; i < this.rooms.length; i++) {
            room = this.rooms[i]
            if (room.isTheRoomOccupied === false) {
                return room
            } else {
                console.log(`This room is already occupied`);

            }

        }


    }
    closeTheRoomIfIAllBedsAreOccupied() {
        let bedsInRoom
        for (let i = 0; i < this.rooms.length; i++) {
            bedsInRoom = this.rooms[i]
            console.log(`log from close room func`);
            console.log(bedsInRoom);
            bedsInRoom.showAllRoomsWithAllBeds()
            if (bedsInRoom.length === 3) {
                bedsInRoom.isTheRoomOccupied = true
            }


        }
    }


    hospitalisationOfAPatientInAHospital(patientsFromDoctorList) {
        let room = this.findFreeRooom()
        room.showAllRoomsWithAllBeds()
        let currentPatient;
        let bedsInRoom;
        let thisBed;

        for (let a = 0; a < patientsFromDoctorList.length; a++) {
            currentPatient = patientsFromDoctorList[a]

            currentPatient.isHospitalized = true
            console.log(currentPatient);

            for (let i = 0; i < room.room.length; i++) {
                bedsInRoom = room.room[i];

                let isPatientHospitalized = false

                for (let j = 0; j < bedsInRoom.length; j++) {
                    thisBed = bedsInRoom[j]


                    if (thisBed.isOccupied === false) {
                        thisBed.isOccupied = true
                        console.log(`Patient ${currentPatient.firstName} / age: ${currentPatient.age} in bed : ${thisBed.bedName} and room number: ${room.roomNumber} room status : ${thisBed.isTheRoomOccupied}`);
                        thisBed.addPatientToTheBed(currentPatient)
                        isPatientHospitalized = true
                        this.closeTheRoomIfIAllBedsAreOccupied()
                        break;

                    }

                }

                if (isPatientHospitalized) {

                    break;
                }

            }
            console.log(`CURRENT AVAILABLE BED IN ${thisBed.bedName}  :`);

        }

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
        this.isHospitalized = false
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
        let correctDepartment;
        let doctor = this.callADoctorToexamineApatient()


        for (let i = 0; i < this.departments.length; i++) {
            correctDepartment = this.departments[i]

            if (correctDepartment.departmentName === department) {
                correctDepartment.findFreeRooom()
                correctDepartment.hospitalisationOfAPatientInAHospital(doctor.patientList)

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
let patient4 = new Patient('Ivanka', 'Yordanova', '18', '908979878', 'female')
let patient5 = new Patient('Ivan', 'Yordanov', '28', '908979878', 'male')
let patient6 = new Patient('Martin', 'Marinov', '48', '908979878', 'male')
let patient7 = new Patient('Ivanka', 'Yordanova', '38', '908979878', 'female')
let patient8 = new Patient('Ivanka', 'Yordanova', '18', '908979878', 'female')
let patient9 = new Patient('Ivanka', 'Yordanova', '28', '908979878', 'female')
let patient10 = new Patient('Asen', 'Asenov', '18', '908979878', 'male')


let room1 = new Room(1)
room1.addBedToTheRoom(...beds)
let room2 = new Room(2)
// room2.addBedToTheRoom(...beds)
// let room3 = new Room(3)
// room3.addBedToTheRoom(...beds)
// let room4 = new Room(4)
// room4.addBedToTheRoom(...beds)
// let room5 = new Room(5)
// room5.addBedToTheRoom(...beds)
// let room6 = new Room(6)
// room6.addBedToTheRoom(...beds)
// let room7 = new Room(7)
// room7.addBedToTheRoom(...beds)
// let room8 = new Room(8)
// room8.addBedToTheRoom(...beds)
// let room9 = new Room(9)
// room9.addBedToTheRoom(...beds)
// let room10 = new Room(10)
// room10.addBedToTheRoom(...beds)


const rooms = []
rooms.push(room1, room2)



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
hospital.determinationOfTreatment(patient2)
hospital.determinationOfTreatment(patient3)
hospital.determinationOfTreatment(patient4)
hospital.determinationOfTreatment(patient5)
hospital.determinationOfTreatment(patient6)
hospital.determinationOfTreatment(patient7)
hospital.determinationOfTreatment(patient8)
hospital.determinationOfTreatment(patient9)
hospital.determinationOfTreatment(patient10)





