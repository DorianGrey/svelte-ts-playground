export interface RouteInfo {
  path: string;
  component: any;
}

export interface ActiveRouteInfo extends RouteInfo {
  params: Record<string, string>;
  queryParams: URLSearchParams;
}
