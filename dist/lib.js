"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/lib.ts
var lib_exports = {};
__export(lib_exports, {
  AudioMixerEvent: () => AudioMixerEvent,
  AudioMixerMode: () => Mode,
  AudioMixerSource: () => Receiver_Source,
  BitrateControlMode: () => BitrateControlMode,
  EventEmitter: () => EventEmitter,
  Kind: () => Kind,
  RoomPeerJoined: () => ServerEvent_Room_PeerJoined,
  RoomPeerLeaved: () => ServerEvent_Room_PeerLeaved,
  RoomTrackStarted: () => ServerEvent_Room_TrackStarted,
  RoomTrackStopped: () => ServerEvent_Room_TrackStopped,
  Sender_Config: () => Sender_Config,
  Session: () => Session,
  SessionEvent: () => SessionEvent,
  TrackReceiver: () => TrackReceiver,
  TrackReceiverEvent: () => TrackReceiverEvent,
  TrackReceiverStatus: () => Receiver_Status,
  TrackReceiverVoiceActivity: () => ServerEvent_Receiver_VoiceActivity,
  TrackSender: () => TrackSender,
  TrackSenderEvent: () => TrackSenderEvent,
  TrackSenderStatus: () => Sender_Status,
  kindToString: () => kindToString,
  stringToKind: () => stringToKind
});
module.exports = __toCommonJS(lib_exports);

// src/generated/protobuf/gateway.ts
var _m05 = __toESM(require("protobufjs/minimal"));

// src/generated/protobuf/session.ts
var _m04 = __toESM(require("protobufjs/minimal"));

// src/generated/protobuf/features.ts
var _m03 = __toESM(require("protobufjs/minimal"));

// src/generated/protobuf/features.mixer.ts
var _m02 = __toESM(require("protobufjs/minimal"));

// src/generated/protobuf/shared.ts
var _m0 = __toESM(require("protobufjs/minimal"));
var Kind = /* @__PURE__ */ ((Kind4) => {
  Kind4[Kind4["AUDIO"] = 0] = "AUDIO";
  Kind4[Kind4["VIDEO"] = 1] = "VIDEO";
  Kind4[Kind4["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return Kind4;
})(Kind || {});
function kindFromJSON(object) {
  switch (object) {
    case 0:
    case "AUDIO":
      return 0 /* AUDIO */;
    case 1:
    case "VIDEO":
      return 1 /* VIDEO */;
    case -1:
    case "UNRECOGNIZED":
    default:
      return -1 /* UNRECOGNIZED */;
  }
}
function kindToJSON(object) {
  switch (object) {
    case 0 /* AUDIO */:
      return "AUDIO";
    case 1 /* VIDEO */:
      return "VIDEO";
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
var BitrateControlMode = /* @__PURE__ */ ((BitrateControlMode2) => {
  BitrateControlMode2[BitrateControlMode2["DYNAMIC_CONSUMERS"] = 0] = "DYNAMIC_CONSUMERS";
  BitrateControlMode2[BitrateControlMode2["MAX_BITRATE"] = 1] = "MAX_BITRATE";
  BitrateControlMode2[BitrateControlMode2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return BitrateControlMode2;
})(BitrateControlMode || {});
function bitrateControlModeFromJSON(object) {
  switch (object) {
    case 0:
    case "DYNAMIC_CONSUMERS":
      return 0 /* DYNAMIC_CONSUMERS */;
    case 1:
    case "MAX_BITRATE":
      return 1 /* MAX_BITRATE */;
    case -1:
    case "UNRECOGNIZED":
    default:
      return -1 /* UNRECOGNIZED */;
  }
}
function bitrateControlModeToJSON(object) {
  switch (object) {
    case 0 /* DYNAMIC_CONSUMERS */:
      return "DYNAMIC_CONSUMERS";
    case 1 /* MAX_BITRATE */:
      return "MAX_BITRATE";
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
var Receiver_Status = /* @__PURE__ */ ((Receiver_Status3) => {
  Receiver_Status3[Receiver_Status3["WAITING"] = 0] = "WAITING";
  Receiver_Status3[Receiver_Status3["ACTIVE"] = 1] = "ACTIVE";
  Receiver_Status3[Receiver_Status3["INACTIVE"] = 2] = "INACTIVE";
  Receiver_Status3[Receiver_Status3["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return Receiver_Status3;
})(Receiver_Status || {});
function receiver_StatusFromJSON(object) {
  switch (object) {
    case 0:
    case "WAITING":
      return 0 /* WAITING */;
    case 1:
    case "ACTIVE":
      return 1 /* ACTIVE */;
    case 2:
    case "INACTIVE":
      return 2 /* INACTIVE */;
    case -1:
    case "UNRECOGNIZED":
    default:
      return -1 /* UNRECOGNIZED */;
  }
}
function receiver_StatusToJSON(object) {
  switch (object) {
    case 0 /* WAITING */:
      return "WAITING";
    case 1 /* ACTIVE */:
      return "ACTIVE";
    case 2 /* INACTIVE */:
      return "INACTIVE";
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
var Sender_Status = /* @__PURE__ */ ((Sender_Status3) => {
  Sender_Status3[Sender_Status3["ACTIVE"] = 0] = "ACTIVE";
  Sender_Status3[Sender_Status3["INACTIVE"] = 1] = "INACTIVE";
  Sender_Status3[Sender_Status3["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return Sender_Status3;
})(Sender_Status || {});
function sender_StatusFromJSON(object) {
  switch (object) {
    case 0:
    case "ACTIVE":
      return 0 /* ACTIVE */;
    case 1:
    case "INACTIVE":
      return 1 /* INACTIVE */;
    case -1:
    case "UNRECOGNIZED":
    default:
      return -1 /* UNRECOGNIZED */;
  }
}
function sender_StatusToJSON(object) {
  switch (object) {
    case 0 /* ACTIVE */:
      return "ACTIVE";
    case 1 /* INACTIVE */:
      return "INACTIVE";
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
function createBaseError() {
  return { code: 0, message: "" };
}
var Error2 = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.code !== 0) {
      writer.uint32(8).uint32(message.code);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseError();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }
          message.code = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.message = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      code: isSet(object.code) ? globalThis.Number(object.code) : 0,
      message: isSet(object.message) ? globalThis.String(object.message) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.code !== 0) {
      obj.code = Math.round(message.code);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    return obj;
  },
  create(base) {
    return Error2.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseError();
    message.code = object.code ?? 0;
    message.message = object.message ?? "";
    return message;
  }
};
function createBaseReceiver() {
  return { kind: 0, name: "", state: void 0 };
}
var Receiver = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.kind !== 0) {
      writer.uint32(8).int32(message.kind);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.state !== void 0) {
      Receiver_State.encode(message.state, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseReceiver();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }
          message.kind = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.state = Receiver_State.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      kind: isSet(object.kind) ? kindFromJSON(object.kind) : 0,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      state: isSet(object.state) ? Receiver_State.fromJSON(object.state) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.kind !== 0) {
      obj.kind = kindToJSON(message.kind);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.state !== void 0) {
      obj.state = Receiver_State.toJSON(message.state);
    }
    return obj;
  },
  create(base) {
    return Receiver.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseReceiver();
    message.kind = object.kind ?? 0;
    message.name = object.name ?? "";
    message.state = object.state !== void 0 && object.state !== null ? Receiver_State.fromPartial(object.state) : void 0;
    return message;
  }
};
function createBaseReceiver_Source() {
  return { peer: "", track: "" };
}
var Receiver_Source = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.peer !== "") {
      writer.uint32(10).string(message.peer);
    }
    if (message.track !== "") {
      writer.uint32(18).string(message.track);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseReceiver_Source();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.peer = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.track = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      peer: isSet(object.peer) ? globalThis.String(object.peer) : "",
      track: isSet(object.track) ? globalThis.String(object.track) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.peer !== "") {
      obj.peer = message.peer;
    }
    if (message.track !== "") {
      obj.track = message.track;
    }
    return obj;
  },
  create(base) {
    return Receiver_Source.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseReceiver_Source();
    message.peer = object.peer ?? "";
    message.track = object.track ?? "";
    return message;
  }
};
function createBaseReceiver_Config() {
  return { priority: 0, maxSpatial: 0, maxTemporal: 0, minSpatial: void 0, minTemporal: void 0 };
}
var Receiver_Config = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.priority !== 0) {
      writer.uint32(8).uint32(message.priority);
    }
    if (message.maxSpatial !== 0) {
      writer.uint32(16).uint32(message.maxSpatial);
    }
    if (message.maxTemporal !== 0) {
      writer.uint32(24).uint32(message.maxTemporal);
    }
    if (message.minSpatial !== void 0) {
      writer.uint32(32).uint32(message.minSpatial);
    }
    if (message.minTemporal !== void 0) {
      writer.uint32(40).uint32(message.minTemporal);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseReceiver_Config();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }
          message.priority = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }
          message.maxSpatial = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }
          message.maxTemporal = reader.uint32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }
          message.minSpatial = reader.uint32();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }
          message.minTemporal = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      priority: isSet(object.priority) ? globalThis.Number(object.priority) : 0,
      maxSpatial: isSet(object.maxSpatial) ? globalThis.Number(object.maxSpatial) : 0,
      maxTemporal: isSet(object.maxTemporal) ? globalThis.Number(object.maxTemporal) : 0,
      minSpatial: isSet(object.minSpatial) ? globalThis.Number(object.minSpatial) : void 0,
      minTemporal: isSet(object.minTemporal) ? globalThis.Number(object.minTemporal) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.priority !== 0) {
      obj.priority = Math.round(message.priority);
    }
    if (message.maxSpatial !== 0) {
      obj.maxSpatial = Math.round(message.maxSpatial);
    }
    if (message.maxTemporal !== 0) {
      obj.maxTemporal = Math.round(message.maxTemporal);
    }
    if (message.minSpatial !== void 0) {
      obj.minSpatial = Math.round(message.minSpatial);
    }
    if (message.minTemporal !== void 0) {
      obj.minTemporal = Math.round(message.minTemporal);
    }
    return obj;
  },
  create(base) {
    return Receiver_Config.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseReceiver_Config();
    message.priority = object.priority ?? 0;
    message.maxSpatial = object.maxSpatial ?? 0;
    message.maxTemporal = object.maxTemporal ?? 0;
    message.minSpatial = object.minSpatial ?? void 0;
    message.minTemporal = object.minTemporal ?? void 0;
    return message;
  }
};
function createBaseReceiver_State() {
  return { config: void 0, source: void 0 };
}
var Receiver_State = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.config !== void 0) {
      Receiver_Config.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    if (message.source !== void 0) {
      Receiver_Source.encode(message.source, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseReceiver_State();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.config = Receiver_Config.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.source = Receiver_Source.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      config: isSet(object.config) ? Receiver_Config.fromJSON(object.config) : void 0,
      source: isSet(object.source) ? Receiver_Source.fromJSON(object.source) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.config !== void 0) {
      obj.config = Receiver_Config.toJSON(message.config);
    }
    if (message.source !== void 0) {
      obj.source = Receiver_Source.toJSON(message.source);
    }
    return obj;
  },
  create(base) {
    return Receiver_State.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseReceiver_State();
    message.config = object.config !== void 0 && object.config !== null ? Receiver_Config.fromPartial(object.config) : void 0;
    message.source = object.source !== void 0 && object.source !== null ? Receiver_Source.fromPartial(object.source) : void 0;
    return message;
  }
};
function createBaseSender() {
  return { kind: 0, name: "", state: void 0 };
}
var Sender = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.kind !== 0) {
      writer.uint32(8).int32(message.kind);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.state !== void 0) {
      Sender_State.encode(message.state, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSender();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }
          message.kind = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.state = Sender_State.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      kind: isSet(object.kind) ? kindFromJSON(object.kind) : 0,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      state: isSet(object.state) ? Sender_State.fromJSON(object.state) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.kind !== 0) {
      obj.kind = kindToJSON(message.kind);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.state !== void 0) {
      obj.state = Sender_State.toJSON(message.state);
    }
    return obj;
  },
  create(base) {
    return Sender.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseSender();
    message.kind = object.kind ?? 0;
    message.name = object.name ?? "";
    message.state = object.state !== void 0 && object.state !== null ? Sender_State.fromPartial(object.state) : void 0;
    return message;
  }
};
function createBaseSender_Source() {
  return { id: "", screen: false, metadata: void 0 };
}
var Sender_Source = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.screen !== false) {
      writer.uint32(16).bool(message.screen);
    }
    if (message.metadata !== void 0) {
      writer.uint32(26).string(message.metadata);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSender_Source();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }
          message.screen = reader.bool();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.metadata = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      screen: isSet(object.screen) ? globalThis.Boolean(object.screen) : false,
      metadata: isSet(object.metadata) ? globalThis.String(object.metadata) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.screen !== false) {
      obj.screen = message.screen;
    }
    if (message.metadata !== void 0) {
      obj.metadata = message.metadata;
    }
    return obj;
  },
  create(base) {
    return Sender_Source.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseSender_Source();
    message.id = object.id ?? "";
    message.screen = object.screen ?? false;
    message.metadata = object.metadata ?? void 0;
    return message;
  }
};
function createBaseSender_Config() {
  return { priority: 0, bitrate: 0 };
}
var Sender_Config = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.priority !== 0) {
      writer.uint32(8).uint32(message.priority);
    }
    if (message.bitrate !== 0) {
      writer.uint32(16).int32(message.bitrate);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSender_Config();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }
          message.priority = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }
          message.bitrate = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      priority: isSet(object.priority) ? globalThis.Number(object.priority) : 0,
      bitrate: isSet(object.bitrate) ? bitrateControlModeFromJSON(object.bitrate) : 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.priority !== 0) {
      obj.priority = Math.round(message.priority);
    }
    if (message.bitrate !== 0) {
      obj.bitrate = bitrateControlModeToJSON(message.bitrate);
    }
    return obj;
  },
  create(base) {
    return Sender_Config.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseSender_Config();
    message.priority = object.priority ?? 0;
    message.bitrate = object.bitrate ?? 0;
    return message;
  }
};
function createBaseSender_State() {
  return { config: void 0, source: void 0 };
}
var Sender_State = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.config !== void 0) {
      Sender_Config.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    if (message.source !== void 0) {
      Sender_Source.encode(message.source, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseSender_State();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.config = Sender_Config.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.source = Sender_Source.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      config: isSet(object.config) ? Sender_Config.fromJSON(object.config) : void 0,
      source: isSet(object.source) ? Sender_Source.fromJSON(object.source) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.config !== void 0) {
      obj.config = Sender_Config.toJSON(message.config);
    }
    if (message.source !== void 0) {
      obj.source = Sender_Source.toJSON(message.source);
    }
    return obj;
  },
  create(base) {
    return Sender_State.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseSender_State();
    message.config = object.config !== void 0 && object.config !== null ? Sender_Config.fromPartial(object.config) : void 0;
    message.source = object.source !== void 0 && object.source !== null ? Sender_Source.fromPartial(object.source) : void 0;
    return message;
  }
};
function createBaseTracks() {
  return { receivers: [], senders: [] };
}
var Tracks = {
  encode(message, writer = _m0.Writer.create()) {
    for (const v of message.receivers) {
      Receiver.encode(v, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.senders) {
      Sender.encode(v, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseTracks();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.receivers.push(Receiver.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.senders.push(Sender.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      receivers: globalThis.Array.isArray(object?.receivers) ? object.receivers.map((e) => Receiver.fromJSON(e)) : [],
      senders: globalThis.Array.isArray(object?.senders) ? object.senders.map((e) => Sender.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.receivers?.length) {
      obj.receivers = message.receivers.map((e) => Receiver.toJSON(e));
    }
    if (message.senders?.length) {
      obj.senders = message.senders.map((e) => Sender.toJSON(e));
    }
    return obj;
  },
  create(base) {
    return Tracks.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseTracks();
    message.receivers = object.receivers?.map((e) => Receiver.fromPartial(e)) || [];
    message.senders = object.senders?.map((e) => Sender.fromPartial(e)) || [];
    return message;
  }
};
function createBaseRoomInfoPublish() {
  return { peer: false, tracks: false };
}
var RoomInfoPublish = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.peer !== false) {
      writer.uint32(8).bool(message.peer);
    }
    if (message.tracks !== false) {
      writer.uint32(16).bool(message.tracks);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRoomInfoPublish();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }
          message.peer = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }
          message.tracks = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      peer: isSet(object.peer) ? globalThis.Boolean(object.peer) : false,
      tracks: isSet(object.tracks) ? globalThis.Boolean(object.tracks) : false
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.peer !== false) {
      obj.peer = message.peer;
    }
    if (message.tracks !== false) {
      obj.tracks = message.tracks;
    }
    return obj;
  },
  create(base) {
    return RoomInfoPublish.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseRoomInfoPublish();
    message.peer = object.peer ?? false;
    message.tracks = object.tracks ?? false;
    return message;
  }
};
function createBaseRoomInfoSubscribe() {
  return { peers: false, tracks: false };
}
var RoomInfoSubscribe = {
  encode(message, writer = _m0.Writer.create()) {
    if (message.peers !== false) {
      writer.uint32(8).bool(message.peers);
    }
    if (message.tracks !== false) {
      writer.uint32(16).bool(message.tracks);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRoomInfoSubscribe();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }
          message.peers = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }
          message.tracks = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      peers: isSet(object.peers) ? globalThis.Boolean(object.peers) : false,
      tracks: isSet(object.tracks) ? globalThis.Boolean(object.tracks) : false
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.peers !== false) {
      obj.peers = message.peers;
    }
    if (message.tracks !== false) {
      obj.tracks = message.tracks;
    }
    return obj;
  },
  create(base) {
    return RoomInfoSubscribe.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseRoomInfoSubscribe();
    message.peers = object.peers ?? false;
    message.tracks = object.tracks ?? false;
    return message;
  }
};
function isSet(value) {
  return value !== null && value !== void 0;
}

// src/generated/protobuf/features.mixer.ts
var Mode = /* @__PURE__ */ ((Mode2) => {
  Mode2[Mode2["AUTO"] = 0] = "AUTO";
  Mode2[Mode2["MANUAL"] = 1] = "MANUAL";
  Mode2[Mode2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  return Mode2;
})(Mode || {});
function modeFromJSON(object) {
  switch (object) {
    case 0:
    case "AUTO":
      return 0 /* AUTO */;
    case 1:
    case "MANUAL":
      return 1 /* MANUAL */;
    case -1:
    case "UNRECOGNIZED":
    default:
      return -1 /* UNRECOGNIZED */;
  }
}
function modeToJSON(object) {
  switch (object) {
    case 0 /* AUTO */:
      return "AUTO";
    case 1 /* MANUAL */:
      return "MANUAL";
    case -1 /* UNRECOGNIZED */:
    default:
      return "UNRECOGNIZED";
  }
}
function createBaseConfig() {
  return { mode: 0, outputs: [], sources: [] };
}
var Config = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.mode !== 0) {
      writer.uint32(8).int32(message.mode);
    }
    for (const v of message.outputs) {
      writer.uint32(18).string(v);
    }
    for (const v of message.sources) {
      Receiver_Source.encode(v, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : _m02.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }
          message.mode = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.outputs.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.sources.push(Receiver_Source.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      mode: isSet2(object.mode) ? modeFromJSON(object.mode) : 0,
      outputs: globalThis.Array.isArray(object?.outputs) ? object.outputs.map((e) => globalThis.String(e)) : [],
      sources: globalThis.Array.isArray(object?.sources) ? object.sources.map((e) => Receiver_Source.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.mode !== 0) {
      obj.mode = modeToJSON(message.mode);
    }
    if (message.outputs?.length) {
      obj.outputs = message.outputs;
    }
    if (message.sources?.length) {
      obj.sources = message.sources.map((e) => Receiver_Source.toJSON(e));
    }
    return obj;
  },
  create(base) {
    return Config.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseConfig();
    message.mode = object.mode ?? 0;
    message.outputs = object.outputs?.map((e) => e) || [];
    message.sources = object.sources?.map((e) => Receiver_Source.fromPartial(e)) || [];
    return message;
  }
};
function createBaseRequest() {
  return { attach: void 0, detach: void 0 };
}
var Request = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.attach !== void 0) {
      Request_Attach.encode(message.attach, writer.uint32(10).fork()).ldelim();
    }
    if (message.detach !== void 0) {
      Request_Detach.encode(message.detach, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : _m02.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.attach = Request_Attach.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.detach = Request_Detach.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      attach: isSet2(object.attach) ? Request_Attach.fromJSON(object.attach) : void 0,
      detach: isSet2(object.detach) ? Request_Detach.fromJSON(object.detach) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.attach !== void 0) {
      obj.attach = Request_Attach.toJSON(message.attach);
    }
    if (message.detach !== void 0) {
      obj.detach = Request_Detach.toJSON(message.detach);
    }
    return obj;
  },
  create(base) {
    return Request.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseRequest();
    message.attach = object.attach !== void 0 && object.attach !== null ? Request_Attach.fromPartial(object.attach) : void 0;
    message.detach = object.detach !== void 0 && object.detach !== null ? Request_Detach.fromPartial(object.detach) : void 0;
    return message;
  }
};
function createBaseRequest_Attach() {
  return { sources: [] };
}
var Request_Attach = {
  encode(message, writer = _m02.Writer.create()) {
    for (const v of message.sources) {
      Receiver_Source.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : _m02.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRequest_Attach();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.sources.push(Receiver_Source.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      sources: globalThis.Array.isArray(object?.sources) ? object.sources.map((e) => Receiver_Source.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.sources?.length) {
      obj.sources = message.sources.map((e) => Receiver_Source.toJSON(e));
    }
    return obj;
  },
  create(base) {
    return Request_Attach.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseRequest_Attach();
    message.sources = object.sources?.map((e) => Receiver_Source.fromPartial(e)) || [];
    return message;
  }
};
function createBaseRequest_Detach() {
  return { sources: [] };
}
var Request_Detach = {
  encode(message, writer = _m02.Writer.create()) {
    for (const v of message.sources) {
      Receiver_Source.encode(v, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : _m02.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRequest_Detach();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.sources.push(Receiver_Source.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      sources: globalThis.Array.isArray(object?.sources) ? object.sources.map((e) => Receiver_Source.fromJSON(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.sources?.length) {
      obj.sources = message.sources.map((e) => Receiver_Source.toJSON(e));
    }
    return obj;
  },
  create(base) {
    return Request_Detach.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseRequest_Detach();
    message.sources = object.sources?.map((e) => Receiver_Source.fromPartial(e)) || [];
    return message;
  }
};
function createBaseResponse() {
  return { attach: void 0, detach: void 0 };
}
var Response = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.attach !== void 0) {
      Response_Attach.encode(message.attach, writer.uint32(10).fork()).ldelim();
    }
    if (message.detach !== void 0) {
      Response_Detach.encode(message.detach, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : _m02.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.attach = Response_Attach.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.detach = Response_Detach.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      attach: isSet2(object.attach) ? Response_Attach.fromJSON(object.attach) : void 0,
      detach: isSet2(object.detach) ? Response_Detach.fromJSON(object.detach) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.attach !== void 0) {
      obj.attach = Response_Attach.toJSON(message.attach);
    }
    if (message.detach !== void 0) {
      obj.detach = Response_Detach.toJSON(message.detach);
    }
    return obj;
  },
  create(base) {
    return Response.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseResponse();
    message.attach = object.attach !== void 0 && object.attach !== null ? Response_Attach.fromPartial(object.attach) : void 0;
    message.detach = object.detach !== void 0 && object.detach !== null ? Response_Detach.fromPartial(object.detach) : void 0;
    return message;
  }
};
function createBaseResponse_Attach() {
  return {};
}
var Response_Attach = {
  encode(_, writer = _m02.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : _m02.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseResponse_Attach();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  create(base) {
    return Response_Attach.fromPartial(base ?? {});
  },
  fromPartial(_) {
    const message = createBaseResponse_Attach();
    return message;
  }
};
function createBaseResponse_Detach() {
  return {};
}
var Response_Detach = {
  encode(_, writer = _m02.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : _m02.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseResponse_Detach();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  create(base) {
    return Response_Detach.fromPartial(base ?? {});
  },
  fromPartial(_) {
    const message = createBaseResponse_Detach();
    return message;
  }
};
function createBaseServerEvent() {
  return { slotSet: void 0, slotUnset: void 0 };
}
var ServerEvent = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.slotSet !== void 0) {
      ServerEvent_SlotSet.encode(message.slotSet, writer.uint32(10).fork()).ldelim();
    }
    if (message.slotUnset !== void 0) {
      ServerEvent_SlotUnset.encode(message.slotUnset, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : _m02.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseServerEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.slotSet = ServerEvent_SlotSet.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.slotUnset = ServerEvent_SlotUnset.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      slotSet: isSet2(object.slotSet) ? ServerEvent_SlotSet.fromJSON(object.slotSet) : void 0,
      slotUnset: isSet2(object.slotUnset) ? ServerEvent_SlotUnset.fromJSON(object.slotUnset) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.slotSet !== void 0) {
      obj.slotSet = ServerEvent_SlotSet.toJSON(message.slotSet);
    }
    if (message.slotUnset !== void 0) {
      obj.slotUnset = ServerEvent_SlotUnset.toJSON(message.slotUnset);
    }
    return obj;
  },
  create(base) {
    return ServerEvent.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseServerEvent();
    message.slotSet = object.slotSet !== void 0 && object.slotSet !== null ? ServerEvent_SlotSet.fromPartial(object.slotSet) : void 0;
    message.slotUnset = object.slotUnset !== void 0 && object.slotUnset !== null ? ServerEvent_SlotUnset.fromPartial(object.slotUnset) : void 0;
    return message;
  }
};
function createBaseServerEvent_SlotSet() {
  return { slot: 0, source: void 0 };
}
var ServerEvent_SlotSet = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.slot !== 0) {
      writer.uint32(8).uint32(message.slot);
    }
    if (message.source !== void 0) {
      Receiver_Source.encode(message.source, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : _m02.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseServerEvent_SlotSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }
          message.slot = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.source = Receiver_Source.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      slot: isSet2(object.slot) ? globalThis.Number(object.slot) : 0,
      source: isSet2(object.source) ? Receiver_Source.fromJSON(object.source) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.slot !== 0) {
      obj.slot = Math.round(message.slot);
    }
    if (message.source !== void 0) {
      obj.source = Receiver_Source.toJSON(message.source);
    }
    return obj;
  },
  create(base) {
    return ServerEvent_SlotSet.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseServerEvent_SlotSet();
    message.slot = object.slot ?? 0;
    message.source = object.source !== void 0 && object.source !== null ? Receiver_Source.fromPartial(object.source) : void 0;
    return message;
  }
};
function createBaseServerEvent_SlotUnset() {
  return { slot: 0 };
}
var ServerEvent_SlotUnset = {
  encode(message, writer = _m02.Writer.create()) {
    if (message.slot !== 0) {
      writer.uint32(8).uint32(message.slot);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m02.Reader ? input : _m02.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseServerEvent_SlotUnset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }
          message.slot = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return { slot: isSet2(object.slot) ? globalThis.Number(object.slot) : 0 };
  },
  toJSON(message) {
    const obj = {};
    if (message.slot !== 0) {
      obj.slot = Math.round(message.slot);
    }
    return obj;
  },
  create(base) {
    return ServerEvent_SlotUnset.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseServerEvent_SlotUnset();
    message.slot = object.slot ?? 0;
    return message;
  }
};
function isSet2(value) {
  return value !== null && value !== void 0;
}

// src/generated/protobuf/features.ts
function createBaseConfig2() {
  return { mixer: void 0 };
}
var Config2 = {
  encode(message, writer = _m03.Writer.create()) {
    if (message.mixer !== void 0) {
      Config.encode(message.mixer, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m03.Reader ? input : _m03.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseConfig2();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.mixer = Config.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return { mixer: isSet3(object.mixer) ? Config.fromJSON(object.mixer) : void 0 };
  },
  toJSON(message) {
    const obj = {};
    if (message.mixer !== void 0) {
      obj.mixer = Config.toJSON(message.mixer);
    }
    return obj;
  },
  create(base) {
    return Config2.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseConfig2();
    message.mixer = object.mixer !== void 0 && object.mixer !== null ? Config.fromPartial(object.mixer) : void 0;
    return message;
  }
};
function createBaseRequest2() {
  return { mixer: void 0 };
}
var Request2 = {
  encode(message, writer = _m03.Writer.create()) {
    if (message.mixer !== void 0) {
      Request.encode(message.mixer, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m03.Reader ? input : _m03.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRequest2();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.mixer = Request.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return { mixer: isSet3(object.mixer) ? Request.fromJSON(object.mixer) : void 0 };
  },
  toJSON(message) {
    const obj = {};
    if (message.mixer !== void 0) {
      obj.mixer = Request.toJSON(message.mixer);
    }
    return obj;
  },
  create(base) {
    return Request2.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseRequest2();
    message.mixer = object.mixer !== void 0 && object.mixer !== null ? Request.fromPartial(object.mixer) : void 0;
    return message;
  }
};
function createBaseResponse2() {
  return { mixer: void 0 };
}
var Response2 = {
  encode(message, writer = _m03.Writer.create()) {
    if (message.mixer !== void 0) {
      Response.encode(message.mixer, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m03.Reader ? input : _m03.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseResponse2();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.mixer = Response.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return { mixer: isSet3(object.mixer) ? Response.fromJSON(object.mixer) : void 0 };
  },
  toJSON(message) {
    const obj = {};
    if (message.mixer !== void 0) {
      obj.mixer = Response.toJSON(message.mixer);
    }
    return obj;
  },
  create(base) {
    return Response2.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseResponse2();
    message.mixer = object.mixer !== void 0 && object.mixer !== null ? Response.fromPartial(object.mixer) : void 0;
    return message;
  }
};
function createBaseServerEvent2() {
  return { mixer: void 0 };
}
var ServerEvent2 = {
  encode(message, writer = _m03.Writer.create()) {
    if (message.mixer !== void 0) {
      ServerEvent.encode(message.mixer, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m03.Reader ? input : _m03.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseServerEvent2();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.mixer = ServerEvent.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return { mixer: isSet3(object.mixer) ? ServerEvent.fromJSON(object.mixer) : void 0 };
  },
  toJSON(message) {
    const obj = {};
    if (message.mixer !== void 0) {
      obj.mixer = ServerEvent.toJSON(message.mixer);
    }
    return obj;
  },
  create(base) {
    return ServerEvent2.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseServerEvent2();
    message.mixer = object.mixer !== void 0 && object.mixer !== null ? ServerEvent.fromPartial(object.mixer) : void 0;
    return message;
  }
};
function isSet3(value) {
  return value !== null && value !== void 0;
}

// src/generated/protobuf/session.ts
function createBaseRoomJoin() {
  return { room: "", peer: "", publish: void 0, subscribe: void 0, features: void 0, metadata: void 0 };
}
var RoomJoin = {
  encode(message, writer = _m04.Writer.create()) {
    if (message.room !== "") {
      writer.uint32(10).string(message.room);
    }
    if (message.peer !== "") {
      writer.uint32(18).string(message.peer);
    }
    if (message.publish !== void 0) {
      RoomInfoPublish.encode(message.publish, writer.uint32(26).fork()).ldelim();
    }
    if (message.subscribe !== void 0) {
      RoomInfoSubscribe.encode(message.subscribe, writer.uint32(34).fork()).ldelim();
    }
    if (message.features !== void 0) {
      Config2.encode(message.features, writer.uint32(42).fork()).ldelim();
    }
    if (message.metadata !== void 0) {
      writer.uint32(50).string(message.metadata);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : _m04.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRoomJoin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.room = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.peer = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.publish = RoomInfoPublish.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.subscribe = RoomInfoSubscribe.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }
          message.features = Config2.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }
          message.metadata = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      room: isSet4(object.room) ? globalThis.String(object.room) : "",
      peer: isSet4(object.peer) ? globalThis.String(object.peer) : "",
      publish: isSet4(object.publish) ? RoomInfoPublish.fromJSON(object.publish) : void 0,
      subscribe: isSet4(object.subscribe) ? RoomInfoSubscribe.fromJSON(object.subscribe) : void 0,
      features: isSet4(object.features) ? Config2.fromJSON(object.features) : void 0,
      metadata: isSet4(object.metadata) ? globalThis.String(object.metadata) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.room !== "") {
      obj.room = message.room;
    }
    if (message.peer !== "") {
      obj.peer = message.peer;
    }
    if (message.publish !== void 0) {
      obj.publish = RoomInfoPublish.toJSON(message.publish);
    }
    if (message.subscribe !== void 0) {
      obj.subscribe = RoomInfoSubscribe.toJSON(message.subscribe);
    }
    if (message.features !== void 0) {
      obj.features = Config2.toJSON(message.features);
    }
    if (message.metadata !== void 0) {
      obj.metadata = message.metadata;
    }
    return obj;
  },
  create(base) {
    return RoomJoin.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseRoomJoin();
    message.room = object.room ?? "";
    message.peer = object.peer ?? "";
    message.publish = object.publish !== void 0 && object.publish !== null ? RoomInfoPublish.fromPartial(object.publish) : void 0;
    message.subscribe = object.subscribe !== void 0 && object.subscribe !== null ? RoomInfoSubscribe.fromPartial(object.subscribe) : void 0;
    message.features = object.features !== void 0 && object.features !== null ? Config2.fromPartial(object.features) : void 0;
    message.metadata = object.metadata ?? void 0;
    return message;
  }
};
function createBaseRequest3() {
  return {
    reqId: 0,
    session: void 0,
    room: void 0,
    sender: void 0,
    receiver: void 0,
    features: void 0,
    messageChannel: void 0
  };
}
var Request3 = {
  encode(message, writer = _m04.Writer.create()) {
    if (message.reqId !== 0) {
      writer.uint32(8).uint32(message.reqId);
    }
    if (message.session !== void 0) {
      Request_Session.encode(message.session, writer.uint32(18).fork()).ldelim();
    }
    if (message.room !== void 0) {
      Request_Room.encode(message.room, writer.uint32(26).fork()).ldelim();
    }
    if (message.sender !== void 0) {
      Request_Sender.encode(message.sender, writer.uint32(34).fork()).ldelim();
    }
    if (message.receiver !== void 0) {
      Request_Receiver.encode(message.receiver, writer.uint32(42).fork()).ldelim();
    }
    if (message.features !== void 0) {
      Request2.encode(message.features, writer.uint32(50).fork()).ldelim();
    }
    if (message.messageChannel !== void 0) {
      Request_MessageChannel.encode(message.messageChannel, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : _m04.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRequest3();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }
          message.reqId = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.session = Request_Session.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.room = Request_Room.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.sender = Request_Sender.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }
          message.receiver = Request_Receiver.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }
          message.features = Request2.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }
          message.messageChannel = Request_MessageChannel.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      reqId: isSet4(object.reqId) ? globalThis.Number(object.reqId) : 0,
      session: isSet4(object.session) ? Request_Session.fromJSON(object.session) : void 0,
      room: isSet4(object.room) ? Request_Room.fromJSON(object.room) : void 0,
      sender: isSet4(object.sender) ? Request_Sender.fromJSON(object.sender) : void 0,
      receiver: isSet4(object.receiver) ? Request_Receiver.fromJSON(object.receiver) : void 0,
      features: isSet4(object.features) ? Request2.fromJSON(object.features) : void 0,
      messageChannel: isSet4(object.messageChannel) ? Request_MessageChannel.fromJSON(object.messageChannel) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.reqId !== 0) {
      obj.reqId = Math.round(message.reqId);
    }
    if (message.session !== void 0) {
      obj.session = Request_Session.toJSON(message.session);
    }
    if (message.room !== void 0) {
      obj.room = Request_Room.toJSON(message.room);
    }
    if (message.sender !== void 0) {
      obj.sender = Request_Sender.toJSON(message.sender);
    }
    if (message.receiver !== void 0) {
      obj.receiver = Request_Receiver.toJSON(message.receiver);
    }
    if (message.features !== void 0) {
      obj.features = Request2.toJSON(message.features);
    }
    if (message.messageChannel !== void 0) {
      obj.messageChannel = Request_MessageChannel.toJSON(message.messageChannel);
    }
    return obj;
  },
  create(base) {
    return Request3.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseRequest3();
    message.reqId = object.reqId ?? 0;
    message.session = object.session !== void 0 && object.session !== null ? Request_Session.fromPartial(object.session) : void 0;
    message.room = object.room !== void 0 && object.room !== null ? Request_Room.fromPartial(object.room) : void 0;
    message.sender = object.sender !== void 0 && object.sender !== null ? Request_Sender.fromPartial(object.sender) : void 0;
    message.receiver = object.receiver !== void 0 && object.receiver !== null ? Request_Receiver.fromPartial(object.receiver) : void 0;
    message.features = object.features !== void 0 && object.features !== null ? Request2.fromPartial(object.features) : void 0;
    message.messageChannel = object.messageChannel !== void 0 && object.messageChannel !== null ? Request_MessageChannel.fromPartial(object.messageChannel) : void 0;
    return message;
  }
};
function createBaseRequest_Session() {
  return { join: void 0, leave: void 0, sdp: void 0, disconnect: void 0 };
}
var Request_Session = {
  encode(message, writer = _m04.Writer.create()) {
    if (message.join !== void 0) {
      Request_Session_Join.encode(message.join, writer.uint32(10).fork()).ldelim();
    }
    if (message.leave !== void 0) {
      Request_Session_Leave.encode(message.leave, writer.uint32(18).fork()).ldelim();
    }
    if (message.sdp !== void 0) {
      Request_Session_UpdateSdp.encode(message.sdp, writer.uint32(26).fork()).ldelim();
    }
    if (message.disconnect !== void 0) {
      Request_Session_Disconnect.encode(message.disconnect, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : _m04.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRequest_Session();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.join = Request_Session_Join.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.leave = Request_Session_Leave.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.sdp = Request_Session_UpdateSdp.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.disconnect = Request_Session_Disconnect.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      join: isSet4(object.join) ? Request_Session_Join.fromJSON(object.join) : void 0,
      leave: isSet4(object.leave) ? Request_Session_Leave.fromJSON(object.leave) : void 0,
      sdp: isSet4(object.sdp) ? Request_Session_UpdateSdp.fromJSON(object.sdp) : void 0,
      disconnect: isSet4(object.disconnect) ? Request_Session_Disconnect.fromJSON(object.disconnect) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.join !== void 0) {
      obj.join = Request_Session_Join.toJSON(message.join);
    }
    if (message.leave !== void 0) {
      obj.leave = Request_Session_Leave.toJSON(message.leave);
    }
    if (message.sdp !== void 0) {
      obj.sdp = Request_Session_UpdateSdp.toJSON(message.sdp);
    }
    if (message.disconnect !== void 0) {
      obj.disconnect = Request_Session_Disconnect.toJSON(message.disconnect);
    }
    return obj;
  },
  create(base) {
    return Request_Session.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseRequest_Session();
    message.join = object.join !== void 0 && object.join !== null ? Request_Session_Join.fromPartial(object.join) : void 0;
    message.leave = object.leave !== void 0 && object.leave !== null ? Request_Session_Leave.fromPartial(object.leave) : void 0;
    message.sdp = object.sdp !== void 0 && object.sdp !== null ? Request_Session_UpdateSdp.fromPartial(object.sdp) : void 0;
    message.disconnect = object.disconnect !== void 0 && object.disconnect !== null ? Request_Session_Disconnect.fromPartial(object.disconnect) : void 0;
    return message;
  }
};
function createBaseRequest_Session_Join() {
  return { info: void 0, token: "" };
}
var Request_Session_Join = {
  encode(message, writer = _m04.Writer.create()) {
    if (message.info !== void 0) {
      RoomJoin.encode(message.info, writer.uint32(10).fork()).ldelim();
    }
    if (message.token !== "") {
      writer.uint32(18).string(message.token);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : _m04.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRequest_Session_Join();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.info = RoomJoin.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.token = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      info: isSet4(object.info) ? RoomJoin.fromJSON(object.info) : void 0,
      token: isSet4(object.token) ? globalThis.String(object.token) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.info !== void 0) {
      obj.info = RoomJoin.toJSON(message.info);
    }
    if (message.token !== "") {
      obj.token = message.token;
    }
    return obj;
  },
  create(base) {
    return Request_Session_Join.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseRequest_Session_Join();
    message.info = object.info !== void 0 && object.info !== null ? RoomJoin.fromPartial(object.info) : void 0;
    message.token = object.token ?? "";
    return message;
  }
};
function createBaseRequest_Session_Leave() {
  return {};
}
var Request_Session_Leave = {
  encode(_, writer = _m04.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : _m04.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRequest_Session_Leave();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  create(base) {
    return Request_Session_Leave.fromPartial(base ?? {});
  },
  fromPartial(_) {
    const message = createBaseRequest_Session_Leave();
    return message;
  }
};
function createBaseRequest_Session_UpdateSdp() {
  return { tracks: void 0, sdp: "" };
}
var Request_Session_UpdateSdp = {
  encode(message, writer = _m04.Writer.create()) {
    if (message.tracks !== void 0) {
      Tracks.encode(message.tracks, writer.uint32(10).fork()).ldelim();
    }
    if (message.sdp !== "") {
      writer.uint32(18).string(message.sdp);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : _m04.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRequest_Session_UpdateSdp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.tracks = Tracks.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.sdp = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      tracks: isSet4(object.tracks) ? Tracks.fromJSON(object.tracks) : void 0,
      sdp: isSet4(object.sdp) ? globalThis.String(object.sdp) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.tracks !== void 0) {
      obj.tracks = Tracks.toJSON(message.tracks);
    }
    if (message.sdp !== "") {
      obj.sdp = message.sdp;
    }
    return obj;
  },
  create(base) {
    return Request_Session_UpdateSdp.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseRequest_Session_UpdateSdp();
    message.tracks = object.tracks !== void 0 && object.tracks !== null ? Tracks.fromPartial(object.tracks) : void 0;
    message.sdp = object.sdp ?? "";
    return message;
  }
};
function createBaseRequest_Session_Disconnect() {
  return {};
}
var Request_Session_Disconnect = {
  encode(_, writer = _m04.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : _m04.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRequest_Session_Disconnect();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  create(base) {
    return Request_Session_Disconnect.fromPartial(base ?? {});
  },
  fromPartial(_) {
    const message = createBaseRequest_Session_Disconnect();
    return message;
  }
};
function createBaseRequest_Room() {
  return { subscribe: void 0, unsubscribe: void 0 };
}
var Request_Room = {
  encode(message, writer = _m04.Writer.create()) {
    if (message.subscribe !== void 0) {
      Request_Room_SubscribePeer.encode(message.subscribe, writer.uint32(10).fork()).ldelim();
    }
    if (message.unsubscribe !== void 0) {
      Request_Room_UnsubscribePeer.encode(message.unsubscribe, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : _m04.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRequest_Room();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.subscribe = Request_Room_SubscribePeer.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.unsubscribe = Request_Room_UnsubscribePeer.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      subscribe: isSet4(object.subscribe) ? Request_Room_SubscribePeer.fromJSON(object.subscribe) : void 0,
      unsubscribe: isSet4(object.unsubscribe) ? Request_Room_UnsubscribePeer.fromJSON(object.unsubscribe) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.subscribe !== void 0) {
      obj.subscribe = Request_Room_SubscribePeer.toJSON(message.subscribe);
    }
    if (message.unsubscribe !== void 0) {
      obj.unsubscribe = Request_Room_UnsubscribePeer.toJSON(message.unsubscribe);
    }
    return obj;
  },
  create(base) {
    return Request_Room.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseRequest_Room();
    message.subscribe = object.subscribe !== void 0 && object.subscribe !== null ? Request_Room_SubscribePeer.fromPartial(object.subscribe) : void 0;
    message.unsubscribe = object.unsubscribe !== void 0 && object.unsubscribe !== null ? Request_Room_UnsubscribePeer.fromPartial(object.unsubscribe) : void 0;
    return message;
  }
};
function createBaseRequest_Room_SubscribePeer() {
  return { peer: "" };
}
var Request_Room_SubscribePeer = {
  encode(message, writer = _m04.Writer.create()) {
    if (message.peer !== "") {
      writer.uint32(10).string(message.peer);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : _m04.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRequest_Room_SubscribePeer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.peer = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return { peer: isSet4(object.peer) ? globalThis.String(object.peer) : "" };
  },
  toJSON(message) {
    const obj = {};
    if (message.peer !== "") {
      obj.peer = message.peer;
    }
    return obj;
  },
  create(base) {
    return Request_Room_SubscribePeer.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseRequest_Room_SubscribePeer();
    message.peer = object.peer ?? "";
    return message;
  }
};
function createBaseRequest_Room_UnsubscribePeer() {
  return { peer: "" };
}
var Request_Room_UnsubscribePeer = {
  encode(message, writer = _m04.Writer.create()) {
    if (message.peer !== "") {
      writer.uint32(10).string(message.peer);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : _m04.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRequest_Room_UnsubscribePeer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.peer = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return { peer: isSet4(object.peer) ? globalThis.String(object.peer) : "" };
  },
  toJSON(message) {
    const obj = {};
    if (message.peer !== "") {
      obj.peer = message.peer;
    }
    return obj;
  },
  create(base) {
    return Request_Room_UnsubscribePeer.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseRequest_Room_UnsubscribePeer();
    message.peer = object.peer ?? "";
    return message;
  }
};
function createBaseRequest_MessageChannel() {
  return { label: "", startPub: void 0, stopPub: void 0, sub: void 0, unsub: void 0, pub: void 0 };
}
var Request_MessageChannel = {
  encode(message, writer = _m04.Writer.create()) {
    if (message.label !== "") {
      writer.uint32(10).string(message.label);
    }
    if (message.startPub !== void 0) {
      Request_MessageChannel_StartPublish.encode(message.startPub, writer.uint32(18).fork()).ldelim();
    }
    if (message.stopPub !== void 0) {
      Request_MessageChannel_StopPublish.encode(message.stopPub, writer.uint32(26).fork()).ldelim();
    }
    if (message.sub !== void 0) {
      Request_MessageChannel_Subscribe.encode(message.sub, writer.uint32(34).fork()).ldelim();
    }
    if (message.unsub !== void 0) {
      Request_MessageChannel_Unsubscribe.encode(message.unsub, writer.uint32(42).fork()).ldelim();
    }
    if (message.pub !== void 0) {
      Request_MessageChannel_Publish.encode(message.pub, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : _m04.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRequest_MessageChannel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.label = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.startPub = Request_MessageChannel_StartPublish.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.stopPub = Request_MessageChannel_StopPublish.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.sub = Request_MessageChannel_Subscribe.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }
          message.unsub = Request_MessageChannel_Unsubscribe.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }
          message.pub = Request_MessageChannel_Publish.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      label: isSet4(object.label) ? globalThis.String(object.label) : "",
      startPub: isSet4(object.startPub) ? Request_MessageChannel_StartPublish.fromJSON(object.startPub) : void 0,
      stopPub: isSet4(object.stopPub) ? Request_MessageChannel_StopPublish.fromJSON(object.stopPub) : void 0,
      sub: isSet4(object.sub) ? Request_MessageChannel_Subscribe.fromJSON(object.sub) : void 0,
      unsub: isSet4(object.unsub) ? Request_MessageChannel_Unsubscribe.fromJSON(object.unsub) : void 0,
      pub: isSet4(object.pub) ? Request_MessageChannel_Publish.fromJSON(object.pub) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.label !== "") {
      obj.label = message.label;
    }
    if (message.startPub !== void 0) {
      obj.startPub = Request_MessageChannel_StartPublish.toJSON(message.startPub);
    }
    if (message.stopPub !== void 0) {
      obj.stopPub = Request_MessageChannel_StopPublish.toJSON(message.stopPub);
    }
    if (message.sub !== void 0) {
      obj.sub = Request_MessageChannel_Subscribe.toJSON(message.sub);
    }
    if (message.unsub !== void 0) {
      obj.unsub = Request_MessageChannel_Unsubscribe.toJSON(message.unsub);
    }
    if (message.pub !== void 0) {
      obj.pub = Request_MessageChannel_Publish.toJSON(message.pub);
    }
    return obj;
  },
  create(base) {
    return Request_MessageChannel.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseRequest_MessageChannel();
    message.label = object.label ?? "";
    message.startPub = object.startPub !== void 0 && object.startPub !== null ? Request_MessageChannel_StartPublish.fromPartial(object.startPub) : void 0;
    message.stopPub = object.stopPub !== void 0 && object.stopPub !== null ? Request_MessageChannel_StopPublish.fromPartial(object.stopPub) : void 0;
    message.sub = object.sub !== void 0 && object.sub !== null ? Request_MessageChannel_Subscribe.fromPartial(object.sub) : void 0;
    message.unsub = object.unsub !== void 0 && object.unsub !== null ? Request_MessageChannel_Unsubscribe.fromPartial(object.unsub) : void 0;
    message.pub = object.pub !== void 0 && object.pub !== null ? Request_MessageChannel_Publish.fromPartial(object.pub) : void 0;
    return message;
  }
};
function createBaseRequest_MessageChannel_StartPublish() {
  return {};
}
var Request_MessageChannel_StartPublish = {
  encode(_, writer = _m04.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : _m04.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRequest_MessageChannel_StartPublish();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  create(base) {
    return Request_MessageChannel_StartPublish.fromPartial(base ?? {});
  },
  fromPartial(_) {
    const message = createBaseRequest_MessageChannel_StartPublish();
    return message;
  }
};
function createBaseRequest_MessageChannel_StopPublish() {
  return {};
}
var Request_MessageChannel_StopPublish = {
  encode(_, writer = _m04.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : _m04.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRequest_MessageChannel_StopPublish();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  create(base) {
    return Request_MessageChannel_StopPublish.fromPartial(base ?? {});
  },
  fromPartial(_) {
    const message = createBaseRequest_MessageChannel_StopPublish();
    return message;
  }
};
function createBaseRequest_MessageChannel_Subscribe() {
  return {};
}
var Request_MessageChannel_Subscribe = {
  encode(_, writer = _m04.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : _m04.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRequest_MessageChannel_Subscribe();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  create(base) {
    return Request_MessageChannel_Subscribe.fromPartial(base ?? {});
  },
  fromPartial(_) {
    const message = createBaseRequest_MessageChannel_Subscribe();
    return message;
  }
};
function createBaseRequest_MessageChannel_Unsubscribe() {
  return {};
}
var Request_MessageChannel_Unsubscribe = {
  encode(_, writer = _m04.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : _m04.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRequest_MessageChannel_Unsubscribe();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  create(base) {
    return Request_MessageChannel_Unsubscribe.fromPartial(base ?? {});
  },
  fromPartial(_) {
    const message = createBaseRequest_MessageChannel_Unsubscribe();
    return message;
  }
};
function createBaseRequest_MessageChannel_Publish() {
  return { data: new Uint8Array(0) };
}
var Request_MessageChannel_Publish = {
  encode(message, writer = _m04.Writer.create()) {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : _m04.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRequest_MessageChannel_Publish();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.data = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return { data: isSet4(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0) };
  },
  toJSON(message) {
    const obj = {};
    if (message.data.length !== 0) {
      obj.data = base64FromBytes(message.data);
    }
    return obj;
  },
  create(base) {
    return Request_MessageChannel_Publish.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseRequest_MessageChannel_Publish();
    message.data = object.data ?? new Uint8Array(0);
    return message;
  }
};
function createBaseRequest_Sender() {
  return { name: "", attach: void 0, detach: void 0, config: void 0 };
}
var Request_Sender = {
  encode(message, writer = _m04.Writer.create()) {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.attach !== void 0) {
      Request_Sender_Attach.encode(message.attach, writer.uint32(18).fork()).ldelim();
    }
    if (message.detach !== void 0) {
      Request_Sender_Detach.encode(message.detach, writer.uint32(26).fork()).ldelim();
    }
    if (message.config !== void 0) {
      Sender_Config.encode(message.config, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : _m04.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRequest_Sender();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.attach = Request_Sender_Attach.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.detach = Request_Sender_Detach.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.config = Sender_Config.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      name: isSet4(object.name) ? globalThis.String(object.name) : "",
      attach: isSet4(object.attach) ? Request_Sender_Attach.fromJSON(object.attach) : void 0,
      detach: isSet4(object.detach) ? Request_Sender_Detach.fromJSON(object.detach) : void 0,
      config: isSet4(object.config) ? Sender_Config.fromJSON(object.config) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.attach !== void 0) {
      obj.attach = Request_Sender_Attach.toJSON(message.attach);
    }
    if (message.detach !== void 0) {
      obj.detach = Request_Sender_Detach.toJSON(message.detach);
    }
    if (message.config !== void 0) {
      obj.config = Sender_Config.toJSON(message.config);
    }
    return obj;
  },
  create(base) {
    return Request_Sender.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseRequest_Sender();
    message.name = object.name ?? "";
    message.attach = object.attach !== void 0 && object.attach !== null ? Request_Sender_Attach.fromPartial(object.attach) : void 0;
    message.detach = object.detach !== void 0 && object.detach !== null ? Request_Sender_Detach.fromPartial(object.detach) : void 0;
    message.config = object.config !== void 0 && object.config !== null ? Sender_Config.fromPartial(object.config) : void 0;
    return message;
  }
};
function createBaseRequest_Sender_Attach() {
  return { source: void 0, config: void 0 };
}
var Request_Sender_Attach = {
  encode(message, writer = _m04.Writer.create()) {
    if (message.source !== void 0) {
      Sender_Source.encode(message.source, writer.uint32(10).fork()).ldelim();
    }
    if (message.config !== void 0) {
      Sender_Config.encode(message.config, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : _m04.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRequest_Sender_Attach();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.source = Sender_Source.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.config = Sender_Config.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      source: isSet4(object.source) ? Sender_Source.fromJSON(object.source) : void 0,
      config: isSet4(object.config) ? Sender_Config.fromJSON(object.config) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.source !== void 0) {
      obj.source = Sender_Source.toJSON(message.source);
    }
    if (message.config !== void 0) {
      obj.config = Sender_Config.toJSON(message.config);
    }
    return obj;
  },
  create(base) {
    return Request_Sender_Attach.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseRequest_Sender_Attach();
    message.source = object.source !== void 0 && object.source !== null ? Sender_Source.fromPartial(object.source) : void 0;
    message.config = object.config !== void 0 && object.config !== null ? Sender_Config.fromPartial(object.config) : void 0;
    return message;
  }
};
function createBaseRequest_Sender_Detach() {
  return {};
}
var Request_Sender_Detach = {
  encode(_, writer = _m04.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : _m04.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRequest_Sender_Detach();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  create(base) {
    return Request_Sender_Detach.fromPartial(base ?? {});
  },
  fromPartial(_) {
    const message = createBaseRequest_Sender_Detach();
    return message;
  }
};
function createBaseRequest_Receiver() {
  return { name: "", attach: void 0, detach: void 0, config: void 0 };
}
var Request_Receiver = {
  encode(message, writer = _m04.Writer.create()) {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.attach !== void 0) {
      Request_Receiver_Attach.encode(message.attach, writer.uint32(18).fork()).ldelim();
    }
    if (message.detach !== void 0) {
      Request_Receiver_Detach.encode(message.detach, writer.uint32(26).fork()).ldelim();
    }
    if (message.config !== void 0) {
      Receiver_Config.encode(message.config, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : _m04.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRequest_Receiver();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.attach = Request_Receiver_Attach.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.detach = Request_Receiver_Detach.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.config = Receiver_Config.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      name: isSet4(object.name) ? globalThis.String(object.name) : "",
      attach: isSet4(object.attach) ? Request_Receiver_Attach.fromJSON(object.attach) : void 0,
      detach: isSet4(object.detach) ? Request_Receiver_Detach.fromJSON(object.detach) : void 0,
      config: isSet4(object.config) ? Receiver_Config.fromJSON(object.config) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.attach !== void 0) {
      obj.attach = Request_Receiver_Attach.toJSON(message.attach);
    }
    if (message.detach !== void 0) {
      obj.detach = Request_Receiver_Detach.toJSON(message.detach);
    }
    if (message.config !== void 0) {
      obj.config = Receiver_Config.toJSON(message.config);
    }
    return obj;
  },
  create(base) {
    return Request_Receiver.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseRequest_Receiver();
    message.name = object.name ?? "";
    message.attach = object.attach !== void 0 && object.attach !== null ? Request_Receiver_Attach.fromPartial(object.attach) : void 0;
    message.detach = object.detach !== void 0 && object.detach !== null ? Request_Receiver_Detach.fromPartial(object.detach) : void 0;
    message.config = object.config !== void 0 && object.config !== null ? Receiver_Config.fromPartial(object.config) : void 0;
    return message;
  }
};
function createBaseRequest_Receiver_Attach() {
  return { source: void 0, config: void 0 };
}
var Request_Receiver_Attach = {
  encode(message, writer = _m04.Writer.create()) {
    if (message.source !== void 0) {
      Receiver_Source.encode(message.source, writer.uint32(10).fork()).ldelim();
    }
    if (message.config !== void 0) {
      Receiver_Config.encode(message.config, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : _m04.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRequest_Receiver_Attach();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.source = Receiver_Source.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.config = Receiver_Config.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      source: isSet4(object.source) ? Receiver_Source.fromJSON(object.source) : void 0,
      config: isSet4(object.config) ? Receiver_Config.fromJSON(object.config) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.source !== void 0) {
      obj.source = Receiver_Source.toJSON(message.source);
    }
    if (message.config !== void 0) {
      obj.config = Receiver_Config.toJSON(message.config);
    }
    return obj;
  },
  create(base) {
    return Request_Receiver_Attach.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseRequest_Receiver_Attach();
    message.source = object.source !== void 0 && object.source !== null ? Receiver_Source.fromPartial(object.source) : void 0;
    message.config = object.config !== void 0 && object.config !== null ? Receiver_Config.fromPartial(object.config) : void 0;
    return message;
  }
};
function createBaseRequest_Receiver_Detach() {
  return {};
}
var Request_Receiver_Detach = {
  encode(_, writer = _m04.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : _m04.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRequest_Receiver_Detach();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  create(base) {
    return Request_Receiver_Detach.fromPartial(base ?? {});
  },
  fromPartial(_) {
    const message = createBaseRequest_Receiver_Detach();
    return message;
  }
};
function createBaseResponse3() {
  return {
    reqId: 0,
    error: void 0,
    session: void 0,
    room: void 0,
    sender: void 0,
    receiver: void 0,
    features: void 0,
    messageChannel: void 0
  };
}
var Response3 = {
  encode(message, writer = _m04.Writer.create()) {
    if (message.reqId !== 0) {
      writer.uint32(8).uint32(message.reqId);
    }
    if (message.error !== void 0) {
      Error2.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    if (message.session !== void 0) {
      Response_Session.encode(message.session, writer.uint32(26).fork()).ldelim();
    }
    if (message.room !== void 0) {
      Response_Room.encode(message.room, writer.uint32(34).fork()).ldelim();
    }
    if (message.sender !== void 0) {
      Response_Sender.encode(message.sender, writer.uint32(42).fork()).ldelim();
    }
    if (message.receiver !== void 0) {
      Response_Receiver.encode(message.receiver, writer.uint32(50).fork()).ldelim();
    }
    if (message.features !== void 0) {
      Response2.encode(message.features, writer.uint32(58).fork()).ldelim();
    }
    if (message.messageChannel !== void 0) {
      Response_MessageChannel.encode(message.messageChannel, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : _m04.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseResponse3();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }
          message.reqId = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.error = Error2.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.session = Response_Session.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.room = Response_Room.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }
          message.sender = Response_Sender.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }
          message.receiver = Response_Receiver.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }
          message.features = Response2.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }
          message.messageChannel = Response_MessageChannel.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      reqId: isSet4(object.reqId) ? globalThis.Number(object.reqId) : 0,
      error: isSet4(object.error) ? Error2.fromJSON(object.error) : void 0,
      session: isSet4(object.session) ? Response_Session.fromJSON(object.session) : void 0,
      room: isSet4(object.room) ? Response_Room.fromJSON(object.room) : void 0,
      sender: isSet4(object.sender) ? Response_Sender.fromJSON(object.sender) : void 0,
      receiver: isSet4(object.receiver) ? Response_Receiver.fromJSON(object.receiver) : void 0,
      features: isSet4(object.features) ? Response2.fromJSON(object.features) : void 0,
      messageChannel: isSet4(object.messageChannel) ? Response_MessageChannel.fromJSON(object.messageChannel) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.reqId !== 0) {
      obj.reqId = Math.round(message.reqId);
    }
    if (message.error !== void 0) {
      obj.error = Error2.toJSON(message.error);
    }
    if (message.session !== void 0) {
      obj.session = Response_Session.toJSON(message.session);
    }
    if (message.room !== void 0) {
      obj.room = Response_Room.toJSON(message.room);
    }
    if (message.sender !== void 0) {
      obj.sender = Response_Sender.toJSON(message.sender);
    }
    if (message.receiver !== void 0) {
      obj.receiver = Response_Receiver.toJSON(message.receiver);
    }
    if (message.features !== void 0) {
      obj.features = Response2.toJSON(message.features);
    }
    if (message.messageChannel !== void 0) {
      obj.messageChannel = Response_MessageChannel.toJSON(message.messageChannel);
    }
    return obj;
  },
  create(base) {
    return Response3.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseResponse3();
    message.reqId = object.reqId ?? 0;
    message.error = object.error !== void 0 && object.error !== null ? Error2.fromPartial(object.error) : void 0;
    message.session = object.session !== void 0 && object.session !== null ? Response_Session.fromPartial(object.session) : void 0;
    message.room = object.room !== void 0 && object.room !== null ? Response_Room.fromPartial(object.room) : void 0;
    message.sender = object.sender !== void 0 && object.sender !== null ? Response_Sender.fromPartial(object.sender) : void 0;
    message.receiver = object.receiver !== void 0 && object.receiver !== null ? Response_Receiver.fromPartial(object.receiver) : void 0;
    message.features = object.features !== void 0 && object.features !== null ? Response2.fromPartial(object.features) : void 0;
    message.messageChannel = object.messageChannel !== void 0 && object.messageChannel !== null ? Response_MessageChannel.fromPartial(object.messageChannel) : void 0;
    return message;
  }
};
function createBaseResponse_Session() {
  return { join: void 0, leave: void 0, sdp: void 0, disconnect: void 0 };
}
var Response_Session = {
  encode(message, writer = _m04.Writer.create()) {
    if (message.join !== void 0) {
      Response_Session_Join.encode(message.join, writer.uint32(10).fork()).ldelim();
    }
    if (message.leave !== void 0) {
      Response_Session_Leave.encode(message.leave, writer.uint32(18).fork()).ldelim();
    }
    if (message.sdp !== void 0) {
      Response_Session_UpdateSdp.encode(message.sdp, writer.uint32(26).fork()).ldelim();
    }
    if (message.disconnect !== void 0) {
      Response_Session_Disconnect.encode(message.disconnect, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : _m04.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseResponse_Session();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.join = Response_Session_Join.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.leave = Response_Session_Leave.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.sdp = Response_Session_UpdateSdp.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.disconnect = Response_Session_Disconnect.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      join: isSet4(object.join) ? Response_Session_Join.fromJSON(object.join) : void 0,
      leave: isSet4(object.leave) ? Response_Session_Leave.fromJSON(object.leave) : void 0,
      sdp: isSet4(object.sdp) ? Response_Session_UpdateSdp.fromJSON(object.sdp) : void 0,
      disconnect: isSet4(object.disconnect) ? Response_Session_Disconnect.fromJSON(object.disconnect) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.join !== void 0) {
      obj.join = Response_Session_Join.toJSON(message.join);
    }
    if (message.leave !== void 0) {
      obj.leave = Response_Session_Leave.toJSON(message.leave);
    }
    if (message.sdp !== void 0) {
      obj.sdp = Response_Session_UpdateSdp.toJSON(message.sdp);
    }
    if (message.disconnect !== void 0) {
      obj.disconnect = Response_Session_Disconnect.toJSON(message.disconnect);
    }
    return obj;
  },
  create(base) {
    return Response_Session.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseResponse_Session();
    message.join = object.join !== void 0 && object.join !== null ? Response_Session_Join.fromPartial(object.join) : void 0;
    message.leave = object.leave !== void 0 && object.leave !== null ? Response_Session_Leave.fromPartial(object.leave) : void 0;
    message.sdp = object.sdp !== void 0 && object.sdp !== null ? Response_Session_UpdateSdp.fromPartial(object.sdp) : void 0;
    message.disconnect = object.disconnect !== void 0 && object.disconnect !== null ? Response_Session_Disconnect.fromPartial(object.disconnect) : void 0;
    return message;
  }
};
function createBaseResponse_Session_Join() {
  return {};
}
var Response_Session_Join = {
  encode(_, writer = _m04.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : _m04.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseResponse_Session_Join();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  create(base) {
    return Response_Session_Join.fromPartial(base ?? {});
  },
  fromPartial(_) {
    const message = createBaseResponse_Session_Join();
    return message;
  }
};
function createBaseResponse_Session_Leave() {
  return {};
}
var Response_Session_Leave = {
  encode(_, writer = _m04.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : _m04.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseResponse_Session_Leave();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  create(base) {
    return Response_Session_Leave.fromPartial(base ?? {});
  },
  fromPartial(_) {
    const message = createBaseResponse_Session_Leave();
    return message;
  }
};
function createBaseResponse_Session_UpdateSdp() {
  return { sdp: "" };
}
var Response_Session_UpdateSdp = {
  encode(message, writer = _m04.Writer.create()) {
    if (message.sdp !== "") {
      writer.uint32(10).string(message.sdp);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : _m04.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseResponse_Session_UpdateSdp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.sdp = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return { sdp: isSet4(object.sdp) ? globalThis.String(object.sdp) : "" };
  },
  toJSON(message) {
    const obj = {};
    if (message.sdp !== "") {
      obj.sdp = message.sdp;
    }
    return obj;
  },
  create(base) {
    return Response_Session_UpdateSdp.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseResponse_Session_UpdateSdp();
    message.sdp = object.sdp ?? "";
    return message;
  }
};
function createBaseResponse_Session_Disconnect() {
  return {};
}
var Response_Session_Disconnect = {
  encode(_, writer = _m04.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : _m04.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseResponse_Session_Disconnect();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  create(base) {
    return Response_Session_Disconnect.fromPartial(base ?? {});
  },
  fromPartial(_) {
    const message = createBaseResponse_Session_Disconnect();
    return message;
  }
};
function createBaseResponse_Room() {
  return { subscribe: void 0, unsubscribe: void 0 };
}
var Response_Room = {
  encode(message, writer = _m04.Writer.create()) {
    if (message.subscribe !== void 0) {
      Response_Room_SubscribePeer.encode(message.subscribe, writer.uint32(10).fork()).ldelim();
    }
    if (message.unsubscribe !== void 0) {
      Response_Room_UnsubscribePeer.encode(message.unsubscribe, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : _m04.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseResponse_Room();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.subscribe = Response_Room_SubscribePeer.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.unsubscribe = Response_Room_UnsubscribePeer.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      subscribe: isSet4(object.subscribe) ? Response_Room_SubscribePeer.fromJSON(object.subscribe) : void 0,
      unsubscribe: isSet4(object.unsubscribe) ? Response_Room_UnsubscribePeer.fromJSON(object.unsubscribe) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.subscribe !== void 0) {
      obj.subscribe = Response_Room_SubscribePeer.toJSON(message.subscribe);
    }
    if (message.unsubscribe !== void 0) {
      obj.unsubscribe = Response_Room_UnsubscribePeer.toJSON(message.unsubscribe);
    }
    return obj;
  },
  create(base) {
    return Response_Room.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseResponse_Room();
    message.subscribe = object.subscribe !== void 0 && object.subscribe !== null ? Response_Room_SubscribePeer.fromPartial(object.subscribe) : void 0;
    message.unsubscribe = object.unsubscribe !== void 0 && object.unsubscribe !== null ? Response_Room_UnsubscribePeer.fromPartial(object.unsubscribe) : void 0;
    return message;
  }
};
function createBaseResponse_Room_SubscribePeer() {
  return {};
}
var Response_Room_SubscribePeer = {
  encode(_, writer = _m04.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : _m04.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseResponse_Room_SubscribePeer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  create(base) {
    return Response_Room_SubscribePeer.fromPartial(base ?? {});
  },
  fromPartial(_) {
    const message = createBaseResponse_Room_SubscribePeer();
    return message;
  }
};
function createBaseResponse_Room_UnsubscribePeer() {
  return {};
}
var Response_Room_UnsubscribePeer = {
  encode(_, writer = _m04.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : _m04.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseResponse_Room_UnsubscribePeer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  create(base) {
    return Response_Room_UnsubscribePeer.fromPartial(base ?? {});
  },
  fromPartial(_) {
    const message = createBaseResponse_Room_UnsubscribePeer();
    return message;
  }
};
function createBaseResponse_MessageChannel() {
  return { label: "", startPub: void 0, stopPub: void 0, sub: void 0, unsub: void 0, pub: void 0 };
}
var Response_MessageChannel = {
  encode(message, writer = _m04.Writer.create()) {
    if (message.label !== "") {
      writer.uint32(10).string(message.label);
    }
    if (message.startPub !== void 0) {
      Response_MessageChannel_StartPublish.encode(message.startPub, writer.uint32(18).fork()).ldelim();
    }
    if (message.stopPub !== void 0) {
      Response_MessageChannel_StopPublish.encode(message.stopPub, writer.uint32(26).fork()).ldelim();
    }
    if (message.sub !== void 0) {
      Response_MessageChannel_Subscribe.encode(message.sub, writer.uint32(34).fork()).ldelim();
    }
    if (message.unsub !== void 0) {
      Response_MessageChannel_Unsubscribe.encode(message.unsub, writer.uint32(42).fork()).ldelim();
    }
    if (message.pub !== void 0) {
      Response_MessageChannel_Publish.encode(message.pub, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : _m04.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseResponse_MessageChannel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.label = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.startPub = Response_MessageChannel_StartPublish.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.stopPub = Response_MessageChannel_StopPublish.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.sub = Response_MessageChannel_Subscribe.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }
          message.unsub = Response_MessageChannel_Unsubscribe.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }
          message.pub = Response_MessageChannel_Publish.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      label: isSet4(object.label) ? globalThis.String(object.label) : "",
      startPub: isSet4(object.startPub) ? Response_MessageChannel_StartPublish.fromJSON(object.startPub) : void 0,
      stopPub: isSet4(object.stopPub) ? Response_MessageChannel_StopPublish.fromJSON(object.stopPub) : void 0,
      sub: isSet4(object.sub) ? Response_MessageChannel_Subscribe.fromJSON(object.sub) : void 0,
      unsub: isSet4(object.unsub) ? Response_MessageChannel_Unsubscribe.fromJSON(object.unsub) : void 0,
      pub: isSet4(object.pub) ? Response_MessageChannel_Publish.fromJSON(object.pub) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.label !== "") {
      obj.label = message.label;
    }
    if (message.startPub !== void 0) {
      obj.startPub = Response_MessageChannel_StartPublish.toJSON(message.startPub);
    }
    if (message.stopPub !== void 0) {
      obj.stopPub = Response_MessageChannel_StopPublish.toJSON(message.stopPub);
    }
    if (message.sub !== void 0) {
      obj.sub = Response_MessageChannel_Subscribe.toJSON(message.sub);
    }
    if (message.unsub !== void 0) {
      obj.unsub = Response_MessageChannel_Unsubscribe.toJSON(message.unsub);
    }
    if (message.pub !== void 0) {
      obj.pub = Response_MessageChannel_Publish.toJSON(message.pub);
    }
    return obj;
  },
  create(base) {
    return Response_MessageChannel.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseResponse_MessageChannel();
    message.label = object.label ?? "";
    message.startPub = object.startPub !== void 0 && object.startPub !== null ? Response_MessageChannel_StartPublish.fromPartial(object.startPub) : void 0;
    message.stopPub = object.stopPub !== void 0 && object.stopPub !== null ? Response_MessageChannel_StopPublish.fromPartial(object.stopPub) : void 0;
    message.sub = object.sub !== void 0 && object.sub !== null ? Response_MessageChannel_Subscribe.fromPartial(object.sub) : void 0;
    message.unsub = object.unsub !== void 0 && object.unsub !== null ? Response_MessageChannel_Unsubscribe.fromPartial(object.unsub) : void 0;
    message.pub = object.pub !== void 0 && object.pub !== null ? Response_MessageChannel_Publish.fromPartial(object.pub) : void 0;
    return message;
  }
};
function createBaseResponse_MessageChannel_StartPublish() {
  return {};
}
var Response_MessageChannel_StartPublish = {
  encode(_, writer = _m04.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : _m04.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseResponse_MessageChannel_StartPublish();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  create(base) {
    return Response_MessageChannel_StartPublish.fromPartial(base ?? {});
  },
  fromPartial(_) {
    const message = createBaseResponse_MessageChannel_StartPublish();
    return message;
  }
};
function createBaseResponse_MessageChannel_StopPublish() {
  return {};
}
var Response_MessageChannel_StopPublish = {
  encode(_, writer = _m04.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : _m04.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseResponse_MessageChannel_StopPublish();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  create(base) {
    return Response_MessageChannel_StopPublish.fromPartial(base ?? {});
  },
  fromPartial(_) {
    const message = createBaseResponse_MessageChannel_StopPublish();
    return message;
  }
};
function createBaseResponse_MessageChannel_Subscribe() {
  return {};
}
var Response_MessageChannel_Subscribe = {
  encode(_, writer = _m04.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : _m04.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseResponse_MessageChannel_Subscribe();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  create(base) {
    return Response_MessageChannel_Subscribe.fromPartial(base ?? {});
  },
  fromPartial(_) {
    const message = createBaseResponse_MessageChannel_Subscribe();
    return message;
  }
};
function createBaseResponse_MessageChannel_Unsubscribe() {
  return {};
}
var Response_MessageChannel_Unsubscribe = {
  encode(_, writer = _m04.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : _m04.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseResponse_MessageChannel_Unsubscribe();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  create(base) {
    return Response_MessageChannel_Unsubscribe.fromPartial(base ?? {});
  },
  fromPartial(_) {
    const message = createBaseResponse_MessageChannel_Unsubscribe();
    return message;
  }
};
function createBaseResponse_MessageChannel_Publish() {
  return {};
}
var Response_MessageChannel_Publish = {
  encode(_, writer = _m04.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : _m04.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseResponse_MessageChannel_Publish();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  create(base) {
    return Response_MessageChannel_Publish.fromPartial(base ?? {});
  },
  fromPartial(_) {
    const message = createBaseResponse_MessageChannel_Publish();
    return message;
  }
};
function createBaseResponse_Sender() {
  return { attach: void 0, detach: void 0, config: void 0 };
}
var Response_Sender = {
  encode(message, writer = _m04.Writer.create()) {
    if (message.attach !== void 0) {
      Response_Sender_Attach.encode(message.attach, writer.uint32(10).fork()).ldelim();
    }
    if (message.detach !== void 0) {
      Response_Sender_Detach.encode(message.detach, writer.uint32(18).fork()).ldelim();
    }
    if (message.config !== void 0) {
      Response_Sender_Config.encode(message.config, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : _m04.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseResponse_Sender();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.attach = Response_Sender_Attach.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.detach = Response_Sender_Detach.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.config = Response_Sender_Config.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      attach: isSet4(object.attach) ? Response_Sender_Attach.fromJSON(object.attach) : void 0,
      detach: isSet4(object.detach) ? Response_Sender_Detach.fromJSON(object.detach) : void 0,
      config: isSet4(object.config) ? Response_Sender_Config.fromJSON(object.config) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.attach !== void 0) {
      obj.attach = Response_Sender_Attach.toJSON(message.attach);
    }
    if (message.detach !== void 0) {
      obj.detach = Response_Sender_Detach.toJSON(message.detach);
    }
    if (message.config !== void 0) {
      obj.config = Response_Sender_Config.toJSON(message.config);
    }
    return obj;
  },
  create(base) {
    return Response_Sender.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseResponse_Sender();
    message.attach = object.attach !== void 0 && object.attach !== null ? Response_Sender_Attach.fromPartial(object.attach) : void 0;
    message.detach = object.detach !== void 0 && object.detach !== null ? Response_Sender_Detach.fromPartial(object.detach) : void 0;
    message.config = object.config !== void 0 && object.config !== null ? Response_Sender_Config.fromPartial(object.config) : void 0;
    return message;
  }
};
function createBaseResponse_Sender_Attach() {
  return {};
}
var Response_Sender_Attach = {
  encode(_, writer = _m04.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : _m04.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseResponse_Sender_Attach();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  create(base) {
    return Response_Sender_Attach.fromPartial(base ?? {});
  },
  fromPartial(_) {
    const message = createBaseResponse_Sender_Attach();
    return message;
  }
};
function createBaseResponse_Sender_Detach() {
  return {};
}
var Response_Sender_Detach = {
  encode(_, writer = _m04.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : _m04.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseResponse_Sender_Detach();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  create(base) {
    return Response_Sender_Detach.fromPartial(base ?? {});
  },
  fromPartial(_) {
    const message = createBaseResponse_Sender_Detach();
    return message;
  }
};
function createBaseResponse_Sender_Config() {
  return {};
}
var Response_Sender_Config = {
  encode(_, writer = _m04.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : _m04.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseResponse_Sender_Config();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  create(base) {
    return Response_Sender_Config.fromPartial(base ?? {});
  },
  fromPartial(_) {
    const message = createBaseResponse_Sender_Config();
    return message;
  }
};
function createBaseResponse_Receiver() {
  return { attach: void 0, detach: void 0, config: void 0 };
}
var Response_Receiver = {
  encode(message, writer = _m04.Writer.create()) {
    if (message.attach !== void 0) {
      Response_Receiver_Attach.encode(message.attach, writer.uint32(10).fork()).ldelim();
    }
    if (message.detach !== void 0) {
      Response_Receiver_Detach.encode(message.detach, writer.uint32(18).fork()).ldelim();
    }
    if (message.config !== void 0) {
      Response_Receiver_Config.encode(message.config, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : _m04.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseResponse_Receiver();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.attach = Response_Receiver_Attach.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.detach = Response_Receiver_Detach.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.config = Response_Receiver_Config.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      attach: isSet4(object.attach) ? Response_Receiver_Attach.fromJSON(object.attach) : void 0,
      detach: isSet4(object.detach) ? Response_Receiver_Detach.fromJSON(object.detach) : void 0,
      config: isSet4(object.config) ? Response_Receiver_Config.fromJSON(object.config) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.attach !== void 0) {
      obj.attach = Response_Receiver_Attach.toJSON(message.attach);
    }
    if (message.detach !== void 0) {
      obj.detach = Response_Receiver_Detach.toJSON(message.detach);
    }
    if (message.config !== void 0) {
      obj.config = Response_Receiver_Config.toJSON(message.config);
    }
    return obj;
  },
  create(base) {
    return Response_Receiver.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseResponse_Receiver();
    message.attach = object.attach !== void 0 && object.attach !== null ? Response_Receiver_Attach.fromPartial(object.attach) : void 0;
    message.detach = object.detach !== void 0 && object.detach !== null ? Response_Receiver_Detach.fromPartial(object.detach) : void 0;
    message.config = object.config !== void 0 && object.config !== null ? Response_Receiver_Config.fromPartial(object.config) : void 0;
    return message;
  }
};
function createBaseResponse_Receiver_Attach() {
  return {};
}
var Response_Receiver_Attach = {
  encode(_, writer = _m04.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : _m04.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseResponse_Receiver_Attach();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  create(base) {
    return Response_Receiver_Attach.fromPartial(base ?? {});
  },
  fromPartial(_) {
    const message = createBaseResponse_Receiver_Attach();
    return message;
  }
};
function createBaseResponse_Receiver_Detach() {
  return {};
}
var Response_Receiver_Detach = {
  encode(_, writer = _m04.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : _m04.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseResponse_Receiver_Detach();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  create(base) {
    return Response_Receiver_Detach.fromPartial(base ?? {});
  },
  fromPartial(_) {
    const message = createBaseResponse_Receiver_Detach();
    return message;
  }
};
function createBaseResponse_Receiver_Config() {
  return {};
}
var Response_Receiver_Config = {
  encode(_, writer = _m04.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : _m04.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseResponse_Receiver_Config();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  create(base) {
    return Response_Receiver_Config.fromPartial(base ?? {});
  },
  fromPartial(_) {
    const message = createBaseResponse_Receiver_Config();
    return message;
  }
};
function createBaseServerEvent3() {
  return {
    seq: 0,
    session: void 0,
    room: void 0,
    sender: void 0,
    receiver: void 0,
    response: void 0,
    features: void 0,
    messageChannel: void 0
  };
}
var ServerEvent3 = {
  encode(message, writer = _m04.Writer.create()) {
    if (message.seq !== 0) {
      writer.uint32(8).uint32(message.seq);
    }
    if (message.session !== void 0) {
      ServerEvent_Session.encode(message.session, writer.uint32(18).fork()).ldelim();
    }
    if (message.room !== void 0) {
      ServerEvent_Room.encode(message.room, writer.uint32(26).fork()).ldelim();
    }
    if (message.sender !== void 0) {
      ServerEvent_Sender.encode(message.sender, writer.uint32(34).fork()).ldelim();
    }
    if (message.receiver !== void 0) {
      ServerEvent_Receiver.encode(message.receiver, writer.uint32(42).fork()).ldelim();
    }
    if (message.response !== void 0) {
      Response3.encode(message.response, writer.uint32(50).fork()).ldelim();
    }
    if (message.features !== void 0) {
      ServerEvent2.encode(message.features, writer.uint32(58).fork()).ldelim();
    }
    if (message.messageChannel !== void 0) {
      ServerEvent_MessageChannel.encode(message.messageChannel, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : _m04.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseServerEvent3();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }
          message.seq = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.session = ServerEvent_Session.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.room = ServerEvent_Room.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.sender = ServerEvent_Sender.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }
          message.receiver = ServerEvent_Receiver.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }
          message.response = Response3.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }
          message.features = ServerEvent2.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }
          message.messageChannel = ServerEvent_MessageChannel.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      seq: isSet4(object.seq) ? globalThis.Number(object.seq) : 0,
      session: isSet4(object.session) ? ServerEvent_Session.fromJSON(object.session) : void 0,
      room: isSet4(object.room) ? ServerEvent_Room.fromJSON(object.room) : void 0,
      sender: isSet4(object.sender) ? ServerEvent_Sender.fromJSON(object.sender) : void 0,
      receiver: isSet4(object.receiver) ? ServerEvent_Receiver.fromJSON(object.receiver) : void 0,
      response: isSet4(object.response) ? Response3.fromJSON(object.response) : void 0,
      features: isSet4(object.features) ? ServerEvent2.fromJSON(object.features) : void 0,
      messageChannel: isSet4(object.messageChannel) ? ServerEvent_MessageChannel.fromJSON(object.messageChannel) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.seq !== 0) {
      obj.seq = Math.round(message.seq);
    }
    if (message.session !== void 0) {
      obj.session = ServerEvent_Session.toJSON(message.session);
    }
    if (message.room !== void 0) {
      obj.room = ServerEvent_Room.toJSON(message.room);
    }
    if (message.sender !== void 0) {
      obj.sender = ServerEvent_Sender.toJSON(message.sender);
    }
    if (message.receiver !== void 0) {
      obj.receiver = ServerEvent_Receiver.toJSON(message.receiver);
    }
    if (message.response !== void 0) {
      obj.response = Response3.toJSON(message.response);
    }
    if (message.features !== void 0) {
      obj.features = ServerEvent2.toJSON(message.features);
    }
    if (message.messageChannel !== void 0) {
      obj.messageChannel = ServerEvent_MessageChannel.toJSON(message.messageChannel);
    }
    return obj;
  },
  create(base) {
    return ServerEvent3.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseServerEvent3();
    message.seq = object.seq ?? 0;
    message.session = object.session !== void 0 && object.session !== null ? ServerEvent_Session.fromPartial(object.session) : void 0;
    message.room = object.room !== void 0 && object.room !== null ? ServerEvent_Room.fromPartial(object.room) : void 0;
    message.sender = object.sender !== void 0 && object.sender !== null ? ServerEvent_Sender.fromPartial(object.sender) : void 0;
    message.receiver = object.receiver !== void 0 && object.receiver !== null ? ServerEvent_Receiver.fromPartial(object.receiver) : void 0;
    message.response = object.response !== void 0 && object.response !== null ? Response3.fromPartial(object.response) : void 0;
    message.features = object.features !== void 0 && object.features !== null ? ServerEvent2.fromPartial(object.features) : void 0;
    message.messageChannel = object.messageChannel !== void 0 && object.messageChannel !== null ? ServerEvent_MessageChannel.fromPartial(object.messageChannel) : void 0;
    return message;
  }
};
function createBaseServerEvent_Session() {
  return { connected: void 0, joined: void 0, leaved: void 0, disconnected: void 0, goway: void 0 };
}
var ServerEvent_Session = {
  encode(message, writer = _m04.Writer.create()) {
    if (message.connected !== void 0) {
      ServerEvent_Session_Connected.encode(message.connected, writer.uint32(10).fork()).ldelim();
    }
    if (message.joined !== void 0) {
      ServerEvent_Session_JoinedRoom.encode(message.joined, writer.uint32(18).fork()).ldelim();
    }
    if (message.leaved !== void 0) {
      ServerEvent_Session_LeavedRoom.encode(message.leaved, writer.uint32(26).fork()).ldelim();
    }
    if (message.disconnected !== void 0) {
      ServerEvent_Session_Disconnected.encode(message.disconnected, writer.uint32(34).fork()).ldelim();
    }
    if (message.goway !== void 0) {
      ServerEvent_Session_GoAway.encode(message.goway, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : _m04.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseServerEvent_Session();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.connected = ServerEvent_Session_Connected.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.joined = ServerEvent_Session_JoinedRoom.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.leaved = ServerEvent_Session_LeavedRoom.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.disconnected = ServerEvent_Session_Disconnected.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }
          message.goway = ServerEvent_Session_GoAway.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      connected: isSet4(object.connected) ? ServerEvent_Session_Connected.fromJSON(object.connected) : void 0,
      joined: isSet4(object.joined) ? ServerEvent_Session_JoinedRoom.fromJSON(object.joined) : void 0,
      leaved: isSet4(object.leaved) ? ServerEvent_Session_LeavedRoom.fromJSON(object.leaved) : void 0,
      disconnected: isSet4(object.disconnected) ? ServerEvent_Session_Disconnected.fromJSON(object.disconnected) : void 0,
      goway: isSet4(object.goway) ? ServerEvent_Session_GoAway.fromJSON(object.goway) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.connected !== void 0) {
      obj.connected = ServerEvent_Session_Connected.toJSON(message.connected);
    }
    if (message.joined !== void 0) {
      obj.joined = ServerEvent_Session_JoinedRoom.toJSON(message.joined);
    }
    if (message.leaved !== void 0) {
      obj.leaved = ServerEvent_Session_LeavedRoom.toJSON(message.leaved);
    }
    if (message.disconnected !== void 0) {
      obj.disconnected = ServerEvent_Session_Disconnected.toJSON(message.disconnected);
    }
    if (message.goway !== void 0) {
      obj.goway = ServerEvent_Session_GoAway.toJSON(message.goway);
    }
    return obj;
  },
  create(base) {
    return ServerEvent_Session.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseServerEvent_Session();
    message.connected = object.connected !== void 0 && object.connected !== null ? ServerEvent_Session_Connected.fromPartial(object.connected) : void 0;
    message.joined = object.joined !== void 0 && object.joined !== null ? ServerEvent_Session_JoinedRoom.fromPartial(object.joined) : void 0;
    message.leaved = object.leaved !== void 0 && object.leaved !== null ? ServerEvent_Session_LeavedRoom.fromPartial(object.leaved) : void 0;
    message.disconnected = object.disconnected !== void 0 && object.disconnected !== null ? ServerEvent_Session_Disconnected.fromPartial(object.disconnected) : void 0;
    message.goway = object.goway !== void 0 && object.goway !== null ? ServerEvent_Session_GoAway.fromPartial(object.goway) : void 0;
    return message;
  }
};
function createBaseServerEvent_Session_Connected() {
  return {};
}
var ServerEvent_Session_Connected = {
  encode(_, writer = _m04.Writer.create()) {
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : _m04.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseServerEvent_Session_Connected();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  create(base) {
    return ServerEvent_Session_Connected.fromPartial(base ?? {});
  },
  fromPartial(_) {
    const message = createBaseServerEvent_Session_Connected();
    return message;
  }
};
function createBaseServerEvent_Session_JoinedRoom() {
  return { room: "", peer: "" };
}
var ServerEvent_Session_JoinedRoom = {
  encode(message, writer = _m04.Writer.create()) {
    if (message.room !== "") {
      writer.uint32(10).string(message.room);
    }
    if (message.peer !== "") {
      writer.uint32(18).string(message.peer);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : _m04.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseServerEvent_Session_JoinedRoom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.room = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.peer = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      room: isSet4(object.room) ? globalThis.String(object.room) : "",
      peer: isSet4(object.peer) ? globalThis.String(object.peer) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.room !== "") {
      obj.room = message.room;
    }
    if (message.peer !== "") {
      obj.peer = message.peer;
    }
    return obj;
  },
  create(base) {
    return ServerEvent_Session_JoinedRoom.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseServerEvent_Session_JoinedRoom();
    message.room = object.room ?? "";
    message.peer = object.peer ?? "";
    return message;
  }
};
function createBaseServerEvent_Session_LeavedRoom() {
  return { room: "", peer: "" };
}
var ServerEvent_Session_LeavedRoom = {
  encode(message, writer = _m04.Writer.create()) {
    if (message.room !== "") {
      writer.uint32(10).string(message.room);
    }
    if (message.peer !== "") {
      writer.uint32(18).string(message.peer);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : _m04.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseServerEvent_Session_LeavedRoom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.room = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.peer = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      room: isSet4(object.room) ? globalThis.String(object.room) : "",
      peer: isSet4(object.peer) ? globalThis.String(object.peer) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.room !== "") {
      obj.room = message.room;
    }
    if (message.peer !== "") {
      obj.peer = message.peer;
    }
    return obj;
  },
  create(base) {
    return ServerEvent_Session_LeavedRoom.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseServerEvent_Session_LeavedRoom();
    message.room = object.room ?? "";
    message.peer = object.peer ?? "";
    return message;
  }
};
function createBaseServerEvent_Session_Disconnected() {
  return { reason: "" };
}
var ServerEvent_Session_Disconnected = {
  encode(message, writer = _m04.Writer.create()) {
    if (message.reason !== "") {
      writer.uint32(10).string(message.reason);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : _m04.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseServerEvent_Session_Disconnected();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.reason = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return { reason: isSet4(object.reason) ? globalThis.String(object.reason) : "" };
  },
  toJSON(message) {
    const obj = {};
    if (message.reason !== "") {
      obj.reason = message.reason;
    }
    return obj;
  },
  create(base) {
    return ServerEvent_Session_Disconnected.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseServerEvent_Session_Disconnected();
    message.reason = object.reason ?? "";
    return message;
  }
};
function createBaseServerEvent_Session_GoAway() {
  return { reason: "", remainSeconds: 0 };
}
var ServerEvent_Session_GoAway = {
  encode(message, writer = _m04.Writer.create()) {
    if (message.reason !== "") {
      writer.uint32(10).string(message.reason);
    }
    if (message.remainSeconds !== 0) {
      writer.uint32(16).uint32(message.remainSeconds);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : _m04.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseServerEvent_Session_GoAway();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.reason = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }
          message.remainSeconds = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      reason: isSet4(object.reason) ? globalThis.String(object.reason) : "",
      remainSeconds: isSet4(object.remainSeconds) ? globalThis.Number(object.remainSeconds) : 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.reason !== "") {
      obj.reason = message.reason;
    }
    if (message.remainSeconds !== 0) {
      obj.remainSeconds = Math.round(message.remainSeconds);
    }
    return obj;
  },
  create(base) {
    return ServerEvent_Session_GoAway.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseServerEvent_Session_GoAway();
    message.reason = object.reason ?? "";
    message.remainSeconds = object.remainSeconds ?? 0;
    return message;
  }
};
function createBaseServerEvent_Room() {
  return {
    peerJoined: void 0,
    peerUpdated: void 0,
    peerLeaved: void 0,
    trackStarted: void 0,
    trackUpdated: void 0,
    trackStopped: void 0
  };
}
var ServerEvent_Room = {
  encode(message, writer = _m04.Writer.create()) {
    if (message.peerJoined !== void 0) {
      ServerEvent_Room_PeerJoined.encode(message.peerJoined, writer.uint32(10).fork()).ldelim();
    }
    if (message.peerUpdated !== void 0) {
      ServerEvent_Room_PeerUpdated.encode(message.peerUpdated, writer.uint32(18).fork()).ldelim();
    }
    if (message.peerLeaved !== void 0) {
      ServerEvent_Room_PeerLeaved.encode(message.peerLeaved, writer.uint32(26).fork()).ldelim();
    }
    if (message.trackStarted !== void 0) {
      ServerEvent_Room_TrackStarted.encode(message.trackStarted, writer.uint32(34).fork()).ldelim();
    }
    if (message.trackUpdated !== void 0) {
      ServerEvent_Room_TrackUpdated.encode(message.trackUpdated, writer.uint32(42).fork()).ldelim();
    }
    if (message.trackStopped !== void 0) {
      ServerEvent_Room_TrackStopped.encode(message.trackStopped, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : _m04.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseServerEvent_Room();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.peerJoined = ServerEvent_Room_PeerJoined.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.peerUpdated = ServerEvent_Room_PeerUpdated.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.peerLeaved = ServerEvent_Room_PeerLeaved.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.trackStarted = ServerEvent_Room_TrackStarted.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }
          message.trackUpdated = ServerEvent_Room_TrackUpdated.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }
          message.trackStopped = ServerEvent_Room_TrackStopped.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      peerJoined: isSet4(object.peerJoined) ? ServerEvent_Room_PeerJoined.fromJSON(object.peerJoined) : void 0,
      peerUpdated: isSet4(object.peerUpdated) ? ServerEvent_Room_PeerUpdated.fromJSON(object.peerUpdated) : void 0,
      peerLeaved: isSet4(object.peerLeaved) ? ServerEvent_Room_PeerLeaved.fromJSON(object.peerLeaved) : void 0,
      trackStarted: isSet4(object.trackStarted) ? ServerEvent_Room_TrackStarted.fromJSON(object.trackStarted) : void 0,
      trackUpdated: isSet4(object.trackUpdated) ? ServerEvent_Room_TrackUpdated.fromJSON(object.trackUpdated) : void 0,
      trackStopped: isSet4(object.trackStopped) ? ServerEvent_Room_TrackStopped.fromJSON(object.trackStopped) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.peerJoined !== void 0) {
      obj.peerJoined = ServerEvent_Room_PeerJoined.toJSON(message.peerJoined);
    }
    if (message.peerUpdated !== void 0) {
      obj.peerUpdated = ServerEvent_Room_PeerUpdated.toJSON(message.peerUpdated);
    }
    if (message.peerLeaved !== void 0) {
      obj.peerLeaved = ServerEvent_Room_PeerLeaved.toJSON(message.peerLeaved);
    }
    if (message.trackStarted !== void 0) {
      obj.trackStarted = ServerEvent_Room_TrackStarted.toJSON(message.trackStarted);
    }
    if (message.trackUpdated !== void 0) {
      obj.trackUpdated = ServerEvent_Room_TrackUpdated.toJSON(message.trackUpdated);
    }
    if (message.trackStopped !== void 0) {
      obj.trackStopped = ServerEvent_Room_TrackStopped.toJSON(message.trackStopped);
    }
    return obj;
  },
  create(base) {
    return ServerEvent_Room.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseServerEvent_Room();
    message.peerJoined = object.peerJoined !== void 0 && object.peerJoined !== null ? ServerEvent_Room_PeerJoined.fromPartial(object.peerJoined) : void 0;
    message.peerUpdated = object.peerUpdated !== void 0 && object.peerUpdated !== null ? ServerEvent_Room_PeerUpdated.fromPartial(object.peerUpdated) : void 0;
    message.peerLeaved = object.peerLeaved !== void 0 && object.peerLeaved !== null ? ServerEvent_Room_PeerLeaved.fromPartial(object.peerLeaved) : void 0;
    message.trackStarted = object.trackStarted !== void 0 && object.trackStarted !== null ? ServerEvent_Room_TrackStarted.fromPartial(object.trackStarted) : void 0;
    message.trackUpdated = object.trackUpdated !== void 0 && object.trackUpdated !== null ? ServerEvent_Room_TrackUpdated.fromPartial(object.trackUpdated) : void 0;
    message.trackStopped = object.trackStopped !== void 0 && object.trackStopped !== null ? ServerEvent_Room_TrackStopped.fromPartial(object.trackStopped) : void 0;
    return message;
  }
};
function createBaseServerEvent_Room_PeerJoined() {
  return { peer: "", metadata: void 0, extraData: void 0 };
}
var ServerEvent_Room_PeerJoined = {
  encode(message, writer = _m04.Writer.create()) {
    if (message.peer !== "") {
      writer.uint32(10).string(message.peer);
    }
    if (message.metadata !== void 0) {
      writer.uint32(18).string(message.metadata);
    }
    if (message.extraData !== void 0) {
      writer.uint32(26).string(message.extraData);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : _m04.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseServerEvent_Room_PeerJoined();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.peer = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.metadata = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.extraData = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      peer: isSet4(object.peer) ? globalThis.String(object.peer) : "",
      metadata: isSet4(object.metadata) ? globalThis.String(object.metadata) : void 0,
      extraData: isSet4(object.extraData) ? globalThis.String(object.extraData) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.peer !== "") {
      obj.peer = message.peer;
    }
    if (message.metadata !== void 0) {
      obj.metadata = message.metadata;
    }
    if (message.extraData !== void 0) {
      obj.extraData = message.extraData;
    }
    return obj;
  },
  create(base) {
    return ServerEvent_Room_PeerJoined.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseServerEvent_Room_PeerJoined();
    message.peer = object.peer ?? "";
    message.metadata = object.metadata ?? void 0;
    message.extraData = object.extraData ?? void 0;
    return message;
  }
};
function createBaseServerEvent_Room_PeerUpdated() {
  return { peer: "", metadata: void 0 };
}
var ServerEvent_Room_PeerUpdated = {
  encode(message, writer = _m04.Writer.create()) {
    if (message.peer !== "") {
      writer.uint32(10).string(message.peer);
    }
    if (message.metadata !== void 0) {
      writer.uint32(18).string(message.metadata);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : _m04.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseServerEvent_Room_PeerUpdated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.peer = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.metadata = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      peer: isSet4(object.peer) ? globalThis.String(object.peer) : "",
      metadata: isSet4(object.metadata) ? globalThis.String(object.metadata) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.peer !== "") {
      obj.peer = message.peer;
    }
    if (message.metadata !== void 0) {
      obj.metadata = message.metadata;
    }
    return obj;
  },
  create(base) {
    return ServerEvent_Room_PeerUpdated.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseServerEvent_Room_PeerUpdated();
    message.peer = object.peer ?? "";
    message.metadata = object.metadata ?? void 0;
    return message;
  }
};
function createBaseServerEvent_Room_PeerLeaved() {
  return { peer: "" };
}
var ServerEvent_Room_PeerLeaved = {
  encode(message, writer = _m04.Writer.create()) {
    if (message.peer !== "") {
      writer.uint32(10).string(message.peer);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : _m04.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseServerEvent_Room_PeerLeaved();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.peer = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return { peer: isSet4(object.peer) ? globalThis.String(object.peer) : "" };
  },
  toJSON(message) {
    const obj = {};
    if (message.peer !== "") {
      obj.peer = message.peer;
    }
    return obj;
  },
  create(base) {
    return ServerEvent_Room_PeerLeaved.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseServerEvent_Room_PeerLeaved();
    message.peer = object.peer ?? "";
    return message;
  }
};
function createBaseServerEvent_Room_TrackStarted() {
  return { peer: "", track: "", kind: 0, metadata: void 0 };
}
var ServerEvent_Room_TrackStarted = {
  encode(message, writer = _m04.Writer.create()) {
    if (message.peer !== "") {
      writer.uint32(10).string(message.peer);
    }
    if (message.track !== "") {
      writer.uint32(18).string(message.track);
    }
    if (message.kind !== 0) {
      writer.uint32(24).int32(message.kind);
    }
    if (message.metadata !== void 0) {
      writer.uint32(34).string(message.metadata);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : _m04.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseServerEvent_Room_TrackStarted();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.peer = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.track = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }
          message.kind = reader.int32();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.metadata = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      peer: isSet4(object.peer) ? globalThis.String(object.peer) : "",
      track: isSet4(object.track) ? globalThis.String(object.track) : "",
      kind: isSet4(object.kind) ? kindFromJSON(object.kind) : 0,
      metadata: isSet4(object.metadata) ? globalThis.String(object.metadata) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.peer !== "") {
      obj.peer = message.peer;
    }
    if (message.track !== "") {
      obj.track = message.track;
    }
    if (message.kind !== 0) {
      obj.kind = kindToJSON(message.kind);
    }
    if (message.metadata !== void 0) {
      obj.metadata = message.metadata;
    }
    return obj;
  },
  create(base) {
    return ServerEvent_Room_TrackStarted.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseServerEvent_Room_TrackStarted();
    message.peer = object.peer ?? "";
    message.track = object.track ?? "";
    message.kind = object.kind ?? 0;
    message.metadata = object.metadata ?? void 0;
    return message;
  }
};
function createBaseServerEvent_Room_TrackUpdated() {
  return { peer: "", track: "", kind: 0, metadata: void 0 };
}
var ServerEvent_Room_TrackUpdated = {
  encode(message, writer = _m04.Writer.create()) {
    if (message.peer !== "") {
      writer.uint32(10).string(message.peer);
    }
    if (message.track !== "") {
      writer.uint32(18).string(message.track);
    }
    if (message.kind !== 0) {
      writer.uint32(24).int32(message.kind);
    }
    if (message.metadata !== void 0) {
      writer.uint32(34).string(message.metadata);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : _m04.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseServerEvent_Room_TrackUpdated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.peer = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.track = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }
          message.kind = reader.int32();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.metadata = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      peer: isSet4(object.peer) ? globalThis.String(object.peer) : "",
      track: isSet4(object.track) ? globalThis.String(object.track) : "",
      kind: isSet4(object.kind) ? kindFromJSON(object.kind) : 0,
      metadata: isSet4(object.metadata) ? globalThis.String(object.metadata) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.peer !== "") {
      obj.peer = message.peer;
    }
    if (message.track !== "") {
      obj.track = message.track;
    }
    if (message.kind !== 0) {
      obj.kind = kindToJSON(message.kind);
    }
    if (message.metadata !== void 0) {
      obj.metadata = message.metadata;
    }
    return obj;
  },
  create(base) {
    return ServerEvent_Room_TrackUpdated.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseServerEvent_Room_TrackUpdated();
    message.peer = object.peer ?? "";
    message.track = object.track ?? "";
    message.kind = object.kind ?? 0;
    message.metadata = object.metadata ?? void 0;
    return message;
  }
};
function createBaseServerEvent_Room_TrackStopped() {
  return { peer: "", track: "", kind: 0 };
}
var ServerEvent_Room_TrackStopped = {
  encode(message, writer = _m04.Writer.create()) {
    if (message.peer !== "") {
      writer.uint32(10).string(message.peer);
    }
    if (message.track !== "") {
      writer.uint32(18).string(message.track);
    }
    if (message.kind !== 0) {
      writer.uint32(24).int32(message.kind);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : _m04.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseServerEvent_Room_TrackStopped();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.peer = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.track = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }
          message.kind = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      peer: isSet4(object.peer) ? globalThis.String(object.peer) : "",
      track: isSet4(object.track) ? globalThis.String(object.track) : "",
      kind: isSet4(object.kind) ? kindFromJSON(object.kind) : 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.peer !== "") {
      obj.peer = message.peer;
    }
    if (message.track !== "") {
      obj.track = message.track;
    }
    if (message.kind !== 0) {
      obj.kind = kindToJSON(message.kind);
    }
    return obj;
  },
  create(base) {
    return ServerEvent_Room_TrackStopped.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseServerEvent_Room_TrackStopped();
    message.peer = object.peer ?? "";
    message.track = object.track ?? "";
    message.kind = object.kind ?? 0;
    return message;
  }
};
function createBaseServerEvent_MessageChannel() {
  return { label: "", message: void 0 };
}
var ServerEvent_MessageChannel = {
  encode(message, writer = _m04.Writer.create()) {
    if (message.label !== "") {
      writer.uint32(10).string(message.label);
    }
    if (message.message !== void 0) {
      ServerEvent_MessageChannel_Message.encode(message.message, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : _m04.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseServerEvent_MessageChannel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.label = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.message = ServerEvent_MessageChannel_Message.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      label: isSet4(object.label) ? globalThis.String(object.label) : "",
      message: isSet4(object.message) ? ServerEvent_MessageChannel_Message.fromJSON(object.message) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.label !== "") {
      obj.label = message.label;
    }
    if (message.message !== void 0) {
      obj.message = ServerEvent_MessageChannel_Message.toJSON(message.message);
    }
    return obj;
  },
  create(base) {
    return ServerEvent_MessageChannel.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseServerEvent_MessageChannel();
    message.label = object.label ?? "";
    message.message = object.message !== void 0 && object.message !== null ? ServerEvent_MessageChannel_Message.fromPartial(object.message) : void 0;
    return message;
  }
};
function createBaseServerEvent_MessageChannel_Message() {
  return { peer: "", message: new Uint8Array(0) };
}
var ServerEvent_MessageChannel_Message = {
  encode(message, writer = _m04.Writer.create()) {
    if (message.peer !== "") {
      writer.uint32(10).string(message.peer);
    }
    if (message.message.length !== 0) {
      writer.uint32(18).bytes(message.message);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : _m04.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseServerEvent_MessageChannel_Message();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.peer = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.message = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      peer: isSet4(object.peer) ? globalThis.String(object.peer) : "",
      message: isSet4(object.message) ? bytesFromBase64(object.message) : new Uint8Array(0)
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.peer !== "") {
      obj.peer = message.peer;
    }
    if (message.message.length !== 0) {
      obj.message = base64FromBytes(message.message);
    }
    return obj;
  },
  create(base) {
    return ServerEvent_MessageChannel_Message.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseServerEvent_MessageChannel_Message();
    message.peer = object.peer ?? "";
    message.message = object.message ?? new Uint8Array(0);
    return message;
  }
};
function createBaseServerEvent_Sender() {
  return { name: "", state: void 0 };
}
var ServerEvent_Sender = {
  encode(message, writer = _m04.Writer.create()) {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.state !== void 0) {
      ServerEvent_Sender_State.encode(message.state, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : _m04.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseServerEvent_Sender();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.state = ServerEvent_Sender_State.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      name: isSet4(object.name) ? globalThis.String(object.name) : "",
      state: isSet4(object.state) ? ServerEvent_Sender_State.fromJSON(object.state) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.state !== void 0) {
      obj.state = ServerEvent_Sender_State.toJSON(message.state);
    }
    return obj;
  },
  create(base) {
    return ServerEvent_Sender.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseServerEvent_Sender();
    message.name = object.name ?? "";
    message.state = object.state !== void 0 && object.state !== null ? ServerEvent_Sender_State.fromPartial(object.state) : void 0;
    return message;
  }
};
function createBaseServerEvent_Sender_State() {
  return { status: 0 };
}
var ServerEvent_Sender_State = {
  encode(message, writer = _m04.Writer.create()) {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : _m04.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseServerEvent_Sender_State();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }
          message.status = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return { status: isSet4(object.status) ? sender_StatusFromJSON(object.status) : 0 };
  },
  toJSON(message) {
    const obj = {};
    if (message.status !== 0) {
      obj.status = sender_StatusToJSON(message.status);
    }
    return obj;
  },
  create(base) {
    return ServerEvent_Sender_State.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseServerEvent_Sender_State();
    message.status = object.status ?? 0;
    return message;
  }
};
function createBaseServerEvent_Receiver() {
  return { name: "", state: void 0, stats: void 0, voiceActivity: void 0 };
}
var ServerEvent_Receiver = {
  encode(message, writer = _m04.Writer.create()) {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.state !== void 0) {
      ServerEvent_Receiver_State.encode(message.state, writer.uint32(18).fork()).ldelim();
    }
    if (message.stats !== void 0) {
      ServerEvent_Receiver_Stats.encode(message.stats, writer.uint32(26).fork()).ldelim();
    }
    if (message.voiceActivity !== void 0) {
      ServerEvent_Receiver_VoiceActivity.encode(message.voiceActivity, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : _m04.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseServerEvent_Receiver();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.state = ServerEvent_Receiver_State.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.stats = ServerEvent_Receiver_Stats.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.voiceActivity = ServerEvent_Receiver_VoiceActivity.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      name: isSet4(object.name) ? globalThis.String(object.name) : "",
      state: isSet4(object.state) ? ServerEvent_Receiver_State.fromJSON(object.state) : void 0,
      stats: isSet4(object.stats) ? ServerEvent_Receiver_Stats.fromJSON(object.stats) : void 0,
      voiceActivity: isSet4(object.voiceActivity) ? ServerEvent_Receiver_VoiceActivity.fromJSON(object.voiceActivity) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.state !== void 0) {
      obj.state = ServerEvent_Receiver_State.toJSON(message.state);
    }
    if (message.stats !== void 0) {
      obj.stats = ServerEvent_Receiver_Stats.toJSON(message.stats);
    }
    if (message.voiceActivity !== void 0) {
      obj.voiceActivity = ServerEvent_Receiver_VoiceActivity.toJSON(message.voiceActivity);
    }
    return obj;
  },
  create(base) {
    return ServerEvent_Receiver.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseServerEvent_Receiver();
    message.name = object.name ?? "";
    message.state = object.state !== void 0 && object.state !== null ? ServerEvent_Receiver_State.fromPartial(object.state) : void 0;
    message.stats = object.stats !== void 0 && object.stats !== null ? ServerEvent_Receiver_Stats.fromPartial(object.stats) : void 0;
    message.voiceActivity = object.voiceActivity !== void 0 && object.voiceActivity !== null ? ServerEvent_Receiver_VoiceActivity.fromPartial(object.voiceActivity) : void 0;
    return message;
  }
};
function createBaseServerEvent_Receiver_State() {
  return { status: 0 };
}
var ServerEvent_Receiver_State = {
  encode(message, writer = _m04.Writer.create()) {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : _m04.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseServerEvent_Receiver_State();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }
          message.status = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return { status: isSet4(object.status) ? receiver_StatusFromJSON(object.status) : 0 };
  },
  toJSON(message) {
    const obj = {};
    if (message.status !== 0) {
      obj.status = receiver_StatusToJSON(message.status);
    }
    return obj;
  },
  create(base) {
    return ServerEvent_Receiver_State.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseServerEvent_Receiver_State();
    message.status = object.status ?? 0;
    return message;
  }
};
function createBaseServerEvent_Receiver_Stats() {
  return { source: void 0, transmit: void 0 };
}
var ServerEvent_Receiver_Stats = {
  encode(message, writer = _m04.Writer.create()) {
    if (message.source !== void 0) {
      ServerEvent_Receiver_Stats_Source.encode(message.source, writer.uint32(10).fork()).ldelim();
    }
    if (message.transmit !== void 0) {
      ServerEvent_Receiver_Stats_Transmit.encode(message.transmit, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : _m04.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseServerEvent_Receiver_Stats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.source = ServerEvent_Receiver_Stats_Source.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.transmit = ServerEvent_Receiver_Stats_Transmit.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      source: isSet4(object.source) ? ServerEvent_Receiver_Stats_Source.fromJSON(object.source) : void 0,
      transmit: isSet4(object.transmit) ? ServerEvent_Receiver_Stats_Transmit.fromJSON(object.transmit) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.source !== void 0) {
      obj.source = ServerEvent_Receiver_Stats_Source.toJSON(message.source);
    }
    if (message.transmit !== void 0) {
      obj.transmit = ServerEvent_Receiver_Stats_Transmit.toJSON(message.transmit);
    }
    return obj;
  },
  create(base) {
    return ServerEvent_Receiver_Stats.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseServerEvent_Receiver_Stats();
    message.source = object.source !== void 0 && object.source !== null ? ServerEvent_Receiver_Stats_Source.fromPartial(object.source) : void 0;
    message.transmit = object.transmit !== void 0 && object.transmit !== null ? ServerEvent_Receiver_Stats_Transmit.fromPartial(object.transmit) : void 0;
    return message;
  }
};
function createBaseServerEvent_Receiver_Stats_Source() {
  return { bitrateKbps: 0, rtt: 0, lost: 0, jitter: 0 };
}
var ServerEvent_Receiver_Stats_Source = {
  encode(message, writer = _m04.Writer.create()) {
    if (message.bitrateKbps !== 0) {
      writer.uint32(8).uint32(message.bitrateKbps);
    }
    if (message.rtt !== 0) {
      writer.uint32(21).float(message.rtt);
    }
    if (message.lost !== 0) {
      writer.uint32(29).float(message.lost);
    }
    if (message.jitter !== 0) {
      writer.uint32(37).float(message.jitter);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : _m04.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseServerEvent_Receiver_Stats_Source();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }
          message.bitrateKbps = reader.uint32();
          continue;
        case 2:
          if (tag !== 21) {
            break;
          }
          message.rtt = reader.float();
          continue;
        case 3:
          if (tag !== 29) {
            break;
          }
          message.lost = reader.float();
          continue;
        case 4:
          if (tag !== 37) {
            break;
          }
          message.jitter = reader.float();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      bitrateKbps: isSet4(object.bitrateKbps) ? globalThis.Number(object.bitrateKbps) : 0,
      rtt: isSet4(object.rtt) ? globalThis.Number(object.rtt) : 0,
      lost: isSet4(object.lost) ? globalThis.Number(object.lost) : 0,
      jitter: isSet4(object.jitter) ? globalThis.Number(object.jitter) : 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.bitrateKbps !== 0) {
      obj.bitrateKbps = Math.round(message.bitrateKbps);
    }
    if (message.rtt !== 0) {
      obj.rtt = message.rtt;
    }
    if (message.lost !== 0) {
      obj.lost = message.lost;
    }
    if (message.jitter !== 0) {
      obj.jitter = message.jitter;
    }
    return obj;
  },
  create(base) {
    return ServerEvent_Receiver_Stats_Source.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseServerEvent_Receiver_Stats_Source();
    message.bitrateKbps = object.bitrateKbps ?? 0;
    message.rtt = object.rtt ?? 0;
    message.lost = object.lost ?? 0;
    message.jitter = object.jitter ?? 0;
    return message;
  }
};
function createBaseServerEvent_Receiver_Stats_Transmit() {
  return { spatial: 0, temporal: 0, bitrateKbps: 0 };
}
var ServerEvent_Receiver_Stats_Transmit = {
  encode(message, writer = _m04.Writer.create()) {
    if (message.spatial !== 0) {
      writer.uint32(8).uint32(message.spatial);
    }
    if (message.temporal !== 0) {
      writer.uint32(16).uint32(message.temporal);
    }
    if (message.bitrateKbps !== 0) {
      writer.uint32(24).uint32(message.bitrateKbps);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : _m04.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseServerEvent_Receiver_Stats_Transmit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }
          message.spatial = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }
          message.temporal = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }
          message.bitrateKbps = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      spatial: isSet4(object.spatial) ? globalThis.Number(object.spatial) : 0,
      temporal: isSet4(object.temporal) ? globalThis.Number(object.temporal) : 0,
      bitrateKbps: isSet4(object.bitrateKbps) ? globalThis.Number(object.bitrateKbps) : 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.spatial !== 0) {
      obj.spatial = Math.round(message.spatial);
    }
    if (message.temporal !== 0) {
      obj.temporal = Math.round(message.temporal);
    }
    if (message.bitrateKbps !== 0) {
      obj.bitrateKbps = Math.round(message.bitrateKbps);
    }
    return obj;
  },
  create(base) {
    return ServerEvent_Receiver_Stats_Transmit.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseServerEvent_Receiver_Stats_Transmit();
    message.spatial = object.spatial ?? 0;
    message.temporal = object.temporal ?? 0;
    message.bitrateKbps = object.bitrateKbps ?? 0;
    return message;
  }
};
function createBaseServerEvent_Receiver_VoiceActivity() {
  return { audioLevel: 0 };
}
var ServerEvent_Receiver_VoiceActivity = {
  encode(message, writer = _m04.Writer.create()) {
    if (message.audioLevel !== 0) {
      writer.uint32(8).int32(message.audioLevel);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : _m04.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseServerEvent_Receiver_VoiceActivity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }
          message.audioLevel = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return { audioLevel: isSet4(object.audioLevel) ? globalThis.Number(object.audioLevel) : 0 };
  },
  toJSON(message) {
    const obj = {};
    if (message.audioLevel !== 0) {
      obj.audioLevel = Math.round(message.audioLevel);
    }
    return obj;
  },
  create(base) {
    return ServerEvent_Receiver_VoiceActivity.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseServerEvent_Receiver_VoiceActivity();
    message.audioLevel = object.audioLevel ?? 0;
    return message;
  }
};
function createBaseClientEvent() {
  return { seq: 0, request: void 0 };
}
var ClientEvent = {
  encode(message, writer = _m04.Writer.create()) {
    if (message.seq !== 0) {
      writer.uint32(8).uint32(message.seq);
    }
    if (message.request !== void 0) {
      Request3.encode(message.request, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m04.Reader ? input : _m04.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseClientEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }
          message.seq = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.request = Request3.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      seq: isSet4(object.seq) ? globalThis.Number(object.seq) : 0,
      request: isSet4(object.request) ? Request3.fromJSON(object.request) : void 0
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.seq !== 0) {
      obj.seq = Math.round(message.seq);
    }
    if (message.request !== void 0) {
      obj.request = Request3.toJSON(message.request);
    }
    return obj;
  },
  create(base) {
    return ClientEvent.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseClientEvent();
    message.seq = object.seq ?? 0;
    message.request = object.request !== void 0 && object.request !== null ? Request3.fromPartial(object.request) : void 0;
    return message;
  }
};
function bytesFromBase64(b64) {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}
function base64FromBytes(arr) {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}
function isSet4(value) {
  return value !== null && value !== void 0;
}

// src/generated/protobuf/gateway.ts
function createBaseConnectRequest() {
  return { version: "", join: void 0, tracks: void 0, sdp: "" };
}
var ConnectRequest = {
  encode(message, writer = _m05.Writer.create()) {
    if (message.version !== "") {
      writer.uint32(18).string(message.version);
    }
    if (message.join !== void 0) {
      RoomJoin.encode(message.join, writer.uint32(26).fork()).ldelim();
    }
    if (message.tracks !== void 0) {
      Tracks.encode(message.tracks, writer.uint32(34).fork()).ldelim();
    }
    if (message.sdp !== "") {
      writer.uint32(42).string(message.sdp);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m05.Reader ? input : _m05.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseConnectRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }
          message.version = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }
          message.join = RoomJoin.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }
          message.tracks = Tracks.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }
          message.sdp = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      version: isSet5(object.version) ? globalThis.String(object.version) : "",
      join: isSet5(object.join) ? RoomJoin.fromJSON(object.join) : void 0,
      tracks: isSet5(object.tracks) ? Tracks.fromJSON(object.tracks) : void 0,
      sdp: isSet5(object.sdp) ? globalThis.String(object.sdp) : ""
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.version !== "") {
      obj.version = message.version;
    }
    if (message.join !== void 0) {
      obj.join = RoomJoin.toJSON(message.join);
    }
    if (message.tracks !== void 0) {
      obj.tracks = Tracks.toJSON(message.tracks);
    }
    if (message.sdp !== "") {
      obj.sdp = message.sdp;
    }
    return obj;
  },
  create(base) {
    return ConnectRequest.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseConnectRequest();
    message.version = object.version ?? "";
    message.join = object.join !== void 0 && object.join !== null ? RoomJoin.fromPartial(object.join) : void 0;
    message.tracks = object.tracks !== void 0 && object.tracks !== null ? Tracks.fromPartial(object.tracks) : void 0;
    message.sdp = object.sdp ?? "";
    return message;
  }
};
function createBaseConnectResponse() {
  return { connId: "", sdp: "", iceLite: false };
}
var ConnectResponse = {
  encode(message, writer = _m05.Writer.create()) {
    if (message.connId !== "") {
      writer.uint32(10).string(message.connId);
    }
    if (message.sdp !== "") {
      writer.uint32(18).string(message.sdp);
    }
    if (message.iceLite !== false) {
      writer.uint32(24).bool(message.iceLite);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m05.Reader ? input : _m05.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseConnectResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.connId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }
          message.sdp = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }
          message.iceLite = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      connId: isSet5(object.connId) ? globalThis.String(object.connId) : "",
      sdp: isSet5(object.sdp) ? globalThis.String(object.sdp) : "",
      iceLite: isSet5(object.iceLite) ? globalThis.Boolean(object.iceLite) : false
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.connId !== "") {
      obj.connId = message.connId;
    }
    if (message.sdp !== "") {
      obj.sdp = message.sdp;
    }
    if (message.iceLite !== false) {
      obj.iceLite = message.iceLite;
    }
    return obj;
  },
  create(base) {
    return ConnectResponse.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseConnectResponse();
    message.connId = object.connId ?? "";
    message.sdp = object.sdp ?? "";
    message.iceLite = object.iceLite ?? false;
    return message;
  }
};
function createBaseRemoteIceRequest() {
  return { candidates: [] };
}
var RemoteIceRequest = {
  encode(message, writer = _m05.Writer.create()) {
    for (const v of message.candidates) {
      writer.uint32(10).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m05.Reader ? input : _m05.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRemoteIceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }
          message.candidates.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return {
      candidates: globalThis.Array.isArray(object?.candidates) ? object.candidates.map((e) => globalThis.String(e)) : []
    };
  },
  toJSON(message) {
    const obj = {};
    if (message.candidates?.length) {
      obj.candidates = message.candidates;
    }
    return obj;
  },
  create(base) {
    return RemoteIceRequest.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseRemoteIceRequest();
    message.candidates = object.candidates?.map((e) => e) || [];
    return message;
  }
};
function createBaseRemoteIceResponse() {
  return { added: 0 };
}
var RemoteIceResponse = {
  encode(message, writer = _m05.Writer.create()) {
    if (message.added !== 0) {
      writer.uint32(8).uint32(message.added);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof _m05.Reader ? input : _m05.Reader.create(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseRemoteIceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }
          message.added = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return { added: isSet5(object.added) ? globalThis.Number(object.added) : 0 };
  },
  toJSON(message) {
    const obj = {};
    if (message.added !== 0) {
      obj.added = Math.round(message.added);
    }
    return obj;
  },
  create(base) {
    return RemoteIceResponse.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseRemoteIceResponse();
    message.added = object.added ?? 0;
    return message;
  }
};
function isSet5(value) {
  return value !== null && value !== void 0;
}

// src/utils.ts
async function postProtobuf(req_ser, res_parse, url, req, headers) {
  let res = await fetch(url, {
    method: "POST",
    headers,
    body: req_ser.encode(req).finish()
  });
  let buf = await res.arrayBuffer();
  return res_parse.decode(new Uint8Array(buf));
}
var EventEmitter = class {
  events = {};
  emit(event, ...args) {
    for (let i of this.events[event] || []) {
      i(...args);
    }
  }
  on(event, cb) {
    (this.events[event] = this.events[event] || []).push(cb);
    return () => this.events[event] = this.events[event].filter((i) => i !== cb);
  }
  off(event, cb) {
    this.events[event] = this.events[event].filter((i) => i !== cb);
  }
  offAllListeners() {
    this.events = {};
  }
  removeAllListeners() {
    this.offAllListeners();
  }
  removeListener(event, cb) {
    this.off(event, cb);
  }
};
var ReadyWaiter = class {
  ready = false;
  waits = [];
  setReady = () => {
    this.ready = true;
    this.waits.map(([ready, _err]) => ready());
    this.waits = [];
  };
  setError = (e) => {
    this.waits.map(([_ready, err]) => err(e));
    this.waits = [];
  };
  waitReady = () => {
    if (this.ready) {
      return Promise.resolve();
    } else {
      return new Promise((resolve, reject) => {
        this.waits.push([resolve, reject]);
      });
    }
  };
};

// src/data.ts
var Datachannel = class extends EventEmitter {
  constructor(dc) {
    super();
    this.dc = dc;
    dc.binaryType = "arraybuffer";
    dc.onopen = () => {
      console.log("[Datachannel] on open");
      this.waiter.setReady();
    };
    dc.onmessage = (e) => {
      const msg = ServerEvent3.decode(new Uint8Array(e.data));
      console.log("[Datachannel] on event", msg);
      if (msg.room) {
        this.emit("event.room" /* ROOM */, msg.room);
      } else if (msg.session) {
        this.emit("event.session" /* SESSION */, msg.room);
      } else if (msg.sender) {
        this.emit("event.sender." /* SENDER */ + msg.sender.name, msg.sender);
      } else if (msg.receiver) {
        this.emit("event.receiver." /* RECEIVER */ + msg.receiver.name, msg.receiver);
      } else if (msg.messageChannel) {
        this.emit("event.message_channel" /* MESSAGE_CHANNEL */ + msg.messageChannel.label, msg.messageChannel);
      } else if (msg.features) {
        if (msg.features.mixer) {
          this.emit("event.features.mixer" /* FEATURE_MIXER */, msg.features.mixer);
        }
      } else if (msg.response) {
        const req_cb = this.reqs.get(msg.response.reqId);
        if (req_cb) {
          console.log("[Datachannel] on response", msg.response);
          this.reqs.delete(msg.response.reqId);
          req_cb(msg.response);
        } else {
          console.warn(
            "[Datachannel] unknown request with response",
            msg.response
          );
        }
      }
    };
    dc.onerror = (e) => {
      console.error("[Datachannel] on error", e);
      this.waiter.setError(e);
    };
    dc.onclose = () => {
      console.log("[Datachannel] on close");
    };
  }
  waiter = new ReadyWaiter();
  seq_id = 0;
  req_id = 0;
  reqs = /* @__PURE__ */ new Map();
  prepare_state = true;
  get connected() {
    return this.dc.readyState == "open";
  }
  async ready() {
    return this.waiter.waitReady();
  }
  async requestSession(req) {
    const reqId = this.gen_req_id();
    const res = await this.request({ reqId, session: req });
    if (res.session) {
      return res.session;
    } else {
      throw Error("INVALID_SERVER_RESPONSE");
    }
  }
  async requestSender(req) {
    const reqId = this.gen_req_id();
    const res = await this.request({ reqId, sender: req });
    if (res.sender) {
      return res.sender;
    } else {
      throw Error("INVALID_SERVER_RESPONSE");
    }
  }
  async requestReceiver(req) {
    const reqId = this.gen_req_id();
    const res = await this.request({ reqId, receiver: req });
    if (res.receiver) {
      return res.receiver;
    } else {
      throw Error("INVALID_SERVER_RESPONSE");
    }
  }
  async requestMessageChannel(req) {
    const reqId = this.gen_req_id();
    const res = await this.request({ reqId, messageChannel: req });
    if (res.messageChannel) {
      return res.messageChannel;
    } else {
      throw Error("INVALID_SERVER_RESPONSE");
    }
  }
  async requestMixer(req) {
    const reqId = this.gen_req_id();
    const res = await this.request({ reqId, features: { mixer: req } });
    if (res.features?.mixer) {
      return res.features.mixer;
    } else {
      throw Error("INVALID_SERVER_RESPONSE");
    }
  }
  async request(request) {
    const seq = this.gen_seq_id();
    const buf = ClientEvent.encode({
      seq,
      request
    }).finish();
    console.log("[Datachannel] send request", seq, request);
    this.dc.send(buf);
    const reqId = request.reqId;
    const res = await new Promise((resolve, reject) => {
      this.reqs.set(reqId, resolve);
      setTimeout(() => {
        if (this.reqs.has(reqId)) {
          this.reqs.delete(reqId);
          reject(new Error("REQUEST_TIMEOUT with reqId: " + reqId));
        }
      }, 5e3);
    });
    if (res.error) {
      throw res.error;
    } else {
      return res;
    }
  }
  gen_req_id() {
    this.req_id += 1;
    return this.req_id;
  }
  gen_seq_id() {
    this.seq_id += 1;
    return this.seq_id;
  }
};

// src/types.ts
function kindToString(kind) {
  return kind == 0 /* AUDIO */ ? "audio" : "video";
}
function stringToKind(kind) {
  return kind == "audio" ? 0 /* AUDIO */ : 1 /* VIDEO */;
}

// src/receiver.ts
var import_react_native_webrtc = require("react-native-webrtc");
var DEFAULT_CFG = {
  priority: 1,
  maxSpatial: 2,
  maxTemporal: 2
};
var TrackReceiverEvent = /* @__PURE__ */ ((TrackReceiverEvent2) => {
  TrackReceiverEvent2["StatusUpdated"] = "StatusUpdated";
  TrackReceiverEvent2["VoiceActivity"] = "VoiceActivity";
  return TrackReceiverEvent2;
})(TrackReceiverEvent || {});
var TrackReceiver = class extends EventEmitter {
  constructor(dc, track_name, _kind) {
    super();
    this.dc = dc;
    this.track_name = track_name;
    this._kind = _kind;
    this.media_stream = new import_react_native_webrtc.MediaStream();
    console.log("[TrackReceiver] create ", track_name, dc);
    this.dc.on(
      "event.receiver." /* RECEIVER */ + track_name,
      (event) => {
        if (event.state) {
          this._status = event.state.status;
          this.emit("StatusUpdated" /* StatusUpdated */, this._status);
        } else if (event.voiceActivity) {
          this.emit("VoiceActivity" /* VoiceActivity */, event.voiceActivity);
        }
      }
    );
  }
  transceiver;
  waiter = new ReadyWaiter();
  media_stream;
  media_track;
  receiver_state = { config: void 0, source: void 0 };
  _status;
  get kind() {
    return this._kind;
  }
  get webrtcTrackId() {
    return this.media_track?.id;
  }
  get status() {
    return this.status;
  }
  setTrackReady() {
    this.waiter.setReady();
  }
  async ready() {
    return this.waiter.waitReady();
  }
  /// We need lazy prepare for avoding error when sender track is changed before it connect.
  /// Config after init feature will be useful when complex application
  prepare(peer) {
    this.transceiver = peer.addTransceiver(kindToString(this._kind), {
      direction: "recvonly"
    });
    if (this.transceiver.receiver.track)
      this.media_stream.addTrack(this.transceiver.receiver.track);
    if (this.transceiver.receiver.track)
      this.media_track = this.transceiver.receiver.track;
  }
  /// We need update stream with newest track
  afterRestartIce() {
    let old_track = this.media_stream.getTracks()[0];
    let new_track = this.transceiver.receiver.track;
    this.media_stream.removeTrack(old_track);
    if (new_track)
      this.media_stream.addTrack(new_track);
  }
  async attach(source, config = DEFAULT_CFG) {
    this.receiver_state.config = config;
    this.receiver_state.source = source;
    this._status = 0 /* WAITING */;
    this.emit("StatusUpdated" /* StatusUpdated */, this._status);
    if (!this.transceiver) {
      console.log("[TrackReceiver] attach on prepare state");
      return;
    }
    await this.dc.ready();
    await this.ready();
    await this.dc.requestReceiver({
      name: this.track_name,
      attach: {
        source: this.receiver_state.source,
        config: this.receiver_state.config
      }
    });
  }
  async detach() {
    delete this.receiver_state.source;
    delete this.receiver_state.config;
    delete this._status;
    this.emit("StatusUpdated" /* StatusUpdated */, void 0);
    if (!this.transceiver) {
      console.log("[TrackReceiver] detach on prepare state");
      return;
    }
    await this.dc.ready();
    await this.ready();
    await this.dc.requestReceiver({
      name: this.track_name,
      detach: {}
    });
  }
  async config(config) {
    this.receiver_state.config = config;
    if (!this.transceiver) {
      console.log("[TrackReceiver] config on prepare state");
      return;
    }
    await this.dc.ready();
    await this.ready();
    await this.dc.requestReceiver({
      name: this.track_name,
      config
    });
  }
  // We need to reset local state when leave room
  leaveRoom() {
    this.receiver_state.source = void 0;
  }
  get stream() {
    return this.media_stream;
  }
  get name() {
    return this.track_name;
  }
  get state() {
    return {
      name: this.name,
      kind: this.kind,
      state: this.receiver_state
    };
  }
};

// src/sender.ts
var import_react_native_webrtc2 = require("react-native-webrtc");
var DEFAULT_CFG2 = {
  priority: 1,
  bitrate: 0 /* DYNAMIC_CONSUMERS */,
  simulcast: false
};
var TrackSenderEvent = /* @__PURE__ */ ((TrackSenderEvent2) => {
  TrackSenderEvent2["StatusUpdated"] = "StatusUpdated";
  return TrackSenderEvent2;
})(TrackSenderEvent || {});
var TrackSender = class extends EventEmitter {
  constructor(dc, track_name, track_or_kind, cfg = DEFAULT_CFG2) {
    super();
    this.dc = dc;
    this.track_name = track_name;
    console.log("[TrackSender] created", track_name, dc, track_or_kind);
    if (track_or_kind instanceof import_react_native_webrtc2.MediaStreamTrack) {
      this.track = track_or_kind;
      this.kind = stringToKind(track_or_kind.kind);
    } else {
      this.kind = track_or_kind;
    }
    this.simulcast = !!cfg.simulcast;
    this.sender_state = {
      config: {
        priority: cfg.priority,
        bitrate: cfg.bitrate
      },
      source: this.track ? {
        id: this.track.id,
        screen: false,
        //TODO check if it is screen
        metadata: cfg.metadata
      } : void 0
    };
    this.dc.on(
      "event.sender." /* SENDER */ + track_name,
      (event) => {
        if (event.state) {
          this._status = event.state.status;
          this.emit("StatusUpdated" /* StatusUpdated */, this._status);
        }
      }
    );
  }
  sender_state;
  transceiver;
  kind;
  track;
  simulcast;
  _status;
  get name() {
    return this.track_name;
  }
  get status() {
    return this.status;
  }
  get attached() {
    return !!this.track;
  }
  get state() {
    return {
      name: this.track_name,
      kind: this.kind,
      state: this.sender_state
    };
  }
  /// We need lazy prepare for avoding error when sender track is changed before it connect.
  /// Config after init feature will be useful when complex application
  prepare(peer) {
    this.transceiver = peer.addTransceiver(
      this.track || kindToString(this.kind),
      {
        direction: "sendonly",
        sendEncodings: this.simulcast ? [
          { rid: "0", active: true },
          { rid: "1", active: true },
          { rid: "2", active: true }
        ] : void 0
      }
    );
  }
  async attach(track, metadata) {
    if (this.track) {
      throw new Error("This sender already attached");
    }
    if (track.kind != kindToString(this.kind)) {
      throw new Error("Wrong track kind");
    }
    this.track = track;
    this.sender_state.source = {
      id: track.id,
      screen: false,
      //TODO check if it is screen
      metadata
    };
    if (!this.transceiver) {
      console.log("[TrackSender] attach on prepare state");
      return;
    }
    this._status = void 0;
    this.emit("StatusUpdated" /* StatusUpdated */, this._status);
    await this.dc.ready();
    await this.transceiver.sender.replaceTrack(track);
    return await this.dc.requestSender({
      name: this.track_name,
      attach: {
        config: this.sender_state.config,
        source: this.sender_state.source
      }
    });
  }
  async config(config) {
    if (!this.transceiver) {
      console.log("[TrackSender] config on prepare state");
      return;
    }
    if (!this.track) {
      throw new Error("This sender wasn't attach to any track");
    }
    this.sender_state.config = config;
    await this.dc.ready();
    return await this.dc.requestSender({
      name: this.track_name,
      config
    });
  }
  async detach() {
    if (!this.track) {
      throw new Error("This sender wasn't attach to any track");
    }
    this.track = void 0;
    this.sender_state.source = void 0;
    this._status = void 0;
    this.emit("StatusUpdated" /* StatusUpdated */, this._status);
    if (!this.transceiver) {
      console.log("[TrackSender] detach on prepare state");
      return;
    }
    await this.dc.ready();
    await this.transceiver.sender.replaceTrack(null);
    return await this.dc.requestSender({
      name: this.track_name,
      detach: {}
    });
  }
};

// src/features/audio_mixer.ts
var AudioMixerEvent = /* @__PURE__ */ ((AudioMixerEvent2) => {
  AudioMixerEvent2["OUTPUT_CHANGED"] = "features.mixer.output_changed";
  AudioMixerEvent2["VOICE_ACTIVITY"] = "feature.mixer.voice_activity";
  AudioMixerEvent2["PEER_VOICE_ACTIVITY"] = "feature.mixer.peers.voice_activity.";
  return AudioMixerEvent2;
})(AudioMixerEvent || {});
var AudioMixer = class extends EventEmitter {
  constructor(session, dc, config) {
    super();
    this.dc = dc;
    this.mode = config.mode;
    for (let i = 0; i < config.outputs; i++) {
      let receiver = session.receiver(0 /* AUDIO */);
      receiver.on("VoiceActivity" /* VoiceActivity */, (event) => {
        this._onReceiverVoiceActivity(i, event);
      });
      this.receivers.push(receiver);
    }
    this.sources = config.sources || [];
    dc.on("event.features.mixer" /* FEATURE_MIXER */, this._onMixerEvent);
  }
  mode;
  receivers = [];
  sources;
  outputs = [{}, {}, {}];
  //TODO reconfig when we re-join room
  reconfig(config) {
    console.log("reconfig mixer with config", config);
  }
  state() {
    return {
      mode: this.mode,
      outputs: this.receivers.map((r) => r.name),
      sources: this.sources
    };
  }
  streams() {
    return this.receivers.map((r) => r.stream);
  }
  attach(sources) {
    const req_srcs = [];
    for (const i in sources) {
      const source = sources[i];
      const existed = this.sources.find((s) => {
        return s.peer == source.peer && s.track == source.track;
      });
      if (!existed) {
        this.sources.push(source);
        req_srcs.push(source);
      }
    }
    return this.dc.requestMixer({
      attach: {
        sources: req_srcs
      }
    });
  }
  detach(sources) {
    const req_srcs = [];
    for (const i in sources) {
      const source = sources[i];
      const existed = this.sources.findIndex((s) => {
        return s.peer == source.peer && s.track == source.track;
      });
      if (existed != -1) {
        this.sources.splice(existed, 1);
        req_srcs.push(source);
      }
    }
    return this.dc.requestMixer({
      detach: {
        sources: req_srcs
      }
    });
  }
  // We need to reset local state when leave room
  leave_room() {
    this.outputs = [{}, {}, {}];
    this.sources = [];
    this.emit("features.mixer.output_changed" /* OUTPUT_CHANGED */, this.outputs);
  }
  _onReceiverVoiceActivity = (slot, activity) => {
    let output_source = this.outputs[slot];
    if (output_source?.source) {
      this._fireVoiceEvent(output_source.source, true, activity.audioLevel);
    }
  };
  _onMixerEvent = (event) => {
    if (event.slotSet) {
      let output_source = this.outputs[event.slotSet.slot]?.source;
      if (output_source) {
        this._fireVoiceEvent(output_source, false);
      }
      this.outputs[event.slotSet.slot] = { source: event.slotSet.source };
      this.emit("features.mixer.output_changed" /* OUTPUT_CHANGED */, this.outputs);
      this._fireVoiceEvent(event.slotSet.source, true);
    } else if (event.slotUnset) {
      let output_source = this.outputs[event.slotUnset.slot]?.source;
      if (output_source) {
        this.outputs[event.slotUnset.slot].source = void 0;
        this._fireVoiceEvent(output_source, false);
        this.emit("features.mixer.output_changed" /* OUTPUT_CHANGED */, this.outputs);
      }
    }
  };
  _fireVoiceEvent(source, active, audio_level) {
    this.emit("feature.mixer.voice_activity" /* VOICE_ACTIVITY */, {
      peer: source.peer,
      track: source.track,
      active,
      audio_level
    });
    this.emit("feature.mixer.peers.voice_activity." /* PEER_VOICE_ACTIVITY */ + source.peer, {
      track: source.track,
      active,
      audio_level
    });
  }
};

// src/features/msg_channel.ts
var DefaultConfig = {
  publish: true
};
var RoomMessageChannel = class extends EventEmitter {
  constructor(label, dc, _config) {
    super();
    this.label = label;
    this.dc = dc;
    this.config = { ...this.config, ..._config };
    this.dc.on(
      "event.message_channel" /* MESSAGE_CHANNEL */ + this.label,
      (msgChanEvent) => {
        if (msgChanEvent.label === this.label && msgChanEvent.message) {
          const message = this.config?.raw ? msgChanEvent.message.message : this.textDecoder.decode(msgChanEvent.message.message);
          const newEvent = {
            ...msgChanEvent.message,
            message
          };
          this.emit("message", newEvent);
        }
      }
    );
  }
  opened = false;
  textEncoder = new TextEncoder();
  textDecoder = new TextDecoder();
  config = DefaultConfig;
  get canPublish() {
    return this.config?.publish;
  }
  async startPublish() {
    if (!this.opened) {
      throw new Error("Channel not opened yet");
    }
    if (this.config.publish) {
      throw new Error("Already publishing");
    }
    await this.dc.requestMessageChannel({ label: this.label, startPub: {} });
    this.config.publish = true;
  }
  async stopPublish() {
    if (!this.opened) {
      throw new Error("Channel not opened yet");
    }
    if (!this.config.publish) {
      throw new Error("Not publishing");
    }
    await this.dc.requestMessageChannel({ label: this.label, stopPub: {} });
    this.config.publish = false;
  }
  async init() {
    await this.dc.ready();
    await this.dc.requestMessageChannel({ label: this.label, sub: {} });
    if (this.config?.publish) {
      await this.dc.requestMessageChannel({ label: this.label, startPub: {} });
    }
    this.emit("opened");
    this.opened = true;
  }
  async publish(message) {
    await this.dc.ready();
    if (!this.opened) {
      throw new Error("Channel not opened yet");
    }
    if (!this.config.publish) {
      throw new Error("Channel not publishing");
    }
    return this.dc.requestMessageChannel({
      label: this.label,
      pub: {
        data: typeof message === "string" ? this.textEncoder.encode(message) : message
      }
    });
  }
  async close() {
    if (!this.opened) {
      return;
    }
    await this.dc.requestMessageChannel({ label: this.label, stopPub: {} });
    await this.dc.requestMessageChannel({ label: this.label, unsub: {} });
    this.emit("closed");
    this.opened = false;
  }
};

// package.json
var package_default = {
  name: "@atm0s-media-sdk/core",
  version: "1.0.0-alpha.4",
  main: "./dist/lib.js",
  module: "./dist/lib.mjs",
  types: "./dist/lib.d.ts",
  files: [
    "dist/*",
    "src/*"
  ],
  devDependencies: {
    "@turbo/gen": "^1.12.4",
    "@types/eslint": "^8.56.5",
    "@types/node": "^20.11.24",
    eslint: "^8.57.0",
    "ts-proto": "^1.174.0",
    tsup: "^8.1.0",
    typescript: "^5.3.3"
  },
  dependencies: {
    protobufjs: "^7.3.0",
    "react-native-webrtc": "^124.0.4"
  },
  scripts: {
    lint: "eslint . --max-warnings 0",
    build: "tsup src/lib.ts --format cjs,esm --dts",
    dev: "tsup src/lib.ts --format cjs,esm --dts --watch"
  }
};

// src/session.ts
var import_react_native_webrtc3 = require("react-native-webrtc");
var SessionEvent = /* @__PURE__ */ ((SessionEvent2) => {
  SessionEvent2["ROOM_CHANGED"] = "room.changed";
  SessionEvent2["ROOM_PEER_JOINED"] = "room.peer.joined";
  SessionEvent2["ROOM_PEER_UPDATED"] = "room.peer.updated";
  SessionEvent2["ROOM_PEER_LEAVED"] = "room.peer.leaved";
  SessionEvent2["ROOM_TRACK_STARTED"] = "room.track.started";
  SessionEvent2["ROOM_TRACK_UPDATED"] = "room.track.updated";
  SessionEvent2["ROOM_TRACK_STOPPED"] = "room.track.stopped";
  return SessionEvent2;
})(SessionEvent || {});
var Session = class extends EventEmitter {
  constructor(gateway, cfg) {
    super();
    this.gateway = gateway;
    this.cfg = cfg;
    this.created_at = (/* @__PURE__ */ new Date()).getTime();
    console.warn("Create session", this.created_at);
    this.peer = new import_react_native_webrtc3.RTCPeerConnection();
    let dataChannel = this.peer.createDataChannel("datachannel");
    this.dc = new Datachannel(dataChannel);
    this.dc.on("event.room" /* ROOM */, (event) => {
      if (event.peerJoined) {
        this.emit("room.peer.joined" /* ROOM_PEER_JOINED */, event.peerJoined);
      } else if (event.peerUpdated) {
        this.emit("room.peer.updated" /* ROOM_PEER_UPDATED */, event.peerUpdated);
      } else if (event.peerLeaved) {
        this.emit("room.peer.leaved" /* ROOM_PEER_LEAVED */, event.peerLeaved);
      } else if (event.trackStarted) {
        this.emit("room.track.started" /* ROOM_TRACK_STARTED */, event.trackStarted);
      } else if (event.trackUpdated) {
        this.emit("room.track.updated" /* ROOM_TRACK_UPDATED */, event.trackUpdated);
      } else if (event.trackStopped) {
        this.emit("room.track.stopped" /* ROOM_TRACK_STOPPED */, event.trackStopped);
      }
    });
    this.peer.addEventListener("connectionstatechange", (event) => {
      console.log(
        "[Session] RTCPeer connectionstatechange",
        this.peer.connectionState
      );
    });
    this.peer.addEventListener("icecandidate", async (event) => {
      if (event.candidate && !this.ice_lite) {
        const req = RemoteIceRequest.create({
          candidates: [event.candidate.candidate]
        });
        console.log("Send ice-candidate", event.candidate.candidate);
        const res = await postProtobuf(
          RemoteIceRequest,
          RemoteIceResponse,
          this.gateway + "/webrtc/" + this.conn_id + "/ice-candidate",
          req,
          {
            "Content-Type": "application/grpc"
          }
        );
        console.log("Sent ice-candidate", res);
      }
    });
    this.peer.addEventListener("icecandidateerror", (event) => {
      console.log(
        "[Session] RTCPeer icecandidateerror",
        this.peer.connectionState
      );
    });
    this.peer.addEventListener("iceconnectionstatechange", (event) => {
      console.log(
        "[Session] RTCPeer connection state changed",
        this.peer.connectionState
      );
    });
    this.peer.addEventListener("icegatheringstatechange", (event) => {
      console.log(
        "[Session] RTCPeer icegatheringstatechange",
        this.peer.connectionState
      );
    });
    this.peer.addEventListener("negotiationneeded", (event) => {
      console.log(
        "[Session] RTCPeer negotiationneeded",
        this.peer.connectionState
      );
    });
    this.peer.addEventListener("signalingstatechange", (event) => {
      console.log(
        "[Session] RTCPeer signalingstatechange",
        this.peer.connectionState
      );
    });
    this.peer.addEventListener("track", (event) => {
      for (let i = 0; i < this.receivers.length; i++) {
        const receiver = this.receivers[i];
        if (receiver.webrtcTrackId == event.track?.id) {
          console.log(
            "[Session] found receiver for track",
            receiver.name,
            event.track
          );
          receiver.setTrackReady();
          return;
        }
      }
    });
    if (cfg.join?.features?.mixer) {
      this._mixer = new AudioMixer(
        this,
        this.dc,
        cfg.join?.features.mixer
      );
    }
  }
  peer;
  dc;
  ice_lite = false;
  restarting_ice = false;
  created_at;
  version;
  conn_id;
  receivers = [];
  senders = [];
  msgChannels = /* @__PURE__ */ new Map();
  _mixer;
  /// Prepaer state for flagging when ever this peer is created offer.
  /// This flag is useful for avoiding tranceiver config is changed before it connect
  prepareState = true;
  get room() {
    return this.cfg.join;
  }
  get mixer() {
    return this._mixer;
  }
  receiver(kind) {
    const kind_str = kindToString(kind);
    const track_name = kind_str + "_" + this.receivers.length;
    const receiver = new TrackReceiver(this.dc, track_name, kind);
    if (!this.prepareState) {
      receiver.prepare(this.peer);
    }
    this.receivers.push(receiver);
    console.log("Created receiver", kind, track_name);
    return receiver;
  }
  sender(track_name, track_or_kind, cfg) {
    const sender = new TrackSender(this.dc, track_name, track_or_kind, cfg);
    if (!this.prepareState) {
      sender.prepare(this.peer);
    }
    this.senders.push(sender);
    console.log("Created sender", sender.kind, track_name);
    return sender;
  }
  async connect(version) {
    try {
      if (!this.prepareState) {
        throw new Error("Not in prepare state");
      }
      this.prepareState = false;
      this.version = version;
      console.warn("Prepare senders and receivers to connect");
      for (let i = 0; i < this.senders.length; i++) {
        console.log("Prepare sender ", this.senders[i].name);
        this.senders[i].prepare(this.peer);
      }
      for (let i = 0; i < this.receivers.length; i++) {
        console.log("Prepare receiver ", this.receivers[i].name);
        this.receivers[i].prepare(this.peer);
      }
      console.log("Prepare offer for connect");
      const local_desc = await this.peer.createOffer({
        offerToReceiveAudio: true,
        offerToReceiveVideo: true
      });
      const req = ConnectRequest.create({
        version: version || "pure-ts@" + package_default.version,
        join: this.cfg.join && {
          room: this.cfg.join.room,
          peer: this.cfg.join.peer,
          metadata: this.cfg.join.metadata,
          publish: this.cfg.join.publish,
          subscribe: this.cfg.join.subscribe,
          features: { mixer: this.mixer?.state() }
        },
        tracks: {
          receivers: this.receivers.map((r) => r.state),
          senders: this.senders.map((r) => r.state)
        },
        sdp: local_desc.sdp
      });
      console.log("Connecting");
      const res = await postProtobuf(
        ConnectRequest,
        ConnectResponse,
        this.gateway + "/webrtc/connect",
        req,
        {
          Authorization: "Bearer " + this.cfg.token,
          "Content-Type": "application/grpc"
        }
      );
      console.log("res postProtobuf", res);
      this.conn_id = res.connId;
      this.ice_lite = res.iceLite;
      await this.peer.setLocalDescription(local_desc);
      await this.peer.setRemoteDescription({ type: "answer", sdp: res.sdp });
      await this.dc.ready();
      console.log("Connected");
    } catch (e) {
      console.log("Error in connect", e);
    }
  }
  async restartIce() {
    this.restarting_ice = true;
    this.peer.restartIce();
    const local_desc = await this.peer.createOffer({
      offerToReceiveAudio: true,
      offerToReceiveVideo: true
    });
    const req = ConnectRequest.create({
      version: this.version || "pure-ts@" + package_default.version,
      join: this.cfg.join && {
        room: this.cfg.join.room,
        peer: this.cfg.join.peer,
        metadata: this.cfg.join.metadata,
        publish: this.cfg.join.publish,
        subscribe: this.cfg.join.subscribe,
        features: { mixer: this.mixer?.state() }
      },
      tracks: {
        receivers: this.receivers.map((r) => r.state),
        senders: this.senders.map((r) => r.state)
      },
      sdp: local_desc.sdp
    });
    console.log("Sending restart-ice request");
    const res = await postProtobuf(
      ConnectRequest,
      ConnectResponse,
      this.gateway + "/webrtc/" + this.conn_id + "/restart-ice",
      req,
      {
        Authorization: "Bearer " + this.cfg.token,
        "Content-Type": "application/grpc"
      }
    );
    this.ice_lite = res.iceLite;
    console.log("Apply restart-ice response");
    if (this.conn_id !== res.connId) {
      console.log(
        "Session connect to new server, reset receivers for handling new recv tracks"
      );
      this.conn_id = res.connId;
      this.receivers.map((r) => {
        r.afterRestartIce();
      }, []);
    }
    await this.peer.setLocalDescription(local_desc);
    await this.peer.setRemoteDescription({ type: "answer", sdp: res.sdp });
    this.restarting_ice = false;
  }
  async join(info, token) {
    if (info.features?.mixer) {
      if (this._mixer) {
        this._mixer.reconfig(info.features.mixer);
      } else {
        this._mixer = new AudioMixer(this, this.dc, info.features.mixer);
      }
    }
    await this.dc.requestSession({
      join: {
        info: {
          room: info.room,
          peer: info.peer,
          metadata: info.metadata,
          publish: info.publish,
          subscribe: info.subscribe,
          features: { mixer: this.mixer?.state() }
        },
        token
      }
    });
    this.cfg.join = info;
    this.cfg.token = token;
    this.emit("room.changed" /* ROOM_CHANGED */, info);
  }
  async syncSdp() {
    const local_desc = await this.peer.createOffer({
      offerToReceiveAudio: true,
      offerToReceiveVideo: true
    });
    const update_sdp = Request_Session_UpdateSdp.create({
      tracks: {
        receivers: this.receivers.map((r) => r.state),
        senders: this.senders.map((r) => r.state)
      },
      sdp: local_desc.sdp
    });
    console.log("Requesting update sdp", update_sdp);
    const res = await this.dc.requestSession({
      sdp: update_sdp
    });
    console.log("Request update sdp success", res);
    await this.peer.setLocalDescription(local_desc);
    await this.peer.setRemoteDescription({ type: "answer", sdp: res.sdp.sdp });
  }
  /**
   *
   * Create a new MessageChannel for room based message passing. If a channel already exist with the same key, it will return the existing channel.
   *
   */
  async createMessageChannel(key, config) {
    await this.dc.ready();
    console.warn("[MessageChannel] creating a new channel:", key);
    if (this.msgChannels.has(key)) {
      console.warn("[MessageChannel] a channel already exist with key:", key);
      return this.msgChannels.get(key);
    }
    const msgChannel = new RoomMessageChannel(key, this.dc, config);
    msgChannel.on("close", () => {
      console.log("[MessageChannel] a channel has closed, removing from registry:", key);
      this.msgChannels.delete(key);
    });
    await msgChannel.init();
    this.msgChannels.set(key, msgChannel);
    return msgChannel;
  }
  async leave() {
    this.receivers.map((r) => r.leaveRoom());
    this.mixer?.leave_room();
    this.msgChannels.forEach((d) => d.opened ?? d.close());
    await this.dc.requestSession({
      leave: {}
    });
    this.cfg.join = void 0;
    this.emit("room.changed" /* ROOM_CHANGED */, void 0);
  }
  async disconnect() {
    console.warn("Disconnecting session", this.created_at);
    await this.dc.requestSession({
      disconnect: {}
    });
    console.warn("Disconnected session", this.created_at);
    this.peer.close();
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AudioMixerEvent,
  AudioMixerMode,
  AudioMixerSource,
  BitrateControlMode,
  EventEmitter,
  Kind,
  RoomPeerJoined,
  RoomPeerLeaved,
  RoomTrackStarted,
  RoomTrackStopped,
  Sender_Config,
  Session,
  SessionEvent,
  TrackReceiver,
  TrackReceiverEvent,
  TrackReceiverStatus,
  TrackReceiverVoiceActivity,
  TrackSender,
  TrackSenderEvent,
  TrackSenderStatus,
  kindToString,
  stringToKind
});
