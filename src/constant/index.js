import AdminHomePage from "./../components/AdminHomePage/index";
import TaskBoard from "./../containers/TaskBoard/index";
import LoginPage from "./../components/LoginPage/index";
import SignUpPage from "./../components/SignUpPage/index";


export const API_ENDPOINT_TASK = "http://localhost:3000";

export const API_ENDPOINT_LOGIN = "http://localhost:64880/user-manager/login";

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
    path: "/admin",
    name: "Trang quản trị",
    exact: true,
    component: AdminHomePage,
  },
  {
    path: "/admin/task-board",
    name: "Quản lý công việc",
    component: TaskBoard,
  },
];

export const ROUTES = [
  {
    path: "/login",
    name: "Trang đăng nhập",
    component: LoginPage,
  },
  {
    path: "/sign-up",
    name: "Trang đăng kí",
    component: SignUpPage,
  },
];

export const HEADER = {
  headers : {
    "SecretKey": "RecruitManager@1234",
    "Content-Type": "application/json"
  }
};
