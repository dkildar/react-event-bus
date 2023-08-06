import { EventType, Handler, WildcardHandler } from 'mitt';
export declare function useMittOff<Events extends Record<EventType, unknown>, Key extends keyof Events>(key: Key, cb: Handler<Events[Key]>): void;
export declare function useMittOff(key: '*', cb: WildcardHandler<Record<EventType, unknown>>): void;
