// app urls
// const FRONTEND_URL = `http://localhost:3000`;
const BACKEND_URL = `http://localhost:8080/api`;

export default {
    links: {
        APPOINTMENTS: `/appointments`,
        PATIENT_CARD: `/patientCard`,
        PROFILE: `/profile`,
        MY_PATIENTS: `/patients/my`,
        DOCTOR_CLAIMS_FROM_PATIENTS: `/patients/my/claims`,
        PATIENTS: `/patients`,
        DOCTORS: `/doctors`,
        MY_DOCTORS: `/doctors/my`,
        PATIENT_APPOINTMENTS: `/doctors/appointments`,
        STAFF: `/staff`,
        CLAIMS: `/patients/claim`,
        ARCHIVE_DOCTORS: `/archive/staff`,
        ARCHIVE_PATIENTS: `/archive/patients`,
    },

    urls: {
        IMAGE: `${BACKEND_URL}/image/`,
        MOVE_DOCTOR_TO_ARCHIVE: `${BACKEND_URL}/archive/doctors/add`,
        RESTORE_DOCTOR_FROM_ARCHIVE: `${BACKEND_URL}/archive/doctors/restore`,
        DELETE_DOCTOR_FROM_ARCHIVE: `${BACKEND_URL}/archive/doctors/delete`,
        PATIENT_ADD_DOCTOR: `${BACKEND_URL}/patient/addDoctor`,
        PATIENT_DELETE_DOCTOR: `${BACKEND_URL}/patient/deleteDoctor`,
        DOCTOR_ADD_COMMENT: `${BACKEND_URL}/patients/history/add`,
        GET_PATIENT_HISTORY: `${BACKEND_URL}/patients/history/getHistory`,
        GET_ALL_DOCTORS: `${BACKEND_URL}/doctors/all`,
        UPLOAD_IMAGE: `${BACKEND_URL}/upload`,
        GET_ALL_PATIENTS: `${BACKEND_URL}/patients/all`,
        MOVE_PATIENT_TO_ARCHIVE: `${BACKEND_URL}/archive/patients/add`,
        AUTHORIZATION: `${BACKEND_URL}/authorization`,
        GET_PATIENT_BY_EMAIL: `${BACKEND_URL}/patients/getByEmail`,
        GET_DOCTOR_BY_EMAIL: `${BACKEND_URL}/doctor/getByEmail`,
        PATIENT_REGISTRATION: `${BACKEND_URL}/patients/registration`,
        GET_ALL_DOCTORS_FROM_ARCHIVE: `${BACKEND_URL}/archive/doctors/all`,
        GET_ALL_PATIENTS_FROM_ARCHIVE:`${BACKEND_URL}/archive/patients/all`,
        RESTORE_PATIENTS_FROM_ARCHIVE: `${BACKEND_URL}/archive/patients/restore`,
        DELETE_PATIENT_FROM_ARCHIVE: `${BACKEND_URL}/archive/patients/delete`,
        ADMIN_GET_ALL_CLAIMS: `${BACKEND_URL}/patients/claim/all`,
        ADMIN_ACCEPT_CLAIM: `${BACKEND_URL}/patients/add`,
        ADMIN_CANCEL_CLAIM: `${BACKEND_URL}/patients/declineClaimForRegistration`,
        ADMIN_REGISTR_NEW_DOCTOR: `${BACKEND_URL}/doctors/registration`,
        DOCTOR_GET_APPOINTMENTS: `${BACKEND_URL}/doctor/getRecordToDoctors`,
        DOCTOR_GET_CLAIMS: `${BACKEND_URL}/doctor/getAllPatientForAccept`,
        DOCTOR_ACCEPT_CLAIM: `${BACKEND_URL}/doctor/approvedClaimPatient`,
        DOCTOR_CANCEL_CLAIM: `${BACKEND_URL}/doctor/declineClaimPatient`,
        DOCTOR_GET_ALL_PATIENTS: `${BACKEND_URL}/doctor/getAllPatient`,
        PATIENT_GET_APPOINTMENTS:`${BACKEND_URL}/patient/getRecordToDoctors`,
        PATIENT_ADD_APPOINTMENT: `${BACKEND_URL}/patient/addappointment`,
        PATIENT_GET_DOCTORS: `${BACKEND_URL}/patient/getAllDoctorsForAccept`,

    }
}