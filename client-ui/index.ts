/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface AppConfigCreateInput {
  deletedAt?: object;
  value?: string;
  key?: string;
}

export interface AppConfig {
  id: string;
  /** @format date-time */
  createdAt: string;
  updatedAt?: object;
  deletedAt?: object;
  value?: string;
  key?: string;
}

export interface ForbiddenException {
  statusCode: number;
  message: string;
}

export interface StringFilter {
  equals?: string;
  in?: string[];
  notIn?: string[];
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  mode?: "Default" | "Insensitive";
  not?: string;
}

export interface StringNullableFilter {
  equals?: string;
  in?: string[];
  notIn?: string[];
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  mode?: "Default" | "Insensitive";
  not?: string;
}

export interface AppConfigWhereInput {
  id?: StringFilter;
  value?: StringNullableFilter;
  key?: StringNullableFilter;
}

export interface AppConfigOrderByInput {
  id?: "Asc" | "Desc";
  createdAt?: "Asc" | "Desc";
  updatedAt?: "Asc" | "Desc";
  deletedAt?: "Asc" | "Desc";
  value?: "Asc" | "Desc";
  key?: "Asc" | "Desc";
}

export interface GetListAppConfigDto {
  paginatedResult: AppConfig[];
  totalCount: number;
}

export interface FileDto {
  file: string;
}

export interface NotFoundException {
  statusCode: number;
  message: string;
}

export interface AppConfigUpdateInput {
  deletedAt?: object;
  value?: string;
  key?: string;
}

export interface UserCredentials {
  email: string;
  password: string;
  role: string;
  firstName: string;
  lastName: string;
}

export interface Credentials {
  email: string;
  password: string;
}

export interface EmailResetPasswordCredential {
  email: string;
}

export interface ResetPasswordCredential {
  access_token: string;
  password: string;
}

export interface GenerateLinkOptions {
  redirectTo?: string;
  password?: string;
  data?: object;
}

export interface InviteUserByEmailCredential {
  email: string;
  options?: GenerateLinkOptions;
}

export interface ResetEmailCredential {
  userId: string;
  email: string;
  password: string;
}

export interface UserCreateInput {
  deletedAt?: object;
  firstName?: string;
  lastName?: string;
  username: string;
  password?: string;
  isValid?: boolean;
  roles: string[];
  email?: string;
  userType?: ("Regular" | "Pro")[];
}

export interface Interaction {
  id: string;
  /** @format date-time */
  createdAt: string;
  updatedAt?: object;
  deletedAt?: object;
  interactionType?: ("Like" | "Report" | "Comment")[];
  user?: User;
  annonce?: Annonce;
}

export interface InteractionUser {
  id: string;
  /** @format date-time */
  createdAt: string;
  updatedAt?: object;
  deletedAt?: object;
  interactionType?: ("Appointment" | "Connect" | "Message")[];
  date?: object;
  status?: string;
  user2?: User;
  users?: User;
}

export interface User {
  id: string;
  /** @format date-time */
  createdAt: string;
  updatedAt?: object;
  deletedAt?: object;
  firstName?: string;
  lastName?: string;
  username: string;
  isValid?: boolean;
  roles: string[];
  email?: string;
  annonce?: Annonce[];
  interactions?: Interaction[];
  interactionUsers?: InteractionUser[];
  interactionUsers2?: InteractionUser[];
  userType?: ("Regular" | "Pro")[];
}

export interface Annonce {
  id: string;
  /** @format date-time */
  createdAt: string;
  updatedAt?: object;
  deletedAt?: object;
  title?: string;
  content?: string;
  endDate?: object;
  annonceType?: "Pub" | "Alert" | "Imm" | "Pro" | "Recommend";
  longitude?: number;
  latitude?: number;
  users?: User;
  interactions?: Interaction[];
}

export interface UserWhereInput {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
}

export interface UserOrderByInput {
  id?: "Asc" | "Desc";
  createdAt?: "Asc" | "Desc";
  updatedAt?: "Asc" | "Desc";
  deletedAt?: "Asc" | "Desc";
  firstName?: "Asc" | "Desc";
  lastName?: "Asc" | "Desc";
  username?: "Asc" | "Desc";
  password?: "Asc" | "Desc";
  isValid?: "Asc" | "Desc";
  roles?: "Asc" | "Desc";
  email?: "Asc" | "Desc";
  userType?: "Asc" | "Desc";
}

export interface GetListUserDto {
  paginatedResult: User[];
  totalCount: number;
}

export interface UserUpdateInput {
  deletedAt?: object;
  firstName?: string;
  lastName?: string;
  username?: string;
  password?: string;
  isValid?: boolean;
  roles?: string[];
  email?: string;
  userType?: ("Regular" | "Pro")[];
}

export type UpdatePasswordDTO = object;

export interface DateTimeNullableFilter {
  /** @format date-time */
  equals?: string;
  in?: string[];
  notIn?: string[];
  /** @format date-time */
  lt?: string;
  /** @format date-time */
  lte?: string;
  /** @format date-time */
  gt?: string;
  /** @format date-time */
  gte?: string;
  /** @format date-time */
  not?: string;
}

export interface FloatNullableFilter {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: number;
}

export interface UserWhereUniqueInput {
  id: string;
}

export interface AnnonceWhereUniqueInput {
  id: string;
}

export interface AnnonceCreateInput {
  deletedAt?: object;
  title?: string;
  content?: string;
  endDate?: object;
  annonceType?: "Pub" | "Alert" | "Imm" | "Pro" | "Recommend";
  longitude?: number;
  latitude?: number;
  users?: UserWhereUniqueInput;
}

export interface AnnonceWhereInput {
  id?: StringFilter;
  title?: StringNullableFilter;
  content?: StringNullableFilter;
  endDate?: DateTimeNullableFilter;
  annonceType?: "Pub" | "Alert" | "Imm" | "Pro" | "Recommend";
  longitude?: FloatNullableFilter;
  latitude?: FloatNullableFilter;
  users?: UserWhereUniqueInput;
}

export interface AnnonceOrderByInput {
  id?: "Asc" | "Desc";
  createdAt?: "Asc" | "Desc";
  updatedAt?: "Asc" | "Desc";
  deletedAt?: "Asc" | "Desc";
  title?: "Asc" | "Desc";
  content?: "Asc" | "Desc";
  endDate?: "Asc" | "Desc";
  annonceType?: "Asc" | "Desc";
  longitude?: "Asc" | "Desc";
  latitude?: "Asc" | "Desc";
  usersId?: "Asc" | "Desc";
}

export interface GetListAnnonceDto {
  paginatedResult: Annonce[];
  totalCount: number;
}

export interface AnnonceUpdateInput {
  deletedAt?: object;
  title?: string;
  content?: string;
  endDate?: object;
  annonceType?: "Pub" | "Alert" | "Imm" | "Pro" | "Recommend";
  longitude?: number;
  latitude?: number;
  users?: UserWhereUniqueInput;
}

export interface InteractionCreateInput {
  deletedAt?: object;
  interactionType?: ("Like" | "Report" | "Comment")[];
  user?: UserWhereUniqueInput;
  annonce?: AnnonceWhereUniqueInput;
}

export interface InteractionWhereInput {
  id?: StringFilter;
  user?: UserWhereUniqueInput;
  annonce?: AnnonceWhereUniqueInput;
}

export interface InteractionOrderByInput {
  id?: "Asc" | "Desc";
  createdAt?: "Asc" | "Desc";
  updatedAt?: "Asc" | "Desc";
  deletedAt?: "Asc" | "Desc";
  interactionType?: "Asc" | "Desc";
  userId?: "Asc" | "Desc";
  annonceId?: "Asc" | "Desc";
}

export interface GetListInteractionDto {
  paginatedResult: Interaction[];
  totalCount: number;
}

export interface InteractionUpdateInput {
  deletedAt?: object;
  interactionType?: ("Like" | "Report" | "Comment")[];
  user?: UserWhereUniqueInput;
  annonce?: AnnonceWhereUniqueInput;
}

export interface InteractionUserCreateInput {
  deletedAt?: object;
  interactionType?: ("Appointment" | "Connect" | "Message")[];
  date?: object;
  status?: string;
  user2?: UserWhereUniqueInput;
  users?: UserWhereUniqueInput;
}

export interface InteractionUserWhereInput {
  id?: StringFilter;
  date?: DateTimeNullableFilter;
  status?: StringNullableFilter;
  user2?: UserWhereUniqueInput;
  users?: UserWhereUniqueInput;
}

export interface InteractionUserOrderByInput {
  id?: "Asc" | "Desc";
  createdAt?: "Asc" | "Desc";
  updatedAt?: "Asc" | "Desc";
  deletedAt?: "Asc" | "Desc";
  interactionType?: "Asc" | "Desc";
  date?: "Asc" | "Desc";
  status?: "Asc" | "Desc";
  user2Id?: "Asc" | "Desc";
  usersId?: "Asc" | "Desc";
}

export interface GetListInteractionUserDto {
  paginatedResult: InteractionUser[];
  totalCount: number;
}

export interface InteractionUserUpdateInput {
  deletedAt?: object;
  interactionType?: ("Appointment" | "Connect" | "Message")[];
  date?: object;
  status?: string;
  user2?: UserWhereUniqueInput;
  users?: UserWhereUniqueInput;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;

  key?: string;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
  handleError?: void;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "/nest";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);
  private handleError?: (() => void | undefined) | undefined;

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  public setBaseApiParams = (data: RequestParams) => {
    this.baseApiParams = this.mergeRequestParams(data);
  };

  private encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  private addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  private addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any, requestParam: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any, requestParam) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          requestParam?.key || key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  private mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;
    const resp = await this.customFetch(
      `${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`,
      {
        ...requestParams,
        headers: {
          ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
          ...(requestParams.headers || {}),
        },
        signal: cancelToken ? this.createAbortSignal(cancelToken) : void 0,
        body: typeof body === "undefined" || body === null ? null : payloadFormatter(body, requestParams),
      },
    );
    if (cancelToken) {
      this.abortControllers.delete(cancelToken);
    }
    let data: T;
    let error: E;
    try {
      data = await resp[responseFormat || "json"]();
      if (!resp.ok) {
        if (data?.error?.statusCode === 401) this.handleError?.();
        throw { ...resp, error: data };
      } else return { ...resp, data, error };
    } catch (error) {
      if (error?.error?.statusCode) throw error;
      console.log(error);
    }
  };
}

/**
 * @title prisma-schema (2)
 * @version vr8zlv6h
 * @baseUrl /nest
 * @contact
 *
 * prisma-schema (2)
 *
 * ## Congratulations! Your application is ready.
 *
 *     Please note that all endpoints are secured with JWT Bearer authentication.Use the authentification service of supabase to authenticate.
 *     (https://supabase.com/docs/gotrue/server/about#put-user)
 *     Learn more in [our docs](https://docs.amplication.com)
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * No description
     *
     * @tags app-configs
     * @name AppConfigControllerCreate
     * @request POST:/api/app-configs
     * @secure
     */
    appConfigControllerCreate: (data: AppConfigCreateInput, params: RequestParams = {}) =>
      this.request<AppConfig, ForbiddenException>({
        path: `/api/app-configs`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags app-configs
     * @name AppConfigControllerFindMany
     * @request GET:/api/app-configs
     * @secure
     */
    appConfigControllerFindMany: (
      query?: {
        where?: AppConfigWhereInput;
        orderBy?: AppConfigOrderByInput;
        skip?: number;
        take?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetListAppConfigDto, void>({
        path: `/api/app-configs`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags app-configs
     * @name AppConfigControllerCreateMany
     * @request POST:/api/app-configs/createMany
     * @secure
     */
    appConfigControllerCreateMany: (data: string[], params: RequestParams = {}) =>
      this.request<AppConfig, ForbiddenException>({
        path: `/api/app-configs/createMany`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags app-configs
     * @name AppConfigControllerFindDataForExcel
     * @request GET:/api/app-configs/fileExcel
     * @secure
     */
    appConfigControllerFindDataForExcel: (params: RequestParams = {}) =>
      this.request<FileDto, ForbiddenException>({
        path: `/api/app-configs/fileExcel`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags app-configs
     * @name AppConfigControllerFindOne
     * @request GET:/api/app-configs/{id}
     * @secure
     */
    appConfigControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<AppConfig, ForbiddenException | NotFoundException>({
        path: `/api/app-configs/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags app-configs
     * @name AppConfigControllerUpdate
     * @request PATCH:/api/app-configs/{id}
     * @secure
     */
    appConfigControllerUpdate: (id: string, data: AppConfigUpdateInput, params: RequestParams = {}) =>
      this.request<AppConfig, ForbiddenException | NotFoundException>({
        path: `/api/app-configs/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags app-configs
     * @name AppConfigControllerDelete
     * @request DELETE:/api/app-configs/{id}
     * @secure
     */
    appConfigControllerDelete: (id: string, params: RequestParams = {}) =>
      this.request<AppConfig, ForbiddenException | NotFoundException>({
        path: `/api/app-configs/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthControllerSignUp
     * @request POST:/api/sign_up
     */
    authControllerSignUp: (data: UserCredentials, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/sign_up`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthControllerSignIn
     * @request POST:/api/sign_in
     */
    authControllerSignIn: (data: Credentials, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/sign_in`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthControllerRoot
     * @request GET:/api/template_email_recovery
     */
    authControllerRoot: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/template_email_recovery`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthControllerSendEmailResetPassword
     * @request POST:/api/send_email_reset_password
     */
    authControllerSendEmailResetPassword: (data: EmailResetPasswordCredential, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/send_email_reset_password`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthControllerResetPassword
     * @request POST:/api/reset_password
     */
    authControllerResetPassword: (data: ResetPasswordCredential, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/reset_password`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthControllerInviteUserByEmail
     * @request POST:/api/invite_user_by_email
     */
    authControllerInviteUserByEmail: (data: InviteUserByEmailCredential, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/invite_user_by_email`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthControllerChangeEmail
     * @request POST:/api/change_email
     */
    authControllerChangeEmail: (data: ResetEmailCredential, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/change_email`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UserControllerCreate
     * @request POST:/api/users
     * @secure
     */
    userControllerCreate: (data: UserCreateInput, params: RequestParams = {}) =>
      this.request<User, ForbiddenException>({
        path: `/api/users`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UserControllerFindMany
     * @request GET:/api/users
     * @secure
     */
    userControllerFindMany: (
      query?: {
        where?: UserWhereInput;
        orderBy?: UserOrderByInput;
        skip?: number;
        take?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetListUserDto, void>({
        path: `/api/users`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UserControllerCreateMany
     * @request POST:/api/users/createMany
     * @secure
     */
    userControllerCreateMany: (data: string[], params: RequestParams = {}) =>
      this.request<User, ForbiddenException>({
        path: `/api/users/createMany`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UserControllerFindDataForExcel
     * @request GET:/api/users/fileExcel
     * @secure
     */
    userControllerFindDataForExcel: (params: RequestParams = {}, query: object) =>
      this.request<FileDto, void>({
        path: `/api/users/fileExcel`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UserControllerFindOne
     * @request GET:/api/users/{id}
     * @secure
     */
    userControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<User, ForbiddenException | NotFoundException>({
        path: `/api/users/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UserControllerUpdate
     * @request PATCH:/api/users/{id}
     * @secure
     */
    userControllerUpdate: (id: string, data: UserUpdateInput, params: RequestParams = {}) =>
      this.request<User, ForbiddenException | NotFoundException>({
        path: `/api/users/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UserControllerDelete
     * @request DELETE:/api/users/{id}
     * @secure
     */
    userControllerDelete: (id: string, params: RequestParams = {}) =>
      this.request<User, ForbiddenException | NotFoundException>({
        path: `/api/users/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UserControllerUpdatePassword
     * @request PATCH:/api/users/{id}/resetPassword
     * @secure
     */
    userControllerUpdatePassword: (id: string, data: UpdatePasswordDTO, params: RequestParams = {}) =>
      this.request<User, ForbiddenException | NotFoundException>({
        path: `/api/users/${id}/resetPassword`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UserControllerFindManyAnnonce
     * @request GET:/api/users/{id}/annonce
     * @secure
     */
    userControllerFindManyAnnonce: (
      id: string,
      query?: {
        id?: StringFilter;
        title?: StringNullableFilter;
        content?: StringNullableFilter;
        endDate?: DateTimeNullableFilter;
        annonceType?: "Pub" | "Alert" | "Imm" | "Pro" | "Recommend";
        longitude?: FloatNullableFilter;
        latitude?: FloatNullableFilter;
        users?: UserWhereUniqueInput;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/users/${id}/annonce`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UserControllerCreateAnnonce
     * @request POST:/api/users/{id}/annonce
     * @secure
     */
    userControllerCreateAnnonce: (id: string, data: string[], params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/users/${id}/annonce`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UserControllerUpdateAnnonce
     * @request PATCH:/api/users/{id}/annonce
     * @secure
     */
    userControllerUpdateAnnonce: (id: string, data: string[], params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/users/${id}/annonce`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UserControllerDeleteAnnonce
     * @request DELETE:/api/users/{id}/annonce
     * @secure
     */
    userControllerDeleteAnnonce: (id: string, data: string[], params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/users/${id}/annonce`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UserControllerFindManyInteractions
     * @request GET:/api/users/{id}/interactions
     * @secure
     */
    userControllerFindManyInteractions: (
      id: string,
      query?: {
        id?: StringFilter;
        user?: UserWhereUniqueInput;
        annonce?: AnnonceWhereUniqueInput;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/users/${id}/interactions`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UserControllerCreateInteractions
     * @request POST:/api/users/{id}/interactions
     * @secure
     */
    userControllerCreateInteractions: (id: string, data: string[], params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/users/${id}/interactions`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UserControllerUpdateInteractions
     * @request PATCH:/api/users/{id}/interactions
     * @secure
     */
    userControllerUpdateInteractions: (id: string, data: string[], params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/users/${id}/interactions`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UserControllerDeleteInteractions
     * @request DELETE:/api/users/{id}/interactions
     * @secure
     */
    userControllerDeleteInteractions: (id: string, data: string[], params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/users/${id}/interactions`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UserControllerFindManyInteractionUsers
     * @request GET:/api/users/{id}/interactionUsers
     * @secure
     */
    userControllerFindManyInteractionUsers: (
      id: string,
      query?: {
        id?: StringFilter;
        date?: DateTimeNullableFilter;
        status?: StringNullableFilter;
        user2?: UserWhereUniqueInput;
        users?: UserWhereUniqueInput;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/users/${id}/interactionUsers`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UserControllerCreateInteractionUsers
     * @request POST:/api/users/{id}/interactionUsers
     * @secure
     */
    userControllerCreateInteractionUsers: (id: string, data: string[], params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/users/${id}/interactionUsers`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UserControllerUpdateInteractionUsers
     * @request PATCH:/api/users/{id}/interactionUsers
     * @secure
     */
    userControllerUpdateInteractionUsers: (id: string, data: string[], params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/users/${id}/interactionUsers`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UserControllerDeleteInteractionUsers
     * @request DELETE:/api/users/{id}/interactionUsers
     * @secure
     */
    userControllerDeleteInteractionUsers: (id: string, data: string[], params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/users/${id}/interactionUsers`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UserControllerFindManyInteractionUsers2
     * @request GET:/api/users/{id}/interactionUsers2
     * @secure
     */
    userControllerFindManyInteractionUsers2: (
      id: string,
      query?: {
        id?: StringFilter;
        date?: DateTimeNullableFilter;
        status?: StringNullableFilter;
        user2?: UserWhereUniqueInput;
        users?: UserWhereUniqueInput;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/users/${id}/interactionUsers2`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UserControllerCreateInteractionUsers2
     * @request POST:/api/users/{id}/interactionUsers2
     * @secure
     */
    userControllerCreateInteractionUsers2: (id: string, data: string[], params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/users/${id}/interactionUsers2`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UserControllerUpdateInteractionUsers2
     * @request PATCH:/api/users/{id}/interactionUsers2
     * @secure
     */
    userControllerUpdateInteractionUsers2: (id: string, data: string[], params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/users/${id}/interactionUsers2`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UserControllerDeleteInteractionUsers2
     * @request DELETE:/api/users/{id}/interactionUsers2
     * @secure
     */
    userControllerDeleteInteractionUsers2: (id: string, data: string[], params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/users/${id}/interactionUsers2`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags annonces
     * @name AnnonceControllerCreate
     * @request POST:/api/annonces
     * @secure
     */
    annonceControllerCreate: (data: AnnonceCreateInput, params: RequestParams = {}) =>
      this.request<Annonce, ForbiddenException>({
        path: `/api/annonces`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags annonces
     * @name AnnonceControllerFindMany
     * @request GET:/api/annonces
     * @secure
     */
    annonceControllerFindMany: (
      query?: {
        where?: AnnonceWhereInput;
        orderBy?: AnnonceOrderByInput;
        skip?: number;
        take?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetListAnnonceDto, void>({
        path: `/api/annonces`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags annonces
     * @name AnnonceControllerCreateMany
     * @request POST:/api/annonces/createMany
     * @secure
     */
    annonceControllerCreateMany: (data: string[], params: RequestParams = {}) =>
      this.request<Annonce, ForbiddenException>({
        path: `/api/annonces/createMany`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags annonces
     * @name AnnonceControllerFindDataForExcel
     * @request GET:/api/annonces/fileExcel
     * @secure
     */
    annonceControllerFindDataForExcel: (params: RequestParams = {}) =>
      this.request<FileDto, ForbiddenException>({
        path: `/api/annonces/fileExcel`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags annonces
     * @name AnnonceControllerFindOne
     * @request GET:/api/annonces/{id}
     * @secure
     */
    annonceControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<Annonce, ForbiddenException | NotFoundException>({
        path: `/api/annonces/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags annonces
     * @name AnnonceControllerUpdate
     * @request PATCH:/api/annonces/{id}
     * @secure
     */
    annonceControllerUpdate: (id: string, data: AnnonceUpdateInput, params: RequestParams = {}) =>
      this.request<Annonce, ForbiddenException | NotFoundException>({
        path: `/api/annonces/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags annonces
     * @name AnnonceControllerDelete
     * @request DELETE:/api/annonces/{id}
     * @secure
     */
    annonceControllerDelete: (id: string, params: RequestParams = {}) =>
      this.request<Annonce, ForbiddenException | NotFoundException>({
        path: `/api/annonces/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags annonces
     * @name AnnonceControllerFindManyInteractions
     * @request GET:/api/annonces/{id}/interactions
     * @secure
     */
    annonceControllerFindManyInteractions: (
      id: string,
      query?: {
        id?: StringFilter;
        user?: UserWhereUniqueInput;
        annonce?: AnnonceWhereUniqueInput;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/annonces/${id}/interactions`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags annonces
     * @name AnnonceControllerCreateInteractions
     * @request POST:/api/annonces/{id}/interactions
     * @secure
     */
    annonceControllerCreateInteractions: (id: string, data: string[], params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/annonces/${id}/interactions`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags annonces
     * @name AnnonceControllerUpdateInteractions
     * @request PATCH:/api/annonces/{id}/interactions
     * @secure
     */
    annonceControllerUpdateInteractions: (id: string, data: string[], params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/annonces/${id}/interactions`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags annonces
     * @name AnnonceControllerDeleteInteractions
     * @request DELETE:/api/annonces/{id}/interactions
     * @secure
     */
    annonceControllerDeleteInteractions: (id: string, data: string[], params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/annonces/${id}/interactions`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags interactions
     * @name InteractionControllerCreate
     * @request POST:/api/interactions
     * @secure
     */
    interactionControllerCreate: (data: InteractionCreateInput, params: RequestParams = {}) =>
      this.request<Interaction, ForbiddenException>({
        path: `/api/interactions`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags interactions
     * @name InteractionControllerFindMany
     * @request GET:/api/interactions
     * @secure
     */
    interactionControllerFindMany: (
      query?: {
        where?: InteractionWhereInput;
        orderBy?: InteractionOrderByInput;
        skip?: number;
        take?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetListInteractionDto, void>({
        path: `/api/interactions`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags interactions
     * @name InteractionControllerCreateMany
     * @request POST:/api/interactions/createMany
     * @secure
     */
    interactionControllerCreateMany: (data: string[], params: RequestParams = {}) =>
      this.request<Interaction, ForbiddenException>({
        path: `/api/interactions/createMany`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags interactions
     * @name InteractionControllerFindDataForExcel
     * @request GET:/api/interactions/fileExcel
     * @secure
     */
    interactionControllerFindDataForExcel: (params: RequestParams = {}) =>
      this.request<FileDto, ForbiddenException>({
        path: `/api/interactions/fileExcel`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags interactions
     * @name InteractionControllerFindOne
     * @request GET:/api/interactions/{id}
     * @secure
     */
    interactionControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<Interaction, ForbiddenException | NotFoundException>({
        path: `/api/interactions/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags interactions
     * @name InteractionControllerUpdate
     * @request PATCH:/api/interactions/{id}
     * @secure
     */
    interactionControllerUpdate: (id: string, data: InteractionUpdateInput, params: RequestParams = {}) =>
      this.request<Interaction, ForbiddenException | NotFoundException>({
        path: `/api/interactions/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags interactions
     * @name InteractionControllerDelete
     * @request DELETE:/api/interactions/{id}
     * @secure
     */
    interactionControllerDelete: (id: string, params: RequestParams = {}) =>
      this.request<Interaction, ForbiddenException | NotFoundException>({
        path: `/api/interactions/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags interaction-users
     * @name InteractionUserControllerCreate
     * @request POST:/api/interaction-users
     * @secure
     */
    interactionUserControllerCreate: (data: InteractionUserCreateInput, params: RequestParams = {}) =>
      this.request<InteractionUser, ForbiddenException>({
        path: `/api/interaction-users`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags interaction-users
     * @name InteractionUserControllerFindMany
     * @request GET:/api/interaction-users
     * @secure
     */
    interactionUserControllerFindMany: (
      query?: {
        where?: InteractionUserWhereInput;
        orderBy?: InteractionUserOrderByInput;
        skip?: number;
        take?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetListInteractionUserDto, void>({
        path: `/api/interaction-users`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags interaction-users
     * @name InteractionUserControllerCreateMany
     * @request POST:/api/interaction-users/createMany
     * @secure
     */
    interactionUserControllerCreateMany: (data: string[], params: RequestParams = {}) =>
      this.request<InteractionUser, ForbiddenException>({
        path: `/api/interaction-users/createMany`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags interaction-users
     * @name InteractionUserControllerFindDataForExcel
     * @request GET:/api/interaction-users/fileExcel
     * @secure
     */
    interactionUserControllerFindDataForExcel: (params: RequestParams = {}) =>
      this.request<FileDto, ForbiddenException>({
        path: `/api/interaction-users/fileExcel`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags interaction-users
     * @name InteractionUserControllerFindOne
     * @request GET:/api/interaction-users/{id}
     * @secure
     */
    interactionUserControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<InteractionUser, ForbiddenException | NotFoundException>({
        path: `/api/interaction-users/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags interaction-users
     * @name InteractionUserControllerUpdate
     * @request PATCH:/api/interaction-users/{id}
     * @secure
     */
    interactionUserControllerUpdate: (id: string, data: InteractionUserUpdateInput, params: RequestParams = {}) =>
      this.request<InteractionUser, ForbiddenException | NotFoundException>({
        path: `/api/interaction-users/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags interaction-users
     * @name InteractionUserControllerDelete
     * @request DELETE:/api/interaction-users/{id}
     * @secure
     */
    interactionUserControllerDelete: (id: string, params: RequestParams = {}) =>
      this.request<InteractionUser, ForbiddenException | NotFoundException>({
        path: `/api/interaction-users/${id}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name HealthControllerHealthLive
     * @request GET:/api/_health/live
     */
    healthControllerHealthLive: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/_health/live`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @name HealthControllerHealthReady
     * @request GET:/api/_health/ready
     */
    healthControllerHealthReady: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/_health/ready`,
        method: "GET",
        ...params,
      }),
  };
}
