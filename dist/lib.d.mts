import * as _m0 from 'protobufjs/minimal';
import { RTCRtpTransceiver, MediaStream, MediaStreamTrack, RTCPeerConnection } from 'react-native-webrtc';

declare enum Kind {
    AUDIO = 0,
    VIDEO = 1,
    UNRECOGNIZED = -1
}
declare enum BitrateControlMode {
    DYNAMIC_CONSUMERS = 0,
    MAX_BITRATE = 1,
    UNRECOGNIZED = -1
}
declare enum Receiver_Status {
    WAITING = 0,
    ACTIVE = 1,
    INACTIVE = 2,
    UNRECOGNIZED = -1
}
declare enum Sender_Status {
    ACTIVE = 0,
    INACTIVE = 1,
    UNRECOGNIZED = -1
}
interface Error {
    code: number;
    message: string;
}
declare const Error: {
    encode(message: Error, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Error;
    fromJSON(object: any): Error;
    toJSON(message: Error): unknown;
    create<I extends Exact$3<DeepPartial$3<Error>, I>>(base?: I): Error;
    fromPartial<I extends Exact$3<DeepPartial$3<Error>, I>>(object: I): Error;
};
interface Receiver {
    kind: Kind;
    name: string;
    state: Receiver_State | undefined;
}
declare const Receiver: {
    encode(message: Receiver, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Receiver;
    fromJSON(object: any): Receiver;
    toJSON(message: Receiver): unknown;
    create<I extends Exact$3<DeepPartial$3<Receiver>, I>>(base?: I): Receiver;
    fromPartial<I extends Exact$3<DeepPartial$3<Receiver>, I>>(object: I): Receiver;
};
interface Receiver_Source {
    peer: string;
    track: string;
}
declare const Receiver_Source: {
    encode(message: Receiver_Source, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Receiver_Source;
    fromJSON(object: any): Receiver_Source;
    toJSON(message: Receiver_Source): unknown;
    create<I extends Exact$3<DeepPartial$3<Receiver_Source>, I>>(base?: I): Receiver_Source;
    fromPartial<I extends Exact$3<DeepPartial$3<Receiver_Source>, I>>(object: I): Receiver_Source;
};
interface Receiver_Config {
    priority: number;
    maxSpatial: number;
    maxTemporal: number;
    minSpatial?: number | undefined;
    minTemporal?: number | undefined;
}
declare const Receiver_Config: {
    encode(message: Receiver_Config, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Receiver_Config;
    fromJSON(object: any): Receiver_Config;
    toJSON(message: Receiver_Config): unknown;
    create<I extends Exact$3<DeepPartial$3<Receiver_Config>, I>>(base?: I): Receiver_Config;
    fromPartial<I extends Exact$3<DeepPartial$3<Receiver_Config>, I>>(object: I): Receiver_Config;
};
interface Receiver_State {
    config: Receiver_Config | undefined;
    source?: Receiver_Source | undefined;
}
declare const Receiver_State: {
    encode(message: Receiver_State, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Receiver_State;
    fromJSON(object: any): Receiver_State;
    toJSON(message: Receiver_State): unknown;
    create<I extends Exact$3<DeepPartial$3<Receiver_State>, I>>(base?: I): Receiver_State;
    fromPartial<I extends Exact$3<DeepPartial$3<Receiver_State>, I>>(object: I): Receiver_State;
};
interface Sender {
    kind: Kind;
    name: string;
    state: Sender_State | undefined;
}
declare const Sender: {
    encode(message: Sender, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Sender;
    fromJSON(object: any): Sender;
    toJSON(message: Sender): unknown;
    create<I extends Exact$3<DeepPartial$3<Sender>, I>>(base?: I): Sender;
    fromPartial<I extends Exact$3<DeepPartial$3<Sender>, I>>(object: I): Sender;
};
interface Sender_Source {
    id: string;
    screen: boolean;
    metadata?: string | undefined;
}
declare const Sender_Source: {
    encode(message: Sender_Source, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Sender_Source;
    fromJSON(object: any): Sender_Source;
    toJSON(message: Sender_Source): unknown;
    create<I extends Exact$3<DeepPartial$3<Sender_Source>, I>>(base?: I): Sender_Source;
    fromPartial<I extends Exact$3<DeepPartial$3<Sender_Source>, I>>(object: I): Sender_Source;
};
interface Sender_Config {
    priority: number;
    bitrate: BitrateControlMode;
}
declare const Sender_Config: {
    encode(message: Sender_Config, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Sender_Config;
    fromJSON(object: any): Sender_Config;
    toJSON(message: Sender_Config): unknown;
    create<I extends Exact$3<DeepPartial$3<Sender_Config>, I>>(base?: I): Sender_Config;
    fromPartial<I extends Exact$3<DeepPartial$3<Sender_Config>, I>>(object: I): Sender_Config;
};
interface Sender_State {
    config: Sender_Config | undefined;
    source?: Sender_Source | undefined;
}
declare const Sender_State: {
    encode(message: Sender_State, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Sender_State;
    fromJSON(object: any): Sender_State;
    toJSON(message: Sender_State): unknown;
    create<I extends Exact$3<DeepPartial$3<Sender_State>, I>>(base?: I): Sender_State;
    fromPartial<I extends Exact$3<DeepPartial$3<Sender_State>, I>>(object: I): Sender_State;
};
interface Tracks {
    receivers: Receiver[];
    senders: Sender[];
}
declare const Tracks: {
    encode(message: Tracks, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Tracks;
    fromJSON(object: any): Tracks;
    toJSON(message: Tracks): unknown;
    create<I extends Exact$3<DeepPartial$3<Tracks>, I>>(base?: I): Tracks;
    fromPartial<I extends Exact$3<DeepPartial$3<Tracks>, I>>(object: I): Tracks;
};
interface RoomInfoPublish {
    peer: boolean;
    tracks: boolean;
}
declare const RoomInfoPublish: {
    encode(message: RoomInfoPublish, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RoomInfoPublish;
    fromJSON(object: any): RoomInfoPublish;
    toJSON(message: RoomInfoPublish): unknown;
    create<I extends Exact$3<DeepPartial$3<RoomInfoPublish>, I>>(base?: I): RoomInfoPublish;
    fromPartial<I extends Exact$3<DeepPartial$3<RoomInfoPublish>, I>>(object: I): RoomInfoPublish;
};
interface RoomInfoSubscribe {
    peers: boolean;
    tracks: boolean;
}
declare const RoomInfoSubscribe: {
    encode(message: RoomInfoSubscribe, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RoomInfoSubscribe;
    fromJSON(object: any): RoomInfoSubscribe;
    toJSON(message: RoomInfoSubscribe): unknown;
    create<I extends Exact$3<DeepPartial$3<RoomInfoSubscribe>, I>>(base?: I): RoomInfoSubscribe;
    fromPartial<I extends Exact$3<DeepPartial$3<RoomInfoSubscribe>, I>>(object: I): RoomInfoSubscribe;
};
type Builtin$3 = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial$3<T> = T extends Builtin$3 ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial$3<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial$3<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial$3<T[K]>;
} : Partial<T>;
type KeysOfUnion$3<T> = T extends T ? keyof T : never;
type Exact$3<P, I extends P> = P extends Builtin$3 ? P : P & {
    [K in keyof P]: Exact$3<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion$3<P>>]: never;
};

interface IEventEmitter {
    emit(event: string, ...args: any): void;
    on(event: string, cb: any): void;
    off(event: string, cb: any): void;
    offAllListeners(): void;
    removeAllListeners(): void;
    removeListener(event: string, cb: any): void;
}
declare class EventEmitter implements IEventEmitter {
    events: any;
    emit(event: string, ...args: any): void;
    on(event: string, cb: any): () => any;
    off(event: string, cb: any): void;
    offAllListeners(): void;
    removeAllListeners(): void;
    removeListener(event: string, cb: any): void;
}
declare class ReadyWaiter {
    ready: boolean;
    waits: [() => any, (err: any) => any][];
    setReady: () => void;
    setError: (e: any) => void;
    waitReady: () => Promise<void>;
}

declare enum Mode {
    AUTO = 0,
    MANUAL = 1,
    UNRECOGNIZED = -1
}
interface Config$1 {
    mode: Mode;
    outputs: string[];
    sources: Receiver_Source[];
}
declare const Config$1: {
    encode(message: Config$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Config$1;
    fromJSON(object: any): Config$1;
    toJSON(message: Config$1): unknown;
    create<I extends Exact$2<DeepPartial$2<Config$1>, I>>(base?: I): Config$1;
    fromPartial<I extends Exact$2<DeepPartial$2<Config$1>, I>>(object: I): Config$1;
};
interface Request$2 {
    attach?: Request_Attach | undefined;
    detach?: Request_Detach | undefined;
}
declare const Request$2: {
    encode(message: Request$2, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Request$2;
    fromJSON(object: any): Request$2;
    toJSON(message: Request$2): unknown;
    create<I extends Exact$2<DeepPartial$2<Request$2>, I>>(base?: I): Request$2;
    fromPartial<I extends Exact$2<DeepPartial$2<Request$2>, I>>(object: I): Request$2;
};
interface Request_Attach {
    sources: Receiver_Source[];
}
declare const Request_Attach: {
    encode(message: Request_Attach, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Request_Attach;
    fromJSON(object: any): Request_Attach;
    toJSON(message: Request_Attach): unknown;
    create<I extends Exact$2<DeepPartial$2<Request_Attach>, I>>(base?: I): Request_Attach;
    fromPartial<I extends Exact$2<DeepPartial$2<Request_Attach>, I>>(object: I): Request_Attach;
};
interface Request_Detach {
    sources: Receiver_Source[];
}
declare const Request_Detach: {
    encode(message: Request_Detach, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Request_Detach;
    fromJSON(object: any): Request_Detach;
    toJSON(message: Request_Detach): unknown;
    create<I extends Exact$2<DeepPartial$2<Request_Detach>, I>>(base?: I): Request_Detach;
    fromPartial<I extends Exact$2<DeepPartial$2<Request_Detach>, I>>(object: I): Request_Detach;
};
interface Response$2 {
    attach?: Response_Attach | undefined;
    detach?: Response_Detach | undefined;
}
declare const Response$2: {
    encode(message: Response$2, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Response$2;
    fromJSON(object: any): Response$2;
    toJSON(message: Response$2): unknown;
    create<I extends Exact$2<DeepPartial$2<Response$2>, I>>(base?: I): Response$2;
    fromPartial<I extends Exact$2<DeepPartial$2<Response$2>, I>>(object: I): Response$2;
};
interface Response_Attach {
}
declare const Response_Attach: {
    encode(_: Response_Attach, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Response_Attach;
    fromJSON(_: any): Response_Attach;
    toJSON(_: Response_Attach): unknown;
    create<I extends Exact$2<DeepPartial$2<Response_Attach>, I>>(base?: I): Response_Attach;
    fromPartial<I extends Exact$2<DeepPartial$2<Response_Attach>, I>>(_: I): Response_Attach;
};
interface Response_Detach {
}
declare const Response_Detach: {
    encode(_: Response_Detach, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Response_Detach;
    fromJSON(_: any): Response_Detach;
    toJSON(_: Response_Detach): unknown;
    create<I extends Exact$2<DeepPartial$2<Response_Detach>, I>>(base?: I): Response_Detach;
    fromPartial<I extends Exact$2<DeepPartial$2<Response_Detach>, I>>(_: I): Response_Detach;
};
interface ServerEvent {
    slotSet?: ServerEvent_SlotSet | undefined;
    slotUnset?: ServerEvent_SlotUnset | undefined;
}
declare const ServerEvent: {
    encode(message: ServerEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ServerEvent;
    fromJSON(object: any): ServerEvent;
    toJSON(message: ServerEvent): unknown;
    create<I extends Exact$2<DeepPartial$2<ServerEvent>, I>>(base?: I): ServerEvent;
    fromPartial<I extends Exact$2<DeepPartial$2<ServerEvent>, I>>(object: I): ServerEvent;
};
interface ServerEvent_SlotSet {
    slot: number;
    source: Receiver_Source | undefined;
}
declare const ServerEvent_SlotSet: {
    encode(message: ServerEvent_SlotSet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ServerEvent_SlotSet;
    fromJSON(object: any): ServerEvent_SlotSet;
    toJSON(message: ServerEvent_SlotSet): unknown;
    create<I extends Exact$2<DeepPartial$2<ServerEvent_SlotSet>, I>>(base?: I): ServerEvent_SlotSet;
    fromPartial<I extends Exact$2<DeepPartial$2<ServerEvent_SlotSet>, I>>(object: I): ServerEvent_SlotSet;
};
interface ServerEvent_SlotUnset {
    slot: number;
}
declare const ServerEvent_SlotUnset: {
    encode(message: ServerEvent_SlotUnset, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ServerEvent_SlotUnset;
    fromJSON(object: any): ServerEvent_SlotUnset;
    toJSON(message: ServerEvent_SlotUnset): unknown;
    create<I extends Exact$2<DeepPartial$2<ServerEvent_SlotUnset>, I>>(base?: I): ServerEvent_SlotUnset;
    fromPartial<I extends Exact$2<DeepPartial$2<ServerEvent_SlotUnset>, I>>(object: I): ServerEvent_SlotUnset;
};
type Builtin$2 = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial$2<T> = T extends Builtin$2 ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial$2<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial$2<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial$2<T[K]>;
} : Partial<T>;
type KeysOfUnion$2<T> = T extends T ? keyof T : never;
type Exact$2<P, I extends P> = P extends Builtin$2 ? P : P & {
    [K in keyof P]: Exact$2<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion$2<P>>]: never;
};

interface Config {
    mixer?: Config$1 | undefined;
}
declare const Config: {
    encode(message: Config, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Config;
    fromJSON(object: any): Config;
    toJSON(message: Config): unknown;
    create<I extends Exact$1<DeepPartial$1<Config>, I>>(base?: I): Config;
    fromPartial<I extends Exact$1<DeepPartial$1<Config>, I>>(object: I): Config;
};
interface Request$1 {
    mixer?: Request$2 | undefined;
}
declare const Request$1: {
    encode(message: Request$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Request$1;
    fromJSON(object: any): Request$1;
    toJSON(message: Request$1): unknown;
    create<I extends Exact$1<DeepPartial$1<Request$1>, I>>(base?: I): Request$1;
    fromPartial<I extends Exact$1<DeepPartial$1<Request$1>, I>>(object: I): Request$1;
};
interface Response$1 {
    mixer?: Response$2 | undefined;
}
declare const Response$1: {
    encode(message: Response$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Response$1;
    fromJSON(object: any): Response$1;
    toJSON(message: Response$1): unknown;
    create<I extends Exact$1<DeepPartial$1<Response$1>, I>>(base?: I): Response$1;
    fromPartial<I extends Exact$1<DeepPartial$1<Response$1>, I>>(object: I): Response$1;
};
type Builtin$1 = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial$1<T> = T extends Builtin$1 ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial$1<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial$1<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial$1<T[K]>;
} : Partial<T>;
type KeysOfUnion$1<T> = T extends T ? keyof T : never;
type Exact$1<P, I extends P> = P extends Builtin$1 ? P : P & {
    [K in keyof P]: Exact$1<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion$1<P>>]: never;
};

interface RoomJoin {
    room: string;
    peer: string;
    publish: RoomInfoPublish | undefined;
    subscribe: RoomInfoSubscribe | undefined;
    features: Config | undefined;
    metadata?: string | undefined;
}
declare const RoomJoin: {
    encode(message: RoomJoin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RoomJoin;
    fromJSON(object: any): RoomJoin;
    toJSON(message: RoomJoin): unknown;
    create<I extends Exact<DeepPartial<RoomJoin>, I>>(base?: I): RoomJoin;
    fromPartial<I extends Exact<DeepPartial<RoomJoin>, I>>(object: I): RoomJoin;
};
interface Request {
    reqId: number;
    session?: Request_Session | undefined;
    room?: Request_Room | undefined;
    sender?: Request_Sender | undefined;
    receiver?: Request_Receiver | undefined;
    features?: Request$1 | undefined;
    messageChannel?: Request_MessageChannel | undefined;
}
declare const Request: {
    encode(message: Request, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Request;
    fromJSON(object: any): Request;
    toJSON(message: Request): unknown;
    create<I extends Exact<DeepPartial<Request>, I>>(base?: I): Request;
    fromPartial<I extends Exact<DeepPartial<Request>, I>>(object: I): Request;
};
interface Request_Session {
    join?: Request_Session_Join | undefined;
    leave?: Request_Session_Leave | undefined;
    sdp?: Request_Session_UpdateSdp | undefined;
    disconnect?: Request_Session_Disconnect | undefined;
}
declare const Request_Session: {
    encode(message: Request_Session, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Request_Session;
    fromJSON(object: any): Request_Session;
    toJSON(message: Request_Session): unknown;
    create<I extends Exact<DeepPartial<Request_Session>, I>>(base?: I): Request_Session;
    fromPartial<I extends Exact<DeepPartial<Request_Session>, I>>(object: I): Request_Session;
};
interface Request_Session_Join {
    info: RoomJoin | undefined;
    token: string;
}
declare const Request_Session_Join: {
    encode(message: Request_Session_Join, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Request_Session_Join;
    fromJSON(object: any): Request_Session_Join;
    toJSON(message: Request_Session_Join): unknown;
    create<I extends Exact<DeepPartial<Request_Session_Join>, I>>(base?: I): Request_Session_Join;
    fromPartial<I extends Exact<DeepPartial<Request_Session_Join>, I>>(object: I): Request_Session_Join;
};
interface Request_Session_Leave {
}
declare const Request_Session_Leave: {
    encode(_: Request_Session_Leave, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Request_Session_Leave;
    fromJSON(_: any): Request_Session_Leave;
    toJSON(_: Request_Session_Leave): unknown;
    create<I extends Exact<DeepPartial<Request_Session_Leave>, I>>(base?: I): Request_Session_Leave;
    fromPartial<I extends Exact<DeepPartial<Request_Session_Leave>, I>>(_: I): Request_Session_Leave;
};
interface Request_Session_UpdateSdp {
    tracks: Tracks | undefined;
    sdp: string;
}
declare const Request_Session_UpdateSdp: {
    encode(message: Request_Session_UpdateSdp, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Request_Session_UpdateSdp;
    fromJSON(object: any): Request_Session_UpdateSdp;
    toJSON(message: Request_Session_UpdateSdp): unknown;
    create<I extends Exact<DeepPartial<Request_Session_UpdateSdp>, I>>(base?: I): Request_Session_UpdateSdp;
    fromPartial<I extends Exact<DeepPartial<Request_Session_UpdateSdp>, I>>(object: I): Request_Session_UpdateSdp;
};
interface Request_Session_Disconnect {
}
declare const Request_Session_Disconnect: {
    encode(_: Request_Session_Disconnect, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Request_Session_Disconnect;
    fromJSON(_: any): Request_Session_Disconnect;
    toJSON(_: Request_Session_Disconnect): unknown;
    create<I extends Exact<DeepPartial<Request_Session_Disconnect>, I>>(base?: I): Request_Session_Disconnect;
    fromPartial<I extends Exact<DeepPartial<Request_Session_Disconnect>, I>>(_: I): Request_Session_Disconnect;
};
interface Request_Room {
    subscribe?: Request_Room_SubscribePeer | undefined;
    unsubscribe?: Request_Room_UnsubscribePeer | undefined;
}
declare const Request_Room: {
    encode(message: Request_Room, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Request_Room;
    fromJSON(object: any): Request_Room;
    toJSON(message: Request_Room): unknown;
    create<I extends Exact<DeepPartial<Request_Room>, I>>(base?: I): Request_Room;
    fromPartial<I extends Exact<DeepPartial<Request_Room>, I>>(object: I): Request_Room;
};
interface Request_Room_SubscribePeer {
    peer: string;
}
declare const Request_Room_SubscribePeer: {
    encode(message: Request_Room_SubscribePeer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Request_Room_SubscribePeer;
    fromJSON(object: any): Request_Room_SubscribePeer;
    toJSON(message: Request_Room_SubscribePeer): unknown;
    create<I extends Exact<DeepPartial<Request_Room_SubscribePeer>, I>>(base?: I): Request_Room_SubscribePeer;
    fromPartial<I extends Exact<DeepPartial<Request_Room_SubscribePeer>, I>>(object: I): Request_Room_SubscribePeer;
};
interface Request_Room_UnsubscribePeer {
    peer: string;
}
declare const Request_Room_UnsubscribePeer: {
    encode(message: Request_Room_UnsubscribePeer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Request_Room_UnsubscribePeer;
    fromJSON(object: any): Request_Room_UnsubscribePeer;
    toJSON(message: Request_Room_UnsubscribePeer): unknown;
    create<I extends Exact<DeepPartial<Request_Room_UnsubscribePeer>, I>>(base?: I): Request_Room_UnsubscribePeer;
    fromPartial<I extends Exact<DeepPartial<Request_Room_UnsubscribePeer>, I>>(object: I): Request_Room_UnsubscribePeer;
};
interface Request_MessageChannel {
    label: string;
    startPub?: Request_MessageChannel_StartPublish | undefined;
    stopPub?: Request_MessageChannel_StopPublish | undefined;
    sub?: Request_MessageChannel_Subscribe | undefined;
    unsub?: Request_MessageChannel_Unsubscribe | undefined;
    pub?: Request_MessageChannel_Publish | undefined;
}
declare const Request_MessageChannel: {
    encode(message: Request_MessageChannel, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Request_MessageChannel;
    fromJSON(object: any): Request_MessageChannel;
    toJSON(message: Request_MessageChannel): unknown;
    create<I extends Exact<DeepPartial<Request_MessageChannel>, I>>(base?: I): Request_MessageChannel;
    fromPartial<I extends Exact<DeepPartial<Request_MessageChannel>, I>>(object: I): Request_MessageChannel;
};
/** TODO: Add Feedback */
interface Request_MessageChannel_StartPublish {
}
declare const Request_MessageChannel_StartPublish: {
    encode(_: Request_MessageChannel_StartPublish, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Request_MessageChannel_StartPublish;
    fromJSON(_: any): Request_MessageChannel_StartPublish;
    toJSON(_: Request_MessageChannel_StartPublish): unknown;
    create<I extends Exact<DeepPartial<Request_MessageChannel_StartPublish>, I>>(base?: I): Request_MessageChannel_StartPublish;
    fromPartial<I extends Exact<DeepPartial<Request_MessageChannel_StartPublish>, I>>(_: I): Request_MessageChannel_StartPublish;
};
interface Request_MessageChannel_StopPublish {
}
declare const Request_MessageChannel_StopPublish: {
    encode(_: Request_MessageChannel_StopPublish, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Request_MessageChannel_StopPublish;
    fromJSON(_: any): Request_MessageChannel_StopPublish;
    toJSON(_: Request_MessageChannel_StopPublish): unknown;
    create<I extends Exact<DeepPartial<Request_MessageChannel_StopPublish>, I>>(base?: I): Request_MessageChannel_StopPublish;
    fromPartial<I extends Exact<DeepPartial<Request_MessageChannel_StopPublish>, I>>(_: I): Request_MessageChannel_StopPublish;
};
interface Request_MessageChannel_Subscribe {
}
declare const Request_MessageChannel_Subscribe: {
    encode(_: Request_MessageChannel_Subscribe, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Request_MessageChannel_Subscribe;
    fromJSON(_: any): Request_MessageChannel_Subscribe;
    toJSON(_: Request_MessageChannel_Subscribe): unknown;
    create<I extends Exact<DeepPartial<Request_MessageChannel_Subscribe>, I>>(base?: I): Request_MessageChannel_Subscribe;
    fromPartial<I extends Exact<DeepPartial<Request_MessageChannel_Subscribe>, I>>(_: I): Request_MessageChannel_Subscribe;
};
interface Request_MessageChannel_Unsubscribe {
}
declare const Request_MessageChannel_Unsubscribe: {
    encode(_: Request_MessageChannel_Unsubscribe, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Request_MessageChannel_Unsubscribe;
    fromJSON(_: any): Request_MessageChannel_Unsubscribe;
    toJSON(_: Request_MessageChannel_Unsubscribe): unknown;
    create<I extends Exact<DeepPartial<Request_MessageChannel_Unsubscribe>, I>>(base?: I): Request_MessageChannel_Unsubscribe;
    fromPartial<I extends Exact<DeepPartial<Request_MessageChannel_Unsubscribe>, I>>(_: I): Request_MessageChannel_Unsubscribe;
};
interface Request_MessageChannel_Publish {
    data: Uint8Array;
}
declare const Request_MessageChannel_Publish: {
    encode(message: Request_MessageChannel_Publish, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Request_MessageChannel_Publish;
    fromJSON(object: any): Request_MessageChannel_Publish;
    toJSON(message: Request_MessageChannel_Publish): unknown;
    create<I extends Exact<DeepPartial<Request_MessageChannel_Publish>, I>>(base?: I): Request_MessageChannel_Publish;
    fromPartial<I extends Exact<DeepPartial<Request_MessageChannel_Publish>, I>>(object: I): Request_MessageChannel_Publish;
};
interface Request_Sender {
    name: string;
    attach?: Request_Sender_Attach | undefined;
    detach?: Request_Sender_Detach | undefined;
    config?: Sender_Config | undefined;
}
declare const Request_Sender: {
    encode(message: Request_Sender, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Request_Sender;
    fromJSON(object: any): Request_Sender;
    toJSON(message: Request_Sender): unknown;
    create<I extends Exact<DeepPartial<Request_Sender>, I>>(base?: I): Request_Sender;
    fromPartial<I extends Exact<DeepPartial<Request_Sender>, I>>(object: I): Request_Sender;
};
interface Request_Sender_Attach {
    source: Sender_Source | undefined;
    config: Sender_Config | undefined;
}
declare const Request_Sender_Attach: {
    encode(message: Request_Sender_Attach, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Request_Sender_Attach;
    fromJSON(object: any): Request_Sender_Attach;
    toJSON(message: Request_Sender_Attach): unknown;
    create<I extends Exact<DeepPartial<Request_Sender_Attach>, I>>(base?: I): Request_Sender_Attach;
    fromPartial<I extends Exact<DeepPartial<Request_Sender_Attach>, I>>(object: I): Request_Sender_Attach;
};
interface Request_Sender_Detach {
}
declare const Request_Sender_Detach: {
    encode(_: Request_Sender_Detach, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Request_Sender_Detach;
    fromJSON(_: any): Request_Sender_Detach;
    toJSON(_: Request_Sender_Detach): unknown;
    create<I extends Exact<DeepPartial<Request_Sender_Detach>, I>>(base?: I): Request_Sender_Detach;
    fromPartial<I extends Exact<DeepPartial<Request_Sender_Detach>, I>>(_: I): Request_Sender_Detach;
};
interface Request_Receiver {
    name: string;
    attach?: Request_Receiver_Attach | undefined;
    detach?: Request_Receiver_Detach | undefined;
    config?: Receiver_Config | undefined;
}
declare const Request_Receiver: {
    encode(message: Request_Receiver, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Request_Receiver;
    fromJSON(object: any): Request_Receiver;
    toJSON(message: Request_Receiver): unknown;
    create<I extends Exact<DeepPartial<Request_Receiver>, I>>(base?: I): Request_Receiver;
    fromPartial<I extends Exact<DeepPartial<Request_Receiver>, I>>(object: I): Request_Receiver;
};
interface Request_Receiver_Attach {
    source: Receiver_Source | undefined;
    config: Receiver_Config | undefined;
}
declare const Request_Receiver_Attach: {
    encode(message: Request_Receiver_Attach, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Request_Receiver_Attach;
    fromJSON(object: any): Request_Receiver_Attach;
    toJSON(message: Request_Receiver_Attach): unknown;
    create<I extends Exact<DeepPartial<Request_Receiver_Attach>, I>>(base?: I): Request_Receiver_Attach;
    fromPartial<I extends Exact<DeepPartial<Request_Receiver_Attach>, I>>(object: I): Request_Receiver_Attach;
};
interface Request_Receiver_Detach {
}
declare const Request_Receiver_Detach: {
    encode(_: Request_Receiver_Detach, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Request_Receiver_Detach;
    fromJSON(_: any): Request_Receiver_Detach;
    toJSON(_: Request_Receiver_Detach): unknown;
    create<I extends Exact<DeepPartial<Request_Receiver_Detach>, I>>(base?: I): Request_Receiver_Detach;
    fromPartial<I extends Exact<DeepPartial<Request_Receiver_Detach>, I>>(_: I): Request_Receiver_Detach;
};
interface Response {
    reqId: number;
    error?: Error | undefined;
    session?: Response_Session | undefined;
    room?: Response_Room | undefined;
    sender?: Response_Sender | undefined;
    receiver?: Response_Receiver | undefined;
    features?: Response$1 | undefined;
    messageChannel?: Response_MessageChannel | undefined;
}
declare const Response: {
    encode(message: Response, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Response;
    fromJSON(object: any): Response;
    toJSON(message: Response): unknown;
    create<I extends Exact<DeepPartial<Response>, I>>(base?: I): Response;
    fromPartial<I extends Exact<DeepPartial<Response>, I>>(object: I): Response;
};
interface Response_Session {
    join?: Response_Session_Join | undefined;
    leave?: Response_Session_Leave | undefined;
    sdp?: Response_Session_UpdateSdp | undefined;
    disconnect?: Response_Session_Disconnect | undefined;
}
declare const Response_Session: {
    encode(message: Response_Session, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Response_Session;
    fromJSON(object: any): Response_Session;
    toJSON(message: Response_Session): unknown;
    create<I extends Exact<DeepPartial<Response_Session>, I>>(base?: I): Response_Session;
    fromPartial<I extends Exact<DeepPartial<Response_Session>, I>>(object: I): Response_Session;
};
interface Response_Session_Join {
}
declare const Response_Session_Join: {
    encode(_: Response_Session_Join, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Response_Session_Join;
    fromJSON(_: any): Response_Session_Join;
    toJSON(_: Response_Session_Join): unknown;
    create<I extends Exact<DeepPartial<Response_Session_Join>, I>>(base?: I): Response_Session_Join;
    fromPartial<I extends Exact<DeepPartial<Response_Session_Join>, I>>(_: I): Response_Session_Join;
};
interface Response_Session_Leave {
}
declare const Response_Session_Leave: {
    encode(_: Response_Session_Leave, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Response_Session_Leave;
    fromJSON(_: any): Response_Session_Leave;
    toJSON(_: Response_Session_Leave): unknown;
    create<I extends Exact<DeepPartial<Response_Session_Leave>, I>>(base?: I): Response_Session_Leave;
    fromPartial<I extends Exact<DeepPartial<Response_Session_Leave>, I>>(_: I): Response_Session_Leave;
};
interface Response_Session_UpdateSdp {
    sdp: string;
}
declare const Response_Session_UpdateSdp: {
    encode(message: Response_Session_UpdateSdp, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Response_Session_UpdateSdp;
    fromJSON(object: any): Response_Session_UpdateSdp;
    toJSON(message: Response_Session_UpdateSdp): unknown;
    create<I extends Exact<DeepPartial<Response_Session_UpdateSdp>, I>>(base?: I): Response_Session_UpdateSdp;
    fromPartial<I extends Exact<DeepPartial<Response_Session_UpdateSdp>, I>>(object: I): Response_Session_UpdateSdp;
};
interface Response_Session_Disconnect {
}
declare const Response_Session_Disconnect: {
    encode(_: Response_Session_Disconnect, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Response_Session_Disconnect;
    fromJSON(_: any): Response_Session_Disconnect;
    toJSON(_: Response_Session_Disconnect): unknown;
    create<I extends Exact<DeepPartial<Response_Session_Disconnect>, I>>(base?: I): Response_Session_Disconnect;
    fromPartial<I extends Exact<DeepPartial<Response_Session_Disconnect>, I>>(_: I): Response_Session_Disconnect;
};
interface Response_Room {
    subscribe?: Response_Room_SubscribePeer | undefined;
    unsubscribe?: Response_Room_UnsubscribePeer | undefined;
}
declare const Response_Room: {
    encode(message: Response_Room, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Response_Room;
    fromJSON(object: any): Response_Room;
    toJSON(message: Response_Room): unknown;
    create<I extends Exact<DeepPartial<Response_Room>, I>>(base?: I): Response_Room;
    fromPartial<I extends Exact<DeepPartial<Response_Room>, I>>(object: I): Response_Room;
};
interface Response_Room_SubscribePeer {
}
declare const Response_Room_SubscribePeer: {
    encode(_: Response_Room_SubscribePeer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Response_Room_SubscribePeer;
    fromJSON(_: any): Response_Room_SubscribePeer;
    toJSON(_: Response_Room_SubscribePeer): unknown;
    create<I extends Exact<DeepPartial<Response_Room_SubscribePeer>, I>>(base?: I): Response_Room_SubscribePeer;
    fromPartial<I extends Exact<DeepPartial<Response_Room_SubscribePeer>, I>>(_: I): Response_Room_SubscribePeer;
};
interface Response_Room_UnsubscribePeer {
}
declare const Response_Room_UnsubscribePeer: {
    encode(_: Response_Room_UnsubscribePeer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Response_Room_UnsubscribePeer;
    fromJSON(_: any): Response_Room_UnsubscribePeer;
    toJSON(_: Response_Room_UnsubscribePeer): unknown;
    create<I extends Exact<DeepPartial<Response_Room_UnsubscribePeer>, I>>(base?: I): Response_Room_UnsubscribePeer;
    fromPartial<I extends Exact<DeepPartial<Response_Room_UnsubscribePeer>, I>>(_: I): Response_Room_UnsubscribePeer;
};
interface Response_MessageChannel {
    label: string;
    startPub?: Response_MessageChannel_StartPublish | undefined;
    stopPub?: Response_MessageChannel_StopPublish | undefined;
    sub?: Response_MessageChannel_Subscribe | undefined;
    unsub?: Response_MessageChannel_Unsubscribe | undefined;
    pub?: Response_MessageChannel_Publish | undefined;
}
declare const Response_MessageChannel: {
    encode(message: Response_MessageChannel, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Response_MessageChannel;
    fromJSON(object: any): Response_MessageChannel;
    toJSON(message: Response_MessageChannel): unknown;
    create<I extends Exact<DeepPartial<Response_MessageChannel>, I>>(base?: I): Response_MessageChannel;
    fromPartial<I extends Exact<DeepPartial<Response_MessageChannel>, I>>(object: I): Response_MessageChannel;
};
interface Response_MessageChannel_StartPublish {
}
declare const Response_MessageChannel_StartPublish: {
    encode(_: Response_MessageChannel_StartPublish, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Response_MessageChannel_StartPublish;
    fromJSON(_: any): Response_MessageChannel_StartPublish;
    toJSON(_: Response_MessageChannel_StartPublish): unknown;
    create<I extends Exact<DeepPartial<Response_MessageChannel_StartPublish>, I>>(base?: I): Response_MessageChannel_StartPublish;
    fromPartial<I extends Exact<DeepPartial<Response_MessageChannel_StartPublish>, I>>(_: I): Response_MessageChannel_StartPublish;
};
interface Response_MessageChannel_StopPublish {
}
declare const Response_MessageChannel_StopPublish: {
    encode(_: Response_MessageChannel_StopPublish, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Response_MessageChannel_StopPublish;
    fromJSON(_: any): Response_MessageChannel_StopPublish;
    toJSON(_: Response_MessageChannel_StopPublish): unknown;
    create<I extends Exact<DeepPartial<Response_MessageChannel_StopPublish>, I>>(base?: I): Response_MessageChannel_StopPublish;
    fromPartial<I extends Exact<DeepPartial<Response_MessageChannel_StopPublish>, I>>(_: I): Response_MessageChannel_StopPublish;
};
interface Response_MessageChannel_Subscribe {
}
declare const Response_MessageChannel_Subscribe: {
    encode(_: Response_MessageChannel_Subscribe, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Response_MessageChannel_Subscribe;
    fromJSON(_: any): Response_MessageChannel_Subscribe;
    toJSON(_: Response_MessageChannel_Subscribe): unknown;
    create<I extends Exact<DeepPartial<Response_MessageChannel_Subscribe>, I>>(base?: I): Response_MessageChannel_Subscribe;
    fromPartial<I extends Exact<DeepPartial<Response_MessageChannel_Subscribe>, I>>(_: I): Response_MessageChannel_Subscribe;
};
interface Response_MessageChannel_Unsubscribe {
}
declare const Response_MessageChannel_Unsubscribe: {
    encode(_: Response_MessageChannel_Unsubscribe, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Response_MessageChannel_Unsubscribe;
    fromJSON(_: any): Response_MessageChannel_Unsubscribe;
    toJSON(_: Response_MessageChannel_Unsubscribe): unknown;
    create<I extends Exact<DeepPartial<Response_MessageChannel_Unsubscribe>, I>>(base?: I): Response_MessageChannel_Unsubscribe;
    fromPartial<I extends Exact<DeepPartial<Response_MessageChannel_Unsubscribe>, I>>(_: I): Response_MessageChannel_Unsubscribe;
};
interface Response_MessageChannel_Publish {
}
declare const Response_MessageChannel_Publish: {
    encode(_: Response_MessageChannel_Publish, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Response_MessageChannel_Publish;
    fromJSON(_: any): Response_MessageChannel_Publish;
    toJSON(_: Response_MessageChannel_Publish): unknown;
    create<I extends Exact<DeepPartial<Response_MessageChannel_Publish>, I>>(base?: I): Response_MessageChannel_Publish;
    fromPartial<I extends Exact<DeepPartial<Response_MessageChannel_Publish>, I>>(_: I): Response_MessageChannel_Publish;
};
interface Response_Sender {
    attach?: Response_Sender_Attach | undefined;
    detach?: Response_Sender_Detach | undefined;
    config?: Response_Sender_Config | undefined;
}
declare const Response_Sender: {
    encode(message: Response_Sender, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Response_Sender;
    fromJSON(object: any): Response_Sender;
    toJSON(message: Response_Sender): unknown;
    create<I extends Exact<DeepPartial<Response_Sender>, I>>(base?: I): Response_Sender;
    fromPartial<I extends Exact<DeepPartial<Response_Sender>, I>>(object: I): Response_Sender;
};
interface Response_Sender_Attach {
}
declare const Response_Sender_Attach: {
    encode(_: Response_Sender_Attach, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Response_Sender_Attach;
    fromJSON(_: any): Response_Sender_Attach;
    toJSON(_: Response_Sender_Attach): unknown;
    create<I extends Exact<DeepPartial<Response_Sender_Attach>, I>>(base?: I): Response_Sender_Attach;
    fromPartial<I extends Exact<DeepPartial<Response_Sender_Attach>, I>>(_: I): Response_Sender_Attach;
};
interface Response_Sender_Detach {
}
declare const Response_Sender_Detach: {
    encode(_: Response_Sender_Detach, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Response_Sender_Detach;
    fromJSON(_: any): Response_Sender_Detach;
    toJSON(_: Response_Sender_Detach): unknown;
    create<I extends Exact<DeepPartial<Response_Sender_Detach>, I>>(base?: I): Response_Sender_Detach;
    fromPartial<I extends Exact<DeepPartial<Response_Sender_Detach>, I>>(_: I): Response_Sender_Detach;
};
interface Response_Sender_Config {
}
declare const Response_Sender_Config: {
    encode(_: Response_Sender_Config, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Response_Sender_Config;
    fromJSON(_: any): Response_Sender_Config;
    toJSON(_: Response_Sender_Config): unknown;
    create<I extends Exact<DeepPartial<Response_Sender_Config>, I>>(base?: I): Response_Sender_Config;
    fromPartial<I extends Exact<DeepPartial<Response_Sender_Config>, I>>(_: I): Response_Sender_Config;
};
interface Response_Receiver {
    attach?: Response_Receiver_Attach | undefined;
    detach?: Response_Receiver_Detach | undefined;
    config?: Response_Receiver_Config | undefined;
}
declare const Response_Receiver: {
    encode(message: Response_Receiver, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Response_Receiver;
    fromJSON(object: any): Response_Receiver;
    toJSON(message: Response_Receiver): unknown;
    create<I extends Exact<DeepPartial<Response_Receiver>, I>>(base?: I): Response_Receiver;
    fromPartial<I extends Exact<DeepPartial<Response_Receiver>, I>>(object: I): Response_Receiver;
};
interface Response_Receiver_Attach {
}
declare const Response_Receiver_Attach: {
    encode(_: Response_Receiver_Attach, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Response_Receiver_Attach;
    fromJSON(_: any): Response_Receiver_Attach;
    toJSON(_: Response_Receiver_Attach): unknown;
    create<I extends Exact<DeepPartial<Response_Receiver_Attach>, I>>(base?: I): Response_Receiver_Attach;
    fromPartial<I extends Exact<DeepPartial<Response_Receiver_Attach>, I>>(_: I): Response_Receiver_Attach;
};
interface Response_Receiver_Detach {
}
declare const Response_Receiver_Detach: {
    encode(_: Response_Receiver_Detach, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Response_Receiver_Detach;
    fromJSON(_: any): Response_Receiver_Detach;
    toJSON(_: Response_Receiver_Detach): unknown;
    create<I extends Exact<DeepPartial<Response_Receiver_Detach>, I>>(base?: I): Response_Receiver_Detach;
    fromPartial<I extends Exact<DeepPartial<Response_Receiver_Detach>, I>>(_: I): Response_Receiver_Detach;
};
interface Response_Receiver_Config {
}
declare const Response_Receiver_Config: {
    encode(_: Response_Receiver_Config, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Response_Receiver_Config;
    fromJSON(_: any): Response_Receiver_Config;
    toJSON(_: Response_Receiver_Config): unknown;
    create<I extends Exact<DeepPartial<Response_Receiver_Config>, I>>(base?: I): Response_Receiver_Config;
    fromPartial<I extends Exact<DeepPartial<Response_Receiver_Config>, I>>(_: I): Response_Receiver_Config;
};
interface ServerEvent_Room_PeerJoined {
    peer: string;
    metadata?: string | undefined;
    extraData?: string | undefined;
}
declare const ServerEvent_Room_PeerJoined: {
    encode(message: ServerEvent_Room_PeerJoined, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ServerEvent_Room_PeerJoined;
    fromJSON(object: any): ServerEvent_Room_PeerJoined;
    toJSON(message: ServerEvent_Room_PeerJoined): unknown;
    create<I extends Exact<DeepPartial<ServerEvent_Room_PeerJoined>, I>>(base?: I): ServerEvent_Room_PeerJoined;
    fromPartial<I extends Exact<DeepPartial<ServerEvent_Room_PeerJoined>, I>>(object: I): ServerEvent_Room_PeerJoined;
};
interface ServerEvent_Room_PeerLeaved {
    peer: string;
}
declare const ServerEvent_Room_PeerLeaved: {
    encode(message: ServerEvent_Room_PeerLeaved, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ServerEvent_Room_PeerLeaved;
    fromJSON(object: any): ServerEvent_Room_PeerLeaved;
    toJSON(message: ServerEvent_Room_PeerLeaved): unknown;
    create<I extends Exact<DeepPartial<ServerEvent_Room_PeerLeaved>, I>>(base?: I): ServerEvent_Room_PeerLeaved;
    fromPartial<I extends Exact<DeepPartial<ServerEvent_Room_PeerLeaved>, I>>(object: I): ServerEvent_Room_PeerLeaved;
};
interface ServerEvent_Room_TrackStarted {
    peer: string;
    track: string;
    kind: Kind;
    metadata?: string | undefined;
}
declare const ServerEvent_Room_TrackStarted: {
    encode(message: ServerEvent_Room_TrackStarted, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ServerEvent_Room_TrackStarted;
    fromJSON(object: any): ServerEvent_Room_TrackStarted;
    toJSON(message: ServerEvent_Room_TrackStarted): unknown;
    create<I extends Exact<DeepPartial<ServerEvent_Room_TrackStarted>, I>>(base?: I): ServerEvent_Room_TrackStarted;
    fromPartial<I extends Exact<DeepPartial<ServerEvent_Room_TrackStarted>, I>>(object: I): ServerEvent_Room_TrackStarted;
};
interface ServerEvent_Room_TrackStopped {
    peer: string;
    track: string;
    kind: Kind;
}
declare const ServerEvent_Room_TrackStopped: {
    encode(message: ServerEvent_Room_TrackStopped, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ServerEvent_Room_TrackStopped;
    fromJSON(object: any): ServerEvent_Room_TrackStopped;
    toJSON(message: ServerEvent_Room_TrackStopped): unknown;
    create<I extends Exact<DeepPartial<ServerEvent_Room_TrackStopped>, I>>(base?: I): ServerEvent_Room_TrackStopped;
    fromPartial<I extends Exact<DeepPartial<ServerEvent_Room_TrackStopped>, I>>(object: I): ServerEvent_Room_TrackStopped;
};
interface ServerEvent_Receiver_VoiceActivity {
    audioLevel: number;
}
declare const ServerEvent_Receiver_VoiceActivity: {
    encode(message: ServerEvent_Receiver_VoiceActivity, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ServerEvent_Receiver_VoiceActivity;
    fromJSON(object: any): ServerEvent_Receiver_VoiceActivity;
    toJSON(message: ServerEvent_Receiver_VoiceActivity): unknown;
    create<I extends Exact<DeepPartial<ServerEvent_Receiver_VoiceActivity>, I>>(base?: I): ServerEvent_Receiver_VoiceActivity;
    fromPartial<I extends Exact<DeepPartial<ServerEvent_Receiver_VoiceActivity>, I>>(object: I): ServerEvent_Receiver_VoiceActivity;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};

declare class Datachannel extends EventEmitter {
    private dc;
    waiter: ReadyWaiter;
    seq_id: number;
    req_id: number;
    reqs: Map<number, (_: Response) => void>;
    prepare_state: boolean;
    constructor(dc: RTCDataChannel);
    get connected(): boolean;
    ready(): Promise<void>;
    requestSession(req: Request_Session): Promise<Response_Session>;
    requestSender(req: Request_Sender): Promise<Response_Sender>;
    requestReceiver(req: Request_Receiver): Promise<Response_Receiver>;
    requestMessageChannel(req: Request_MessageChannel): Promise<Response_MessageChannel>;
    requestMixer(req: Request$2): Promise<Response$2>;
    request(request: Request): Promise<Response>;
    gen_req_id(): number;
    gen_seq_id(): number;
}

declare enum TrackReceiverEvent {
    StatusUpdated = "StatusUpdated",
    VoiceActivity = "VoiceActivity"
}
declare class TrackReceiver extends EventEmitter {
    private dc;
    private track_name;
    private _kind;
    transceiver?: RTCRtpTransceiver;
    waiter: ReadyWaiter;
    media_stream: MediaStream;
    media_track?: MediaStreamTrack;
    receiver_state: Receiver_State;
    _status?: Receiver_Status;
    constructor(dc: Datachannel, track_name: string, _kind: Kind);
    get kind(): Kind;
    get webrtcTrackId(): string | undefined;
    get status(): Receiver_Status | undefined;
    setTrackReady(): void;
    ready(): Promise<void>;
    prepare(peer: RTCPeerConnection): void;
    afterRestartIce(): void;
    attach(source: Receiver_Source, config?: Receiver_Config): Promise<void>;
    detach(): Promise<void>;
    config(config: Receiver_Config): Promise<void>;
    leaveRoom(): void;
    get stream(): MediaStream;
    get name(): string;
    get state(): Receiver;
}

declare enum TrackSenderEvent {
    StatusUpdated = "StatusUpdated"
}
interface TrackSenderConfig {
    priority: number;
    bitrate: BitrateControlMode;
    simulcast?: boolean;
    metadata?: string;
}
declare class TrackSender extends EventEmitter {
    private dc;
    private track_name;
    sender_state: Sender_State;
    transceiver?: RTCRtpTransceiver;
    kind: Kind;
    track?: MediaStreamTrack;
    simulcast: boolean;
    _status?: Sender_Status;
    constructor(dc: Datachannel, track_name: string, track_or_kind: MediaStreamTrack | Kind, cfg?: TrackSenderConfig);
    get name(): string;
    get status(): Sender_Status | undefined;
    get attached(): boolean;
    get state(): Sender;
    prepare(peer: RTCPeerConnection): void;
    attach(track: MediaStreamTrack, metadata?: string): Promise<Response_Sender | undefined>;
    config(config: Sender_Config): Promise<Response_Sender | undefined>;
    detach(): Promise<Response_Sender | undefined>;
}

declare enum AudioMixerEvent {
    OUTPUT_CHANGED = "features.mixer.output_changed",
    VOICE_ACTIVITY = "feature.mixer.voice_activity",
    PEER_VOICE_ACTIVITY = "feature.mixer.peers.voice_activity."
}
type AudioMixerOutputChanged = OutputSlot[];
interface AudioMixerVoiceActivity {
    peer: string;
    track: string;
    active: boolean;
    audio_level?: number;
}
interface AudioMixerPeerVoiceActivity {
    track: string;
    active: boolean;
    audio_level?: number;
}
interface AudioMixerConfig {
    mode: Mode;
    outputs: number;
    sources?: Receiver_Source[];
}
interface OutputSlot {
    source?: Receiver_Source;
}
declare class AudioMixer extends EventEmitter {
    private dc;
    mode: Mode;
    receivers: TrackReceiver[];
    sources: Receiver_Source[];
    outputs: OutputSlot[];
    constructor(session: Session, dc: Datachannel, config: AudioMixerConfig);
    reconfig(config: AudioMixerConfig): void;
    state(): Config$1;
    streams(): MediaStream[];
    attach(sources: Receiver_Source[]): Promise<Response$2>;
    detach(sources: Receiver_Source[]): Promise<Response$2>;
    leave_room(): void;
    _onReceiverVoiceActivity: (slot: number, activity: ServerEvent_Receiver_VoiceActivity) => void;
    _onMixerEvent: (event: ServerEvent) => void;
    _fireVoiceEvent(source: Receiver_Source, active: boolean, audio_level?: number): void;
}

interface MessageChannelConfig {
    /**
     * By default the message received from the channel will be automatically convert from UInt8Array to String.
     * You can turn this off by setting this setting to true
     *
     * @default false
     */
    raw?: boolean;
    /**
     * By default, the channel will automatically be able to publish message to the room.
     * You can turn this off by setting this setting to false
     */
    publish?: boolean;
}
interface MessageChannelEvent {
    key: string;
    peer: string;
    message: string | Uint8Array;
}
/**
 *
 * An application level Datachannel, which should not be confused with the internal WebRTC Datachannel.
 * While normal WebRTC Channel can only operate in P2P, this however, is an abstracted room based channel. Meaning
 * everyone that subscribes to this channel that are in the same room, will have 2-way communication.
 *
 **/
declare class RoomMessageChannel extends EventEmitter {
    label: string;
    private dc;
    opened: boolean;
    private textEncoder;
    private textDecoder;
    config: MessageChannelConfig;
    constructor(label: string, dc: Datachannel, _config?: MessageChannelConfig | undefined);
    get canPublish(): boolean | undefined;
    startPublish(): Promise<void>;
    stopPublish(): Promise<void>;
    init(): Promise<void>;
    publish(message: string | Uint8Array): Promise<Response_MessageChannel>;
    close(): Promise<void>;
}

interface JoinInfo$1 {
    room: string;
    peer: string;
    metadata?: string;
    publish: {
        peer: boolean;
        tracks: boolean;
    };
    subscribe: {
        peers: boolean;
        tracks: boolean;
    };
    features?: {
        mixer?: AudioMixerConfig;
    };
}
interface SessionConfig$1 {
    token: string;
    join?: JoinInfo$1;
}
declare enum SessionEvent {
    ROOM_CHANGED = "room.changed",
    ROOM_PEER_JOINED = "room.peer.joined",
    ROOM_PEER_UPDATED = "room.peer.updated",
    ROOM_PEER_LEAVED = "room.peer.leaved",
    ROOM_TRACK_STARTED = "room.track.started",
    ROOM_TRACK_UPDATED = "room.track.updated",
    ROOM_TRACK_STOPPED = "room.track.stopped"
}
declare class Session extends EventEmitter {
    private gateway;
    private cfg;
    peer: RTCPeerConnection;
    dc: Datachannel;
    ice_lite: boolean;
    restarting_ice: boolean;
    created_at: number;
    version?: string;
    conn_id?: string;
    receivers: TrackReceiver[];
    senders: TrackSender[];
    msgChannels: Map<string, RoomMessageChannel>;
    _mixer?: AudioMixer;
    prepareState: boolean;
    constructor(gateway: string, cfg: SessionConfig$1);
    get room(): JoinInfo$1 | undefined;
    get mixer(): AudioMixer | undefined;
    receiver(kind: Kind): TrackReceiver;
    sender(track_name: string, track_or_kind: MediaStreamTrack | Kind, cfg?: TrackSenderConfig): TrackSender;
    connect(version?: string): Promise<void>;
    restartIce(): Promise<void>;
    join(info: JoinInfo$1, token: string): Promise<void>;
    syncSdp(): Promise<void>;
    /**
     *
     * Create a new MessageChannel for room based message passing. If a channel already exist with the same key, it will return the existing channel.
     *
     */
    createMessageChannel(key: string, config?: MessageChannelConfig | undefined): Promise<RoomMessageChannel>;
    leave(): Promise<void>;
    disconnect(): Promise<void>;
}

declare function kindToString(kind: Kind): "audio" | "video";
declare function stringToKind(kind: "audio" | "video"): Kind;

type SessionConfig = SessionConfig$1;
type JoinInfo = JoinInfo$1;

export { AudioMixer, type AudioMixerConfig, AudioMixerEvent, Mode as AudioMixerMode, type AudioMixerOutputChanged, type AudioMixerPeerVoiceActivity, Receiver_Source as AudioMixerSource, type AudioMixerVoiceActivity, BitrateControlMode, EventEmitter, type JoinInfo, Kind, type MessageChannelConfig, type MessageChannelEvent, RoomMessageChannel, ServerEvent_Room_PeerJoined as RoomPeerJoined, ServerEvent_Room_PeerLeaved as RoomPeerLeaved, ServerEvent_Room_TrackStarted as RoomTrackStarted, ServerEvent_Room_TrackStopped as RoomTrackStopped, Sender_Config, Session, type SessionConfig, SessionEvent, TrackReceiver, TrackReceiverEvent, Receiver_Status as TrackReceiverStatus, ServerEvent_Receiver_VoiceActivity as TrackReceiverVoiceActivity, TrackSender, type TrackSenderConfig, TrackSenderEvent, Sender_Status as TrackSenderStatus, kindToString, stringToKind };
