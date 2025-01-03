import { useStore } from '@/store/app';
import { useEffect } from 'react';
import { css } from '@emotion/css';

const containerStyle = css`
  padding: 20px;
  display: flex;
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
  useEffect(() => {
    store.init();
  }, []);
  return (
    <div className={containerStyle}>
      <div>
        {store.list.map((item) => {
          return (
            <div className={itemStyle} key={item.key}>
              <span>{item.key}</span>
              <span>{item.description}</span>
              <span>{item.status}</span>
              <span>{item.type}</span>
              <span>{item.version}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
