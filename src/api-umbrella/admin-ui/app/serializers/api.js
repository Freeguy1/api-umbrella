import ApplicationSerializer from './application';
import { EmbeddedRecordsMixin } from '@ember-data/serializer/rest';

export default ApplicationSerializer.extend(EmbeddedRecordsMixin, {
  attrs: {
    servers: { embedded: 'always' },
    urlMatches: { embedded: 'always' },
    settings: { embedded: 'always' },
    subSettings: { embedded: 'always' },
    rewrites: { embedded: 'always' },
  },
});
