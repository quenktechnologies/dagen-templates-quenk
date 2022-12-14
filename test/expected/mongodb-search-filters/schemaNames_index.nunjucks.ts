/** 
 * AUTOGENERATED DO NOT EDIT DIRECTLY!
 */
import { Record } from '@quenk/noni/lib/data/record';

import { EnabledPolicies } from '@quenk/search-filters-mongodb';

export { EnabledPolicies }

import _post from './post';
import _user from './user';

/**
 * policiesAvailable is a map of model names to search filter policies that can
 * be used in an application.
 */
export const policiesAvailable: Record<EnabledPolicies> = {

    'post': _post,

    'user': _user
}

