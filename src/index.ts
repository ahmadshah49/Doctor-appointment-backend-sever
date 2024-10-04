import "reflect-metadata";
import { createYoga } from "graphql-yoga";
import { createServer } from "http";
import { buildSchemaSync } from "type-graphql";

import { AuthResolver } from "./resolvers/mutations/Auth";
import { createContext } from "./context/Context";
import { AppointmentResolver } from "./resolvers/mutations/Appointment";
import { DoctorResolver } from "./resolvers/mutations/Doctor";
import { DoctorAvailabilityResvolver } from "./resolvers/mutations/DoctorAvailability";
import { PatientResolver } from "./resolvers/mutations/Patient";
import { GetAppointmentsResolver } from "./resolvers/querys/Appointments";
import { Doctors } from "./resolvers/querys/Doctor";
import { Patients } from "./resolvers/querys/Patients";
const index = async () => {
  const schema = buildSchemaSync({
    resolvers: [
      AuthResolver,
      PatientResolver,
      DoctorResolver,
      DoctorAvailabilityResvolver,
      AppointmentResolver,
      GetAppointmentsResolver,
      Patients,
      Doctors,
    ],

    validate: false,
  });

  const yoga = createYoga({
    schema,
    context: (req: any) => createContext(req),
  });
  const server = createServer(yoga);
  server.listen(4000, () => {
    console.info(
      "Server is running on https://doctor-appointment-backend-sever-pvomt1kg8.vercel.app/graphql"
    );
  });
};
index();
