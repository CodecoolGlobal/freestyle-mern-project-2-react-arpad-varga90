export interface Stamp {
    uid: string;
    hp_id:string;
    id:string
}

export type NewStamp = Omit<Stamp, "id">;
