"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const graphql_yoga_1 = require("graphql-yoga");
const http_1 = require("http");
const type_graphql_1 = require("type-graphql");
const Auth_1 = require("./resolvers/mutations/Auth");
const Context_1 = require("./context/Context");
const Appointment_1 = require("./resolvers/mutations/Appointment");
const Doctor_1 = require("./resolvers/mutations/Doctor");
const DoctorAvailability_1 = require("./resolvers/mutations/DoctorAvailability");
const Patient_1 = require("./resolvers/mutations/Patient");
const Appointments_1 = require("./resolvers/querys/Appointments");
const Doctor_2 = require("./resolvers/querys/Doctor");
const Patients_1 = require("./resolvers/querys/Patients");
const index = async () => {
    const schema = (0, type_graphql_1.buildSchemaSync)({
        resolvers: [
            Auth_1.AuthResolver,
            Patient_1.PatientResolver,
            Doctor_1.DoctorResolver,
            DoctorAvailability_1.DoctorAvailabilityResvolver,
            Appointment_1.AppointmentResolver,
            Appointments_1.GetAppointmentsResolver,
            Patients_1.Patients,
            Doctor_2.Doctors,
        ],
        validate: false,
    });
    const yoga = (0, graphql_yoga_1.createYoga)({
        schema,
        context: (req) => (0, Context_1.createContext)(req),
    });
    const server = (0, http_1.createServer)(yoga);
    server.listen(4000, () => {
        console.info("Server is running ");
    });
};
index();
