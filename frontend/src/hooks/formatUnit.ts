
export const formatToUnitStr = (value: number | string | bigint):string  => {
    const unit = BigInt(10 ** 12);
    const formatted = BigInt(value) / unit;
    return formatted.toString();
}

export const formatToUnitBigInt = (value: number | string | bigint) :bigint=> {
    const unit = BigInt(10 ** 12);
    const formatted = BigInt(value) / unit;
    return formatted;
}