
import { useContextKey } from '@kevisual/store/config';
import { Page } from "@kevisual/store/page";

export const page = useContextKey('page', () => {
  return new Page({
    basename: '/system/app-show',
  });
});