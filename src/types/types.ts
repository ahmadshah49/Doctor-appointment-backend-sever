export type validation = {
  startDate?: string;
  endDate?: string;
  endTime?: Date;
  startTime?: Date;
  datescheduleDate?: Date;
  stringscheduleDate?: string;
};
export type validationforDoctor = {
  startDate?: Date;
  endDate?: Date;
  endTime?: Date;
  startTime?: Date;
  datescheduleDate?: Date;
  stringscheduleDate?: string;
};
export type InvalidDateTimeTypes = {
  startTime?: string;
  endTime?: string;
  datescheduledDate?: Date;
  stringscheduledDate?: string;
};
