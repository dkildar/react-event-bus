export declare function useMittOff(): {
    off: {
        <Key extends import("mitt").EventType>(type: Key, handler?: import("mitt").Handler<Record<import("mitt").EventType, unknown>[Key]> | undefined): void;
        (type: "*", handler: import("mitt").WildcardHandler<Record<import("mitt").EventType, unknown>>): void;
    };
};
