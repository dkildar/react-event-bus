import { EventType, Handler, WildcardHandler } from 'mitt';
export declare function useMittOn<Events extends Record<EventType, unknown>, Key extends keyof Events>(key: Key, cb: Handler<Events[Key]>): void;
export declare function useMittOn(key: '*', cb: WildcardHandler<Record<EventType, unknown>>): void;
