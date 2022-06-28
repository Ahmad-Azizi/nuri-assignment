export type HeadCellsType = {
    id: string;
    label: string;
};

export type BlockObjectType = {
    block_index: number;
    hash: string;
    height: number;
    time: number;
};

export type TransformedBlockObjectType = {
    hash: string;
    height: number;
    time: number;
};

export type BlockDetailsObjectType = {
    block_index: number;
    hash: string;
    prev_block: string;
    size: number;
    tx: Array<any>;
};

export type BlockDetailsTxObjectType = {
    block_height: number;
    block_index: number;
    fee: number;
    hash: string;
    index: number;
    lock_time: number;
    size: number;
    time: number;
};

export type OrderType = "asc" | "desc";

export type OrderByType = "hash" | "time" | "height";
