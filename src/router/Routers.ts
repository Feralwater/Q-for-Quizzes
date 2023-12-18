export enum Routers {
  Dashboard = "/",
  Quiz = "/quiz/:quizId",
  Result = "/result",
  Profile = "/profile",
  PageNotFound = "/:pathMatch(.*)*",
}