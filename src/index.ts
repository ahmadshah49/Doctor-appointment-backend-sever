import "reflect-metadata";

import { createYoga } from "graphql-yoga";
import { createServer } from "http";
import { AuthResolver } from "./resolvers/mutations/Auth";
import { buildSchemaSync } from "type-graphql";
import { MinimalQueryResolver } from "./resolvers/querys/DummyQuery";
import { createContext } from "./context/Context";
import { ExampleResolver } from "./resolvers/mutations/Example";
import { PatientResolver } from "./resolvers/mutations/Patient";
import { DoctorResolver } from "./resolvers/mutations/Doctor";
import { DoctorAvailabilityResvolver } from "./resolvers/mutations/DoctorAvailability";
import { AppointmentResolver } from "./resolvers/mutations/Appointment";
import { GetAppointmentsResolver } from "./resolvers/querys/Appointments";
import { Patients } from "./resolvers/querys/Patients";
import { Doctors } from "./resolvers/querys/Doctor";
const index = async () => {
  const schema = buildSchemaSync({
    resolvers: [
      AuthResolver,
      MinimalQueryResolver,
      ExampleResolver,
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
    console.info("Server is running on http://localhost:4000/graphql");
  });
};
index();
