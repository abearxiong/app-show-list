import { useAppUploadStore } from '@/store/app-upload';
import { Modal } from '@mui/material';

export const KeyEditModal = () => {
  const store = useAppUploadStore();
  const onSave = () => {
    console.log('save');
    store.setShowModal(false);
    const fromData = store.formData;
    store.pubApp(fromData);
    console.log(fromData);
  };
  return (
    <Modal
      className='fixed flex items-center justify-center'
      open={store.showModal}
      onClose={() => store.setShowModal(false)}
    >
      <div className='p-4 bg-white w-[400px]'>
        <h1 className='text-2xl font-bold'>Edit Key</h1>
        <div className='mt-4'>
          <label className='block'>Key</label>
          <input
            type='text'
            className='w-full p-2 border rounded'
            onChange={(e) => {
              const value = e.target.value;
              store.setFormData({ ...store.formData, key: value });
            }}
          />
        </div>
        <div className='mt-4'>
          <button className='px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700' onClick={onSave}>
            Deploy
          </button>
        </div>
      </div>
    </Modal>
  );
};
