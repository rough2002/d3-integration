import { DateTime } from "luxon";

const data = [
  {
    is_active: true,
    vehicle: {
      registration_number: "W777W",
      driver_vehicles: [
        {
          shift_schedules: [
            {
              end_time: "2024-05-05T11:30:00",
              start_time: "2024-05-05T10:00:00",
              driver_vehicle: {
                user: {
                  first_name: "test",
                  last_name: "driver2",
                  middle_name: "",
                },
              },
            },
          ],
        },
        {
          shift_schedules: [
            {
              end_time: "2024-05-05T22:00:00",
              start_time: "2024-05-05T19:00:00",
              driver_vehicle: {
                user: {
                  first_name: "test",
                  last_name: "ae",
                  middle_name: "driver",
                },
              },
            },
          ],
        },
      ],
    },
  },
  {
    is_active: false,
    vehicle: {
      registration_number: "er",
      driver_vehicles: [],
    },
  },
  {
    is_active: false,
    vehicle: {
      registration_number: "piyush_123",
      driver_vehicles: [
        {
          shift_schedules: [],
        },
      ],
    },
  },
  {
    is_active: true,
    vehicle: {
      registration_number: "33",
      driver_vehicles: [],
    },
  },
  {
    is_active: true,
    vehicle: {
      registration_number: "AL-19726",
      driver_vehicles: [
        {
          shift_schedules: [],
        },
        {
          shift_schedules: [],
        },
      ],
    },
  },
  {
    is_active: true,
    vehicle: {
      registration_number: "M-122451",
      driver_vehicles: [
        {
          shift_schedules: [
            {
              end_time: "2024-05-05T14:30:00",
              start_time: "2024-05-05T00:00:00",
              driver_vehicle: {
                user: {
                  first_name: "test",
                  last_name: "ae",
                  middle_name: "driver",
                },
              },
            },
            {
              end_time: "2024-05-05T17:30:00",
              start_time: "2024-05-05T16:00:00",
              driver_vehicle: {
                user: {
                  first_name: "test",
                  last_name: "ae",
                  middle_name: "driver",
                },
              },
            },
          ],
        },
        {
          shift_schedules: [
            {
              end_time: "2024-05-05T23:30:00",
              start_time: "2024-05-05T21:30:00",
              driver_vehicle: {
                user: {
                  first_name: "test",
                  last_name: "driver2",
                  middle_name: "",
                },
              },
            },
          ],
        },
      ],
    },
  },
  {
    is_active: true,
    vehicle: {
      registration_number: "testing 123",
      driver_vehicles: [
        {
          shift_schedules: [],
        },
      ],
    },
  },
  {
    is_active: true,
    vehicle: {
      registration_number: "new color",
      driver_vehicles: [],
    },
  },
  {
    is_active: true,
    vehicle: {
      registration_number: "33",
      driver_vehicles: [],
    },
  },
  {
    is_active: true,
    vehicle: {
      registration_number: "testopZ-65478",
      driver_vehicles: [
        {
          shift_schedules: [],
        },
        {
          shift_schedules: [],
        },
      ],
    },
  },
  {
    is_active: false,
    vehicle: {
      registration_number: "33",
      driver_vehicles: [],
    },
  },
  {
    is_active: true,
    vehicle: {
      registration_number: "piyush_123",
      driver_vehicles: [
        {
          shift_schedules: [],
        },
      ],
    },
  },
  {
    is_active: true,
    vehicle: {
      registration_number: "er",
      driver_vehicles: [],
    },
  },
  {
    is_active: false,
    vehicle: {
      registration_number: "33",
      driver_vehicles: [],
    },
  },
  {
    is_active: false,
    vehicle: {
      registration_number: "MUS89685AAF",
      driver_vehicles: [],
    },
  },
  {
    is_active: false,
    vehicle: {
      registration_number: "33",
      driver_vehicles: [],
    },
  },
  {
    is_active: false,
    vehicle: {
      registration_number: "33",
      driver_vehicles: [],
    },
  },
  {
    is_active: false,
    vehicle: {
      registration_number: "DUBAI17562",
      driver_vehicles: [
        {
          shift_schedules: [],
        },
      ],
    },
  },
  {
    is_active: false,
    vehicle: {
      registration_number: "33",
      driver_vehicles: [],
    },
  },
  {
    is_active: false,
    vehicle: {
      registration_number: "2023",
      driver_vehicles: [],
    },
  },
  {
    is_active: false,
    vehicle: {
      registration_number: "test 1",
      driver_vehicles: [],
    },
  },
  {
    is_active: false,
    vehicle: {
      registration_number: "33",
      driver_vehicles: [],
    },
  },
  {
    is_active: false,
    vehicle: {
      registration_number: "test 2",
      driver_vehicles: [
        {
          shift_schedules: [],
        },
      ],
    },
  },
  {
    is_active: false,
    vehicle: {
      registration_number: "34",
      driver_vehicles: [],
    },
  },
  {
    is_active: true,
    vehicle: {
      registration_number: "D962167",
      driver_vehicles: [
        {
          shift_schedules: [],
        },
      ],
    },
  },
  {
    is_active: false,
    vehicle: {
      registration_number: "W123",
      driver_vehicles: [
        {
          shift_schedules: [],
        },
        {
          shift_schedules: [],
        },
      ],
    },
  },
  {
    is_active: false,
    vehicle: {
      registration_number: "33",
      driver_vehicles: [],
    },
  },
  {
    is_active: false,
    vehicle: {
      registration_number: "TestV1M",
      driver_vehicles: [
        {
          shift_schedules: [],
        },
      ],
    },
  },
  {
    is_active: false,
    vehicle: {
      registration_number: "33",
      driver_vehicles: [],
    },
  },
  {
    is_active: false,
    vehicle: {
      registration_number: "ee",
      driver_vehicles: [],
    },
  },
  {
    is_active: true,
    vehicle: {
      registration_number: "T123T",
      driver_vehicles: [
        {
          shift_schedules: [],
        },
        {
          shift_schedules: [],
        },
      ],
    },
  },
  {
    is_active: false,
    vehicle: {
      registration_number: "33",
      driver_vehicles: [],
    },
  },
  {
    is_active: false,
    vehicle: {
      registration_number: "TESTING_MUSKAN_4",
      driver_vehicles: [
        {
          shift_schedules: [],
        },
        {
          shift_schedules: [],
        },
      ],
    },
  },
  {
    is_active: false,
    vehicle: {
      registration_number: "123456",
      driver_vehicles: [
        {
          shift_schedules: [],
        },
      ],
    },
  },
  {
    is_active: false,
    vehicle: {
      registration_number: "9818",
      driver_vehicles: [
        {
          shift_schedules: [],
        },
      ],
    },
  },
  {
    is_active: true,
    vehicle: {
      registration_number: "1997",
      driver_vehicles: [],
    },
  },
  {
    is_active: true,
    vehicle: {
      registration_number: "DUBAI-123",
      driver_vehicles: [
        {
          shift_schedules: [],
        },
        {
          shift_schedules: [],
        },
      ],
    },
  },
  {
    is_active: true,
    vehicle: {
      registration_number: "AE_87",
      driver_vehicles: [
        {
          shift_schedules: [],
        },
        {
          shift_schedules: [],
        },
      ],
    },
  },
  {
    is_active: true,
    vehicle: {
      registration_number: "3",
      driver_vehicles: [],
    },
  },
  {
    is_active: true,
    vehicle: {
      registration_number: "33",
      driver_vehicles: [],
    },
  },
  {
    is_active: true,
    vehicle: {
      registration_number: "fetchShiftDetails",
      driver_vehicles: [],
    },
  },
  {
    is_active: true,
    vehicle: {
      registration_number: "33",
      driver_vehicles: [],
    },
  },
  {
    is_active: true,
    vehicle: {
      registration_number: "33",
      driver_vehicles: [],
    },
  },
  {
    is_active: false,
    vehicle: {
      registration_number: "33",
      driver_vehicles: [],
    },
  },
  {
    is_active: false,
    vehicle: {
      registration_number: "ioio",
      driver_vehicles: [
        {
          shift_schedules: [],
        },
      ],
    },
  },
  {
    is_active: true,
    vehicle: {
      registration_number: "ts-123456",
      driver_vehicles: [
        {
          shift_schedules: [],
        },
      ],
    },
  },
  {
    is_active: false,
    vehicle: {
      registration_number: "aaa-123",
      driver_vehicles: [
        {
          shift_schedules: [],
        },
      ],
    },
  },
];

// const filteredData = data.map((vehicle: any) => {});
const shiftSchedules = [
  {
    start_time: "2024-05-05T00:00:00",
    end_time: "2024-05-05T14:30:00",
  },
  {
    start_time: "2024-05-05T16:00:00",
    end_time: "2024-05-05T17:30:00",
  },
  {
    start_time: "2024-05-05T15:00:00",
    end_time: "2024-05-05T15:30:00",
  },
];

//sorting logic for the shift
shiftSchedules.sort(function (a, b) {
  const t1 = Date.parse(a.start_time);
  const t2 = Date.parse(b.start_time);
  return t1 - t2;
});
enum BowserStatus {
  MAINTENANCE = "MAINTENANCE",
  MOVING = "MOVING",
  IDLE = "IDLE",
}
// milleseconds to this format 2024-05-05T15:30:00
// const convertMillisecondsToDateTimeString = (milliseconds: number) => {
//   const dt = DateTime.fromMillis(milliseconds);
//   return dt.toFormat("yyyy-MM-dd'T'HH:mm:ss");
// };

//milleseconds to  this format 15:30:00
const convertMillisecondsToTimeStamp = (milleSeconds: number) => {
  return DateTime.fromMillis(milleSeconds).toFormat("HH:mm:ss");
};

// 2024-05-05T15:30:00 to milleSeconds
const convertDateTimeStringToMilliseconds = (dateString: string) => {
  const milleseconds = Date.parse(dateString);
  return milleseconds;
};

const calculateEmptySlots = (shifts: any, regNo: string) => {
  const emptySlots = [];
  //for start
  const startTimeMilleSeconds = convertDateTimeStringToMilliseconds(
    shifts[0].start_time
  );
  const startTimeStr = convertMillisecondsToTimeStamp(startTimeMilleSeconds);

  //for end
  const endTimeMilleSeconds = convertDateTimeStringToMilliseconds(
    shifts[shifts.length - 1].end_time
  );
  const endTimeStr = convertMillisecondsToTimeStamp(endTimeMilleSeconds);

  if (startTimeStr !== "00:00:00") {
    emptySlots.push({
      regNo: regNo,
      start_time: "00:00:00",
      end_time: startTimeStr,
      status: BowserStatus.IDLE,
      driverName: "",
    });
  }
  if (endTimeStr !== "00:00:00") {
    emptySlots.push({
      regNo: regNo,
      start_time: endTimeStr,
      end_time: "00:00:00",
      status: BowserStatus.IDLE,
      driverName: "",
    });
  }
  //for calculating emptySlots between the shifts
  shifts.forEach((shift: any, i: number) => {
    const nextShift = shifts[i + 1];
    if (shift?.end_time !== nextShift?.start_time && nextShift) {
      console.log(nextShift);
      emptySlots.push({
        regNo: regNo,
        start_time: convertMillisecondsToTimeStamp(shift?.end_time),
        end_time: convertMillisecondsToTimeStamp(nextShift?.start_time),
        status: BowserStatus.IDLE,
        driverName: "",
      });
    }
  });
  return emptySlots;
};

const finalData = data.map((vehicle) => {
  if (!vehicle.is_active) {
    return {
      regNo: vehicle.vehicle.registration_number,
      start_time: "00:00:00",
      end_time: "00:00:00",
      driverName: "",
      status: BowserStatus.MAINTENANCE,
    };
  }
  if (vehicle.vehicle.driver_vehicles.length) {
    vehicle.vehicle.driver_vehicles.map((shift) => {
      if (shift.shift_schedules.length) {
        console.log("helo");
      }
    });
  }
});
