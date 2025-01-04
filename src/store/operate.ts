import { create } from 'zustand';
import { query } from '@/modules/query';
import { message } from '@/modules/message';
interface OperateStore {
  updateStatus: (data: { status: 'stop' | 'start'; appKey: string }) => Promise<any>;
  detect: () => Promise<any>;
  download: () => Promise<any>;

  /**
   * 微应用的上传和卸载和部署
   */
  upload: () => Promise<any>;
  unload: () => Promise<any>;
  deploy: () => Promise<any>;
}

export const useOperateStore = create<OperateStore>((set) => ({
  updateStatus: async (data) => {
    const res = await query.post({
      path: 'local-apps',
      key: 'updateStatus',
      status: data.status,
      appKey: data.appKey,
    });
    if (res.code === 200) {
      message.success('操作成功');
    } else {
      message.error(res.message || '操作失败');
    }
    return res;
  },
  detect: async () => {
    const res = await query.post({
      path: 'local-apps',
      key: 'detect',
    });
    return res;
  },
  download: async () => {
    const res = await query.post({
      path: 'local-apps',
      key: 'download',
    });
    return res;
  },
  upload: async () => {
    const res = await query.post({
      path: 'micro-apps',
      key: 'upload',
    });
    return res;
  },
  unload: async () => {
    const res = await query.post({
      path: 'micro-apps',
      key: 'unload',
    });
    return res;
  },
  deploy: async () => {
    const res = await query.post({
      path: 'micro-apps',
      key: 'deploy',
    });
    return res;
  },
}));
