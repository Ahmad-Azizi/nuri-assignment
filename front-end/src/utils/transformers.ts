import {
    BlockDetailsObjectType,
    BlockObjectType,
    TransformedBlockObjectType,
} from "./types";

export const transformBlocksData = (data: Array<BlockObjectType>) => {
    let transformedData: Array<TransformedBlockObjectType> = [];
    data.map(({ hash, height, time }) => {
        return transformedData.push({ hash, height, time });
    });

    return transformedData;
};

export const transformBlockDetailsData = (data: BlockDetailsObjectType) => {
    return {
        ...data,
        tx: data.tx.map((obj) => {
            return {
                block_height: obj.block_height,
                block_index: obj.block_index,
                fee: obj.fee,
                hash: obj.hash,
                lock_time: obj.lock_time,
                size: obj.size,
                time: obj.time,
                index: obj.tx_index,
            };
        }),
    };
};
