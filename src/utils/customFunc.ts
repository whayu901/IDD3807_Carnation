export const FindObject = (data: any, attr: string, value: any) => {
    for (var i = 0; i < data.length; i += 1) {
        if (data[i][attr] === value) {
            return i
        }
    }
    return -1;
};