import {StoreConfigViewer} from '~/components/StoreConfigViewer';

export default function StoreConfig() {
  return <StoreConfigViewer/>;
}

export const meta = () => {
  return [
    {title: 'Store Configuration'},
    {name: 'description', content: 'View current store configuration settings'},
  ];
};