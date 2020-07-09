import FrontendLayout from '../components/FrontendLayout';
import Top from '../components/Top';

const routes = [
  {
    path: '/',
    component: FrontendLayout,
    children: [
      {
        path: '',
        component: Top,
        name: 'Top'
      },
    ],
  },
];

export default routes;
