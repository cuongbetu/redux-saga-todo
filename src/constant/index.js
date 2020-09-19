import AdminHomePage from "./../components/AdminHomePage/index";
import Page404 from "./../components/404Page/index";
import TaskBoard from "./../containers/TaskBoard/index";

export const API_ENDPOINT = "http://localhost:3000";

export const STATUSES = [
  {
    value: 1,
    label: "NEW TASK",
  },
  {
    value: 2,
    label: "IN PROGRESS",
  },
  {
    value: 3,
    label: "COMPLETED",
  },
];

export const STATUS_CODE = {
  SUCCESS: 200,
  CREATED: 201,
  UPDATE: 202,
};

export const ADMIN_ROUTES = [
  {
    path: "/",
    name: "Trang quản trị",
    exact: true,
    component: AdminHomePage,
  },
  {
    path: "/task-board",
    name: "Quản lý công việc",
    component: TaskBoard,
  },
  {
    path: "/404",
    name: "Not found",
    exact: true,
    component: Page404,
  },
];
