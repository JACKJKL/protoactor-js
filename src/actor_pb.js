/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.actor.PID', null, global);
goog.exportSymbol('proto.actor.PoisonPill', null, global);
goog.exportSymbol('proto.actor.Stop', null, global);
goog.exportSymbol('proto.actor.Terminated', null, global);
goog.exportSymbol('proto.actor.Unwatch', null, global);
goog.exportSymbol('proto.actor.Watch', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.actor.PID = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.actor.PID, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.actor.PID.displayName = 'proto.actor.PID';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.actor.PID.prototype.toObject = function(opt_includeInstance) {
  return proto.actor.PID.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.actor.PID} msg The msg instance to transform.
 * @return {!Object}
 */
proto.actor.PID.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.actor.PID}
 */
proto.actor.PID.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.actor.PID;
  return proto.actor.PID.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.actor.PID} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.actor.PID}
 */
proto.actor.PID.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.actor.PID.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.actor.PID.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.actor.PID} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.actor.PID.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string Address = 1;
 * @return {string}
 */
proto.actor.PID.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.actor.PID.prototype.setAddress = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string Id = 2;
 * @return {string}
 */
proto.actor.PID.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.actor.PID.prototype.setId = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.actor.PoisonPill = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.actor.PoisonPill, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.actor.PoisonPill.displayName = 'proto.actor.PoisonPill';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.actor.PoisonPill.prototype.toObject = function(opt_includeInstance) {
  return proto.actor.PoisonPill.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.actor.PoisonPill} msg The msg instance to transform.
 * @return {!Object}
 */
proto.actor.PoisonPill.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.actor.PoisonPill}
 */
proto.actor.PoisonPill.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.actor.PoisonPill;
  return proto.actor.PoisonPill.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.actor.PoisonPill} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.actor.PoisonPill}
 */
proto.actor.PoisonPill.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.actor.PoisonPill.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.actor.PoisonPill.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.actor.PoisonPill} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.actor.PoisonPill.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.actor.Watch = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.actor.Watch, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.actor.Watch.displayName = 'proto.actor.Watch';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.actor.Watch.prototype.toObject = function(opt_includeInstance) {
  return proto.actor.Watch.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.actor.Watch} msg The msg instance to transform.
 * @return {!Object}
 */
proto.actor.Watch.toObject = function(includeInstance, msg) {
  var f, obj = {
    watcher: (f = msg.getWatcher()) && proto.actor.PID.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.actor.Watch}
 */
proto.actor.Watch.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.actor.Watch;
  return proto.actor.Watch.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.actor.Watch} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.actor.Watch}
 */
proto.actor.Watch.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.actor.PID;
      reader.readMessage(value,proto.actor.PID.deserializeBinaryFromReader);
      msg.setWatcher(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.actor.Watch.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.actor.Watch.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.actor.Watch} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.actor.Watch.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWatcher();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.actor.PID.serializeBinaryToWriter
    );
  }
};


/**
 * optional PID watcher = 1;
 * @return {?proto.actor.PID}
 */
proto.actor.Watch.prototype.getWatcher = function() {
  return /** @type{?proto.actor.PID} */ (
    jspb.Message.getWrapperField(this, proto.actor.PID, 1));
};


/** @param {?proto.actor.PID|undefined} value */
proto.actor.Watch.prototype.setWatcher = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.actor.Watch.prototype.clearWatcher = function() {
  this.setWatcher(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.actor.Watch.prototype.hasWatcher = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.actor.Unwatch = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.actor.Unwatch, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.actor.Unwatch.displayName = 'proto.actor.Unwatch';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.actor.Unwatch.prototype.toObject = function(opt_includeInstance) {
  return proto.actor.Unwatch.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.actor.Unwatch} msg The msg instance to transform.
 * @return {!Object}
 */
proto.actor.Unwatch.toObject = function(includeInstance, msg) {
  var f, obj = {
    watcher: (f = msg.getWatcher()) && proto.actor.PID.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.actor.Unwatch}
 */
proto.actor.Unwatch.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.actor.Unwatch;
  return proto.actor.Unwatch.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.actor.Unwatch} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.actor.Unwatch}
 */
proto.actor.Unwatch.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.actor.PID;
      reader.readMessage(value,proto.actor.PID.deserializeBinaryFromReader);
      msg.setWatcher(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.actor.Unwatch.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.actor.Unwatch.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.actor.Unwatch} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.actor.Unwatch.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWatcher();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.actor.PID.serializeBinaryToWriter
    );
  }
};


/**
 * optional PID watcher = 1;
 * @return {?proto.actor.PID}
 */
proto.actor.Unwatch.prototype.getWatcher = function() {
  return /** @type{?proto.actor.PID} */ (
    jspb.Message.getWrapperField(this, proto.actor.PID, 1));
};


/** @param {?proto.actor.PID|undefined} value */
proto.actor.Unwatch.prototype.setWatcher = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.actor.Unwatch.prototype.clearWatcher = function() {
  this.setWatcher(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.actor.Unwatch.prototype.hasWatcher = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.actor.Terminated = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.actor.Terminated, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.actor.Terminated.displayName = 'proto.actor.Terminated';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.actor.Terminated.prototype.toObject = function(opt_includeInstance) {
  return proto.actor.Terminated.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.actor.Terminated} msg The msg instance to transform.
 * @return {!Object}
 */
proto.actor.Terminated.toObject = function(includeInstance, msg) {
  var f, obj = {
    who: (f = msg.getWho()) && proto.actor.PID.toObject(includeInstance, f),
    addressterminated: jspb.Message.getFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.actor.Terminated}
 */
proto.actor.Terminated.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.actor.Terminated;
  return proto.actor.Terminated.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.actor.Terminated} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.actor.Terminated}
 */
proto.actor.Terminated.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.actor.PID;
      reader.readMessage(value,proto.actor.PID.deserializeBinaryFromReader);
      msg.setWho(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAddressterminated(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.actor.Terminated.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.actor.Terminated.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.actor.Terminated} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.actor.Terminated.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWho();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.actor.PID.serializeBinaryToWriter
    );
  }
  f = message.getAddressterminated();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional PID who = 1;
 * @return {?proto.actor.PID}
 */
proto.actor.Terminated.prototype.getWho = function() {
  return /** @type{?proto.actor.PID} */ (
    jspb.Message.getWrapperField(this, proto.actor.PID, 1));
};


/** @param {?proto.actor.PID|undefined} value */
proto.actor.Terminated.prototype.setWho = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.actor.Terminated.prototype.clearWho = function() {
  this.setWho(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.actor.Terminated.prototype.hasWho = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool AddressTerminated = 2;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.actor.Terminated.prototype.getAddressterminated = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 2, false));
};


/** @param {boolean} value */
proto.actor.Terminated.prototype.setAddressterminated = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.actor.Stop = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.actor.Stop, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.actor.Stop.displayName = 'proto.actor.Stop';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.actor.Stop.prototype.toObject = function(opt_includeInstance) {
  return proto.actor.Stop.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.actor.Stop} msg The msg instance to transform.
 * @return {!Object}
 */
proto.actor.Stop.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.actor.Stop}
 */
proto.actor.Stop.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.actor.Stop;
  return proto.actor.Stop.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.actor.Stop} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.actor.Stop}
 */
proto.actor.Stop.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.actor.Stop.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.actor.Stop.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.actor.Stop} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.actor.Stop.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


goog.object.extend(exports, proto.actor);