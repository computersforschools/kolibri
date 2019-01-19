import { LessonsPageNames } from './lessonsConstants';

export const PageNames = {
  COACH_CLASS_LIST: 'COACH_CLASS_LIST',
  HOME_PAGE: 'HOME_PAGE',
  REPORTS_PAGE: 'REPORTS_PAGE',
  PLAN_PAGE: 'PLAN_PAGE',
  NEW_COACH_PAGES: 'NEW_COACH_PAGES',
  // ... COACH - under construction

  CLASS_LIST: 'CLASS_LIST',
  CLASS_ROOT: 'CLASS_ROOT',
  RECENT_CHANNELS: 'RECENT_CHANNELS',
  RECENT_ITEMS_FOR_CHANNEL: 'RECENT_ITEMS_FOR_CHANNEL',
  RECENT_LEARNERS_FOR_ITEM: 'RECENT_LEARNERS_FOR_ITEM',
  RECENT_LEARNER_ITEM_DETAILS: 'RECENT_LEARNER_ITEM_DETAILS',
  RECENT_LEARNER_ITEM_DETAILS_ROOT: 'RECENT_LEARNER_ITEM_DETAILS_ROOT',
  TOPIC_CHANNELS: 'TOPIC_CHANNELS',
  TOPIC_CHANNEL_ROOT: 'TOPIC_CHANNEL_ROOT',
  TOPIC_ITEM_LIST: 'TOPIC_ITEM_LIST',
  TOPIC_LEARNERS_FOR_ITEM: 'TOPIC_LEARNERS_FOR_ITEM',
  TOPIC_LEARNER_ITEM_DETAILS: 'TOPIC_LEARNER_ITEM_DETAILS',
  TOPIC_LEARNER_ITEM_DETAILS_ROOT: 'TOPIC_LEARNER_ITEM_DETAILS_ROOT',
  LEARNER_LIST: 'LEARNER_LIST',
  LEARNER_CHANNELS: 'LEARNER_CHANNELS',
  LEARNER_CHANNEL_ROOT: 'LEARNER_CHANNEL_ROOT',
  LEARNER_ITEM_LIST: 'LEARNER_ITEM_LIST',
  LEARNER_ITEM_DETAILS: 'LEARNER_ITEM_DETAILS',
  LEARNER_ITEM_DETAILS_ROOT: 'LEARNER_ITEM_DETAILS_ROOT',
  EXAMS: 'EXAMS',
  EXAM_CREATION_ROOT: 'EXAM_CREATION_ROOT',
  EXAM_CREATION_TOPIC: 'EXAM_CREATION_TOPIC',
  EXAM_CREATION_PREVIEW: 'EXAM_CREATION_PREVIEW',
  EXAM_CREATION_SEARCH: 'EXAM_CREATION_SEARCH',
  EXAM_CREATION_QUESTION_SELECTION: 'EXAM_CREATION_QUESTION_SELECTION',
  EXAM_PREVIEW: 'EXAM_PREVIEW',
  EXAM_REPORT: 'EXAM_REPORT',
  EXAM_REPORT_DETAIL: 'EXAM_REPORT_DETAIL',
  EXAM_REPORT_DETAIL_ROOT: 'EXAM_REPORT_DETAIL_ROOT',
  LEARNERS: 'LEARNERS',
  GROUPS: 'GROUPS',
};

export const RecentReports = [
  PageNames.RECENT_CHANNELS,
  PageNames.RECENT_ITEMS_FOR_CHANNEL,
  PageNames.RECENT_LEARNERS_FOR_ITEM,
  PageNames.RECENT_LEARNER_ITEM_DETAILS,
];

export const TopicReports = [
  PageNames.TOPIC_CHANNELS,
  PageNames.TOPIC_CHANNEL_ROOT,
  PageNames.TOPIC_ITEM_LIST,
  PageNames.TOPIC_LEARNERS_FOR_ITEM,
  PageNames.TOPIC_LEARNER_ITEM_DETAILS,
];

export const LearnerReports = [
  PageNames.LEARNER_LIST,
  PageNames.LEARNER_CHANNELS,
  PageNames.LEARNER_CHANNEL_ROOT,
  PageNames.LEARNER_ITEM_LIST,
  PageNames.LEARNER_ITEM_DETAILS,
];

export const ExamPages = [
  PageNames.EXAMS,
  PageNames.EXAM_REPORT,
  PageNames.EXAM_REPORT_DETAIL,
  PageNames.LEARNERS,
];

export const GroupModals = {
  CREATE_GROUP: 'CREATE_GROUP',
  RENAME_GROUP: 'RENAME_GROUP',
  DELETE_GROUP: 'DELETE_GROUP',
  MOVE_LEARNERS: 'MOVE_LEARNERS',
};

export const pageNameToModuleMap = {
  [PageNames.RECENT_CHANNELS]: 'reports',
  [PageNames.RECENT_ITEMS_FOR_CHANNEL]: 'reports',
  [PageNames.RECENT_LEARNERS_FOR_ITEM]: 'reports',
  [PageNames.RECENT_LEARNER_ITEM_DETAILS]: 'exerciseDetail',
  [PageNames.TOPIC_CHANNELS]: 'reports',
  [PageNames.TOPIC_CHANNEL_ROOT]: 'reports',
  [PageNames.TOPIC_ITEM_LIST]: 'reports',
  [PageNames.TOPIC_LEARNERS_FOR_ITEM]: 'reports',
  [PageNames.TOPIC_LEARNER_ITEM_DETAILS]: 'exerciseDetail',
  [PageNames.LEARNER_LIST]: 'reports',
  [PageNames.LEARNER_CHANNELS]: 'reports',
  [PageNames.LEARNER_CHANNEL_ROOT]: 'reports',
  [PageNames.LEARNER_ITEM_LIST]: 'reports',
  [PageNames.LEARNER_ITEM_DETAILS]: 'exerciseDetail',
  [PageNames.EXAMS]: 'examsRoot',
  [PageNames.EXAM_REPORT]: 'examReport',
  [PageNames.EXAM_REPORT_DETAIL]: 'examReportDetail',
  [PageNames.GROUPS]: 'groups',
  [LessonsPageNames.ROOT]: 'lessonsRoot',
  [LessonsPageNames.RESOURCE_USER_SUMMARY]: 'lessonResourceUserSummary',
  [LessonsPageNames.RESOURCE_USER_REPORT]: 'exerciseDetail',
  // Omitting modules for resource selection, exam creation, and preview to prevent
  // default module state resetting behavior.
};
