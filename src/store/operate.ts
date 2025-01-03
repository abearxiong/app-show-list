import { create } from 'zustand';
import { query } from '@/modules/query';
import { message } from '@/modules/message';
interface OperateStore {
  updateStatus: () => Promise<void>;
  detect: () => Promise<void>;
  download: () => Promise<void>;

  /**
   * 微应用的上传和卸载和部署
   */
  upload: () => Promise<void>;
  unload: () => Promise<void>;
  deploy: () => Promise<void>;
}

export const useOperateStore = create<OperateStore>((set) => ({
  updateStatus: async () => {
    const res = await query.post({
      path: 'local-apps',
      key: 'updateStatus',
    });
  },
  detect: async () => {
    const res = await query.post({
      path: 'local-apps',
      key: 'detect',
    });
  },
  download: async () => {
    const res = await query.post({
      path: 'local-apps',
      key: 'download',
    });
  },
  upload: async () => {
    const res = await query.post({
      path: 'micro-apps',
      key: 'upload',
    });
  },
  unload: async () => {
    const res = await query.post({
      path: 'micro-apps',
      key: 'unload',
    });
  },
  deploy: async () => {
    const res = await query.post({
      path: 'micro-apps',
      key: 'deploy',
    });
  },
}));
