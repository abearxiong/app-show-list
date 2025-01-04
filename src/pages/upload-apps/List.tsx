import { useAppUploadStore } from '@/store/app-upload';
import { useEffect } from 'react';
import { KeyEditModal } from './modal/Edit';
import { page } from '@/app';
import dayjs from 'dayjs';
export const List = () => {
  const store = useAppUploadStore();

  useEffect(() => {
    store.init();
  }, []);
  const onDeploy = (item: { id: string; [key: string]: any }) => {
    console.log(item);
    store.setFormData({
      id: item.id,
      key: '',
    });
    store.setShowModal(true);
  };
  return (
    <div className='p-4'>
      <div
        onClick={() => {
          page.navigate('/local-apps');
        }}>
        To Local Apps
      </div>
      <h1 className='text-2xl font-bold'>Upload Apps</h1>
      <div className='flex flex-wrap gap-4'>
        {store.list.map((item) => {
          return (
            <div className='p-4 mb-4 border rounded shadow bg-white w-[300px] flex flex-col' key={item.id}>
              <span>{item.title}</span>
              <span>{item.description}</span>
              <span>{item.tags.join(', ')}</span>
              <span>{item.type}</span>
              <span>{dayjs(item.updatedTime).format('YYYY-MM-DD HH:mm:ss')}</span>
              <div>
                <button
                  className='px-4 py-2 mt-2 text-white bg-blue-500 rounded hover:bg-blue-700'
                  onClick={() => {
                    onDeploy(item);
                  }}>
                  Deploy
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <KeyEditModal />
    </div>
  );
};
