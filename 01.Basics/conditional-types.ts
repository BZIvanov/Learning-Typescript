type CustomDate = Date;
type CustomString = string;

// this type will be number
type ConditionalNumber = CustomDate extends Date ? number : string;
