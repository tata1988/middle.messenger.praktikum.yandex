import { SinonStub, createSandbox } from 'sinon';
import { expect, use } from 'chai';
import sinonChai from 'sinon-chai';
import HTTPTransport from './HttpTransport.ts';


describe('HttpTransport', () => {
  use(sinonChai);
  const sandbox = createSandbox();
  let http: HTTPTransport;
  let request: SinonStub<any>;

  beforeEach(() => {
    http = new HTTPTransport('/');
    request = sandbox.stub(http, 'request' as keyof typeof http).callsFake(() => Promise.resolve());
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('преобразовывает объект запроса в строку для запроса GET, где все параметры являются строками', () => {

    http.get("", {data: {a: 1, b: 2}});

    expect(request).calledWithMatch("?a=1&b=2", "GET");
  });

});