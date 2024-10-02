import { GraphQLError } from "graphql";
import {
  InvalidDateTimeTypes,
  validation,
  validationforDoctor,
} from "../types/types";
import { isValid, parseISO } from "date-fns";
import moment from "moment";

export const DateNotinPast = ({
  endTime,
  startTime,
  datescheduleDate,
  stringscheduleDate,
}: validation) => {
  const currentTimeUTC = moment().format("YYYY-MM-DD HH:mm:ss"); // UTC time
  console.log("Current Time (UTC):", currentTimeUTC);

  console.log("EndTime  Form Validation (UTC)", moment(endTime).utc().format());
  console.log(
    "startTime  Form Validation (UTC)",
    moment(startTime).utc().format()
  );
  console.log(
    "datescheduleDate Form Validation (UTC)",
    moment(datescheduleDate).utc().format()
  );
  console.log(
    "stringscheduleDate Form Validation (UTC)",
    moment(stringscheduleDate).utc().format()
  );

  const startTimeUTC = moment(startTime).utc().format("YYYY-MM-DD HH:mm:ss");
  const endTimeUTC = moment(endTime).utc().format("YYYY-MM-DD HH:mm:ss");

  const scheduledDateUTC = moment(stringscheduleDate)
    .utc()
    .format("YYYY-MM-DD HH:mm:ss");

  const scheduledDateUTCDate = moment(datescheduleDate)
    .utc()
    .format("YYYY-MM-DD HH:mm:ss");
  console.log("startTime (UTC):", startTimeUTC);
  console.log("endTime (UTC):", endTimeUTC);
  console.log("scheduledDate (UTC):", scheduledDateUTC);

  if (startTime && moment(startTimeUTC).isBefore(currentTimeUTC)) {
    throw new GraphQLError("Start time cannot be in the past");
  }

  if (endTime && moment(endTimeUTC).isBefore(currentTimeUTC)) {
    throw new GraphQLError("End time cannot be in the past");
  }

  if (
    datescheduleDate &&
    moment(scheduledDateUTCDate).isBefore(currentTimeUTC)
  ) {
    throw new GraphQLError("Schedule date cannot be in the past");
  }
  if (
    stringscheduleDate &&
    moment(stringscheduleDate).isBefore(currentTimeUTC)
  ) {
    throw new GraphQLError("Schedule date cannot be in the past");
  }

  return true;
};
export const InvalidDateTime = ({
  startTime,
  endTime,
  datescheduledDate,
  stringscheduledDate,
}: InvalidDateTimeTypes) => {
  if (!isValid(parseISO(startTime))) {
    throw new GraphQLError(
      "Invalid startTime format. Please use ISO 8601 format (e.g., 2024-09-25T08:30:00Z)."
    );
  }
  if (!isValid(parseISO(endTime))) {
    throw new GraphQLError(
      "Invalid endTime format. Please use ISO 8601 format (e.g., 2024-09-25T17:00:00Z)."
    );
  }

  return true;
};
export const DateNotinPastforDoctor = ({
  endTime,
  startTime,
  startDate,
  endDate,
}: validationforDoctor) => {
  const currentTimeUTC = moment().format("YYYY-MM-DD HH:mm:ss");
  console.log("Current Time (UTC):", currentTimeUTC);

  console.log("EndTime  Form Validation (UTC)", moment(endTime).utc().format());
  console.log(
    "startTime  Form Validation (UTC)",
    moment(startTime).utc().format()
  );
  console.log(
    "datescheduleDate Form Validation (UTC)",
    moment(startDate).utc().format()
  );
  console.log(
    "stringscheduleDate Form Validation (UTC)",
    moment(endDate).utc().format()
  );

  const startTimeUTC = moment(startTime).utc().format("YYYY-MM-DD HH:mm:ss");
  const endTimeUTC = moment(endTime).utc().format("YYYY-MM-DD HH:mm:ss");

  const startDateUTC = moment(startDate).utc().format("YYYY-MM-DD HH:mm:ss");

  const endDateUTC = moment(endDate).utc().format("YYYY-MM-DD HH:mm:ss");
  console.log("startTime (UTC):", startTimeUTC);
  console.log("endTime (UTC):", endTimeUTC);
  console.log("startDateUTC (UTC):", startDateUTC);
  console.log("endDateUTC (UTC):", endDateUTC);

  if (startTime && moment(startTimeUTC).isBefore(currentTimeUTC)) {
    throw new GraphQLError("Start time cannot be in the past");
  }

  if (endTime && moment(endTimeUTC).isBefore(currentTimeUTC)) {
    throw new GraphQLError("End time cannot be in the past");
  }

  if (startDate && moment(startDateUTC).isBefore(currentTimeUTC)) {
    throw new GraphQLError("Schedule date cannot be in the past");
  }
  if (endDate && moment(endDateUTC).isBefore(currentTimeUTC)) {
    throw new GraphQLError("Schedule date cannot be in the past");
  }

  return true;
};
