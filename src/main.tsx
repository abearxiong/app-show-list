import { useContextKey } from '@kevisual/store/config';
import { QueryRouterServer } from '@kevisual/router';
import { createRoot } from 'react-dom/client';
import { List } from './pages/List';
import { List as UploadAppList } from './pages/upload-apps/List';
import { page } from './app';

import '@build/tailwind/main.css';
// import './tailwind.css';

export const initRoot = (renderRoot?: any) => {
  return useContextKey('root', () => {
    if (!renderRoot) {
      console.error('renderRoot is required');
    }
    return createRoot(renderRoot);
  });
};
export const render = ({ renderRoot }) => {
  const root = initRoot(renderRoot);
  root.render(<List />);
};

if (page) {
  initRoot(document.getElementById('ai-root'));
  page.addPage('/', 'home');
  page.addPage('/local-apps', 'local-apps');
  page.subscribe('local-apps', () => {
    const root = initRoot();
    root.render(<List />);
  });
  page.addPage('/upload-apps', 'upload-apps');
  page.subscribe('upload-apps', () => {
    const root = initRoot();
    root.render(<UploadAppList />);
  });
  page.subscribe('home', () => {
    page.navigate('/local-apps');
  });
}

const app = useContextKey('app', () => {
  console.error('app not found');
  return null as unknown as QueryRouterServer;
});
if (app) {
  app
    .route({
      path: 'show-home',
      key: 'render',
    })
    .define(async (ctx) => {
      let { renderRoot } = ctx.query;
      if (!renderRoot) {
        ctx.throw(404, 'renderRoot is required');
      }
      if (typeof renderRoot === 'string') {
        renderRoot = document.querySelector(renderRoot);
      }
      if (!renderRoot) {
        ctx.throw(404, 'renderRoot not found');
      }
      render({
        renderRoot,
      });
    })
    .addTo(app);
}
