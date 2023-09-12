export enum METHOD {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

type Options = {
  method: METHOD;
  data?: any;
};

function queryStringify(data: any) {
  if (data === undefined) {
    return "";
  }
  return Object.entries(data).reduce(
    (acc, e, i) => `${acc}${i > 0 ? "&" : "?"}${e[0]}=${e[1]}`,
    "",
  );
}

export default class HTTPTransport {
  static API_URL = "https://ya-praktikum.tech/api/v2";

  protected endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = `${HTTPTransport.API_URL}${endpoint}`;
  }

  public get<Response>(data?: unknown, path = "/"): Promise<Response> {
    const query: string = queryStringify(data);
    return this.request<Response>(this.endpoint + path + query);
  }

  public post<Response = void>(
    path: string,
    data?: unknown,
  ): Promise<Response> {
    return this.request<Response>(this.endpoint + path, {
      method: METHOD.POST,
      data,
    });
  }

  public put<Response = void>(path: string, data: unknown): Promise<Response> {
    return this.request<Response>(this.endpoint + path, {
      method: METHOD.PUT,
      data,
    });
  }

  public patch<Response = void>(
    path: string,
    data: unknown,
  ): Promise<Response> {
    return this.request<Response>(this.endpoint + path, {
      method: METHOD.PATCH,
      data,
    });
  }

  public delete<Response>(path: string, data?: unknown): Promise<Response> {
    return this.request<Response>(this.endpoint + path, {
      method: METHOD.DELETE,
      data,
    });
  }

  private request<Response>(
    url: string,
    options: Options = { method: METHOD.GET },
  ): Promise<Response> {
    const { method, data } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);

      xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status < 400) {
            resolve(xhr.response);
          } else {
            reject(xhr.response);
          }
        }
      };

      xhr.onabort = () => reject(new Error("abort"));
      xhr.onerror = () => reject(new Error("network error"));
      xhr.ontimeout = () => reject(new Error("timeout"));

      if (!(data instanceof FormData)) {
        xhr.setRequestHeader("Content-Type", "application/json");
      }

      xhr.withCredentials = true;
      xhr.responseType = "json";

      if (method === METHOD.GET || !data) {
        xhr.send();
      } else if (data instanceof FormData) {
        xhr.send(data);
      } else {
        xhr.send(JSON.stringify(data));
      }
    });
  }
}
