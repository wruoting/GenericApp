import Router from 'next/router';
import { toQueryString } from '../../../utils/query';

export const PAGES = {
    DEFAULT: '/',
}


const routeTo = (url, isExternalUrl = false, query = null) => {
    if (isExternalUrl) {
        window.location.href = `${url}${toQueryString(query)}`;
    } else {
        Router.push({
            pathname: url,
            query
        })
    }
}

export const routeToDefault = () => {
    routeTo(`${PAGES.DEFAULT}`);
}

export default {
    routeTo,
    routeToDefault,
}