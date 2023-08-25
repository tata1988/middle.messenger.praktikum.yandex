enum METHODS {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    PATCH = 'PATCH',
    DELETE = 'DELETE'
};

type Options = {
    method: METHODS;
    data?: any;
};

type OptionsWithoutMethod = Omit<Options, 'method'>;

function queryStringify(data: any) {
    if (data === undefined) {
        return '';
    } else {
        return Object.entries(data).reduce((acc, e, i) =>
            `${acc}${i > 0 ? '&' : '?'}${e[0]}=${e[1]}`,
            '');
    }
};

export class HTTPTransport {

    get(url: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> {
        const api: string = queryStringify(options.data);
        return this.request(`${url}${api}`, { ...options, method: METHODS.GET });
    };

    put = (url: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> => {
        return this.request(url, { ...options, method: METHODS.PUT });
    };

    post = (url: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> => {
        return this.request(url, { ...options, method: METHODS.POST });
    };

    delete = (url: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> => {
        return this.request(url, { ...options, method: METHODS.DELETE });
    };

    request(url: string, options: Options = { method: METHODS.GET }): Promise<XMLHttpRequest> {
        const { method, data } = options;

        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open(method, url);

            xhr.onload = function () {
                resolve(xhr);
            };

            xhr.onabort = reject;
            xhr.onerror = reject;
            xhr.ontimeout = reject;

            if (method === METHODS.GET || !data) {
                xhr.send();
            } else {
                xhr.send(queryStringify(data));
            }
        });
    };
}
