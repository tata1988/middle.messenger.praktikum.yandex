import sinon, {
  SinonFakeXMLHttpRequest,
  SinonFakeXMLHttpRequestStatic,
} from "sinon";
import { expect } from "chai";

import HTTPTransport from "./HttpTransport.ts";

declare global {
  namespace NodeJS {
    export interface MyGlobal extends Global {
      XMLHttpRequest: SinonFakeXMLHttpRequestStatic;
    }
  }
}

describe("HTTPTransport", () => {
  let xhr: SinonFakeXMLHttpRequestStatic;
  let instance: HTTPTransport;
  let requests: SinonFakeXMLHttpRequest[] = [];

  beforeEach(() => {
    xhr = sinon.useFakeXMLHttpRequest();

    (global as unknown as NodeJS.MyGlobal).XMLHttpRequest = xhr;

    xhr.onCreate = (request: SinonFakeXMLHttpRequest) => {
      requests.push(request);
    };

    instance = new HTTPTransport("/auth");
  });

  afterEach(() => {
    requests = [];
  });

  it(".get() should send GET request", () => {
    instance.get("/user");

    const [request] = requests;

    expect(request.method).to.eq("GET");
  });

  it(".post() should send POST request", () => {
    instance.post("/user");

    const [request] = requests;

    expect(request.method).to.eq("POST");
  });

  it(".put() should send PUT request", () => {
    const testOptions = {
      data: {
        login: "Matrena",
        password: "*******",
      },
      timeout: 5000,
    };
    instance.put("/user", testOptions);

    const [request] = requests;

    expect(request.method).to.eq("PUT");
  });

  it(".delete() should send DELETE request", () => {
    const testOptions = {
      data: {
        login: "Matrena",
        password: "*******",
      },
      timeout: 5000,
    };
    instance.delete("/user", testOptions);

    const [request] = requests;

    expect(request.method).to.eq("DELETE");
  });

  it(".patch() should send PATCH request", () => {
    const testOptions = {
      data: {
        login: "Matrena",
        password: "*******",
      },
      timeout: 5000,
    };
    instance.patch("/user", testOptions);

    const [request] = requests;

    expect(request.method).to.eq("PATCH");
  });
});
