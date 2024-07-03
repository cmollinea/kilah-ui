import { Dispatch, SetStateAction } from 'react';

type SelectedLanguaje = 'html' | 'jsx';

export interface PlayGroundContext {
  code: string;
  setLang: Dispatch<SetStateAction<SelectedLanguaje>>;
}
