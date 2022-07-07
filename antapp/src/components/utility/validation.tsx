export const validateRequired = (param: string | undefined | null): boolean => {
    if (!param) {
        return false;
    }
    if (param === '') {
        return false;
    }
    return true
};

export const validateEmail = (email: string | undefined | null ) : boolean=> {
    if (!email?.match(/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        return false;
    }
    return true;
};