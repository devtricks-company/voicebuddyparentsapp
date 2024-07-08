export type BaseResponse<T = unknown> = {
  data: T;
  message: string;
  statusCode: number;
};

export type BaseErrorResponse<T = unknown> = {
  data: T;
  message: string;
  statusCode: boolean;
};

export type PaginatedResponse<T = unknown> = {
  page: number;
  totalPage: number;
  items: Array<T>;
};
