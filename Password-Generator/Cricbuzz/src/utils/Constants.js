// internal app notifications key
const AppNotificationKey = {
  LOGOUT: 'LOGOUT',
};

const Permissions = {
  PHOTO: 'photo',
  CAMERA: 'camera',
  LOCATION: 'location',
  MICROPHONE: 'microphone',
  CONTACTS: 'contacts',
  EVENTS: 'event',
  STORAGE: 'storage',
  PHONE_CALL: 'callPhone',
  READ_SMS: 'readSms',
  RECEIVE_SMS: 'receiveSms',

  //support only IOS
  MOTION: 'motion',
  MEDIA_LIBRARY: 'mediaLibrary',
  SPEECH_RECOGNITAION: 'speechRecognition',
  PUSH_NOTIFICATION: 'notification',

  //Android Permission
  READ_EXTERNAL_STORAGE: 'READ_EXTERNAL_STORAGE',
  WRITE_EXTERNAL_STORAGE: 'WRITE_EXTERNAL_STORAGE',

  LOCATION: 'location',
  MICROPHONE: 'microphone',
  CONTACTS: 'contacts',
  EVENTS: 'event',
  STORAGE: 'storage',
  PHONE_CALL: 'callPhone',
  READ_SMS: 'readSms',
  RECEIVE_SMS: 'receiveSms',

  //support only IOS
  MOTION: 'motion',
  MEDIA_LIBRARY: 'mediaLibrary',
  SPEECH_RECOGNITAION: 'speechRecognition',
  PUSH_NOTIFICATION: 'notification',

  //Android Permission
  READ_EXTERNAL_STORAGE: 'READ_EXTERNAL_STORAGE',
  WRITE_EXTERNAL_STORAGE: 'WRITE_EXTERNAL_STORAGE',
};

const EmailType = {
  REPLY: 1,
  REPLY_ALL: 2,
  FORWARD: 3,
  COMPOSE: 4,
};
// api response codes
const ResponseCode = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  UNPROCESSABLE_REQUEST: 422,
  INTERNAL_SERVER_ERROR: 500,
  TOKEN_INVALID: 503,
  NO_INTERNET: 522,
  BAD_GATEWAY: 502,
};

const ErrprCode = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  UNPROCESSABLE_REQUEST: 422,
  INTERNAL_SERVER_ERROR: 500,
  TOKEN_INVALID: 503,
  NO_INTERNET: 522,
  BAD_GATEWAY: 502,
};


const MessageType = {
  SUCCESS: 1,
  FAILED: 2,
  INFO: 3,
};

const SORT_ORDER = {
  ASC: 'ASC',
  DESC: 'DESC',
};

const APIConfig = {
  BASE_URL: 'https://app.hqagentpro.com/graphql',

  dev: https://kcrmapi.webmobtech.biz/graphql,
  LIVE: https://app.hqagentpro.com/graphql,
  local: http://192.168.1.28:8000/graphql
  http://192.168.1.93:8000/graphql
};

const GoogleSignIn = {
  webClientId:
    '938847717573-r8ata393vclj9s2nmc7ov7oq6q7sgg5r.apps.googleusercontent.com',
};

const HQ_REDIRECTS = 'https://hq.webmobtech.biz'; // DEV
// HQ_REDIRECTS: 'https://houzquest.com', // PROD

const FORM_TYPE = {
  PQQ: 1,
  BUYER_CONSULT: 2,
  CLIENT_INFO: 3,
};

const APPMNT_TYPES = {
  upcoming: 'upcoming',
  past: 'past',
  cancelled: 'cancelled',
  'No Show': 'No Show',
};

const APPOINTMENT_TYPES = {
  Showing: 'Showing',
  Inspection: 'Inspection',
  Listing_Appointment: 'Listing Appointment',
  Office_Meeting: 'Office Meeting',
  Other: 'Other',
};

const TASK_TYPES = {
  Upcoming: 'Upcoming',
  Past: 'Overdue',
  Completed: 'Completed',
};

const LEAD_TASK_TYPES = [
  {
    name: 'Upcoming',
    value: 'Upcoming',
  },
  {
    name: 'Overdue',
    value: 'Overdue',
  },
  {
    name: 'Completed',
    value: 'Completed',
  },
];

const GLOBAL_TASK_TYPES = [
  {
    id: 1,
    name: 'Today & Tomorrow',
    value: 'today_tomorrow',
  },
  {
    id: 2,
    name: 'Upcoming',
    value: 'upcoming',
  },
  {
    id: 3,
    name: 'Overdue',
    value: 'overdue',
  },
  {
    id: 4,
    name: 'Completed',
    value: 'completed',
  },
  {
    id: 5,
    name: 'OtherTask',
    value: 'other_task',
  },
];

const APPMNT_STATUS = {
  CONFIRM: 'Confirmed',
  CANCEL: 'Cancelled',
  UPCOMING: 'Upcoming',
};

const LISTING_STATUS = [
  {
    id: 1,
    value: 'Active',
    name: 'Active',
  },
  {
    id: 2,
    value: 'Pending',
    name: 'Pending',
  },
  {
    id: 3,
    value: 'Sold',
    name: 'Sold ',
  },
];

const HQ_PROPERTY_PLACEHOLDER =
  'data:image/png;base64,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';

const LABELS = ['permanentHome', 'tempHome', 'work', 'other'];

export default {
  AppNotificationKey,
  ResponseCode,
  Permissions,
  MessageType,
  APIConfig,
  GoogleSignIn,
  SORT_ORDER,
  EmailType,
  FORM_TYPE,
  APPMNT_TYPES,
  TASK_TYPES,
  LISTING_STATUS,
  HQ_PROPERTY_PLACEHOLDER,
  APPMNT_STATUS,
  LABELS,
  APPOINTMENT_TYPES,
  GLOBAL_TASK_TYPES,
  HQ_REDIRECTS,
  LEAD_TASK_TYPES,
};
