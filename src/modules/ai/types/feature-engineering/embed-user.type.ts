import type { BaseContext } from '../context/context.types';
import type { ReaderProfile } from 'src/modules/users/types/reader-profile';

export type EmbedUserProps = {
  context: BaseContext;
  user: ReaderProfile;
};
