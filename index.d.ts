export type Session = any;

export type Context = any;

export interface Entities {
    [prop: string]: any;
}

export interface Request {
    sessionId: Session;
    context: Context;
    text: string;
    entities: Entities;
}

export interface Response {
    text: string;
    quickreplies: string[];
}

export type SendAction = (request: Request, response: Response)
                            => Promise<any>;

//quick hack here for Typescript to not complain about SendAction / Action
//incompatibility
export type Action = (request: Request, ...params: any[])
                            => Promise<Context>;

export interface Actions {
    send: SendAction;
    [prop: string]: Action;
}

export interface HubotResponse {
    send: (msg: string) => void;
    reply: (msg: string) => void;
    emote: (msg: string) => void;
    match: string[];
}

type Callback = (err: any, context: any, res: any) => void;
type HubotCallback = (res: HubotResponse) => void;

interface Bot {
    listen: (reg: RegExp, cb: HubotCallback) => void;
    hear: (reg: RegExp, cb: HubotCallback) => void;
    respond: (reg: RegExp, cb: HubotCallback) => void;
}

interface Log {
    DEBUG: string;
    INFO: string;
    WARN: string;
    ERROR: string;
    Logger: any;
};

export class Robot {

    public getMsg: {
        (msg: string): string;
    };

    public respond: {
        (reg: RegExp, call: Callback): void;
    };

    constructor(
        WIT_TOKEN: string,
        actions: Actions,
        robot: Bot,
        logger?: any
    )
}

export log Log;

export function firstEntityValue(e: Entities, s: string): string;

