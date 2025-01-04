import { useStore } from '@/store/app';
import { useEffect } from 'react';
import { css } from '@emotion/css';
import clsx from 'clsx';
import { Page } from '@kevisual/store/page';
import { page } from '@/app';
import { useOperateStore } from '@/store/operate';
import { message } from '@/modules/message';

const containerStyle = css`
  padding: 20px;
`;

const itemStyle = css`
  display: flex;
  min-width: 240px;
  flex-direction: column;
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

export const List = () => {
  const store = useStore();
  const operateStore = useOperateStore();
  useEffect(() => {
    store.init();
  }, []);
  return (
    <div className={clsx(containerStyle, 'h-full w-full ')}>
      <div
        onClick={() => {
          page.navigate('/upload-apps');
        }}>
        To Upload Apps
      </div>
      <h1 className='text-2xl font-bold'>Local Apps</h1>
      <div>
        <div className='local-apps-headers flex flex-row-reverse'>
          <button
            className='px-4 py-2 mt-2 text-white bg-blue-500 rounded hover:bg-blue-700'
            onClick={async () => {
              const res = await operateStore.detect();
              if (res.code === 200) {
                store.init();
              }
            }}>
            Detect
          </button>
        </div>
        <div className='flex flex-row flex-wrap gap-4'>
          {store.list.map((item) => {
            return (
              <div className={itemStyle} key={item.key}>
                <span>{item.key}</span>
                <span>{item.description}</span>
                <span>{item.status}</span>
                <span>{item.type}</span>
                <span>{item.version}</span>
                <div className='flex flex-row gap-2'>
                  <button
                    className='px-4 py-2 mt-2 text-white bg-blue-500 rounded hover:bg-blue-700'
                    onClick={async () => {
                      if (item.status !== 'stop') {
                        const res = await operateStore.updateStatus({ status: 'stop', appKey: item.key });
                        if (res.code === 200) {
                          store.init();
                        }
                      }
                    }}>
                    Stop
                  </button>
                  <button
                    className='px-4 py-2 mt-2 text-white bg-blue-500 rounded hover:bg-blue-700'
                    onClick={async () => {
                      if (item.status !== 'running') {
                        const res = await operateStore.updateStatus({ status: 'start', appKey: item.key });
                        if (res.code === 200) {
                          store.init();
                        }
                      }
                    }}>
                    Start
                  </button>

                  <button
                    className='px-4 py-2 mt-2 text-white bg-blue-500 rounded hover:bg-blue-700'
                    onClick={async () => {
                      const res = await store.deleteData(item.key, { refresh: true });
                      //
                    }}>
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
